'use strict'

function buildMlGetCalendars (opts) {
  // eslint-disable-next-line no-unused-vars
  const { makeRequest, ConfigurationError, result } = opts
  /**
   * Perform a [ml.get_calendars](undefined) request
   *
   * @param {string} calendar_id - The ID of the calendar to fetch
   * @param {int} from - skips a number of calendars
   * @param {int} size - specifies a max number of calendars to get
   */
  return function mlGetCalendars (params, options, callback) {
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
        mlGetCalendars(params, options, (err, body) => {
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
      'from',
      'size'
    ]
    const acceptedQuerystringCamelCased = [
      'from',
      'size'
    ]
    const queryBlacklist = [
      'method',
      'body',
      'ignore',
      'maxRetries',
      'headers',
      'requestTimeout',
      'asStream',
      'calendar_id'
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

    if ((params['calendar_id'] || params['calendarId']) != null) {
      path = '/' + '_ml' + '/' + 'calendars' + '/' + encodeURIComponent(params['calendar_id'] || params['calendarId'])
    } else {
      path = '/' + '_ml' + '/' + 'calendars'
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

module.exports = buildMlGetCalendars
