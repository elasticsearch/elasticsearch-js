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

export default class Cluster {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  async allocationExplain (this: That, params?: T.ClusterAllocationExplainRequest | TB.ClusterAllocationExplainRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterAllocationExplainResponse>
  async allocationExplain (this: That, params?: T.ClusterAllocationExplainRequest | TB.ClusterAllocationExplainRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterAllocationExplainResponse, unknown>>
  async allocationExplain (this: That, params?: T.ClusterAllocationExplainRequest | TB.ClusterAllocationExplainRequest, options?: TransportRequestOptions): Promise<T.ClusterAllocationExplainResponse>
  async allocationExplain (this: That, params?: T.ClusterAllocationExplainRequest | TB.ClusterAllocationExplainRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = ['current_node', 'index', 'primary', 'shard']
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
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = body != null ? 'POST' : 'GET'
    const path = '/_cluster/allocation/explain'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async deleteComponentTemplate (this: That, params: T.ClusterDeleteComponentTemplateRequest | TB.ClusterDeleteComponentTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterDeleteComponentTemplateResponse>
  async deleteComponentTemplate (this: That, params: T.ClusterDeleteComponentTemplateRequest | TB.ClusterDeleteComponentTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterDeleteComponentTemplateResponse, unknown>>
  async deleteComponentTemplate (this: That, params: T.ClusterDeleteComponentTemplateRequest | TB.ClusterDeleteComponentTemplateRequest, options?: TransportRequestOptions): Promise<T.ClusterDeleteComponentTemplateResponse>
  async deleteComponentTemplate (this: That, params: T.ClusterDeleteComponentTemplateRequest | TB.ClusterDeleteComponentTemplateRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const acceptedBody: string[] = []
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    let body: Record<string, any> = params.body ?? undefined

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        body = body ?? {}
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_component_template/${encodeURIComponent(params.name.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async deleteVotingConfigExclusions (this: That, params?: T.ClusterDeleteVotingConfigExclusionsRequest | TB.ClusterDeleteVotingConfigExclusionsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterDeleteVotingConfigExclusionsResponse>
  async deleteVotingConfigExclusions (this: That, params?: T.ClusterDeleteVotingConfigExclusionsRequest | TB.ClusterDeleteVotingConfigExclusionsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterDeleteVotingConfigExclusionsResponse, unknown>>
  async deleteVotingConfigExclusions (this: That, params?: T.ClusterDeleteVotingConfigExclusionsRequest | TB.ClusterDeleteVotingConfigExclusionsRequest, options?: TransportRequestOptions): Promise<T.ClusterDeleteVotingConfigExclusionsResponse>
  async deleteVotingConfigExclusions (this: That, params?: T.ClusterDeleteVotingConfigExclusionsRequest | TB.ClusterDeleteVotingConfigExclusionsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = []
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
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = '/_cluster/voting_config_exclusions'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async existsComponentTemplate (this: That, params: T.ClusterExistsComponentTemplateRequest | TB.ClusterExistsComponentTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterExistsComponentTemplateResponse>
  async existsComponentTemplate (this: That, params: T.ClusterExistsComponentTemplateRequest | TB.ClusterExistsComponentTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterExistsComponentTemplateResponse, unknown>>
  async existsComponentTemplate (this: That, params: T.ClusterExistsComponentTemplateRequest | TB.ClusterExistsComponentTemplateRequest, options?: TransportRequestOptions): Promise<T.ClusterExistsComponentTemplateResponse>
  async existsComponentTemplate (this: That, params: T.ClusterExistsComponentTemplateRequest | TB.ClusterExistsComponentTemplateRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const acceptedBody: string[] = []
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    let body: Record<string, any> = params.body ?? undefined

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        body = body ?? {}
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'HEAD'
    const path = `/_component_template/${encodeURIComponent(params.name.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async getComponentTemplate (this: That, params?: T.ClusterGetComponentTemplateRequest | TB.ClusterGetComponentTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterGetComponentTemplateResponse>
  async getComponentTemplate (this: That, params?: T.ClusterGetComponentTemplateRequest | TB.ClusterGetComponentTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterGetComponentTemplateResponse, unknown>>
  async getComponentTemplate (this: That, params?: T.ClusterGetComponentTemplateRequest | TB.ClusterGetComponentTemplateRequest, options?: TransportRequestOptions): Promise<T.ClusterGetComponentTemplateResponse>
  async getComponentTemplate (this: That, params?: T.ClusterGetComponentTemplateRequest | TB.ClusterGetComponentTemplateRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const acceptedBody: string[] = []
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
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.name != null) {
      method = 'GET'
      path = `/_component_template/${encodeURIComponent(params.name.toString())}`
    } else {
      method = 'GET'
      path = '/_component_template'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async getSettings (this: That, params?: T.ClusterGetSettingsRequest | TB.ClusterGetSettingsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterGetSettingsResponse>
  async getSettings (this: That, params?: T.ClusterGetSettingsRequest | TB.ClusterGetSettingsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterGetSettingsResponse, unknown>>
  async getSettings (this: That, params?: T.ClusterGetSettingsRequest | TB.ClusterGetSettingsRequest, options?: TransportRequestOptions): Promise<T.ClusterGetSettingsResponse>
  async getSettings (this: That, params?: T.ClusterGetSettingsRequest | TB.ClusterGetSettingsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = []
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
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_cluster/settings'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async health (this: That, params?: T.ClusterHealthRequest | TB.ClusterHealthRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterHealthResponse>
  async health (this: That, params?: T.ClusterHealthRequest | TB.ClusterHealthRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterHealthResponse, unknown>>
  async health (this: That, params?: T.ClusterHealthRequest | TB.ClusterHealthRequest, options?: TransportRequestOptions): Promise<T.ClusterHealthResponse>
  async health (this: That, params?: T.ClusterHealthRequest | TB.ClusterHealthRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const acceptedBody: string[] = []
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
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.index != null) {
      method = 'GET'
      path = `/_cluster/health/${encodeURIComponent(params.index.toString())}`
    } else {
      method = 'GET'
      path = '/_cluster/health'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async pendingTasks (this: That, params?: T.ClusterPendingTasksRequest | TB.ClusterPendingTasksRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterPendingTasksResponse>
  async pendingTasks (this: That, params?: T.ClusterPendingTasksRequest | TB.ClusterPendingTasksRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterPendingTasksResponse, unknown>>
  async pendingTasks (this: That, params?: T.ClusterPendingTasksRequest | TB.ClusterPendingTasksRequest, options?: TransportRequestOptions): Promise<T.ClusterPendingTasksResponse>
  async pendingTasks (this: That, params?: T.ClusterPendingTasksRequest | TB.ClusterPendingTasksRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = []
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
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_cluster/pending_tasks'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async postVotingConfigExclusions (this: That, params?: T.ClusterPostVotingConfigExclusionsRequest | TB.ClusterPostVotingConfigExclusionsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterPostVotingConfigExclusionsResponse>
  async postVotingConfigExclusions (this: That, params?: T.ClusterPostVotingConfigExclusionsRequest | TB.ClusterPostVotingConfigExclusionsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterPostVotingConfigExclusionsResponse, unknown>>
  async postVotingConfigExclusions (this: That, params?: T.ClusterPostVotingConfigExclusionsRequest | TB.ClusterPostVotingConfigExclusionsRequest, options?: TransportRequestOptions): Promise<T.ClusterPostVotingConfigExclusionsResponse>
  async postVotingConfigExclusions (this: That, params?: T.ClusterPostVotingConfigExclusionsRequest | TB.ClusterPostVotingConfigExclusionsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = []
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
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = '/_cluster/voting_config_exclusions'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async putComponentTemplate (this: That, params: T.ClusterPutComponentTemplateRequest | TB.ClusterPutComponentTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterPutComponentTemplateResponse>
  async putComponentTemplate (this: That, params: T.ClusterPutComponentTemplateRequest | TB.ClusterPutComponentTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterPutComponentTemplateResponse, unknown>>
  async putComponentTemplate (this: That, params: T.ClusterPutComponentTemplateRequest | TB.ClusterPutComponentTemplateRequest, options?: TransportRequestOptions): Promise<T.ClusterPutComponentTemplateResponse>
  async putComponentTemplate (this: That, params: T.ClusterPutComponentTemplateRequest | TB.ClusterPutComponentTemplateRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const acceptedBody: string[] = ['template', 'aliases', 'mappings', 'settings', 'version', '_meta']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    let body: Record<string, any> = params.body ?? undefined

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        body = body ?? {}
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = `/_component_template/${encodeURIComponent(params.name.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async putSettings (this: That, params?: T.ClusterPutSettingsRequest | TB.ClusterPutSettingsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterPutSettingsResponse>
  async putSettings (this: That, params?: T.ClusterPutSettingsRequest | TB.ClusterPutSettingsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterPutSettingsResponse, unknown>>
  async putSettings (this: That, params?: T.ClusterPutSettingsRequest | TB.ClusterPutSettingsRequest, options?: TransportRequestOptions): Promise<T.ClusterPutSettingsResponse>
  async putSettings (this: That, params?: T.ClusterPutSettingsRequest | TB.ClusterPutSettingsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = ['persistent', 'transient']
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
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = '/_cluster/settings'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async remoteInfo (this: That, params?: T.ClusterRemoteInfoRequest | TB.ClusterRemoteInfoRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterRemoteInfoResponse>
  async remoteInfo (this: That, params?: T.ClusterRemoteInfoRequest | TB.ClusterRemoteInfoRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterRemoteInfoResponse, unknown>>
  async remoteInfo (this: That, params?: T.ClusterRemoteInfoRequest | TB.ClusterRemoteInfoRequest, options?: TransportRequestOptions): Promise<T.ClusterRemoteInfoResponse>
  async remoteInfo (this: That, params?: T.ClusterRemoteInfoRequest | TB.ClusterRemoteInfoRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = []
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
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_remote/info'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async reroute (this: That, params?: T.ClusterRerouteRequest | TB.ClusterRerouteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterRerouteResponse>
  async reroute (this: That, params?: T.ClusterRerouteRequest | TB.ClusterRerouteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterRerouteResponse, unknown>>
  async reroute (this: That, params?: T.ClusterRerouteRequest | TB.ClusterRerouteRequest, options?: TransportRequestOptions): Promise<T.ClusterRerouteResponse>
  async reroute (this: That, params?: T.ClusterRerouteRequest | TB.ClusterRerouteRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = ['commands']
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
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = '/_cluster/reroute'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async state (this: That, params?: T.ClusterStateRequest | TB.ClusterStateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterStateResponse>
  async state (this: That, params?: T.ClusterStateRequest | TB.ClusterStateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterStateResponse, unknown>>
  async state (this: That, params?: T.ClusterStateRequest | TB.ClusterStateRequest, options?: TransportRequestOptions): Promise<T.ClusterStateResponse>
  async state (this: That, params?: T.ClusterStateRequest | TB.ClusterStateRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['metric', 'index']
    const acceptedBody: string[] = []
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
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.metric != null && params.index != null) {
      method = 'GET'
      path = `/_cluster/state/${encodeURIComponent(params.metric.toString())}/${encodeURIComponent(params.index.toString())}`
    } else if (params.metric != null) {
      method = 'GET'
      path = `/_cluster/state/${encodeURIComponent(params.metric.toString())}`
    } else {
      method = 'GET'
      path = '/_cluster/state'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async stats (this: That, params?: T.ClusterStatsRequest | TB.ClusterStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterStatsResponse>
  async stats (this: That, params?: T.ClusterStatsRequest | TB.ClusterStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterStatsResponse, unknown>>
  async stats (this: That, params?: T.ClusterStatsRequest | TB.ClusterStatsRequest, options?: TransportRequestOptions): Promise<T.ClusterStatsResponse>
  async stats (this: That, params?: T.ClusterStatsRequest | TB.ClusterStatsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['node_id']
    const acceptedBody: string[] = []
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
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.node_id != null) {
      method = 'GET'
      path = `/_cluster/stats/nodes/${encodeURIComponent(params.node_id.toString())}`
    } else {
      method = 'GET'
      path = '/_cluster/stats'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}
