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

import * as http from 'node:http'
import { URL } from 'node:url'
import { setTimeout } from 'node:timers/promises'
import { test } from 'tap'
import FakeTimers from '@sinonjs/fake-timers'
import { buildServer, connection } from '../utils'
import { Client, errors } from '../..'
import * as symbols from '@elastic/transport/lib/symbols'
import { BaseConnectionPool, CloudConnectionPool, WeightedConnectionPool, HttpConnection } from '@elastic/transport'

let clientVersion: string = require('../../package.json').version // eslint-disable-line
if (clientVersion.includes('-')) {
  clientVersion = clientVersion.slice(0, clientVersion.indexOf('-')) + 'p'
}
let transportVersion: string = require('@elastic/transport/package.json').version // eslint-disable-line
if (transportVersion.includes('-')) {
  transportVersion = transportVersion.slice(0, transportVersion.indexOf('-')) + 'p'
}
const nodeVersion = process.versions.node

test('Create a client instance, single node as string', t => {
  const client = new Client({ node: 'http://localhost:9200' })
  t.ok(client.connectionPool instanceof WeightedConnectionPool)
  t.equal(client.connectionPool.size, 1)
  t.end()
})

test('Create a client instance, multi node as strings', t => {
  const client = new Client({ nodes: ['http://localhost:9200', 'http://localhost:9201'] })
  t.ok(client.connectionPool instanceof WeightedConnectionPool)
  t.equal(client.connectionPool.size, 2)
  t.end()
})

test('Create a client instance, single node as object', t => {
  const client = new Client({
    node: {
      url: new URL('http://localhost:9200')
    }
  })
  t.equal(client.connectionPool.size, 1)
  t.end()
})

test('Create a client instance, multi node as object', t => {
  const client = new Client({
    nodes: [{
      url: new URL('http://localhost:9200')
    }, {
      url: new URL('http://localhost:9201')
    }]
  })
  t.equal(client.connectionPool.size, 2)
  t.end()
})

test('Missing node(s)', t => {
  t.throws(() => new Client({}), errors.ConfigurationError)
  t.end()
})

test('Custom headers', t => {
  const client = new Client({
    node: 'http://localhost:9200',
    headers: { foo: 'bar' }
  })
  t.match(client.transport[symbols.kHeaders], { foo: 'bar' })
  t.end()
})

test('Basic auth', async t => {
  t.plan(1)

  const Connection = connection.buildMockConnection({
    onRequest (opts) {
      t.match(opts.headers, { authorization: 'Basic aGVsbG86d29ybGQ=' })
      return {
        statusCode: 200,
        body: { hello: 'world' }
      }
    }
  })

  const client = new Client({
    node: 'http://localhost:9200',
    Connection,
    auth: {
      username: 'hello',
      password: 'world'
    }
  })

  await client.transport.request({ method: 'GET', path: '/' })
})

test('Basic auth via url', async t => {
  t.plan(1)

  const Connection = connection.buildMockConnection({
    onRequest (opts) {
      t.match(opts.headers, { authorization: 'Basic aGVsbG86d29ybGQ=' })
      return {
        statusCode: 200,
        body: { hello: 'world' }
      }
    }
  })

  const client = new Client({
    node: 'http://hello:world@localhost:9200',
    Connection
  })

  await client.transport.request({ method: 'GET', path: '/' })
})

test('ApiKey as string', async t => {
  t.plan(1)

  const Connection = connection.buildMockConnection({
    onRequest (opts) {
      t.match(opts.headers, { authorization: 'ApiKey foobar' })
      return {
        statusCode: 200,
        body: { hello: 'world' }
      }
    }
  })

  const client = new Client({
    node: 'http://localhost:9200',
    Connection,
    auth: {
      apiKey: 'foobar'
    }
  })

  await client.transport.request({ method: 'GET', path: '/' })
})

test('ApiKey as object', async t => {
  t.plan(1)

  const Connection = connection.buildMockConnection({
    onRequest (opts) {
      t.match(opts.headers, { authorization: 'ApiKey Zm9vOmJhcg==' })
      return {
        statusCode: 200,
        body: { hello: 'world' }
      }
    }
  })

  const client = new Client({
    node: 'http://localhost:9200',
    Connection,
    auth: {
      apiKey: {
        id: 'foo',
        api_key: 'bar'
      }
    }
  })

  await client.transport.request({ method: 'GET', path: '/' })
})

test('Bearer auth', async t => {
  t.plan(1)

  const Connection = connection.buildMockConnection({
    onRequest (opts) {
      t.match(opts.headers, { authorization: 'Bearer token' })
      return {
        statusCode: 200,
        body: { hello: 'world' }
      }
    }
  })

  const client = new Client({
    node: 'http://localhost:9200',
    Connection,
    auth: {
      bearer: 'token'
    }
  })

  await client.transport.request({ method: 'GET', path: '/' })
})

test('Override authentication per request', async t => {
  t.plan(1)

  const Connection = connection.buildMockConnection({
    onRequest (opts) {
      t.match(opts.headers, { authorization: 'Basic foobar' })
      return {
        statusCode: 200,
        body: { hello: 'world' }
      }
    }
  })

  const client = new Client({
    node: 'http://localhost:9200',
    Connection,
    auth: {
      username: 'hello',
      password: 'world'
    }
  })

  await client.transport.request(
    { method: 'GET', path: '/' },
    { headers: { authorization: 'Basic foobar' } }
  )
})

test('Custom headers per request', async t => {
  t.plan(1)

  const Connection = connection.buildMockConnection({
    onRequest (opts) {
      t.match(opts.headers, {
        foo: 'bar',
        faz: 'bar'
      })
      return {
        statusCode: 200,
        body: { hello: 'world' }
      }
    }
  })

  const client = new Client({
    node: 'http://localhost:9200',
    Connection,
    headers: { foo: 'bar' }
  })

  await client.transport.request(
    { method: 'GET', path: '/' },
    { headers: { faz: 'bar' } }
  )
})

test('Close the client', async t => {
  t.plan(1)

  class MyConnectionPool extends BaseConnectionPool {
    async empty (): Promise<void> {
      t.pass('called')
    }
  }

  const client = new Client({
    node: 'http://localhost:9200',
    ConnectionPool: MyConnectionPool
  })

  await client.close()
})

test('Elastic Cloud config', t => {
  const client = new Client({
    cloud: {
      // 'localhost$abcd$'
      id: 'name:bG9jYWxob3N0JGFiY2Qk'
    },
    auth: {
      username: 'elastic',
      password: 'changeme'
    }
  })

  t.ok(client.connectionPool instanceof CloudConnectionPool)
  const connection = client.connectionPool.connections.find(c => c.id === 'https://abcd.localhost/')

  t.equal(connection?.headers?.authorization, `Basic ${Buffer.from('elastic:changeme').toString('base64')}`)
  t.same(connection?.tls, { secureProtocol: 'TLSv1_2_method' })
  t.equal(connection?.url.hostname, 'abcd.localhost')
  t.equal(connection?.url.protocol, 'https:')

  t.end()
})

test('Override default Elastic Cloud options', t => {
  const client = new Client({
    cloud: {
      // 'localhost$abcd$efgh'
      id: 'name:bG9jYWxob3N0JGFiY2QkZWZnaA==',
    },
    auth: {
      username: 'elastic',
      password: 'changeme'
    },
    compression: false,
    tls: {
      secureProtocol: 'TLSv1_1_method'
    }
  })

  t.ok(client.connectionPool instanceof CloudConnectionPool)
  t.equal(client.transport[symbols.kCompression], false)
  t.same(client.connectionPool._tls, { secureProtocol: 'TLSv1_1_method' })

  t.end()
})

test('Configure opaqueIdPrefix', t => {
  const client = new Client({
    node: 'http://localhost:9200',
    opaqueIdPrefix: 'foobar'
  })

  t.equal(client.transport[symbols.kOpaqueIdPrefix], 'foobar')

  t.end()
})

test('name as string', t => {
  const client = new Client({
    node: 'http://localhost:9200',
    name: 'es-client'
  })

  t.equal(client.name, 'es-client')

  t.end()
})

test('name as symbol', t => {
  const s = Symbol()
  const client = new Client({
    node: 'http://localhost:9200',
    name: s
  })

  t.equal(client.name, s)

  t.end()
})

test('Meta header enabled by default', async t => {
  t.plan(1)

  const Connection = connection.buildMockConnection({
    onRequest (opts) {
      t.match(opts.headers, { 'x-elastic-client-meta': `es=${clientVersion},js=${nodeVersion},t=${transportVersion},hc=${nodeVersion}` })
      return {
        statusCode: 200,
        body: { hello: 'world' }
      }
    }
  })

  const client = new Client({
    node: 'http://localhost:9200',
    Connection
  })

  await client.transport.request({ method: 'GET', path: '/' })
})

test('Meta header disabled', async t => {
  t.plan(1)

  const Connection = connection.buildMockConnection({
    onRequest (opts) {
      t.notOk(opts.headers?.['x-elastic-client-meta'])
      return {
        statusCode: 200,
        body: { hello: 'world' }
      }
    }
  })

  const client = new Client({
    node: 'http://localhost:9200',
    Connection,
    enableMetaHeader: false
  })

  await client.transport.request({ method: 'GET', path: '/' })
})

test('Meta header indicates when UndiciConnection is used', async t => {
  t.plan(1)

  function handler (req: http.IncomingMessage, res: http.ServerResponse) {
    t.equal(req.headers['x-elastic-client-meta'], `es=${clientVersion},js=${nodeVersion},t=${transportVersion},un=${nodeVersion}`)
    res.end('ok')
  }

  const [{ port }, server] = await buildServer(handler)

  const client = new Client({
    node: `http://localhost:${port}`,
    // Connection: UndiciConnection is the default
  })

  await client.transport.request({ method: 'GET', path: '/' })
  server.stop()
})

test('Meta header indicates when HttpConnection is used', async t => {
  t.plan(1)

  function handler (req: http.IncomingMessage, res: http.ServerResponse) {
    t.equal(req.headers['x-elastic-client-meta'], `es=${clientVersion},js=${nodeVersion},t=${transportVersion},hc=${nodeVersion}`)
    res.end('ok')
  }

  const [{ port }, server] = await buildServer(handler)

  const client = new Client({
    node: `http://localhost:${port}`,
    Connection: HttpConnection,
  })

  await client.transport.request({ method: 'GET', path: '/' })
  server.stop()
})

test('caFingerprint', t => {
  const client = new Client({
    node: 'https://localhost:9200',
    caFingerprint: 'FO:OB:AR'
  })

  t.equal(client.connectionPool[symbols.kCaFingerprint], 'FO:OB:AR')
  t.end()
})

test('caFingerprint can\'t be configured over http / 1', t => {
  t.throws(() => new Client({
      node: 'http://localhost:9200',
      caFingerprint: 'FO:OB:AR'
    }),
    errors.ConfigurationError
  )
  t.end()
})

test('caFingerprint can\'t be configured over http / 2', t => {
  t.throws(() => new Client({
      nodes: ['http://localhost:9200'],
      caFingerprint: 'FO:OB:AR'
    }),
    errors.ConfigurationError
  )
  t.end()
})

test('user agent is in the correct format', t => {
  const client = new Client({ node: 'http://localhost:9200' })
  const agentRaw = client.transport[symbols.kHeaders]['user-agent'] || ''
  const agentSplit = agentRaw.split(/\s+/)
  t.equal(agentSplit[0].split('/')[0], 'elasticsearch-js')
  t.ok(/^\d+\.\d+\.\d+/.test(agentSplit[0].split('/')[1]))
  t.end()
})

test('Ensure new client instance stores requestTimeout for each connection', t => {
  const client = new Client({
    node: { url: new URL('http://localhost:9200') },
    requestTimeout: 60000,
  })
  t.equal(client.connectionPool.connections[0].timeout, 60000)
  t.end()
})

test('No request timeout is set by default', t => {
  const client = new Client({
    node: { url: new URL('http://localhost:9200') },
  })
  t.equal(client.connectionPool.connections[0].timeout, null)
  t.end()
})

test('Ensure new client does not time out if requestTimeout is not set', async t => {
  const clock = FakeTimers.install({ toFake: ['setTimeout'] })
  t.teardown(() => clock.uninstall())

  function handler (_req: http.IncomingMessage, res: http.ServerResponse) {
    setTimeout(1000 * 60 * 60).then(() => {
      t.ok('timeout ended')
      res.setHeader('content-type', 'application/json')
      res.end(JSON.stringify({ success: true }))
    })
    clock.tick(1000 * 60 * 60)
  }

  const [{ port }, server] = await buildServer(handler)

  const client = new Client({
    node: `http://localhost:${port}`,
  })

  try {
    await client.transport.request({ method: 'GET', path: '/' })
  } catch (error) {
    t.fail('Error should not be thrown', error)
  } finally {
    server.stop()
    t.end()
  }
})

test('Pass disablePrototypePoisoningProtection option to serializer', async t => {
  let client = new Client({
    node: 'http://localhost:9200',
    disablePrototypePoisoningProtection: false
  })
  t.same(client.serializer[symbols.kJsonOptions], {
    protoAction: 'error',
    constructorAction: 'error'
  })

  client = new Client({
    node: 'http://localhost:9200',
    disablePrototypePoisoningProtection: true
  })
  t.same(client.serializer[symbols.kJsonOptions], {
    protoAction: 'ignore',
    constructorAction: 'ignore'
  })

  client = new Client({
    node: 'http://localhost:9200',
    disablePrototypePoisoningProtection: 'proto'
  })
  t.same(client.serializer[symbols.kJsonOptions], {
    protoAction: 'error',
    constructorAction: 'ignore'
  })

  client = new Client({
    node: 'http://localhost:9200',
    disablePrototypePoisoningProtection: 'constructor'
  })
  t.same(client.serializer[symbols.kJsonOptions], {
    protoAction: 'ignore',
    constructorAction: 'error'
  })
})

test('disablePrototypePoisoningProtection is true by default', async t => {
  const client = new Client({ node: 'http://localhost:9200' })
  t.same(client.serializer[symbols.kJsonOptions], {
    protoAction: 'ignore',
    constructorAction: 'ignore'
  })
})
