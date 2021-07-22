/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

'use strict'

const crypto = require('crypto')
const debug = require('debug')('elasticsearch-test')
const stoppable = require('stoppable')

// allow self signed certificates for testing purposes
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

const { readFileSync } = require('fs')
const { join } = require('path')
const https = require('https')
const http = require('http')

const secureOpts = {
  key: readFileSync(join(__dirname, '..', 'fixtures', 'https.key'), 'utf8'),
  cert: readFileSync(join(__dirname, '..', 'fixtures', 'https.cert'), 'utf8')
}

const certFingerprint = getFingerprint(secureOpts.cert
  .split('\n')
  .slice(1, -1)
  .map(line => line.trim())
  .join('')
)

let id = 0
function buildServer (handler, opts, cb) {
  const serverId = id++
  debug(`Booting server '${serverId}'`)
  if (cb == null) {
    cb = opts
    opts = {}
  }

  const server = opts.secure
    ? stoppable(https.createServer(secureOpts))
    : stoppable(http.createServer())

  server.on('request', handler)
  server.on('error', err => {
    console.log('http server error', err)
    process.exit(1)
  })
  if (cb === undefined) {
    return new Promise((resolve, reject) => {
      server.listen(0, () => {
        const port = server.address().port
        debug(`Server '${serverId}' booted on port ${port}`)
        resolve([Object.assign({}, secureOpts, { port, certFingerprint }), server])
      })
    })
  } else {
    server.listen(0, () => {
      const port = server.address().port
      debug(`Server '${serverId}' booted on port ${port}`)
      cb(Object.assign({}, secureOpts, { port }), server)
    })
  }
}

function getFingerprint (content, inputEncoding = 'base64', outputEncoding = 'hex') {
  const shasum = crypto.createHash('sha1')
  shasum.update(content, inputEncoding)
  const res = shasum.digest(outputEncoding)
  return res.toUpperCase().match(/.{1,2}/g).join(':')
}

module.exports = buildServer
