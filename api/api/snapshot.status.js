'use strict'

function buildSnapshotStatus (opts) {
  // eslint-disable-next-line no-unused-vars
  const { makeRequest, ConfigurationError, result } = opts
  /**
   * Perform a [snapshot.status](http://www.elastic.co/guide/en/elasticsearch/reference/master/modules-snapshots.html) request
   *
   * @param {string} repository - A repository name
   * @param {list} snapshot - A comma-separated list of snapshot names
   * @param {time} master_timeout - Explicit operation timeout for connection to master node
   * @param {boolean} ignore_unavailable - Whether to ignore unavailable snapshots, defaults to false which means a SnapshotMissingException is thrown
   */
  return function snapshotStatus (params, options, callback) {
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
        snapshotStatus(params, options, (err, body) => {
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

    // check required url components
    if (params['snapshot'] != null && (params['repository'] == null)) {
      return callback(
        new ConfigurationError('Missing required parameter of the url: repository'),
        result
      )
    }

    var warnings = null
    // build querystring object
    const querystring = {}
    const keys = Object.keys(params)
    const acceptedQuerystring = [
      'master_timeout',
      'ignore_unavailable',
      'pretty',
      'human',
      'error_trace',
      'source',
      'filter_path'
    ]
    const acceptedQuerystringCamelCased = [
      'masterTimeout',
      'ignoreUnavailable',
      'pretty',
      'human',
      'errorTrace',
      'source',
      'filterPath'
    ]
    const queryBlacklist = [
      'method',
      'body',
      'ignore',
      'maxRetries',
      'headers',
      'requestTimeout',
      'asStream',
      'repository',
      'snapshot'
    ]

    for (var i = 0, len = keys.length; i < len; i++) {
      var key = keys[i]
      var camelIndex = acceptedQuerystringCamelCased.indexOf(key)
      if (camelIndex !== -1) {
        querystring[acceptedQuerystring[camelIndex]] = params[key]
      } else {
        if (acceptedQuerystring.indexOf(key) !== -1) {
          querystring[key] = params[key]
        } else if (queryBlacklist.indexOf(key) === -1) {
          warnings = warnings || []
          warnings.push('Client - Unknown parameter: "' + key + '", sending it as query parameter')
          querystring[key] = params[key]
        }
      }
    }

    // configure http method
    var method = params.method
    if (method == null) {
      method = 'GET'
    }

    // validate headers object
    if (params.headers != null && typeof params.headers !== 'object') {
      return callback(
        new ConfigurationError(`Headers should be an object, instead got: ${typeof params.headers}`),
        result
      )
    }

    var ignore = options.ignore || null
    if (typeof ignore === 'number') {
      ignore = [ignore]
    }

    var path = ''

    if ((params['repository']) != null && (params['snapshot']) != null) {
      path = '/' + '_snapshot' + '/' + encodeURIComponent(params['repository']) + '/' + encodeURIComponent(params['snapshot']) + '/' + '_status'
    } else if ((params['repository']) != null) {
      path = '/' + '_snapshot' + '/' + encodeURIComponent(params['repository']) + '/' + '_status'
    } else {
      path = '/' + '_snapshot' + '/' + '_status'
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
  }
}

module.exports = buildSnapshotStatus
