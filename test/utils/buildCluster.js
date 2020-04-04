// Licensed to Elasticsearch B.V under one or more agreements.
// Elasticsearch B.V licenses this file to you under the Apache 2.0 License.
// See the LICENSE file in the project root for more information

'use strict'

const debug = require('debug')('elasticsearch-test')
const workq = require('workq')
const buildServer = require('./buildServer')

var id = 0
function buildCluster (options, callback) {
  const clusterId = id++
  debug(`Booting cluster '${clusterId}'`)
  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  const q = workq()
  const nodes = {}
  const sniffResult = { nodes: {} }

  options.numberOfNodes = options.numberOfNodes || 4
  for (var i = 0; i < options.numberOfNodes; i++) {
    q.add(bootNode, { id: `node${i}` })
  }

  function bootNode (q, opts, done) {
    function handler (req, res) {
      res.setHeader('content-type', 'application/json')
      if (req.url === '/_nodes/_all/http') {
        res.end(JSON.stringify(sniffResult))
      } else {
        res.end(JSON.stringify({ hello: 'world' }))
      }
    }

    buildServer(options.handler || handler, ({ port }, server) => {
      nodes[opts.id] = {
        url: `http://127.0.0.1:${port}`,
        server
      }
      sniffResult.nodes[opts.id] = {
        http: {
          publish_address: options.hostPublishAddress
            ? `localhost/127.0.0.1:${port}`
            : `127.0.0.1:${port}`
        },
        roles: ['master', 'data', 'ingest']
      }
      debug(`Booted cluster node '${opts.id}' on port ${port} (cluster id: '${clusterId}')`)
      done()
    })
  }

  function shutdown () {
    const nodeIds = Object.keys(nodes)
    debug(`Shutting down cluster '${clusterId}' with ${nodeIds.length} nodes`)

    let shut = 0
    nodeIds.forEach(id => kill(id, (shutNodeId) => {
      debug(`Shut down node '${shutNodeId}' (cluster '${clusterId}')`)

      shut += 1
      if (shut === nodeIds.length) {
        debug(`Shutting down cluster '${clusterId}' DONE!`)
      }
    }))
  }

  function kill (id, callback) {
    if (!nodes[id]) {
      callback(null)
      return
    }

    debug(`Shutting down cluster node '${id}' (cluster id: '${clusterId}')`)
    nodes[id].server.stop((err) => {
      if (err) {
        throw err // Failed to stop
      }
      delete nodes[id]
      delete sniffResult.nodes[id]
      callback(id)
    })
  }

  const cluster = {
    nodes,
    shutdown,
    kill
  }

  q.drain(done => {
    debug(`Cluster '${clusterId}' booted with ${options.numberOfNodes} nodes`)
    callback(cluster)
    done()
  })
}

module.exports = buildCluster
