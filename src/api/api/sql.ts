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
  TransportResult,
  errors
} from '@elastic/transport'
import * as T from '../types'
import * as TB from '../typesWithBodyKey'
interface That { transport: Transport }

export default class Sql {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  async clearCursor (this: That, params: T.SqlClearCursorRequest | TB.SqlClearCursorRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SqlClearCursorResponse>
  async clearCursor (this: That, params: T.SqlClearCursorRequest | TB.SqlClearCursorRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SqlClearCursorResponse, unknown>>
  async clearCursor (this: That, params: T.SqlClearCursorRequest | TB.SqlClearCursorRequest, options?: TransportRequestOptions): Promise<T.SqlClearCursorResponse>
  async clearCursor (this: That, params: T.SqlClearCursorRequest | TB.SqlClearCursorRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedQuery: string[] = ['error_trace', 'filter_path', 'human', 'pretty', 'source_query_string']
    const acceptedBody: string[] = ['cursor']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    let body: Record<string, any> = params.body ?? undefined

    for (const key in params) {
      if (acceptedQuery.includes(key)) {
        // @ts-expect-error
        querystring[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (acceptedBody.includes(key)) {
        // @ts-expect-error
        if (params.body != null) {
          throw new errors.ConfigurationError(`The parameter '${key}' can't be used when you configure the body parameter. You should either move into the body or avoid using the body key altogether.`)
        }
        body = body ?? {}
        // @ts-expect-error
        body[key] = params[key]
      } else {
        if (key === 'body') continue
        throw new errors.ConfigurationError(`The parameter '${key}' is not supported.`)
      }
    }

    const method = 'POST'
    const path = '/_sql/close'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async deleteAsync (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async deleteAsync (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async deleteAsync (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async deleteAsync (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const acceptedQuery: string[] = []
    const acceptedBody: string[] = []
    const querystring: Record<string, any> = {}
    let body: Record<string, any> = params?.body ?? undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedQuery.includes(key)) {
        querystring[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (acceptedBody.includes(key)) {
        if (params.body != null) {
          throw new errors.ConfigurationError(`The parameter '${key}' can't be used when you configure the body parameter. You should either move into the body or avoid using the body key altogether.`)
        }
        body = body ?? {}
        body[key] = params[key]
      } else {
        if (key === 'body') continue
        throw new errors.ConfigurationError(`The parameter '${key}' is not supported.`)
      }
    }

    const method = 'DELETE'
    const path = `/_sql/async/delete/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async getAsync (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async getAsync (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async getAsync (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async getAsync (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const acceptedQuery: string[] = ['delimiter', 'format', 'keep_alive', 'wait_for_completion_timeout']
    const acceptedBody: string[] = []
    const querystring: Record<string, any> = {}
    let body: Record<string, any> = params?.body ?? undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedQuery.includes(key)) {
        querystring[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (acceptedBody.includes(key)) {
        if (params.body != null) {
          throw new errors.ConfigurationError(`The parameter '${key}' can't be used when you configure the body parameter. You should either move into the body or avoid using the body key altogether.`)
        }
        body = body ?? {}
        body[key] = params[key]
      } else {
        if (key === 'body') continue
        throw new errors.ConfigurationError(`The parameter '${key}' is not supported.`)
      }
    }

    const method = 'GET'
    const path = `/_sql/async/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async getAsyncStatus (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async getAsyncStatus (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async getAsyncStatus (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async getAsyncStatus (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const acceptedQuery: string[] = []
    const acceptedBody: string[] = []
    const querystring: Record<string, any> = {}
    let body: Record<string, any> = params?.body ?? undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedQuery.includes(key)) {
        querystring[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (acceptedBody.includes(key)) {
        if (params.body != null) {
          throw new errors.ConfigurationError(`The parameter '${key}' can't be used when you configure the body parameter. You should either move into the body or avoid using the body key altogether.`)
        }
        body = body ?? {}
        body[key] = params[key]
      } else {
        if (key === 'body') continue
        throw new errors.ConfigurationError(`The parameter '${key}' is not supported.`)
      }
    }

    const method = 'GET'
    const path = `/_sql/async/status/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async query (this: That, params?: T.SqlQueryRequest | TB.SqlQueryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SqlQueryResponse>
  async query (this: That, params?: T.SqlQueryRequest | TB.SqlQueryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SqlQueryResponse, unknown>>
  async query (this: That, params?: T.SqlQueryRequest | TB.SqlQueryRequest, options?: TransportRequestOptions): Promise<T.SqlQueryResponse>
  async query (this: That, params?: T.SqlQueryRequest | TB.SqlQueryRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedQuery: string[] = ['format', 'error_trace', 'filter_path', 'human', 'pretty', 'source_query_string']
    const acceptedBody: string[] = ['columnar', 'cursor', 'fetch_size', 'filter', 'query', 'request_timeout', 'page_timeout', 'time_zone', 'field_multi_value_leniency']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    let body: Record<string, any> = params?.body ?? undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedQuery.includes(key)) {
        // @ts-expect-error
        querystring[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (acceptedBody.includes(key)) {
        // @ts-expect-error
        if (params.body != null) {
          throw new errors.ConfigurationError(`The parameter '${key}' can't be used when you configure the body parameter. You should either move into the body or avoid using the body key altogether.`)
        }
        body = body ?? {}
        // @ts-expect-error
        body[key] = params[key]
      } else {
        if (key === 'body') continue
        throw new errors.ConfigurationError(`The parameter '${key}' is not supported.`)
      }
    }

    const method = body != null ? 'POST' : 'GET'
    const path = '/_sql'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async translate (this: That, params: T.SqlTranslateRequest | TB.SqlTranslateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SqlTranslateResponse>
  async translate (this: That, params: T.SqlTranslateRequest | TB.SqlTranslateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SqlTranslateResponse, unknown>>
  async translate (this: That, params: T.SqlTranslateRequest | TB.SqlTranslateRequest, options?: TransportRequestOptions): Promise<T.SqlTranslateResponse>
  async translate (this: That, params: T.SqlTranslateRequest | TB.SqlTranslateRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedQuery: string[] = ['error_trace', 'filter_path', 'human', 'pretty', 'source_query_string']
    const acceptedBody: string[] = ['fetch_size', 'filter', 'query', 'time_zone']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    let body: Record<string, any> = params.body ?? undefined

    for (const key in params) {
      if (acceptedQuery.includes(key)) {
        // @ts-expect-error
        querystring[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (acceptedBody.includes(key)) {
        // @ts-expect-error
        if (params.body != null) {
          throw new errors.ConfigurationError(`The parameter '${key}' can't be used when you configure the body parameter. You should either move into the body or avoid using the body key altogether.`)
        }
        body = body ?? {}
        // @ts-expect-error
        body[key] = params[key]
      } else {
        if (key === 'body') continue
        throw new errors.ConfigurationError(`The parameter '${key}' is not supported.`)
      }
    }

    const method = body != null ? 'POST' : 'GET'
    const path = '/_sql/translate'
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}
