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

export default class Slm {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Delete a policy. Delete a snapshot lifecycle policy definition. This operation prevents any future snapshots from being taken but does not cancel in-progress snapshots or remove previously-taken snapshots.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-slm-delete-lifecycle | Elasticsearch API documentation}
    */
  async deleteLifecycle (this: That, params: T.SlmDeleteLifecycleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmDeleteLifecycleResponse>
  async deleteLifecycle (this: That, params: T.SlmDeleteLifecycleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmDeleteLifecycleResponse, unknown>>
  async deleteLifecycle (this: That, params: T.SlmDeleteLifecycleRequest, options?: TransportRequestOptions): Promise<T.SlmDeleteLifecycleResponse>
  async deleteLifecycle (this: That, params: T.SlmDeleteLifecycleRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['policy_id']
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

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body' && key !== 'querystring') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_slm/policy/${encodeURIComponent(params.policy_id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'slm.delete_lifecycle',
      pathParts: {
        policy_id: params.policy_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Run a policy. Immediately create a snapshot according to the snapshot lifecycle policy without waiting for the scheduled time. The snapshot policy is normally applied according to its schedule, but you might want to manually run a policy before performing an upgrade or other maintenance.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-slm-execute-lifecycle | Elasticsearch API documentation}
    */
  async executeLifecycle (this: That, params: T.SlmExecuteLifecycleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmExecuteLifecycleResponse>
  async executeLifecycle (this: That, params: T.SlmExecuteLifecycleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmExecuteLifecycleResponse, unknown>>
  async executeLifecycle (this: That, params: T.SlmExecuteLifecycleRequest, options?: TransportRequestOptions): Promise<T.SlmExecuteLifecycleResponse>
  async executeLifecycle (this: That, params: T.SlmExecuteLifecycleRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['policy_id']
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

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body' && key !== 'querystring') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = `/_slm/policy/${encodeURIComponent(params.policy_id.toString())}/_execute`
    const meta: TransportRequestMetadata = {
      name: 'slm.execute_lifecycle',
      pathParts: {
        policy_id: params.policy_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Run a retention policy. Manually apply the retention policy to force immediate removal of snapshots that are expired according to the snapshot lifecycle policy retention rules. The retention policy is normally applied according to its schedule.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-slm-execute-retention | Elasticsearch API documentation}
    */
  async executeRetention (this: That, params?: T.SlmExecuteRetentionRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmExecuteRetentionResponse>
  async executeRetention (this: That, params?: T.SlmExecuteRetentionRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmExecuteRetentionResponse, unknown>>
  async executeRetention (this: That, params?: T.SlmExecuteRetentionRequest, options?: TransportRequestOptions): Promise<T.SlmExecuteRetentionResponse>
  async executeRetention (this: That, params?: T.SlmExecuteRetentionRequest, options?: TransportRequestOptions): Promise<any> {
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
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = '/_slm/_execute_retention'
    const meta: TransportRequestMetadata = {
      name: 'slm.execute_retention'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get policy information. Get snapshot lifecycle policy definitions and information about the latest snapshot attempts.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-slm-get-lifecycle | Elasticsearch API documentation}
    */
  async getLifecycle (this: That, params?: T.SlmGetLifecycleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmGetLifecycleResponse>
  async getLifecycle (this: That, params?: T.SlmGetLifecycleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmGetLifecycleResponse, unknown>>
  async getLifecycle (this: That, params?: T.SlmGetLifecycleRequest, options?: TransportRequestOptions): Promise<T.SlmGetLifecycleResponse>
  async getLifecycle (this: That, params?: T.SlmGetLifecycleRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['policy_id']
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
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.policy_id != null) {
      method = 'GET'
      path = `/_slm/policy/${encodeURIComponent(params.policy_id.toString())}`
    } else {
      method = 'GET'
      path = '/_slm/policy'
    }
    const meta: TransportRequestMetadata = {
      name: 'slm.get_lifecycle',
      pathParts: {
        policy_id: params.policy_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get snapshot lifecycle management statistics. Get global and policy-level statistics about actions taken by snapshot lifecycle management.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-slm-get-stats | Elasticsearch API documentation}
    */
  async getStats (this: That, params?: T.SlmGetStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmGetStatsResponse>
  async getStats (this: That, params?: T.SlmGetStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmGetStatsResponse, unknown>>
  async getStats (this: That, params?: T.SlmGetStatsRequest, options?: TransportRequestOptions): Promise<T.SlmGetStatsResponse>
  async getStats (this: That, params?: T.SlmGetStatsRequest, options?: TransportRequestOptions): Promise<any> {
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
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_slm/stats'
    const meta: TransportRequestMetadata = {
      name: 'slm.get_stats'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get the snapshot lifecycle management status.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-slm-get-status | Elasticsearch API documentation}
    */
  async getStatus (this: That, params?: T.SlmGetStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmGetStatusResponse>
  async getStatus (this: That, params?: T.SlmGetStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmGetStatusResponse, unknown>>
  async getStatus (this: That, params?: T.SlmGetStatusRequest, options?: TransportRequestOptions): Promise<T.SlmGetStatusResponse>
  async getStatus (this: That, params?: T.SlmGetStatusRequest, options?: TransportRequestOptions): Promise<any> {
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
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_slm/status'
    const meta: TransportRequestMetadata = {
      name: 'slm.get_status'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Create or update a policy. Create or update a snapshot lifecycle policy. If the policy already exists, this request increments the policy version. Only the latest version of a policy is stored.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-slm-put-lifecycle | Elasticsearch API documentation}
    */
  async putLifecycle (this: That, params: T.SlmPutLifecycleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmPutLifecycleResponse>
  async putLifecycle (this: That, params: T.SlmPutLifecycleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmPutLifecycleResponse, unknown>>
  async putLifecycle (this: That, params: T.SlmPutLifecycleRequest, options?: TransportRequestOptions): Promise<T.SlmPutLifecycleResponse>
  async putLifecycle (this: That, params: T.SlmPutLifecycleRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['policy_id']
    const acceptedBody: string[] = ['config', 'name', 'repository', 'retention', 'schedule']
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

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        body = body ?? {}
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body' && key !== 'querystring') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = `/_slm/policy/${encodeURIComponent(params.policy_id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'slm.put_lifecycle',
      pathParts: {
        policy_id: params.policy_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Start snapshot lifecycle management. Snapshot lifecycle management (SLM) starts automatically when a cluster is formed. Manually starting SLM is necessary only if it has been stopped using the stop SLM API.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-slm-start | Elasticsearch API documentation}
    */
  async start (this: That, params?: T.SlmStartRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmStartResponse>
  async start (this: That, params?: T.SlmStartRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmStartResponse, unknown>>
  async start (this: That, params?: T.SlmStartRequest, options?: TransportRequestOptions): Promise<T.SlmStartResponse>
  async start (this: That, params?: T.SlmStartRequest, options?: TransportRequestOptions): Promise<any> {
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
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = '/_slm/start'
    const meta: TransportRequestMetadata = {
      name: 'slm.start'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Stop snapshot lifecycle management. Stop all snapshot lifecycle management (SLM) operations and the SLM plugin. This API is useful when you are performing maintenance on a cluster and need to prevent SLM from performing any actions on your data streams or indices. Stopping SLM does not stop any snapshots that are in progress. You can manually trigger snapshots with the run snapshot lifecycle policy API even if SLM is stopped. The API returns a response as soon as the request is acknowledged, but the plugin might continue to run until in-progress operations complete and it can be safely stopped. Use the get snapshot lifecycle management status API to see if SLM is running.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-slm-stop | Elasticsearch API documentation}
    */
  async stop (this: That, params?: T.SlmStopRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmStopResponse>
  async stop (this: That, params?: T.SlmStopRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmStopResponse, unknown>>
  async stop (this: That, params?: T.SlmStopRequest, options?: TransportRequestOptions): Promise<T.SlmStopResponse>
  async stop (this: That, params?: T.SlmStopRequest, options?: TransportRequestOptions): Promise<any> {
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
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = '/_slm/stop'
    const meta: TransportRequestMetadata = {
      name: 'slm.stop'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
