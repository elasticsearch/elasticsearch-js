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
import * as TB from '../typesWithBodyKey'
interface That { transport: Transport }

export default class AsyncSearch {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Delete an async search. If the asynchronous search is still running, it is cancelled. Otherwise, the saved search results are deleted. If the Elasticsearch security features are enabled, the deletion of a specific async search is restricted to: the authenticated user that submitted the original search request; users that have the `cancel_task` cluster privilege.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.16/async-search.html | Elasticsearch API documentation}
    */
  async delete (this: That, params: T.AsyncSearchDeleteRequest | TB.AsyncSearchDeleteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.AsyncSearchDeleteResponse>
  async delete (this: That, params: T.AsyncSearchDeleteRequest | TB.AsyncSearchDeleteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.AsyncSearchDeleteResponse, unknown>>
  async delete (this: That, params: T.AsyncSearchDeleteRequest | TB.AsyncSearchDeleteRequest, options?: TransportRequestOptions): Promise<T.AsyncSearchDeleteResponse>
  async delete (this: That, params: T.AsyncSearchDeleteRequest | TB.AsyncSearchDeleteRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_async_search/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'async_search.delete',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get async search results. Retrieve the results of a previously submitted asynchronous search request. If the Elasticsearch security features are enabled, access to the results of a specific async search is restricted to the user or API key that submitted it.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.16/async-search.html | Elasticsearch API documentation}
    */
  async get<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>> (this: That, params: T.AsyncSearchGetRequest | TB.AsyncSearchGetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.AsyncSearchGetResponse<TDocument, TAggregations>>
  async get<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>> (this: That, params: T.AsyncSearchGetRequest | TB.AsyncSearchGetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.AsyncSearchGetResponse<TDocument, TAggregations>, unknown>>
  async get<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>> (this: That, params: T.AsyncSearchGetRequest | TB.AsyncSearchGetRequest, options?: TransportRequestOptions): Promise<T.AsyncSearchGetResponse<TDocument, TAggregations>>
  async get<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>> (this: That, params: T.AsyncSearchGetRequest | TB.AsyncSearchGetRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = `/_async_search/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'async_search.get',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get async search status. Retrieve the status of a previously submitted async search request given its identifier, without retrieving search results. If the Elasticsearch security features are enabled, use of this API is restricted to the `monitoring_user` role.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.16/async-search.html | Elasticsearch API documentation}
    */
  async status (this: That, params: T.AsyncSearchStatusRequest | TB.AsyncSearchStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.AsyncSearchStatusResponse>
  async status (this: That, params: T.AsyncSearchStatusRequest | TB.AsyncSearchStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.AsyncSearchStatusResponse, unknown>>
  async status (this: That, params: T.AsyncSearchStatusRequest | TB.AsyncSearchStatusRequest, options?: TransportRequestOptions): Promise<T.AsyncSearchStatusResponse>
  async status (this: That, params: T.AsyncSearchStatusRequest | TB.AsyncSearchStatusRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = `/_async_search/status/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'async_search.status',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Run an async search. When the primary sort of the results is an indexed field, shards get sorted based on minimum and maximum value that they hold for that field. Partial results become available following the sort criteria that was requested. Warning: Asynchronous search does not support scroll or search requests that include only the suggest section. By default, Elasticsearch does not allow you to store an async search response larger than 10Mb and an attempt to do this results in an error. The maximum allowed size for a stored async search response can be set by changing the `search.max_async_search_response_size` cluster level setting.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.16/async-search.html | Elasticsearch API documentation}
    */
  async submit<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>> (this: That, params?: T.AsyncSearchSubmitRequest | TB.AsyncSearchSubmitRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.AsyncSearchSubmitResponse<TDocument, TAggregations>>
  async submit<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>> (this: That, params?: T.AsyncSearchSubmitRequest | TB.AsyncSearchSubmitRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.AsyncSearchSubmitResponse<TDocument, TAggregations>, unknown>>
  async submit<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>> (this: That, params?: T.AsyncSearchSubmitRequest | TB.AsyncSearchSubmitRequest, options?: TransportRequestOptions): Promise<T.AsyncSearchSubmitResponse<TDocument, TAggregations>>
  async submit<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>> (this: That, params?: T.AsyncSearchSubmitRequest | TB.AsyncSearchSubmitRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const acceptedBody: string[] = ['aggregations', 'aggs', 'collapse', 'explain', 'ext', 'from', 'highlight', 'track_total_hits', 'indices_boost', 'docvalue_fields', 'knn', 'min_score', 'post_filter', 'profile', 'query', 'rescore', 'script_fields', 'search_after', 'size', 'slice', 'sort', '_source', 'fields', 'suggest', 'terminate_after', 'timeout', 'track_scores', 'version', 'seq_no_primary_term', 'stored_fields', 'pit', 'runtime_mappings', 'stats']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    const userBody: any = params?.body
    let body: Record<string, any> | string
    if (typeof userBody === 'string') {
      body = userBody
    } else {
      body = userBody != null ? { ...userBody } : undefined
    }

    params = params ?? {}
    for (const key in params) {
      if (acceptedBody.includes(key)) {
        body = body ?? {}
        // @ts-expect-error
        if (key === 'sort' && typeof params[key] === 'string' && params[key].includes(':')) { // eslint-disable-line
          // @ts-expect-error
          querystring[key] = params[key]
        } else {
          // @ts-expect-error
          body[key] = params[key]
        }
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.index != null) {
      method = 'POST'
      path = `/${encodeURIComponent(params.index.toString())}/_async_search`
    } else {
      method = 'POST'
      path = '/_async_search'
    }
    const meta: TransportRequestMetadata = {
      name: 'async_search.submit',
      pathParts: {
        index: params.index
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
