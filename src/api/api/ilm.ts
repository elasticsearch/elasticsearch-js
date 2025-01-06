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

export default class Ilm {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Delete a lifecycle policy. You cannot delete policies that are currently in use. If the policy is being used to manage any indices, the request fails and returns an error.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.17/ilm-delete-lifecycle.html | Elasticsearch API documentation}
    */
  async deleteLifecycle (this: That, params: T.IlmDeleteLifecycleRequest | TB.IlmDeleteLifecycleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IlmDeleteLifecycleResponse>
  async deleteLifecycle (this: That, params: T.IlmDeleteLifecycleRequest | TB.IlmDeleteLifecycleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IlmDeleteLifecycleResponse, unknown>>
  async deleteLifecycle (this: That, params: T.IlmDeleteLifecycleRequest | TB.IlmDeleteLifecycleRequest, options?: TransportRequestOptions): Promise<T.IlmDeleteLifecycleResponse>
  async deleteLifecycle (this: That, params: T.IlmDeleteLifecycleRequest | TB.IlmDeleteLifecycleRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = `/_ilm/policy/${encodeURIComponent(params.name.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'ilm.delete_lifecycle',
      pathParts: {
        name: params.name
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Explain the lifecycle state. Get the current lifecycle status for one or more indices. For data streams, the API retrieves the current lifecycle status for the stream's backing indices. The response indicates when the index entered each lifecycle state, provides the definition of the running phase, and information about any failures.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.17/ilm-explain-lifecycle.html | Elasticsearch API documentation}
    */
  async explainLifecycle (this: That, params: T.IlmExplainLifecycleRequest | TB.IlmExplainLifecycleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IlmExplainLifecycleResponse>
  async explainLifecycle (this: That, params: T.IlmExplainLifecycleRequest | TB.IlmExplainLifecycleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IlmExplainLifecycleResponse, unknown>>
  async explainLifecycle (this: That, params: T.IlmExplainLifecycleRequest | TB.IlmExplainLifecycleRequest, options?: TransportRequestOptions): Promise<T.IlmExplainLifecycleResponse>
  async explainLifecycle (this: That, params: T.IlmExplainLifecycleRequest | TB.IlmExplainLifecycleRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = `/${encodeURIComponent(params.index.toString())}/_ilm/explain`
    const meta: TransportRequestMetadata = {
      name: 'ilm.explain_lifecycle',
      pathParts: {
        index: params.index
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get lifecycle policies.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.17/ilm-get-lifecycle.html | Elasticsearch API documentation}
    */
  async getLifecycle (this: That, params?: T.IlmGetLifecycleRequest | TB.IlmGetLifecycleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IlmGetLifecycleResponse>
  async getLifecycle (this: That, params?: T.IlmGetLifecycleRequest | TB.IlmGetLifecycleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IlmGetLifecycleResponse, unknown>>
  async getLifecycle (this: That, params?: T.IlmGetLifecycleRequest | TB.IlmGetLifecycleRequest, options?: TransportRequestOptions): Promise<T.IlmGetLifecycleResponse>
  async getLifecycle (this: That, params?: T.IlmGetLifecycleRequest | TB.IlmGetLifecycleRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
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
    if (params.name != null) {
      method = 'GET'
      path = `/_ilm/policy/${encodeURIComponent(params.name.toString())}`
    } else {
      method = 'GET'
      path = '/_ilm/policy'
    }
    const meta: TransportRequestMetadata = {
      name: 'ilm.get_lifecycle',
      pathParts: {
        name: params.name
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get the ILM status. Get the current index lifecycle management status.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.17/ilm-get-status.html | Elasticsearch API documentation}
    */
  async getStatus (this: That, params?: T.IlmGetStatusRequest | TB.IlmGetStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IlmGetStatusResponse>
  async getStatus (this: That, params?: T.IlmGetStatusRequest | TB.IlmGetStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IlmGetStatusResponse, unknown>>
  async getStatus (this: That, params?: T.IlmGetStatusRequest | TB.IlmGetStatusRequest, options?: TransportRequestOptions): Promise<T.IlmGetStatusResponse>
  async getStatus (this: That, params?: T.IlmGetStatusRequest | TB.IlmGetStatusRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = '/_ilm/status'
    const meta: TransportRequestMetadata = {
      name: 'ilm.get_status'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Migrate to data tiers routing. Switch the indices, ILM policies, and legacy, composable, and component templates from using custom node attributes and attribute-based allocation filters to using data tiers. Optionally, delete one legacy index template. Using node roles enables ILM to automatically move the indices between data tiers. Migrating away from custom node attributes routing can be manually performed. This API provides an automated way of performing three out of the four manual steps listed in the migration guide: 1. Stop setting the custom hot attribute on new indices. 1. Remove custom allocation settings from existing ILM policies. 1. Replace custom allocation settings from existing indices with the corresponding tier preference. ILM must be stopped before performing the migration. Use the stop ILM and get ILM status APIs to wait until the reported operation mode is `STOPPED`.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.17/ilm-migrate-to-data-tiers.html | Elasticsearch API documentation}
    */
  async migrateToDataTiers (this: That, params?: T.IlmMigrateToDataTiersRequest | TB.IlmMigrateToDataTiersRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IlmMigrateToDataTiersResponse>
  async migrateToDataTiers (this: That, params?: T.IlmMigrateToDataTiersRequest | TB.IlmMigrateToDataTiersRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IlmMigrateToDataTiersResponse, unknown>>
  async migrateToDataTiers (this: That, params?: T.IlmMigrateToDataTiersRequest | TB.IlmMigrateToDataTiersRequest, options?: TransportRequestOptions): Promise<T.IlmMigrateToDataTiersResponse>
  async migrateToDataTiers (this: That, params?: T.IlmMigrateToDataTiersRequest | TB.IlmMigrateToDataTiersRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = ['legacy_template_to_delete', 'node_attribute']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    const userBody: any = params?.body
    let body: Record<string, any> | string
    if (typeof userBody === 'string') {
      body = userBody
    } else {
      body = userBody != null ? { ...userBody } : undefined
    }

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

    const method = 'POST'
    const path = '/_ilm/migrate_to_data_tiers'
    const meta: TransportRequestMetadata = {
      name: 'ilm.migrate_to_data_tiers'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Move to a lifecycle step. Manually move an index into a specific step in the lifecycle policy and run that step. WARNING: This operation can result in the loss of data. Manually moving an index into a specific step runs that step even if it has already been performed. This is a potentially destructive action and this should be considered an expert level API. You must specify both the current step and the step to be executed in the body of the request. The request will fail if the current step does not match the step currently running for the index This is to prevent the index from being moved from an unexpected step into the next step. When specifying the target (`next_step`) to which the index will be moved, either the name or both the action and name fields are optional. If only the phase is specified, the index will move to the first step of the first action in the target phase. If the phase and action are specified, the index will move to the first step of the specified action in the specified phase. Only actions specified in the ILM policy are considered valid. An index cannot move to a step that is not part of its policy.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.17/ilm-move-to-step.html | Elasticsearch API documentation}
    */
  async moveToStep (this: That, params: T.IlmMoveToStepRequest | TB.IlmMoveToStepRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IlmMoveToStepResponse>
  async moveToStep (this: That, params: T.IlmMoveToStepRequest | TB.IlmMoveToStepRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IlmMoveToStepResponse, unknown>>
  async moveToStep (this: That, params: T.IlmMoveToStepRequest | TB.IlmMoveToStepRequest, options?: TransportRequestOptions): Promise<T.IlmMoveToStepResponse>
  async moveToStep (this: That, params: T.IlmMoveToStepRequest | TB.IlmMoveToStepRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const acceptedBody: string[] = ['current_step', 'next_step']
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

    const method = 'POST'
    const path = `/_ilm/move/${encodeURIComponent(params.index.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'ilm.move_to_step',
      pathParts: {
        index: params.index
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Create or update a lifecycle policy. If the specified policy exists, it is replaced and the policy version is incremented. NOTE: Only the latest version of the policy is stored, you cannot revert to previous versions.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.17/ilm-put-lifecycle.html | Elasticsearch API documentation}
    */
  async putLifecycle (this: That, params: T.IlmPutLifecycleRequest | TB.IlmPutLifecycleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IlmPutLifecycleResponse>
  async putLifecycle (this: That, params: T.IlmPutLifecycleRequest | TB.IlmPutLifecycleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IlmPutLifecycleResponse, unknown>>
  async putLifecycle (this: That, params: T.IlmPutLifecycleRequest | TB.IlmPutLifecycleRequest, options?: TransportRequestOptions): Promise<T.IlmPutLifecycleResponse>
  async putLifecycle (this: That, params: T.IlmPutLifecycleRequest | TB.IlmPutLifecycleRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const acceptedBody: string[] = ['policy']
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
    const path = `/_ilm/policy/${encodeURIComponent(params.name.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'ilm.put_lifecycle',
      pathParts: {
        name: params.name
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Remove policies from an index. Remove the assigned lifecycle policies from an index or a data stream's backing indices. It also stops managing the indices.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.17/ilm-remove-policy.html | Elasticsearch API documentation}
    */
  async removePolicy (this: That, params: T.IlmRemovePolicyRequest | TB.IlmRemovePolicyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IlmRemovePolicyResponse>
  async removePolicy (this: That, params: T.IlmRemovePolicyRequest | TB.IlmRemovePolicyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IlmRemovePolicyResponse, unknown>>
  async removePolicy (this: That, params: T.IlmRemovePolicyRequest | TB.IlmRemovePolicyRequest, options?: TransportRequestOptions): Promise<T.IlmRemovePolicyResponse>
  async removePolicy (this: That, params: T.IlmRemovePolicyRequest | TB.IlmRemovePolicyRequest, options?: TransportRequestOptions): Promise<any> {
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

    const method = 'POST'
    const path = `/${encodeURIComponent(params.index.toString())}/_ilm/remove`
    const meta: TransportRequestMetadata = {
      name: 'ilm.remove_policy',
      pathParts: {
        index: params.index
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Retry a policy. Retry running the lifecycle policy for an index that is in the ERROR step. The API sets the policy back to the step where the error occurred and runs the step. Use the explain lifecycle state API to determine whether an index is in the ERROR step.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.17/ilm-retry-policy.html | Elasticsearch API documentation}
    */
  async retry (this: That, params: T.IlmRetryRequest | TB.IlmRetryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IlmRetryResponse>
  async retry (this: That, params: T.IlmRetryRequest | TB.IlmRetryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IlmRetryResponse, unknown>>
  async retry (this: That, params: T.IlmRetryRequest | TB.IlmRetryRequest, options?: TransportRequestOptions): Promise<T.IlmRetryResponse>
  async retry (this: That, params: T.IlmRetryRequest | TB.IlmRetryRequest, options?: TransportRequestOptions): Promise<any> {
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

    const method = 'POST'
    const path = `/${encodeURIComponent(params.index.toString())}/_ilm/retry`
    const meta: TransportRequestMetadata = {
      name: 'ilm.retry',
      pathParts: {
        index: params.index
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Start the ILM plugin. Start the index lifecycle management plugin if it is currently stopped. ILM is started automatically when the cluster is formed. Restarting ILM is necessary only when it has been stopped using the stop ILM API.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.17/ilm-start.html | Elasticsearch API documentation}
    */
  async start (this: That, params?: T.IlmStartRequest | TB.IlmStartRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IlmStartResponse>
  async start (this: That, params?: T.IlmStartRequest | TB.IlmStartRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IlmStartResponse, unknown>>
  async start (this: That, params?: T.IlmStartRequest | TB.IlmStartRequest, options?: TransportRequestOptions): Promise<T.IlmStartResponse>
  async start (this: That, params?: T.IlmStartRequest | TB.IlmStartRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = '/_ilm/start'
    const meta: TransportRequestMetadata = {
      name: 'ilm.start'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Stop the ILM plugin. Halt all lifecycle management operations and stop the index lifecycle management plugin. This is useful when you are performing maintenance on the cluster and need to prevent ILM from performing any actions on your indices. The API returns as soon as the stop request has been acknowledged, but the plugin might continue to run until in-progress operations complete and the plugin can be safely stopped. Use the get ILM status API to check whether ILM is running.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.17/ilm-stop.html | Elasticsearch API documentation}
    */
  async stop (this: That, params?: T.IlmStopRequest | TB.IlmStopRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IlmStopResponse>
  async stop (this: That, params?: T.IlmStopRequest | TB.IlmStopRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IlmStopResponse, unknown>>
  async stop (this: That, params?: T.IlmStopRequest | TB.IlmStopRequest, options?: TransportRequestOptions): Promise<T.IlmStopResponse>
  async stop (this: That, params?: T.IlmStopRequest | TB.IlmStopRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = '/_ilm/stop'
    const meta: TransportRequestMetadata = {
      name: 'ilm.stop'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
