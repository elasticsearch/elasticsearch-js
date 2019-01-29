'use strict'

function buildIndicesGetMapping (opts) {
  // eslint-disable-next-line no-unused-vars
  const { makeRequest, ConfigurationError, result } = opts
  /**
   * Perform a [indices.get_mapping](http://www.elastic.co/guide/en/elasticsearch/reference/master/indices-get-mapping.html) request
   *
   * @param {list} index - A comma-separated list of index names
   * @param {list} type - A comma-separated list of document types
   * @param {string} include_type_name - Whether to add the type name to the response
   * @param {boolean} ignore_unavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
   * @param {boolean} allow_no_indices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
   * @param {enum} expand_wildcards - Whether to expand wildcard expression to concrete indices that are open, closed or both.
   * @param {time} master_timeout - Specify timeout for connection to master
   * @param {boolean} local - Return local information, do not retrieve the state from master node (default: false)
   */
  return function indicesGetMapping (params, options, callback) {
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
        indicesGetMapping(params, options, (err, body) => {
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

    var warnings = null
    // build querystring object
    const querystring = {}
    const keys = Object.keys(params)
    const acceptedQuerystring = [
      'include_type_name',
      'ignore_unavailable',
      'allow_no_indices',
      'expand_wildcards',
      'master_timeout',
      'local',
      'pretty',
      'human',
      'error_trace',
      'source',
      'filter_path'
    ]
    const acceptedQuerystringCamelCased = [
      'includeTypeName',
      'ignoreUnavailable',
      'allowNoIndices',
      'expandWildcards',
      'masterTimeout',
      'local',
      'pretty',
      'human',
      'errorTrace',
      'source',
      'filterPath'
    ]
    const queryBlacklist = [
      'method', 'body', 'index', 'type'
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

    if ((params['index']) != null && (params['type']) != null) {
      path = '/' + encodeURIComponent(params['index']) + '/' + '_mapping' + '/' + encodeURIComponent(params['type'])
    } else if ((params['index']) != null) {
      path = '/' + encodeURIComponent(params['index']) + '/' + '_mapping'
    } else if ((params['type']) != null) {
      path = '/' + '_mapping' + '/' + encodeURIComponent(params['type'])
    } else {
      path = '/' + '_mapping'
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

module.exports = buildIndicesGetMapping
