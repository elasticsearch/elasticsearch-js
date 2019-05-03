/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

'use strict'

/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

function buildDataFrameGetDataFrameTransform (opts) {
  // eslint-disable-next-line no-unused-vars
  const { makeRequest, ConfigurationError, handleError, snakeCaseKeys } = opts
  /**
   * Perform a [data_frame.get_data_frame_transform](https://www.elastic.co/guide/en/elasticsearch/reference/current/get-data-frame-transform.html) request
   *
   * @param {string} transform_id - The id or comma delimited list of id expressions of the transforms to get, '_all' or '*' implies get all transforms
   * @param {int} from - skips a number of transform configs, defaults to 0
   * @param {int} size - specifies a max number of transforms to get, defaults to 100
   */

  const acceptedQuerystring = [
    'from',
    'size'
  ]

  const snakeCase = {

  }

  return function dataFrameGetDataFrameTransform (params, options, callback) {
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
    if (params.body != null) {
      const err = new ConfigurationError('This API does not require a body')
      return handleError(err, callback)
    }

    // validate headers object
    if (options.headers != null && typeof options.headers !== 'object') {
      const err = new ConfigurationError(`Headers should be an object, instead got: ${typeof options.headers}`)
      return handleError(err, callback)
    }

    var warnings = []
    var { method, body, transformId, transform_id, ...querystring } = params
    querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring, warnings)

    if (method == null) {
      method = 'GET'
    }

    var ignore = options.ignore || null
    if (typeof ignore === 'number') {
      options.ignore = [ignore]
    }

    var path = ''

    if ((transform_id || transformId) != null) {
      path = '/' + '_data_frame' + '/' + 'transforms' + '/' + encodeURIComponent(transform_id || transformId)
    } else {
      path = '/' + '_data_frame' + '/' + 'transforms'
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

module.exports = buildDataFrameGetDataFrameTransform
