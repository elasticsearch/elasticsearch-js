// Licensed to Elasticsearch B.V under one or more agreements.
// Elasticsearch B.V licenses this file to you under the Apache 2.0 License.
// See the LICENSE file in the project root for more information

'use strict'

/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

function buildIndicesSimulateIndexTemplate (opts) {
  // eslint-disable-next-line no-unused-vars
  const { makeRequest, ConfigurationError, handleError, snakeCaseKeys } = opts

  const acceptedQuerystring = [
    'master_timeout',
    'pretty',
    'human',
    'error_trace',
    'source',
    'filter_path'
  ]

  const snakeCase = {
    masterTimeout: 'master_timeout',
    errorTrace: 'error_trace',
    filterPath: 'filter_path'
  }

  /**
   * Perform a indices.simulate_index_template request
   * Simulate matching the given index name against the index templates in the system
   * https://www.elastic.co/guide/en/elasticsearch/reference/master/indices-templates.html
   */
  return function indicesSimulateIndexTemplate (params, options, callback) {
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

    // check required parameters
    if (params['name'] == null) {
      const err = new ConfigurationError('Missing required parameter: name')
      return handleError(err, callback)
    }

    // validate headers object
    if (options.headers != null && typeof options.headers !== 'object') {
      const err = new ConfigurationError(`Headers should be an object, instead got: ${typeof options.headers}`)
      return handleError(err, callback)
    }

    var warnings = []
    var { method, body, name, ...querystring } = params
    querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring, warnings)

    var ignore = options.ignore
    if (typeof ignore === 'number') {
      options.ignore = [ignore]
    }

    var path = ''

    if (method == null) method = 'POST'
    path = '/' + '_index_template' + '/' + '_simulate_index' + '/' + encodeURIComponent(name)

    // build request object
    const request = {
      method,
      path,
      body: body || '',
      querystring
    }

    options.warnings = warnings.length === 0 ? null : warnings
    return makeRequest(request, options, callback)
  }
}

module.exports = buildIndicesSimulateIndexTemplate
