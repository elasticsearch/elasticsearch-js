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

export default class Xpack {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Get information. The information provided by the API includes: * Build information including the build number and timestamp. * License information about the currently installed license. * Feature information for the features that are currently enabled and available under the current license.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/info-api.html | Elasticsearch API documentation}
    */
  async info (this: That, params?: T.XpackInfoRequest | TB.XpackInfoRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.XpackInfoResponse>
  async info (this: That, params?: T.XpackInfoRequest | TB.XpackInfoRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.XpackInfoResponse, unknown>>
  async info (this: That, params?: T.XpackInfoRequest | TB.XpackInfoRequest, options?: TransportRequestOptions): Promise<T.XpackInfoResponse>
  async info (this: That, params?: T.XpackInfoRequest | TB.XpackInfoRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = '/_xpack'
    const meta: TransportRequestMetadata = {
      name: 'xpack.info'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get usage information. Get information about the features that are currently enabled and available under the current license. The API also provides some usage statistics.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/usage-api.html | Elasticsearch API documentation}
    */
  async usage (this: That, params?: T.XpackUsageRequest | TB.XpackUsageRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.XpackUsageResponse>
  async usage (this: That, params?: T.XpackUsageRequest | TB.XpackUsageRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.XpackUsageResponse, unknown>>
  async usage (this: That, params?: T.XpackUsageRequest | TB.XpackUsageRequest, options?: TransportRequestOptions): Promise<T.XpackUsageResponse>
  async usage (this: That, params?: T.XpackUsageRequest | TB.XpackUsageRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = '/_xpack/usage'
    const meta: TransportRequestMetadata = {
      name: 'xpack.usage'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
