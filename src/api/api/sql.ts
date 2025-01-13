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

/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-misused-new */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-unused-vars */

// This file was automatically generated by elastic/elastic-client-generator-js
// DO NOT MODIFY IT BY HAND. Instead, modify the source open api file,
// and elastic/elastic-client-generator-js to regenerate this file again.

import {
  Transport,
  TransportRequestMetadata,
  TransportRequestOptions,
  TransportRequestOptionsWithMeta,
  TransportRequestOptionsWithOutMeta,
  TransportResult
} from '@elastic/transport'
import * as T from '../types'
interface That { transport: Transport }

export default class Sql {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Clear an SQL search cursor.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/clear-sql-cursor-api.html | Elasticsearch API documentation}
    */
  async clearCursor (this: That, params: T.SqlClearCursorRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SqlClearCursorResponse>
  async clearCursor (this: That, params: T.SqlClearCursorRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SqlClearCursorResponse, unknown>>
  async clearCursor (this: That, params: T.SqlClearCursorRequest, options?: TransportRequestOptions): Promise<T.SqlClearCursorResponse>
  async clearCursor (this: That, params: T.SqlClearCursorRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = ['cursor']
    const querystring: Record<string, any> = {}
    const body: Record<string, any> = {}

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = '/_sql/close'
    const meta: TransportRequestMetadata = {
      name: 'sql.clear_cursor'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Delete an async SQL search. Delete an async SQL search or a stored synchronous SQL search. If the search is still running, the API cancels it. If the Elasticsearch security features are enabled, only the following users can use this API to delete a search: * Users with the `cancel_task` cluster privilege. * The user who first submitted the search.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/delete-async-sql-search-api.html | Elasticsearch API documentation}
    */
  async deleteAsync (this: That, params: T.SqlDeleteAsyncRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SqlDeleteAsyncResponse>
  async deleteAsync (this: That, params: T.SqlDeleteAsyncRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SqlDeleteAsyncResponse, unknown>>
  async deleteAsync (this: That, params: T.SqlDeleteAsyncRequest, options?: TransportRequestOptions): Promise<T.SqlDeleteAsyncResponse>
  async deleteAsync (this: That, params: T.SqlDeleteAsyncRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_sql/async/delete/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'sql.delete_async',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get async SQL search results. Get the current status and available results for an async SQL search or stored synchronous SQL search. If the Elasticsearch security features are enabled, only the user who first submitted the SQL search can retrieve the search using this API.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/get-async-sql-search-api.html | Elasticsearch API documentation}
    */
  async getAsync (this: That, params: T.SqlGetAsyncRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SqlGetAsyncResponse>
  async getAsync (this: That, params: T.SqlGetAsyncRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SqlGetAsyncResponse, unknown>>
  async getAsync (this: That, params: T.SqlGetAsyncRequest, options?: TransportRequestOptions): Promise<T.SqlGetAsyncResponse>
  async getAsync (this: That, params: T.SqlGetAsyncRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = `/_sql/async/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'sql.get_async',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get the async SQL search status. Get the current status of an async SQL search or a stored synchronous SQL search.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/get-async-sql-search-status-api.html | Elasticsearch API documentation}
    */
  async getAsyncStatus (this: That, params: T.SqlGetAsyncStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SqlGetAsyncStatusResponse>
  async getAsyncStatus (this: That, params: T.SqlGetAsyncStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SqlGetAsyncStatusResponse, unknown>>
  async getAsyncStatus (this: That, params: T.SqlGetAsyncStatusRequest, options?: TransportRequestOptions): Promise<T.SqlGetAsyncStatusResponse>
  async getAsyncStatus (this: That, params: T.SqlGetAsyncStatusRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = `/_sql/async/status/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'sql.get_async_status',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get SQL search results. Run an SQL request.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/sql-search-api.html | Elasticsearch API documentation}
    */
  async query (this: That, params?: T.SqlQueryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SqlQueryResponse>
  async query (this: That, params?: T.SqlQueryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SqlQueryResponse, unknown>>
  async query (this: That, params?: T.SqlQueryRequest, options?: TransportRequestOptions): Promise<T.SqlQueryResponse>
  async query (this: That, params?: T.SqlQueryRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = ['allow_partial_search_results', 'catalog', 'columnar', 'cursor', 'fetch_size', 'field_multi_value_leniency', 'filter', 'index_using_frozen', 'keep_alive', 'keep_on_completion', 'page_timeout', 'params', 'query', 'request_timeout', 'runtime_mappings', 'time_zone', 'wait_for_completion_timeout']
    const querystring: Record<string, any> = {}
    const body: Record<string, any> = {}

    params = params ?? {}
    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = body != null ? 'POST' : 'GET'
    const path = '/_sql'
    const meta: TransportRequestMetadata = {
      name: 'sql.query'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Translate SQL into Elasticsearch queries. Translate an SQL search into a search API request containing Query DSL. It accepts the same request body parameters as the SQL search API, excluding `cursor`.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/sql-translate-api.html | Elasticsearch API documentation}
    */
  async translate (this: That, params: T.SqlTranslateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SqlTranslateResponse>
  async translate (this: That, params: T.SqlTranslateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SqlTranslateResponse, unknown>>
  async translate (this: That, params: T.SqlTranslateRequest, options?: TransportRequestOptions): Promise<T.SqlTranslateResponse>
  async translate (this: That, params: T.SqlTranslateRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = ['fetch_size', 'filter', 'query', 'time_zone']
    const querystring: Record<string, any> = {}
    const body: Record<string, any> = {}

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = body != null ? 'POST' : 'GET'
    const path = '/_sql/translate'
    const meta: TransportRequestMetadata = {
      name: 'sql.translate'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
