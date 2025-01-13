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

export default class Watcher {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Acknowledge a watch. Acknowledging a watch enables you to manually throttle the execution of the watch's actions. The acknowledgement state of an action is stored in the `status.actions.<id>.ack.state` structure. IMPORTANT: If the specified watch is currently being executed, this API will return an error The reason for this behavior is to prevent overwriting the watch status from a watch execution. Acknowledging an action throttles further executions of that action until its `ack.state` is reset to `awaits_successful_execution`. This happens when the condition of the watch is not met (the condition evaluates to false).
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/watcher-api-ack-watch.html | Elasticsearch API documentation}
    */
  async ackWatch (this: That, params: T.WatcherAckWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherAckWatchResponse>
  async ackWatch (this: That, params: T.WatcherAckWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherAckWatchResponse, unknown>>
  async ackWatch (this: That, params: T.WatcherAckWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherAckWatchResponse>
  async ackWatch (this: That, params: T.WatcherAckWatchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['watch_id', 'action_id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.watch_id != null && params.action_id != null) {
      method = 'PUT'
      path = `/_watcher/watch/${encodeURIComponent(params.watch_id.toString())}/_ack/${encodeURIComponent(params.action_id.toString())}`
    } else {
      method = 'PUT'
      path = `/_watcher/watch/${encodeURIComponent(params.watch_id.toString())}/_ack`
    }
    const meta: TransportRequestMetadata = {
      name: 'watcher.ack_watch',
      pathParts: {
        watch_id: params.watch_id,
        action_id: params.action_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Activate a watch. A watch can be either active or inactive.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/watcher-api-activate-watch.html | Elasticsearch API documentation}
    */
  async activateWatch (this: That, params: T.WatcherActivateWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherActivateWatchResponse>
  async activateWatch (this: That, params: T.WatcherActivateWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherActivateWatchResponse, unknown>>
  async activateWatch (this: That, params: T.WatcherActivateWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherActivateWatchResponse>
  async activateWatch (this: That, params: T.WatcherActivateWatchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['watch_id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = `/_watcher/watch/${encodeURIComponent(params.watch_id.toString())}/_activate`
    const meta: TransportRequestMetadata = {
      name: 'watcher.activate_watch',
      pathParts: {
        watch_id: params.watch_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Deactivate a watch. A watch can be either active or inactive.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/watcher-api-deactivate-watch.html | Elasticsearch API documentation}
    */
  async deactivateWatch (this: That, params: T.WatcherDeactivateWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherDeactivateWatchResponse>
  async deactivateWatch (this: That, params: T.WatcherDeactivateWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherDeactivateWatchResponse, unknown>>
  async deactivateWatch (this: That, params: T.WatcherDeactivateWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherDeactivateWatchResponse>
  async deactivateWatch (this: That, params: T.WatcherDeactivateWatchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['watch_id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = `/_watcher/watch/${encodeURIComponent(params.watch_id.toString())}/_deactivate`
    const meta: TransportRequestMetadata = {
      name: 'watcher.deactivate_watch',
      pathParts: {
        watch_id: params.watch_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Delete a watch. When the watch is removed, the document representing the watch in the `.watches` index is gone and it will never be run again. Deleting a watch does not delete any watch execution records related to this watch from the watch history. IMPORTANT: Deleting a watch must be done by using only this API. Do not delete the watch directly from the `.watches` index using the Elasticsearch delete document API When Elasticsearch security features are enabled, make sure no write privileges are granted to anyone for the `.watches` index.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/watcher-api-delete-watch.html | Elasticsearch API documentation}
    */
  async deleteWatch (this: That, params: T.WatcherDeleteWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherDeleteWatchResponse>
  async deleteWatch (this: That, params: T.WatcherDeleteWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherDeleteWatchResponse, unknown>>
  async deleteWatch (this: That, params: T.WatcherDeleteWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherDeleteWatchResponse>
  async deleteWatch (this: That, params: T.WatcherDeleteWatchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_watcher/watch/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'watcher.delete_watch',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Run a watch. This API can be used to force execution of the watch outside of its triggering logic or to simulate the watch execution for debugging purposes. For testing and debugging purposes, you also have fine-grained control on how the watch runs. You can run the watch without running all of its actions or alternatively by simulating them. You can also force execution by ignoring the watch condition and control whether a watch record would be written to the watch history after it runs. You can use the run watch API to run watches that are not yet registered by specifying the watch definition inline. This serves as great tool for testing and debugging your watches prior to adding them to Watcher. When Elasticsearch security features are enabled on your cluster, watches are run with the privileges of the user that stored the watches. If your user is allowed to read index `a`, but not index `b`, then the exact same set of rules will apply during execution of a watch. When using the run watch API, the authorization data of the user that called the API will be used as a base, instead of the information who stored the watch.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/watcher-api-execute-watch.html | Elasticsearch API documentation}
    */
  async executeWatch (this: That, params?: T.WatcherExecuteWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherExecuteWatchResponse>
  async executeWatch (this: That, params?: T.WatcherExecuteWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherExecuteWatchResponse, unknown>>
  async executeWatch (this: That, params?: T.WatcherExecuteWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherExecuteWatchResponse>
  async executeWatch (this: That, params?: T.WatcherExecuteWatchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const acceptedBody: string[] = ['action_modes', 'alternative_input', 'ignore_condition', 'record_execution', 'simulated_actions', 'trigger_data', 'watch']
    const querystring: Record<string, any> = {}
    const body: Record<string, any> = {}

    params = params ?? {}
    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.id != null) {
      method = 'PUT'
      path = `/_watcher/watch/${encodeURIComponent(params.id.toString())}/_execute`
    } else {
      method = 'PUT'
      path = '/_watcher/watch/_execute'
    }
    const meta: TransportRequestMetadata = {
      name: 'watcher.execute_watch',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get Watcher index settings. Get settings for the Watcher internal index (`.watches`). Only a subset of settings are shown, for example `index.auto_expand_replicas` and `index.number_of_replicas`.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/watcher-api-get-settings.html | Elasticsearch API documentation}
    */
  async getSettings (this: That, params?: T.WatcherGetSettingsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherGetSettingsResponse>
  async getSettings (this: That, params?: T.WatcherGetSettingsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherGetSettingsResponse, unknown>>
  async getSettings (this: That, params?: T.WatcherGetSettingsRequest, options?: TransportRequestOptions): Promise<T.WatcherGetSettingsResponse>
  async getSettings (this: That, params?: T.WatcherGetSettingsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_watcher/settings'
    const meta: TransportRequestMetadata = {
      name: 'watcher.get_settings'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get a watch.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/watcher-api-get-watch.html | Elasticsearch API documentation}
    */
  async getWatch (this: That, params: T.WatcherGetWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherGetWatchResponse>
  async getWatch (this: That, params: T.WatcherGetWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherGetWatchResponse, unknown>>
  async getWatch (this: That, params: T.WatcherGetWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherGetWatchResponse>
  async getWatch (this: That, params: T.WatcherGetWatchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = `/_watcher/watch/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'watcher.get_watch',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Create or update a watch. When a watch is registered, a new document that represents the watch is added to the `.watches` index and its trigger is immediately registered with the relevant trigger engine. Typically for the `schedule` trigger, the scheduler is the trigger engine. IMPORTANT: You must use Kibana or this API to create a watch. Do not add a watch directly to the `.watches` index by using the Elasticsearch index API. If Elasticsearch security features are enabled, do not give users write privileges on the `.watches` index. When you add a watch you can also define its initial active state by setting the *active* parameter. When Elasticsearch security features are enabled, your watch can index or search only on indices for which the user that stored the watch has privileges. If the user is able to read index `a`, but not index `b`, the same will apply when the watch runs.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/watcher-api-put-watch.html | Elasticsearch API documentation}
    */
  async putWatch (this: That, params: T.WatcherPutWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherPutWatchResponse>
  async putWatch (this: That, params: T.WatcherPutWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherPutWatchResponse, unknown>>
  async putWatch (this: That, params: T.WatcherPutWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherPutWatchResponse>
  async putWatch (this: That, params: T.WatcherPutWatchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const acceptedBody: string[] = ['actions', 'condition', 'input', 'metadata', 'throttle_period', 'throttle_period_in_millis', 'transform', 'trigger']
    const querystring: Record<string, any> = {}
    const body: Record<string, any> = {}

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = `/_watcher/watch/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'watcher.put_watch',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Query watches. Get all registered watches in a paginated manner and optionally filter watches by a query. Note that only the `_id` and `metadata.*` fields are queryable or sortable.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/watcher-api-query-watches.html | Elasticsearch API documentation}
    */
  async queryWatches (this: That, params?: T.WatcherQueryWatchesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherQueryWatchesResponse>
  async queryWatches (this: That, params?: T.WatcherQueryWatchesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherQueryWatchesResponse, unknown>>
  async queryWatches (this: That, params?: T.WatcherQueryWatchesRequest, options?: TransportRequestOptions): Promise<T.WatcherQueryWatchesResponse>
  async queryWatches (this: That, params?: T.WatcherQueryWatchesRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = ['from', 'size', 'query', 'sort', 'search_after']
    const querystring: Record<string, any> = {}
    const body: Record<string, any> = {}

    params = params ?? {}
    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = body != null ? 'POST' : 'GET'
    const path = '/_watcher/_query/watches'
    const meta: TransportRequestMetadata = {
      name: 'watcher.query_watches'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Start the watch service. Start the Watcher service if it is not already running.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/watcher-api-start.html | Elasticsearch API documentation}
    */
  async start (this: That, params?: T.WatcherStartRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherStartResponse>
  async start (this: That, params?: T.WatcherStartRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherStartResponse, unknown>>
  async start (this: That, params?: T.WatcherStartRequest, options?: TransportRequestOptions): Promise<T.WatcherStartResponse>
  async start (this: That, params?: T.WatcherStartRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = '/_watcher/_start'
    const meta: TransportRequestMetadata = {
      name: 'watcher.start'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get Watcher statistics. This API always returns basic metrics. You retrieve more metrics by using the metric parameter.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/watcher-api-stats.html | Elasticsearch API documentation}
    */
  async stats (this: That, params?: T.WatcherStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherStatsResponse>
  async stats (this: That, params?: T.WatcherStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherStatsResponse, unknown>>
  async stats (this: That, params?: T.WatcherStatsRequest, options?: TransportRequestOptions): Promise<T.WatcherStatsResponse>
  async stats (this: That, params?: T.WatcherStatsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['metric']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.metric != null) {
      method = 'GET'
      path = `/_watcher/stats/${encodeURIComponent(params.metric.toString())}`
    } else {
      method = 'GET'
      path = '/_watcher/stats'
    }
    const meta: TransportRequestMetadata = {
      name: 'watcher.stats',
      pathParts: {
        metric: params.metric
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Stop the watch service. Stop the Watcher service if it is running.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/watcher-api-stop.html | Elasticsearch API documentation}
    */
  async stop (this: That, params?: T.WatcherStopRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherStopResponse>
  async stop (this: That, params?: T.WatcherStopRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherStopResponse, unknown>>
  async stop (this: That, params?: T.WatcherStopRequest, options?: TransportRequestOptions): Promise<T.WatcherStopResponse>
  async stop (this: That, params?: T.WatcherStopRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = '/_watcher/_stop'
    const meta: TransportRequestMetadata = {
      name: 'watcher.stop'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Update Watcher index settings. Update settings for the Watcher internal index (`.watches`). Only a subset of settings can be modified. This includes `index.auto_expand_replicas` and `index.number_of_replicas`.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/watcher-api-update-settings.html | Elasticsearch API documentation}
    */
  async updateSettings (this: That, params?: T.WatcherUpdateSettingsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherUpdateSettingsResponse>
  async updateSettings (this: That, params?: T.WatcherUpdateSettingsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherUpdateSettingsResponse, unknown>>
  async updateSettings (this: That, params?: T.WatcherUpdateSettingsRequest, options?: TransportRequestOptions): Promise<T.WatcherUpdateSettingsResponse>
  async updateSettings (this: That, params?: T.WatcherUpdateSettingsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = ['index.auto_expand_replicas', 'index.number_of_replicas']
    const querystring: Record<string, any> = {}
    const body: Record<string, any> = {}

    params = params ?? {}
    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = '/_watcher/settings'
    const meta: TransportRequestMetadata = {
      name: 'watcher.update_settings'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
