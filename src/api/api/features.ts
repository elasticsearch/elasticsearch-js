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

export default class Features {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Gets a list of features which can be included in snapshots using the feature_states field when creating a snapshot
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.15/get-features-api.html | Elasticsearch API documentation}
    */
  async getFeatures (this: That, params?: T.FeaturesGetFeaturesRequest | TB.FeaturesGetFeaturesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.FeaturesGetFeaturesResponse>
  async getFeatures (this: That, params?: T.FeaturesGetFeaturesRequest | TB.FeaturesGetFeaturesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.FeaturesGetFeaturesResponse, unknown>>
  async getFeatures (this: That, params?: T.FeaturesGetFeaturesRequest | TB.FeaturesGetFeaturesRequest, options?: TransportRequestOptions): Promise<T.FeaturesGetFeaturesResponse>
  async getFeatures (this: That, params?: T.FeaturesGetFeaturesRequest | TB.FeaturesGetFeaturesRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = '/_features'
    const meta: TransportRequestMetadata = {
      name: 'features.get_features'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Resets the internal state of features, usually by deleting system indices
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.15/modules-snapshots.html | Elasticsearch API documentation}
    */
  async resetFeatures (this: That, params?: T.FeaturesResetFeaturesRequest | TB.FeaturesResetFeaturesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.FeaturesResetFeaturesResponse>
  async resetFeatures (this: That, params?: T.FeaturesResetFeaturesRequest | TB.FeaturesResetFeaturesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.FeaturesResetFeaturesResponse, unknown>>
  async resetFeatures (this: That, params?: T.FeaturesResetFeaturesRequest | TB.FeaturesResetFeaturesRequest, options?: TransportRequestOptions): Promise<T.FeaturesResetFeaturesResponse>
  async resetFeatures (this: That, params?: T.FeaturesResetFeaturesRequest | TB.FeaturesResetFeaturesRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = '/_features/_reset'
    const meta: TransportRequestMetadata = {
      name: 'features.reset_features'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
