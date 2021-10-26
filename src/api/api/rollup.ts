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

export default class Rollup {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  async deleteJob (this: That, params: T.RollupDeleteJobRequest | TB.RollupDeleteJobRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RollupDeleteJobResponse>
  async deleteJob (this: That, params: T.RollupDeleteJobRequest | TB.RollupDeleteJobRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RollupDeleteJobResponse, unknown>>
  async deleteJob (this: That, params: T.RollupDeleteJobRequest | TB.RollupDeleteJobRequest, options?: TransportRequestOptions): Promise<T.RollupDeleteJobResponse>
  async deleteJob (this: That, params: T.RollupDeleteJobRequest | TB.RollupDeleteJobRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = `/_rollup/job/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async getJobs (this: That, params?: T.RollupGetJobsRequest | TB.RollupGetJobsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RollupGetJobsResponse>
  async getJobs (this: That, params?: T.RollupGetJobsRequest | TB.RollupGetJobsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RollupGetJobsResponse, unknown>>
  async getJobs (this: That, params?: T.RollupGetJobsRequest | TB.RollupGetJobsRequest, options?: TransportRequestOptions): Promise<T.RollupGetJobsResponse>
  async getJobs (this: That, params?: T.RollupGetJobsRequest | TB.RollupGetJobsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.id != null) {
      method = 'GET'
      path = `/_rollup/job/${encodeURIComponent(params.id.toString())}`
    } else {
      method = 'GET'
      path = '/_rollup/job/'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async getRollupCaps (this: That, params?: T.RollupGetRollupCapsRequest | TB.RollupGetRollupCapsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RollupGetRollupCapsResponse>
  async getRollupCaps (this: That, params?: T.RollupGetRollupCapsRequest | TB.RollupGetRollupCapsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RollupGetRollupCapsResponse, unknown>>
  async getRollupCaps (this: That, params?: T.RollupGetRollupCapsRequest | TB.RollupGetRollupCapsRequest, options?: TransportRequestOptions): Promise<T.RollupGetRollupCapsResponse>
  async getRollupCaps (this: That, params?: T.RollupGetRollupCapsRequest | TB.RollupGetRollupCapsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.id != null) {
      method = 'GET'
      path = `/_rollup/data/${encodeURIComponent(params.id.toString())}`
    } else {
      method = 'GET'
      path = '/_rollup/data/'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async getRollupIndexCaps (this: That, params: T.RollupGetRollupIndexCapsRequest | TB.RollupGetRollupIndexCapsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RollupGetRollupIndexCapsResponse>
  async getRollupIndexCaps (this: That, params: T.RollupGetRollupIndexCapsRequest | TB.RollupGetRollupIndexCapsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RollupGetRollupIndexCapsResponse, unknown>>
  async getRollupIndexCaps (this: That, params: T.RollupGetRollupIndexCapsRequest | TB.RollupGetRollupIndexCapsRequest, options?: TransportRequestOptions): Promise<T.RollupGetRollupIndexCapsResponse>
  async getRollupIndexCaps (this: That, params: T.RollupGetRollupIndexCapsRequest | TB.RollupGetRollupIndexCapsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
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
    const path = `/${encodeURIComponent(params.index.toString())}/_rollup/data`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async putJob (this: That, params: T.RollupPutJobRequest | TB.RollupPutJobRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RollupPutJobResponse>
  async putJob (this: That, params: T.RollupPutJobRequest | TB.RollupPutJobRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RollupPutJobResponse, unknown>>
  async putJob (this: That, params: T.RollupPutJobRequest | TB.RollupPutJobRequest, options?: TransportRequestOptions): Promise<T.RollupPutJobResponse>
  async putJob (this: That, params: T.RollupPutJobRequest | TB.RollupPutJobRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const acceptedBody: string[] = ['cron', 'groups', 'index_pattern', 'metrics', 'page_size', 'rollup_index']
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

    const method = 'PUT'
    const path = `/_rollup/job/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async rollup (this: That, params: T.RollupRollupRequest | TB.RollupRollupRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RollupRollupResponse>
  async rollup (this: That, params: T.RollupRollupRequest | TB.RollupRollupRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RollupRollupResponse, unknown>>
  async rollup (this: That, params: T.RollupRollupRequest | TB.RollupRollupRequest, options?: TransportRequestOptions): Promise<T.RollupRollupResponse>
  async rollup (this: That, params: T.RollupRollupRequest | TB.RollupRollupRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index', 'rollup_index']
    const acceptedBody: string[] = ['config']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    const userBody: any = params?.body
    let body: any = userBody ?? undefined

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = `/${encodeURIComponent(params.index.toString())}/_rollup/${encodeURIComponent(params.rollup_index.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async rollupSearch<TDocument = unknown> (this: That, params: T.RollupRollupSearchRequest | TB.RollupRollupSearchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RollupRollupSearchResponse<TDocument>>
  async rollupSearch<TDocument = unknown> (this: That, params: T.RollupRollupSearchRequest | TB.RollupRollupSearchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RollupRollupSearchResponse<TDocument>, unknown>>
  async rollupSearch<TDocument = unknown> (this: That, params: T.RollupRollupSearchRequest | TB.RollupRollupSearchRequest, options?: TransportRequestOptions): Promise<T.RollupRollupSearchResponse<TDocument>>
  async rollupSearch<TDocument = unknown> (this: That, params: T.RollupRollupSearchRequest | TB.RollupRollupSearchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index', 'type']
    const acceptedBody: string[] = ['aggs', 'query', 'size']
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

    const method = body != null ? 'POST' : 'GET'
    const path = `/${encodeURIComponent(params.index.toString())}/_rollup_search`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async startJob (this: That, params: T.RollupStartJobRequest | TB.RollupStartJobRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RollupStartJobResponse>
  async startJob (this: That, params: T.RollupStartJobRequest | TB.RollupStartJobRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RollupStartJobResponse, unknown>>
  async startJob (this: That, params: T.RollupStartJobRequest | TB.RollupStartJobRequest, options?: TransportRequestOptions): Promise<T.RollupStartJobResponse>
  async startJob (this: That, params: T.RollupStartJobRequest | TB.RollupStartJobRequest, options?: TransportRequestOptions): Promise<any> {
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

    const method = 'POST'
    const path = `/_rollup/job/${encodeURIComponent(params.id.toString())}/_start`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async stopJob (this: That, params: T.RollupStopJobRequest | TB.RollupStopJobRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RollupStopJobResponse>
  async stopJob (this: That, params: T.RollupStopJobRequest | TB.RollupStopJobRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RollupStopJobResponse, unknown>>
  async stopJob (this: That, params: T.RollupStopJobRequest | TB.RollupStopJobRequest, options?: TransportRequestOptions): Promise<T.RollupStopJobResponse>
  async stopJob (this: That, params: T.RollupStopJobRequest | TB.RollupStopJobRequest, options?: TransportRequestOptions): Promise<any> {
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

    const method = 'POST'
    const path = `/_rollup/job/${encodeURIComponent(params.id.toString())}/_stop`
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}
