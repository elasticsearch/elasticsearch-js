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

export default class Esql {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Run an async ES|QL query. Asynchronously run an ES|QL (Elasticsearch query language) query, monitor its progress, and retrieve results when they become available. The API accepts the same parameters and request body as the synchronous query API, along with additional async related properties.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/esql-async-query-api.html | Elasticsearch API documentation}
    */
  async asyncQuery (this: That, params: T.EsqlAsyncQueryRequest | TB.EsqlAsyncQueryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EsqlAsyncQueryResponse>
  async asyncQuery (this: That, params: T.EsqlAsyncQueryRequest | TB.EsqlAsyncQueryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EsqlAsyncQueryResponse, unknown>>
  async asyncQuery (this: That, params: T.EsqlAsyncQueryRequest | TB.EsqlAsyncQueryRequest, options?: TransportRequestOptions): Promise<T.EsqlAsyncQueryResponse>
  async asyncQuery (this: That, params: T.EsqlAsyncQueryRequest | TB.EsqlAsyncQueryRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = ['columnar', 'filter', 'locale', 'params', 'profile', 'query', 'tables']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    const userBody: any = params?.body
    let body: Record<string, any> | string
    if (typeof userBody === 'string') {
      body = userBody
    } else {
      body = userBody != null ? { ...userBody } : undefined
    }

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        body = body ?? {}
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = '/_query/async'
    const meta: TransportRequestMetadata = {
      name: 'esql.async_query'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Delete an async ES|QL query. If the query is still running, it is cancelled. Otherwise, the stored results are deleted. If the Elasticsearch security features are enabled, only the following users can use this API to delete a query: * The authenticated user that submitted the original query request * Users with the `cancel_task` cluster privilege
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/esql-async-query-delete-api.html | Elasticsearch API documentation}
    */
  async asyncQueryDelete (this: That, params: T.EsqlAsyncQueryDeleteRequest | TB.EsqlAsyncQueryDeleteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EsqlAsyncQueryDeleteResponse>
  async asyncQueryDelete (this: That, params: T.EsqlAsyncQueryDeleteRequest | TB.EsqlAsyncQueryDeleteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EsqlAsyncQueryDeleteResponse, unknown>>
  async asyncQueryDelete (this: That, params: T.EsqlAsyncQueryDeleteRequest | TB.EsqlAsyncQueryDeleteRequest, options?: TransportRequestOptions): Promise<T.EsqlAsyncQueryDeleteResponse>
  async asyncQueryDelete (this: That, params: T.EsqlAsyncQueryDeleteRequest | TB.EsqlAsyncQueryDeleteRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = `/_query/async/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'esql.async_query_delete',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get async ES|QL query results. Get the current status and available results or stored results for an ES|QL asynchronous query. If the Elasticsearch security features are enabled, only the user who first submitted the ES|QL query can retrieve the results using this API.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/esql-async-query-get-api.html | Elasticsearch API documentation}
    */
  async asyncQueryGet (this: That, params: T.EsqlAsyncQueryGetRequest | TB.EsqlAsyncQueryGetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EsqlAsyncQueryGetResponse>
  async asyncQueryGet (this: That, params: T.EsqlAsyncQueryGetRequest | TB.EsqlAsyncQueryGetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EsqlAsyncQueryGetResponse, unknown>>
  async asyncQueryGet (this: That, params: T.EsqlAsyncQueryGetRequest | TB.EsqlAsyncQueryGetRequest, options?: TransportRequestOptions): Promise<T.EsqlAsyncQueryGetResponse>
  async asyncQueryGet (this: That, params: T.EsqlAsyncQueryGetRequest | TB.EsqlAsyncQueryGetRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = `/_query/async/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'esql.async_query_get',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Run an ES|QL query. Get search results for an ES|QL (Elasticsearch query language) query.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/esql-rest.html | Elasticsearch API documentation}
    */
  async query (this: That, params: T.EsqlQueryRequest | TB.EsqlQueryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EsqlQueryResponse>
  async query (this: That, params: T.EsqlQueryRequest | TB.EsqlQueryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EsqlQueryResponse, unknown>>
  async query (this: That, params: T.EsqlQueryRequest | TB.EsqlQueryRequest, options?: TransportRequestOptions): Promise<T.EsqlQueryResponse>
  async query (this: That, params: T.EsqlQueryRequest | TB.EsqlQueryRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = ['columnar', 'filter', 'locale', 'params', 'profile', 'query', 'tables']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    const userBody: any = params?.body
    let body: Record<string, any> | string
    if (typeof userBody === 'string') {
      body = userBody
    } else {
      body = userBody != null ? { ...userBody } : undefined
    }

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        body = body ?? {}
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = '/_query'
    const meta: TransportRequestMetadata = {
      name: 'esql.query'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
