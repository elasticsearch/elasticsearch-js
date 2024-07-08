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

export default class Autoscaling {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Deletes an autoscaling policy. Designed for indirect use by ECE/ESS and ECK. Direct use is not supported.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.14/autoscaling-delete-autoscaling-policy.html | Elasticsearch API documentation}
    */
  async deleteAutoscalingPolicy (this: That, params: T.AutoscalingDeleteAutoscalingPolicyRequest | TB.AutoscalingDeleteAutoscalingPolicyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.AutoscalingDeleteAutoscalingPolicyResponse>
  async deleteAutoscalingPolicy (this: That, params: T.AutoscalingDeleteAutoscalingPolicyRequest | TB.AutoscalingDeleteAutoscalingPolicyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.AutoscalingDeleteAutoscalingPolicyResponse, unknown>>
  async deleteAutoscalingPolicy (this: That, params: T.AutoscalingDeleteAutoscalingPolicyRequest | TB.AutoscalingDeleteAutoscalingPolicyRequest, options?: TransportRequestOptions): Promise<T.AutoscalingDeleteAutoscalingPolicyResponse>
  async deleteAutoscalingPolicy (this: That, params: T.AutoscalingDeleteAutoscalingPolicyRequest | TB.AutoscalingDeleteAutoscalingPolicyRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
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
    const path = `/_autoscaling/policy/${encodeURIComponent(params.name.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'autoscaling.delete_autoscaling_policy',
      pathParts: {
        name: params.name
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Gets the current autoscaling capacity based on the configured autoscaling policy. Designed for indirect use by ECE/ESS and ECK. Direct use is not supported.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.14/autoscaling-get-autoscaling-capacity.html | Elasticsearch API documentation}
    */
  async getAutoscalingCapacity (this: That, params?: T.AutoscalingGetAutoscalingCapacityRequest | TB.AutoscalingGetAutoscalingCapacityRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.AutoscalingGetAutoscalingCapacityResponse>
  async getAutoscalingCapacity (this: That, params?: T.AutoscalingGetAutoscalingCapacityRequest | TB.AutoscalingGetAutoscalingCapacityRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.AutoscalingGetAutoscalingCapacityResponse, unknown>>
  async getAutoscalingCapacity (this: That, params?: T.AutoscalingGetAutoscalingCapacityRequest | TB.AutoscalingGetAutoscalingCapacityRequest, options?: TransportRequestOptions): Promise<T.AutoscalingGetAutoscalingCapacityResponse>
  async getAutoscalingCapacity (this: That, params?: T.AutoscalingGetAutoscalingCapacityRequest | TB.AutoscalingGetAutoscalingCapacityRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = '/_autoscaling/capacity'
    const meta: TransportRequestMetadata = {
      name: 'autoscaling.get_autoscaling_capacity'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Retrieves an autoscaling policy. Designed for indirect use by ECE/ESS and ECK. Direct use is not supported.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.14/autoscaling-get-autoscaling-capacity.html | Elasticsearch API documentation}
    */
  async getAutoscalingPolicy (this: That, params: T.AutoscalingGetAutoscalingPolicyRequest | TB.AutoscalingGetAutoscalingPolicyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.AutoscalingGetAutoscalingPolicyResponse>
  async getAutoscalingPolicy (this: That, params: T.AutoscalingGetAutoscalingPolicyRequest | TB.AutoscalingGetAutoscalingPolicyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.AutoscalingGetAutoscalingPolicyResponse, unknown>>
  async getAutoscalingPolicy (this: That, params: T.AutoscalingGetAutoscalingPolicyRequest | TB.AutoscalingGetAutoscalingPolicyRequest, options?: TransportRequestOptions): Promise<T.AutoscalingGetAutoscalingPolicyResponse>
  async getAutoscalingPolicy (this: That, params: T.AutoscalingGetAutoscalingPolicyRequest | TB.AutoscalingGetAutoscalingPolicyRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
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
    const path = `/_autoscaling/policy/${encodeURIComponent(params.name.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'autoscaling.get_autoscaling_policy',
      pathParts: {
        name: params.name
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Creates a new autoscaling policy. Designed for indirect use by ECE/ESS and ECK. Direct use is not supported.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.14/autoscaling-put-autoscaling-policy.html | Elasticsearch API documentation}
    */
  async putAutoscalingPolicy (this: That, params: T.AutoscalingPutAutoscalingPolicyRequest | TB.AutoscalingPutAutoscalingPolicyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.AutoscalingPutAutoscalingPolicyResponse>
  async putAutoscalingPolicy (this: That, params: T.AutoscalingPutAutoscalingPolicyRequest | TB.AutoscalingPutAutoscalingPolicyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.AutoscalingPutAutoscalingPolicyResponse, unknown>>
  async putAutoscalingPolicy (this: That, params: T.AutoscalingPutAutoscalingPolicyRequest | TB.AutoscalingPutAutoscalingPolicyRequest, options?: TransportRequestOptions): Promise<T.AutoscalingPutAutoscalingPolicyResponse>
  async putAutoscalingPolicy (this: That, params: T.AutoscalingPutAutoscalingPolicyRequest | TB.AutoscalingPutAutoscalingPolicyRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const acceptedBody: string[] = ['policy']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    let body: any = params.body ?? undefined

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

    const method = 'PUT'
    const path = `/_autoscaling/policy/${encodeURIComponent(params.name.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'autoscaling.put_autoscaling_policy',
      pathParts: {
        name: params.name
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
