'use strict'

/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

function buildNodesHotThreads (opts) {
  // eslint-disable-next-line no-unused-vars
  const { makeRequest, ConfigurationError, result } = opts
  /**
   * Perform a [nodes.hot_threads](http://www.elastic.co/guide/en/elasticsearch/reference/master/cluster-nodes-hot-threads.html) request
   *
   * @param {list} node_id - A comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes
   * @param {time} interval - The interval for the second sampling of threads
   * @param {number} snapshots - Number of samples of thread stacktrace (default: 10)
   * @param {number} threads - Specify the number of threads to provide information for (default: 3)
   * @param {boolean} ignore_idle_threads - Don't show threads that are in known-idle places, such as waiting on a socket select or pulling from an empty task queue (default: true)
   * @param {enum} type - The type to sample (default: cpu)
   * @param {time} timeout - Explicit operation timeout
   */

  const acceptedQuerystring = [
    'interval',
    'snapshots',
    'threads',
    'ignore_idle_threads',
    'type',
    'timeout',
    'pretty',
    'human',
    'error_trace',
    'source',
    'filter_path'
  ]

  const snakeCase = {
    ignoreIdleThreads: 'ignore_idle_threads',
    errorTrace: 'error_trace',
    filterPath: 'filter_path'
  }

  return function nodesHotThreads (params, options, callback) {
    options = options || {}
    if (typeof options === 'function') {
      callback = options
      options = {}
    }
    if (typeof params === 'function' || params == null) {
      callback = params
      params = {}
      options = {}
    }
    // promises support
    if (callback == null) {
      return new Promise((resolve, reject) => {
        nodesHotThreads(params, options, (err, body) => {
          err ? reject(err) : resolve(body)
        })
      })
    }

    // check required parameters
    if (params.body != null) {
      return callback(
        new ConfigurationError('This API does not require a body'),
        result
      )
    }

    // validate headers object
    if (options.headers != null && typeof options.headers !== 'object') {
      return callback(
        new ConfigurationError(`Headers should be an object, instead got: ${typeof options.headers}`),
        result
      )
    }

    var warnings = null
    var { method, body, nodeId, node_id } = params
    var querystring = semicopy(params, ['method', 'body', 'nodeId', 'node_id'])

    if (method == null) {
      method = 'GET'
    }

    var ignore = options.ignore || null
    if (typeof ignore === 'number') {
      ignore = [ignore]
    }

    var path = ''

    if ((node_id || nodeId) != null) {
      path = '/' + '_cluster' + '/' + 'nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + 'hotthreads'
    } else if ((node_id || nodeId) != null) {
      path = '/' + '_cluster' + '/' + 'nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + 'hot_threads'
    } else if ((node_id || nodeId) != null) {
      path = '/' + '_nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + 'hotthreads'
    } else if ((node_id || nodeId) != null) {
      path = '/' + '_nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + 'hot_threads'
    } else {
      path = '/' + '_cluster' + '/' + 'nodes' + '/' + 'hotthreads'
    }

    // build request object
    const request = {
      method,
      path,
      body: null,
      querystring
    }

    const requestOptions = {
      ignore,
      requestTimeout: options.requestTimeout || null,
      maxRetries: options.maxRetries || null,
      asStream: options.asStream || false,
      headers: options.headers || null,
      warnings
    }

    return makeRequest(request, requestOptions, callback)

    function semicopy (obj, exclude) {
      var target = {}
      var keys = Object.keys(obj)
      for (var i = 0, len = keys.length; i < len; i++) {
        var key = keys[i]
        if (exclude.indexOf(key) === -1) {
          target[snakeCase[key] || key] = obj[key]
          if (acceptedQuerystring.indexOf(snakeCase[key] || key) === -1) {
            warnings = warnings || []
            warnings.push('Client - Unknown parameter: "' + key + '", sending it as query parameter')
          }
        }
      }
      return target
    }
  }
}

module.exports = buildNodesHotThreads
