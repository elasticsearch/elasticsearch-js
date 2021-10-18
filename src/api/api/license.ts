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

export default class License {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  async delete (this: That, params?: T.LicenseDeleteRequest | TB.LicenseDeleteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicenseDeleteResponse>
  async delete (this: That, params?: T.LicenseDeleteRequest | TB.LicenseDeleteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicenseDeleteResponse, unknown>>
  async delete (this: That, params?: T.LicenseDeleteRequest | TB.LicenseDeleteRequest, options?: TransportRequestOptions): Promise<T.LicenseDeleteResponse>
  async delete (this: That, params?: T.LicenseDeleteRequest | TB.LicenseDeleteRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
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

    const method = 'DELETE'
    const path = '/_license'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async get (this: That, params?: T.LicenseGetRequest | TB.LicenseGetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicenseGetResponse>
  async get (this: That, params?: T.LicenseGetRequest | TB.LicenseGetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicenseGetResponse, unknown>>
  async get (this: That, params?: T.LicenseGetRequest | TB.LicenseGetRequest, options?: TransportRequestOptions): Promise<T.LicenseGetResponse>
  async get (this: That, params?: T.LicenseGetRequest | TB.LicenseGetRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
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

    const method = 'GET'
    const path = '/_license'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async getBasicStatus (this: That, params?: T.LicenseGetBasicStatusRequest | TB.LicenseGetBasicStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicenseGetBasicStatusResponse>
  async getBasicStatus (this: That, params?: T.LicenseGetBasicStatusRequest | TB.LicenseGetBasicStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicenseGetBasicStatusResponse, unknown>>
  async getBasicStatus (this: That, params?: T.LicenseGetBasicStatusRequest | TB.LicenseGetBasicStatusRequest, options?: TransportRequestOptions): Promise<T.LicenseGetBasicStatusResponse>
  async getBasicStatus (this: That, params?: T.LicenseGetBasicStatusRequest | TB.LicenseGetBasicStatusRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
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

    const method = 'GET'
    const path = '/_license/basic_status'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async getTrialStatus (this: That, params?: T.LicenseGetTrialStatusRequest | TB.LicenseGetTrialStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicenseGetTrialStatusResponse>
  async getTrialStatus (this: That, params?: T.LicenseGetTrialStatusRequest | TB.LicenseGetTrialStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicenseGetTrialStatusResponse, unknown>>
  async getTrialStatus (this: That, params?: T.LicenseGetTrialStatusRequest | TB.LicenseGetTrialStatusRequest, options?: TransportRequestOptions): Promise<T.LicenseGetTrialStatusResponse>
  async getTrialStatus (this: That, params?: T.LicenseGetTrialStatusRequest | TB.LicenseGetTrialStatusRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
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

    const method = 'GET'
    const path = '/_license/trial_status'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async post (this: That, params?: T.LicensePostRequest | TB.LicensePostRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicensePostResponse>
  async post (this: That, params?: T.LicensePostRequest | TB.LicensePostRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicensePostResponse, unknown>>
  async post (this: That, params?: T.LicensePostRequest | TB.LicensePostRequest, options?: TransportRequestOptions): Promise<T.LicensePostResponse>
  async post (this: That, params?: T.LicensePostRequest | TB.LicensePostRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = ['license', 'licenses']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    let body: Record<string, any> = params?.body ?? undefined

    params = params ?? {}
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
    const path = '/_license'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async postStartBasic (this: That, params?: T.LicensePostStartBasicRequest | TB.LicensePostStartBasicRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicensePostStartBasicResponse>
  async postStartBasic (this: That, params?: T.LicensePostStartBasicRequest | TB.LicensePostStartBasicRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicensePostStartBasicResponse, unknown>>
  async postStartBasic (this: That, params?: T.LicensePostStartBasicRequest | TB.LicensePostStartBasicRequest, options?: TransportRequestOptions): Promise<T.LicensePostStartBasicResponse>
  async postStartBasic (this: That, params?: T.LicensePostStartBasicRequest | TB.LicensePostStartBasicRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
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

    const method = 'POST'
    const path = '/_license/start_basic'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async postStartTrial (this: That, params?: T.LicensePostStartTrialRequest | TB.LicensePostStartTrialRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicensePostStartTrialResponse>
  async postStartTrial (this: That, params?: T.LicensePostStartTrialRequest | TB.LicensePostStartTrialRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicensePostStartTrialResponse, unknown>>
  async postStartTrial (this: That, params?: T.LicensePostStartTrialRequest | TB.LicensePostStartTrialRequest, options?: TransportRequestOptions): Promise<T.LicensePostStartTrialResponse>
  async postStartTrial (this: That, params?: T.LicensePostStartTrialRequest | TB.LicensePostStartTrialRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
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

    const method = 'POST'
    const path = '/_license/start_trial'
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}
