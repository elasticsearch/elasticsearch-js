'use strict'

function buildXpackLicensePost (opts) {
  // eslint-disable-next-line no-unused-vars
  const { makeRequest, ConfigurationError, result } = opts
  /**
   * Perform a [xpack.license.post](https://www.elastic.co/guide/en/x-pack/current/license-management.html) request
   *
   * @param {boolean} acknowledge - whether the user has acknowledged acknowledge messages (default: false)
   * @param {object} body - licenses to be installed
   */
  return function xpackLicensePost (params, options, callback) {
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
        xpackLicensePost(params, options, (err, body) => {
          err ? reject(err) : resolve(body)
        })
      })
    }

    var warnings = null
    // build querystring object
    const querystring = {}
    const keys = Object.keys(params)
    const acceptedQuerystring = [
      'acknowledge'
    ]
    const acceptedQuerystringCamelCased = [
      'acknowledge'
    ]
    const queryBlacklist = [
      'method', 'body'
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
      method = 'PUT'
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

    path = '/' + '_license'

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

module.exports = buildXpackLicensePost
