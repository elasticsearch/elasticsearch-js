'use strict'

function buildIndicesClearCache (opts) {
  // eslint-disable-next-line no-unused-vars
  const { makeRequest, ConfigurationError, result } = opts
  /**
   * Perform a [indices.clear_cache](http://www.elastic.co/guide/en/elasticsearch/reference/master/indices-clearcache.html) request
   *
   * @param {list} index - A comma-separated list of index name to limit the operation
   * @param {boolean} fielddata - Clear field data
   * @param {list} fields - A comma-separated list of fields to clear when using the `fielddata` parameter (default: all)
   * @param {boolean} query - Clear query caches
   * @param {boolean} ignore_unavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
   * @param {boolean} allow_no_indices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
   * @param {enum} expand_wildcards - Whether to expand wildcard expression to concrete indices that are open, closed or both.
   * @param {list} index - A comma-separated list of index name to limit the operation
   * @param {boolean} request - Clear request cache
   */
  return function indicesClearCache (params, options, callback) {
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
        indicesClearCache(params, options, (err, body) => {
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
      'fielddata',
      'fields',
      'query',
      'ignore_unavailable',
      'allow_no_indices',
      'expand_wildcards',
      'index',
      'request',
      'pretty',
      'human',
      'error_trace',
      'source',
      'filter_path'
    ]
    const acceptedQuerystringCamelCased = [
      'fielddata',
      'fields',
      'query',
      'ignoreUnavailable',
      'allowNoIndices',
      'expandWildcards',
      'index',
      'request',
      'pretty',
      'human',
      'errorTrace',
      'source',
      'filterPath'
    ]
    const queryBlacklist = [
      'method', 'body', 'index'
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
      method = 'POST'
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

    if ((params['index']) != null) {
      path = '/' + encodeURIComponent(params['index']) + '/' + '_cache' + '/' + 'clear'
    } else {
      path = '/' + '_cache' + '/' + 'clear'
    }

    // build request object
    const request = {
      method,
      path,
      body: '',
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

module.exports = buildIndicesClearCache
