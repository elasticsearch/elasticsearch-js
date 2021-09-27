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

  async delete (this: That, params: T.AsyncSearchDeleteRequest | TB.AsyncSearchDeleteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.AsyncSearchDeleteResponse>
  async delete (this: That, params: T.AsyncSearchDeleteRequest | TB.AsyncSearchDeleteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.AsyncSearchDeleteResponse, unknown>>
  async delete (this: That, params: T.AsyncSearchDeleteRequest | TB.AsyncSearchDeleteRequest, options?: TransportRequestOptions): Promise<T.AsyncSearchDeleteResponse>
  async delete (this: That, params: T.AsyncSearchDeleteRequest | TB.AsyncSearchDeleteRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const acceptedQuery: string[] = ['error_trace', 'filter_path', 'human', 'pretty', 'source_query_string']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    const body: Record<string, any> = params.body ?? {}

    params = params ?? {}
    for (const key in params) {
      if (acceptedQuery.includes(key)) {
        // @ts-expect-error
        querystring[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        body[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_async_search/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async get<TDocument = unknown> (this: That, params: T.AsyncSearchGetRequest | TB.AsyncSearchGetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.AsyncSearchGetResponse<TDocument>>
  async get<TDocument = unknown> (this: That, params: T.AsyncSearchGetRequest | TB.AsyncSearchGetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.AsyncSearchGetResponse<TDocument>, unknown>>
  async get<TDocument = unknown> (this: That, params: T.AsyncSearchGetRequest | TB.AsyncSearchGetRequest, options?: TransportRequestOptions): Promise<T.AsyncSearchGetResponse<TDocument>>
  async get<TDocument = unknown> (this: That, params: T.AsyncSearchGetRequest | TB.AsyncSearchGetRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const acceptedQuery: string[] = ['keep_alive', 'typed_keys', 'wait_for_completion_timeout', 'error_trace', 'filter_path', 'human', 'pretty', 'source_query_string']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    const body: Record<string, any> = params.body ?? {}

    params = params ?? {}
    for (const key in params) {
      if (acceptedQuery.includes(key)) {
        // @ts-expect-error
        querystring[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        body[key] = params[key]
      }
    }

    const method = 'GET'
    const path = `/_async_search/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async status<TDocument = unknown> (this: That, params: T.AsyncSearchStatusRequest | TB.AsyncSearchStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.AsyncSearchStatusResponse<TDocument>>
  async status<TDocument = unknown> (this: That, params: T.AsyncSearchStatusRequest | TB.AsyncSearchStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.AsyncSearchStatusResponse<TDocument>, unknown>>
  async status<TDocument = unknown> (this: That, params: T.AsyncSearchStatusRequest | TB.AsyncSearchStatusRequest, options?: TransportRequestOptions): Promise<T.AsyncSearchStatusResponse<TDocument>>
  async status<TDocument = unknown> (this: That, params: T.AsyncSearchStatusRequest | TB.AsyncSearchStatusRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const acceptedQuery: string[] = ['error_trace', 'filter_path', 'human', 'pretty', 'source_query_string']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    const body: Record<string, any> = params.body ?? {}

    params = params ?? {}
    for (const key in params) {
      if (acceptedQuery.includes(key)) {
        // @ts-expect-error
        querystring[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        body[key] = params[key]
      }
    }

    const method = 'GET'
    const path = `/_async_search/status/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async submit<TDocument = unknown> (this: That, params?: T.AsyncSearchSubmitRequest | TB.AsyncSearchSubmitRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.AsyncSearchSubmitResponse<TDocument>>
  async submit<TDocument = unknown> (this: That, params?: T.AsyncSearchSubmitRequest | TB.AsyncSearchSubmitRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.AsyncSearchSubmitResponse<TDocument>, unknown>>
  async submit<TDocument = unknown> (this: That, params?: T.AsyncSearchSubmitRequest | TB.AsyncSearchSubmitRequest, options?: TransportRequestOptions): Promise<T.AsyncSearchSubmitResponse<TDocument>>
  async submit<TDocument = unknown> (this: That, params?: T.AsyncSearchSubmitRequest | TB.AsyncSearchSubmitRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const acceptedQuery: string[] = ['error_trace', 'filter_path', 'human', 'pretty', 'source_query_string']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    const body: Record<string, any> = params?.body ?? {}

    params = params ?? {}
    for (const key in params) {
      if (acceptedQuery.includes(key)) {
        // @ts-expect-error
        querystring[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        body[key] = params[key]
      }
    }

    const method = 'POST'
    let path = ''
    if (params.index != null) {
      path = `/${encodeURIComponent(params.index.toString())}/_async_search`
    } else {
      path = '/_async_search'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}
