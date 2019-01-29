'use strict'

function buildScroll (opts) {
  // eslint-disable-next-line no-unused-vars
  const { makeRequest, ConfigurationError, result } = opts
  /**
   * Perform a [scroll](http://www.elastic.co/guide/en/elasticsearch/reference/master/search-request-scroll.html) request
   *
   * @param {string} scroll_id - The scroll ID
   * @param {time} scroll - Specify how long a consistent view of the index should be maintained for scrolled search
   * @param {string} scroll_id - The scroll ID for scrolled search
   * @param {boolean} rest_total_hits_as_int - Indicates whether hits.total should be rendered as an integer or an object in the rest search response
   * @param {object} body - The scroll ID if not passed by URL or query parameter.
   */
  return function scroll (params, options, callback) {
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
        scroll(params, options, (err, body) => {
          err ? reject(err) : resolve(body)
        })
      })
    }

    var warnings = null
    // build querystring object
    const querystring = {}
    const keys = Object.keys(params)
    const acceptedQuerystring = [
      'scroll',
      'scroll_id',
      'rest_total_hits_as_int',
      'pretty',
      'human',
      'error_trace',
      'source',
      'filter_path'
    ]
    const acceptedQuerystringCamelCased = [
      'scroll',
      'scrollId',
      'restTotalHitsAsInt',
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
      'scroll_id'
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
      method = params.body == null ? 'GET' : 'POST'
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

    if ((params['scroll_id'] || params['scrollId']) != null) {
      path = '/' + '_search' + '/' + 'scroll' + '/' + encodeURIComponent(params['scroll_id'] || params['scrollId'])
    } else {
      path = '/' + '_search' + '/' + 'scroll'
    }

    // build request object
    const request = {
      method,
      path,
      body: params.body || '',
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

module.exports = buildScroll
