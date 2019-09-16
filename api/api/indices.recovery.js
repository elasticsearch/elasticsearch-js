// Licensed to Elasticsearch B.V under one or more agreements.
// Elasticsearch B.V licenses this file to you under the Apache 2.0 License.
// See the LICENSE file in the project root for more information

'use strict'

/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

function buildIndicesRecovery (opts) {
  // eslint-disable-next-line no-unused-vars
  const { makeRequest, ConfigurationError, handleError, snakeCaseKeys } = opts
<<<<<<< HEAD
  /**
   * Perform a [indices.recovery](http://www.elastic.co/guide/en/elasticsearch/reference/master/indices-recovery.html) request
   *
   * @param {list} index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
   * @param {boolean} detailed - Whether to display detailed information about shard recovery
   * @param {boolean} active_only - Display only those recoveries that are currently on-going
   */
=======
>>>>>>> 69247496... Update code generation (#969)

  const acceptedQuerystring = [
    'detailed',
    'active_only',
    'pretty',
    'human',
    'error_trace',
    'source',
    'filter_path'
  ]

  const snakeCase = {
    activeOnly: 'active_only',
    errorTrace: 'error_trace',
    filterPath: 'filter_path'
  }

  /**
   * Perform a indices.recovery request
   * Returns information about ongoing index shard recoveries.
   * https://www.elastic.co/guide/en/elasticsearch/reference/master/indices-recovery.html
   */
  return function indicesRecovery (params, options, callback) {
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

    // validate headers object
    if (options.headers != null && typeof options.headers !== 'object') {
      const err = new ConfigurationError(`Headers should be an object, instead got: ${typeof options.headers}`)
      return handleError(err, callback)
    }

    var warnings = []
    var { method, body, index, ...querystring } = params
    querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring, warnings)

    var ignore = options.ignore
    if (typeof ignore === 'number') {
      options.ignore = [ignore]
    }

    var path = ''

    if ((index) != null) {
      if (method == null) method = 'GET'
      path = '/' + encodeURIComponent(index) + '/' + '_recovery'
    } else {
      if (method == null) method = 'GET'
      path = '/' + '_recovery'
    }

    // build request object
    const request = {
      method,
      path,
      body: null,
      querystring
    }

    options.warnings = warnings.length === 0 ? null : warnings
    return makeRequest(request, options, callback)
  }
}

module.exports = buildIndicesRecovery
