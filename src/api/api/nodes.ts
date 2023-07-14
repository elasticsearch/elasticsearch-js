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

export default class Nodes {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Removes the archived repositories metering information present in the cluster.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/main/clear-repositories-metering-archive-api.html | Elasticsearch API documentation}
    */
  async clearRepositoriesMeteringArchive (this: That, params: T.NodesClearRepositoriesMeteringArchiveRequest | TB.NodesClearRepositoriesMeteringArchiveRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.NodesClearRepositoriesMeteringArchiveResponse>
  async clearRepositoriesMeteringArchive (this: That, params: T.NodesClearRepositoriesMeteringArchiveRequest | TB.NodesClearRepositoriesMeteringArchiveRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.NodesClearRepositoriesMeteringArchiveResponse, unknown>>
  async clearRepositoriesMeteringArchive (this: That, params: T.NodesClearRepositoriesMeteringArchiveRequest | TB.NodesClearRepositoriesMeteringArchiveRequest, options?: TransportRequestOptions): Promise<T.NodesClearRepositoriesMeteringArchiveResponse>
  async clearRepositoriesMeteringArchive (this: That, params: T.NodesClearRepositoriesMeteringArchiveRequest | TB.NodesClearRepositoriesMeteringArchiveRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['node_id', 'max_archive_version']
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
    const path = `/_nodes/${encodeURIComponent(params.node_id.toString())}/_repositories_metering/${encodeURIComponent(params.max_archive_version.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Returns cluster repositories metering information.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/main/get-repositories-metering-api.html | Elasticsearch API documentation}
    */
  async getRepositoriesMeteringInfo (this: That, params: T.NodesGetRepositoriesMeteringInfoRequest | TB.NodesGetRepositoriesMeteringInfoRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.NodesGetRepositoriesMeteringInfoResponse>
  async getRepositoriesMeteringInfo (this: That, params: T.NodesGetRepositoriesMeteringInfoRequest | TB.NodesGetRepositoriesMeteringInfoRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.NodesGetRepositoriesMeteringInfoResponse, unknown>>
  async getRepositoriesMeteringInfo (this: That, params: T.NodesGetRepositoriesMeteringInfoRequest | TB.NodesGetRepositoriesMeteringInfoRequest, options?: TransportRequestOptions): Promise<T.NodesGetRepositoriesMeteringInfoResponse>
  async getRepositoriesMeteringInfo (this: That, params: T.NodesGetRepositoriesMeteringInfoRequest | TB.NodesGetRepositoriesMeteringInfoRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['node_id']
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
    const path = `/_nodes/${encodeURIComponent(params.node_id.toString())}/_repositories_metering`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Returns information about hot threads on each node in the cluster.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/main/cluster-nodes-hot-threads.html | Elasticsearch API documentation}
    */
  async hotThreads (this: That, params?: T.NodesHotThreadsRequest | TB.NodesHotThreadsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.NodesHotThreadsResponse>
  async hotThreads (this: That, params?: T.NodesHotThreadsRequest | TB.NodesHotThreadsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.NodesHotThreadsResponse, unknown>>
  async hotThreads (this: That, params?: T.NodesHotThreadsRequest | TB.NodesHotThreadsRequest, options?: TransportRequestOptions): Promise<T.NodesHotThreadsResponse>
  async hotThreads (this: That, params?: T.NodesHotThreadsRequest | TB.NodesHotThreadsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['node_id']
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
    if (params.node_id != null) {
      method = 'GET'
      path = `/_nodes/${encodeURIComponent(params.node_id.toString())}/hot_threads`
    } else {
      method = 'GET'
      path = '/_nodes/hot_threads'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Returns information about nodes in the cluster.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/main/cluster-nodes-info.html | Elasticsearch API documentation}
    */
  async info (this: That, params?: T.NodesInfoRequest | TB.NodesInfoRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.NodesInfoResponse>
  async info (this: That, params?: T.NodesInfoRequest | TB.NodesInfoRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.NodesInfoResponse, unknown>>
  async info (this: That, params?: T.NodesInfoRequest | TB.NodesInfoRequest, options?: TransportRequestOptions): Promise<T.NodesInfoResponse>
  async info (this: That, params?: T.NodesInfoRequest | TB.NodesInfoRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['node_id', 'metric']
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
    if (params.node_id != null && params.metric != null) {
      method = 'GET'
      path = `/_nodes/${encodeURIComponent(params.node_id.toString())}/${encodeURIComponent(params.metric.toString())}`
    } else if (params.node_id != null) {
      method = 'GET'
      path = `/_nodes/${encodeURIComponent(params.node_id.toString())}`
    } else if (params.metric != null) {
      method = 'GET'
      path = `/_nodes/${encodeURIComponent(params.metric.toString())}`
    } else {
      method = 'GET'
      path = '/_nodes'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Reloads secure settings.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/main/secure-settings.html#reloadable-secure-settings | Elasticsearch API documentation}
    */
  async reloadSecureSettings (this: That, params?: T.NodesReloadSecureSettingsRequest | TB.NodesReloadSecureSettingsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.NodesReloadSecureSettingsResponse>
  async reloadSecureSettings (this: That, params?: T.NodesReloadSecureSettingsRequest | TB.NodesReloadSecureSettingsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.NodesReloadSecureSettingsResponse, unknown>>
  async reloadSecureSettings (this: That, params?: T.NodesReloadSecureSettingsRequest | TB.NodesReloadSecureSettingsRequest, options?: TransportRequestOptions): Promise<T.NodesReloadSecureSettingsResponse>
  async reloadSecureSettings (this: That, params?: T.NodesReloadSecureSettingsRequest | TB.NodesReloadSecureSettingsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['node_id']
    const acceptedBody: string[] = ['secure_settings_password']
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

    let method = ''
    let path = ''
    if (params.node_id != null) {
      method = 'POST'
      path = `/_nodes/${encodeURIComponent(params.node_id.toString())}/reload_secure_settings`
    } else {
      method = 'POST'
      path = '/_nodes/reload_secure_settings'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Returns statistical information about nodes in the cluster.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/main/cluster-nodes-stats.html | Elasticsearch API documentation}
    */
  async stats (this: That, params?: T.NodesStatsRequest | TB.NodesStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.NodesStatsResponse>
  async stats (this: That, params?: T.NodesStatsRequest | TB.NodesStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.NodesStatsResponse, unknown>>
  async stats (this: That, params?: T.NodesStatsRequest | TB.NodesStatsRequest, options?: TransportRequestOptions): Promise<T.NodesStatsResponse>
  async stats (this: That, params?: T.NodesStatsRequest | TB.NodesStatsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['node_id', 'metric', 'index_metric']
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
    if (params.node_id != null && params.metric != null && params.index_metric != null) {
      method = 'GET'
      path = `/_nodes/${encodeURIComponent(params.node_id.toString())}/stats/${encodeURIComponent(params.metric.toString())}/${encodeURIComponent(params.index_metric.toString())}`
    } else if (params.node_id != null && params.metric != null) {
      method = 'GET'
      path = `/_nodes/${encodeURIComponent(params.node_id.toString())}/stats/${encodeURIComponent(params.metric.toString())}`
    } else if (params.metric != null && params.index_metric != null) {
      method = 'GET'
      path = `/_nodes/stats/${encodeURIComponent(params.metric.toString())}/${encodeURIComponent(params.index_metric.toString())}`
    } else if (params.node_id != null) {
      method = 'GET'
      path = `/_nodes/${encodeURIComponent(params.node_id.toString())}/stats`
    } else if (params.metric != null) {
      method = 'GET'
      path = `/_nodes/stats/${encodeURIComponent(params.metric.toString())}`
    } else {
      method = 'GET'
      path = '/_nodes/stats'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Returns low-level information about REST actions usage on nodes.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/main/cluster-nodes-usage.html | Elasticsearch API documentation}
    */
  async usage (this: That, params?: T.NodesUsageRequest | TB.NodesUsageRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.NodesUsageResponse>
  async usage (this: That, params?: T.NodesUsageRequest | TB.NodesUsageRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.NodesUsageResponse, unknown>>
  async usage (this: That, params?: T.NodesUsageRequest | TB.NodesUsageRequest, options?: TransportRequestOptions): Promise<T.NodesUsageResponse>
  async usage (this: That, params?: T.NodesUsageRequest | TB.NodesUsageRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['node_id', 'metric']
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
    if (params.node_id != null && params.metric != null) {
      method = 'GET'
      path = `/_nodes/${encodeURIComponent(params.node_id.toString())}/usage/${encodeURIComponent(params.metric.toString())}`
    } else if (params.node_id != null) {
      method = 'GET'
      path = `/_nodes/${encodeURIComponent(params.node_id.toString())}/usage`
    } else if (params.metric != null) {
      method = 'GET'
      path = `/_nodes/usage/${encodeURIComponent(params.metric.toString())}`
    } else {
      method = 'GET'
      path = '/_nodes/usage'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}
