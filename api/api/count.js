'use strict'

function buildCount (opts) {
  // eslint-disable-next-line no-unused-vars
  const { makeRequest, ConfigurationError, result } = opts
  /**
   * Perform a [count](http://www.elastic.co/guide/en/elasticsearch/reference/master/search-count.html) request
   *
   * @param {list} index - A comma-separated list of indices to restrict the results
   * @param {list} type - A comma-separated list of types to restrict the results
   * @param {boolean} ignore_unavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
   * @param {boolean} ignore_throttled - Whether specified concrete, expanded or aliased indices should be ignored when throttled
   * @param {boolean} allow_no_indices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
   * @param {enum} expand_wildcards - Whether to expand wildcard expression to concrete indices that are open, closed or both.
   * @param {number} min_score - Include only documents with a specific `_score` value in the result
   * @param {string} preference - Specify the node or shard the operation should be performed on (default: random)
   * @param {list} routing - A comma-separated list of specific routing values
   * @param {string} q - Query in the Lucene query string syntax
   * @param {string} analyzer - The analyzer to use for the query string
   * @param {boolean} analyze_wildcard - Specify whether wildcard and prefix queries should be analyzed (default: false)
   * @param {enum} default_operator - The default operator for query string query (AND or OR)
   * @param {string} df - The field to use as default where no field prefix is given in the query string
   * @param {boolean} lenient - Specify whether format-based query failures (such as providing text to a numeric field) should be ignored
   * @param {number} terminate_after - The maximum count for each shard, upon reaching which the query execution will terminate early
   * @param {object} body - A query to restrict the results specified with the Query DSL (optional)
   */
  return function count (params, options, callback) {
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
        count(params, options, (err, body) => {
          err ? reject(err) : resolve(body)
        })
      })
    }

    // check required url components
    if (params['type'] != null && (params['index'] == null)) {
      return callback(
        new ConfigurationError('Missing required parameter of the url: index'),
        result
      )
    }

    var warnings = null
    // build querystring object
    const querystring = {}
    const keys = Object.keys(params)
    const acceptedQuerystring = [
      'ignore_unavailable',
      'ignore_throttled',
      'allow_no_indices',
      'expand_wildcards',
      'min_score',
      'preference',
      'routing',
      'q',
      'analyzer',
      'analyze_wildcard',
      'default_operator',
      'df',
      'lenient',
      'terminate_after',
      'pretty',
      'human',
      'error_trace',
      'source',
      'filter_path'
    ]
    const acceptedQuerystringCamelCased = [
      'ignoreUnavailable',
      'ignoreThrottled',
      'allowNoIndices',
      'expandWildcards',
      'minScore',
      'preference',
      'routing',
      'q',
      'analyzer',
      'analyzeWildcard',
      'defaultOperator',
      'df',
      'lenient',
      'terminateAfter',
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
      'index',
      'type'
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

    if ((params['index']) != null && (params['type']) != null) {
      path = '/' + encodeURIComponent(params['index']) + '/' + encodeURIComponent(params['type']) + '/' + '_count'
    } else if ((params['index']) != null) {
      path = '/' + encodeURIComponent(params['index']) + '/' + '_count'
    } else {
      path = '/' + '_count'
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

module.exports = buildCount
