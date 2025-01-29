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

export default class Profiling {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Extracts a UI-optimized structure to render flamegraphs from Universal Profiling.
    * @see {@link https://www.elastic.co/guide/en/observability/master/universal-profiling.html | Elasticsearch API documentation}
    */
  async flamegraph (this: That, params?: T.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async flamegraph (this: That, params?: T.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async flamegraph (this: That, params?: T.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async flamegraph (this: That, params?: T.TODO, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const userQuery = params?.querystring
    const querystring: Record<string, any> = userQuery != null ? { ...userQuery } : {}

    let body: Record<string, any> | string | undefined
    const userBody = params?.body
    if (userBody != null) {
      if (typeof userBody === 'string') {
        body = userBody
      } else {
        body = { ...userBody }
      }
    }

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body' && key !== 'querystring') {
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = '/_profiling/flamegraph'
    const meta: TransportRequestMetadata = {
      name: 'profiling.flamegraph'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Extracts raw stacktrace information from Universal Profiling.
    * @see {@link https://www.elastic.co/guide/en/observability/master/universal-profiling.html | Elasticsearch API documentation}
    */
  async stacktraces (this: That, params?: T.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async stacktraces (this: That, params?: T.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async stacktraces (this: That, params?: T.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async stacktraces (this: That, params?: T.TODO, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const userQuery = params?.querystring
    const querystring: Record<string, any> = userQuery != null ? { ...userQuery } : {}

    let body: Record<string, any> | string | undefined
    const userBody = params?.body
    if (userBody != null) {
      if (typeof userBody === 'string') {
        body = userBody
      } else {
        body = { ...userBody }
      }
    }

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body' && key !== 'querystring') {
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = '/_profiling/stacktraces'
    const meta: TransportRequestMetadata = {
      name: 'profiling.stacktraces'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Returns basic information about the status of Universal Profiling.
    * @see {@link https://www.elastic.co/guide/en/observability/master/universal-profiling.html | Elasticsearch API documentation}
    */
  async status (this: That, params?: T.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async status (this: That, params?: T.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async status (this: That, params?: T.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async status (this: That, params?: T.TODO, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const userQuery = params?.querystring
    const querystring: Record<string, any> = userQuery != null ? { ...userQuery } : {}

    let body: Record<string, any> | string | undefined
    const userBody = params?.body
    if (userBody != null) {
      if (typeof userBody === 'string') {
        body = userBody
      } else {
        body = { ...userBody }
      }
    }

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body' && key !== 'querystring') {
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_profiling/status'
    const meta: TransportRequestMetadata = {
      name: 'profiling.status'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Extracts a list of topN functions from Universal Profiling.
    * @see {@link https://www.elastic.co/guide/en/observability/master/universal-profiling.html | Elasticsearch API documentation}
    */
  async topnFunctions (this: That, params?: T.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async topnFunctions (this: That, params?: T.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async topnFunctions (this: That, params?: T.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async topnFunctions (this: That, params?: T.TODO, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const userQuery = params?.querystring
    const querystring: Record<string, any> = userQuery != null ? { ...userQuery } : {}

    let body: Record<string, any> | string | undefined
    const userBody = params?.body
    if (userBody != null) {
      if (typeof userBody === 'string') {
        body = userBody
      } else {
        body = { ...userBody }
      }
    }

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body' && key !== 'querystring') {
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = '/_profiling/topn/functions'
    const meta: TransportRequestMetadata = {
      name: 'profiling.topn_functions'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
