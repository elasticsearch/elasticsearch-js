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

export default class Xpack {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  async info (this: That, params?: T.XpackInfoRequest | TB.XpackInfoRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.XpackInfoResponse>
  async info (this: That, params?: T.XpackInfoRequest | TB.XpackInfoRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.XpackInfoResponse, unknown>>
  async info (this: That, params?: T.XpackInfoRequest | TB.XpackInfoRequest, options?: TransportRequestOptions): Promise<T.XpackInfoResponse>
  async info (this: That, params?: T.XpackInfoRequest | TB.XpackInfoRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedQuery: string[] = ['categories', 'error_trace', 'filter_path', 'human', 'pretty', 'source_query_string']
    const acceptedBody: string[] = []
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

    const method = 'GET'
    const path = '/_xpack'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async usage (this: That, params?: T.XpackUsageRequest | TB.XpackUsageRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.XpackUsageResponse>
  async usage (this: That, params?: T.XpackUsageRequest | TB.XpackUsageRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.XpackUsageResponse, unknown>>
  async usage (this: That, params?: T.XpackUsageRequest | TB.XpackUsageRequest, options?: TransportRequestOptions): Promise<T.XpackUsageResponse>
  async usage (this: That, params?: T.XpackUsageRequest | TB.XpackUsageRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedQuery: string[] = ['master_timeout', 'error_trace', 'filter_path', 'human', 'pretty', 'source_query_string']
    const acceptedBody: string[] = []
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

    const method = 'GET'
    const path = '/_xpack/usage'
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}
