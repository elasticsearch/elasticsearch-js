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

export default class Cat {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  async aliases (this: That, params?: T.CatAliasesRequest | TB.CatAliasesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatAliasesResponse>
  async aliases (this: That, params?: T.CatAliasesRequest | TB.CatAliasesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatAliasesResponse, unknown>>
  async aliases (this: That, params?: T.CatAliasesRequest | TB.CatAliasesRequest, options?: TransportRequestOptions): Promise<T.CatAliasesResponse>
  async aliases (this: That, params?: T.CatAliasesRequest | TB.CatAliasesRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
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
      path = `/_cat/aliases/${encodeURIComponent(params.name.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/aliases'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async allocation (this: That, params?: T.CatAllocationRequest | TB.CatAllocationRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatAllocationResponse>
  async allocation (this: That, params?: T.CatAllocationRequest | TB.CatAllocationRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatAllocationResponse, unknown>>
  async allocation (this: That, params?: T.CatAllocationRequest | TB.CatAllocationRequest, options?: TransportRequestOptions): Promise<T.CatAllocationResponse>
  async allocation (this: That, params?: T.CatAllocationRequest | TB.CatAllocationRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['node_id']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
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
      path = `/_cat/allocation/${encodeURIComponent(params.node_id.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/allocation'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async count (this: That, params?: T.CatCountRequest | TB.CatCountRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatCountResponse>
  async count (this: That, params?: T.CatCountRequest | TB.CatCountRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatCountResponse, unknown>>
  async count (this: That, params?: T.CatCountRequest | TB.CatCountRequest, options?: TransportRequestOptions): Promise<T.CatCountResponse>
  async count (this: That, params?: T.CatCountRequest | TB.CatCountRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
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
      path = `/_cat/count/${encodeURIComponent(params.index.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/count'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async fielddata (this: That, params?: T.CatFielddataRequest | TB.CatFielddataRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatFielddataResponse>
  async fielddata (this: That, params?: T.CatFielddataRequest | TB.CatFielddataRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatFielddataResponse, unknown>>
  async fielddata (this: That, params?: T.CatFielddataRequest | TB.CatFielddataRequest, options?: TransportRequestOptions): Promise<T.CatFielddataResponse>
  async fielddata (this: That, params?: T.CatFielddataRequest | TB.CatFielddataRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['fields']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.fields != null) {
      method = 'GET'
      path = `/_cat/fielddata/${encodeURIComponent(params.fields.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/fielddata'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async health (this: That, params?: T.CatHealthRequest | TB.CatHealthRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatHealthResponse>
  async health (this: That, params?: T.CatHealthRequest | TB.CatHealthRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatHealthResponse, unknown>>
  async health (this: That, params?: T.CatHealthRequest | TB.CatHealthRequest, options?: TransportRequestOptions): Promise<T.CatHealthResponse>
  async health (this: That, params?: T.CatHealthRequest | TB.CatHealthRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_cat/health'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async help (this: That, params?: T.CatHelpRequest | TB.CatHelpRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatHelpResponse>
  async help (this: That, params?: T.CatHelpRequest | TB.CatHelpRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatHelpResponse, unknown>>
  async help (this: That, params?: T.CatHelpRequest | TB.CatHelpRequest, options?: TransportRequestOptions): Promise<T.CatHelpResponse>
  async help (this: That, params?: T.CatHelpRequest | TB.CatHelpRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_cat'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async indices (this: That, params?: T.CatIndicesRequest | TB.CatIndicesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatIndicesResponse>
  async indices (this: That, params?: T.CatIndicesRequest | TB.CatIndicesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatIndicesResponse, unknown>>
  async indices (this: That, params?: T.CatIndicesRequest | TB.CatIndicesRequest, options?: TransportRequestOptions): Promise<T.CatIndicesResponse>
  async indices (this: That, params?: T.CatIndicesRequest | TB.CatIndicesRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
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
      path = `/_cat/indices/${encodeURIComponent(params.index.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/indices'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async master (this: That, params?: T.CatMasterRequest | TB.CatMasterRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatMasterResponse>
  async master (this: That, params?: T.CatMasterRequest | TB.CatMasterRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatMasterResponse, unknown>>
  async master (this: That, params?: T.CatMasterRequest | TB.CatMasterRequest, options?: TransportRequestOptions): Promise<T.CatMasterResponse>
  async master (this: That, params?: T.CatMasterRequest | TB.CatMasterRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_cat/master'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async mlDataFrameAnalytics (this: That, params?: T.CatMlDataFrameAnalyticsRequest | TB.CatMlDataFrameAnalyticsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatMlDataFrameAnalyticsResponse>
  async mlDataFrameAnalytics (this: That, params?: T.CatMlDataFrameAnalyticsRequest | TB.CatMlDataFrameAnalyticsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatMlDataFrameAnalyticsResponse, unknown>>
  async mlDataFrameAnalytics (this: That, params?: T.CatMlDataFrameAnalyticsRequest | TB.CatMlDataFrameAnalyticsRequest, options?: TransportRequestOptions): Promise<T.CatMlDataFrameAnalyticsResponse>
  async mlDataFrameAnalytics (this: That, params?: T.CatMlDataFrameAnalyticsRequest | TB.CatMlDataFrameAnalyticsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.id != null) {
      method = 'GET'
      path = `/_cat/ml/data_frame/analytics/${encodeURIComponent(params.id.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/ml/data_frame/analytics'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async mlDatafeeds (this: That, params?: T.CatMlDatafeedsRequest | TB.CatMlDatafeedsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatMlDatafeedsResponse>
  async mlDatafeeds (this: That, params?: T.CatMlDatafeedsRequest | TB.CatMlDatafeedsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatMlDatafeedsResponse, unknown>>
  async mlDatafeeds (this: That, params?: T.CatMlDatafeedsRequest | TB.CatMlDatafeedsRequest, options?: TransportRequestOptions): Promise<T.CatMlDatafeedsResponse>
  async mlDatafeeds (this: That, params?: T.CatMlDatafeedsRequest | TB.CatMlDatafeedsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['datafeed_id']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.datafeed_id != null) {
      method = 'GET'
      path = `/_cat/ml/datafeeds/${encodeURIComponent(params.datafeed_id.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/ml/datafeeds'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async mlJobs (this: That, params?: T.CatMlJobsRequest | TB.CatMlJobsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatMlJobsResponse>
  async mlJobs (this: That, params?: T.CatMlJobsRequest | TB.CatMlJobsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatMlJobsResponse, unknown>>
  async mlJobs (this: That, params?: T.CatMlJobsRequest | TB.CatMlJobsRequest, options?: TransportRequestOptions): Promise<T.CatMlJobsResponse>
  async mlJobs (this: That, params?: T.CatMlJobsRequest | TB.CatMlJobsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['job_id']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.job_id != null) {
      method = 'GET'
      path = `/_cat/ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/ml/anomaly_detectors'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async mlTrainedModels (this: That, params?: T.CatMlTrainedModelsRequest | TB.CatMlTrainedModelsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatMlTrainedModelsResponse>
  async mlTrainedModels (this: That, params?: T.CatMlTrainedModelsRequest | TB.CatMlTrainedModelsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatMlTrainedModelsResponse, unknown>>
  async mlTrainedModels (this: That, params?: T.CatMlTrainedModelsRequest | TB.CatMlTrainedModelsRequest, options?: TransportRequestOptions): Promise<T.CatMlTrainedModelsResponse>
  async mlTrainedModels (this: That, params?: T.CatMlTrainedModelsRequest | TB.CatMlTrainedModelsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['model_id']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.model_id != null) {
      method = 'GET'
      path = `/_cat/ml/trained_models/${encodeURIComponent(params.model_id.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/ml/trained_models'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async nodeattrs (this: That, params?: T.CatNodeattrsRequest | TB.CatNodeattrsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatNodeattrsResponse>
  async nodeattrs (this: That, params?: T.CatNodeattrsRequest | TB.CatNodeattrsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatNodeattrsResponse, unknown>>
  async nodeattrs (this: That, params?: T.CatNodeattrsRequest | TB.CatNodeattrsRequest, options?: TransportRequestOptions): Promise<T.CatNodeattrsResponse>
  async nodeattrs (this: That, params?: T.CatNodeattrsRequest | TB.CatNodeattrsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_cat/nodeattrs'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async nodes (this: That, params?: T.CatNodesRequest | TB.CatNodesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatNodesResponse>
  async nodes (this: That, params?: T.CatNodesRequest | TB.CatNodesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatNodesResponse, unknown>>
  async nodes (this: That, params?: T.CatNodesRequest | TB.CatNodesRequest, options?: TransportRequestOptions): Promise<T.CatNodesResponse>
  async nodes (this: That, params?: T.CatNodesRequest | TB.CatNodesRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_cat/nodes'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async pendingTasks (this: That, params?: T.CatPendingTasksRequest | TB.CatPendingTasksRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatPendingTasksResponse>
  async pendingTasks (this: That, params?: T.CatPendingTasksRequest | TB.CatPendingTasksRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatPendingTasksResponse, unknown>>
  async pendingTasks (this: That, params?: T.CatPendingTasksRequest | TB.CatPendingTasksRequest, options?: TransportRequestOptions): Promise<T.CatPendingTasksResponse>
  async pendingTasks (this: That, params?: T.CatPendingTasksRequest | TB.CatPendingTasksRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_cat/pending_tasks'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async plugins (this: That, params?: T.CatPluginsRequest | TB.CatPluginsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatPluginsResponse>
  async plugins (this: That, params?: T.CatPluginsRequest | TB.CatPluginsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatPluginsResponse, unknown>>
  async plugins (this: That, params?: T.CatPluginsRequest | TB.CatPluginsRequest, options?: TransportRequestOptions): Promise<T.CatPluginsResponse>
  async plugins (this: That, params?: T.CatPluginsRequest | TB.CatPluginsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_cat/plugins'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async recovery (this: That, params?: T.CatRecoveryRequest | TB.CatRecoveryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatRecoveryResponse>
  async recovery (this: That, params?: T.CatRecoveryRequest | TB.CatRecoveryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatRecoveryResponse, unknown>>
  async recovery (this: That, params?: T.CatRecoveryRequest | TB.CatRecoveryRequest, options?: TransportRequestOptions): Promise<T.CatRecoveryResponse>
  async recovery (this: That, params?: T.CatRecoveryRequest | TB.CatRecoveryRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
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
      path = `/_cat/recovery/${encodeURIComponent(params.index.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/recovery'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async repositories (this: That, params?: T.CatRepositoriesRequest | TB.CatRepositoriesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatRepositoriesResponse>
  async repositories (this: That, params?: T.CatRepositoriesRequest | TB.CatRepositoriesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatRepositoriesResponse, unknown>>
  async repositories (this: That, params?: T.CatRepositoriesRequest | TB.CatRepositoriesRequest, options?: TransportRequestOptions): Promise<T.CatRepositoriesResponse>
  async repositories (this: That, params?: T.CatRepositoriesRequest | TB.CatRepositoriesRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_cat/repositories'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async segments (this: That, params?: T.CatSegmentsRequest | TB.CatSegmentsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatSegmentsResponse>
  async segments (this: That, params?: T.CatSegmentsRequest | TB.CatSegmentsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatSegmentsResponse, unknown>>
  async segments (this: That, params?: T.CatSegmentsRequest | TB.CatSegmentsRequest, options?: TransportRequestOptions): Promise<T.CatSegmentsResponse>
  async segments (this: That, params?: T.CatSegmentsRequest | TB.CatSegmentsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
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
      path = `/_cat/segments/${encodeURIComponent(params.index.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/segments'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async shards (this: That, params?: T.CatShardsRequest | TB.CatShardsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatShardsResponse>
  async shards (this: That, params?: T.CatShardsRequest | TB.CatShardsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatShardsResponse, unknown>>
  async shards (this: That, params?: T.CatShardsRequest | TB.CatShardsRequest, options?: TransportRequestOptions): Promise<T.CatShardsResponse>
  async shards (this: That, params?: T.CatShardsRequest | TB.CatShardsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
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
      path = `/_cat/shards/${encodeURIComponent(params.index.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/shards'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async snapshots (this: That, params?: T.CatSnapshotsRequest | TB.CatSnapshotsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatSnapshotsResponse>
  async snapshots (this: That, params?: T.CatSnapshotsRequest | TB.CatSnapshotsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatSnapshotsResponse, unknown>>
  async snapshots (this: That, params?: T.CatSnapshotsRequest | TB.CatSnapshotsRequest, options?: TransportRequestOptions): Promise<T.CatSnapshotsResponse>
  async snapshots (this: That, params?: T.CatSnapshotsRequest | TB.CatSnapshotsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['repository']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.repository != null) {
      method = 'GET'
      path = `/_cat/snapshots/${encodeURIComponent(params.repository.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/snapshots'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async tasks (this: That, params?: T.CatTasksRequest | TB.CatTasksRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatTasksResponse>
  async tasks (this: That, params?: T.CatTasksRequest | TB.CatTasksRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatTasksResponse, unknown>>
  async tasks (this: That, params?: T.CatTasksRequest | TB.CatTasksRequest, options?: TransportRequestOptions): Promise<T.CatTasksResponse>
  async tasks (this: That, params?: T.CatTasksRequest | TB.CatTasksRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_cat/tasks'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async templates (this: That, params?: T.CatTemplatesRequest | TB.CatTemplatesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatTemplatesResponse>
  async templates (this: That, params?: T.CatTemplatesRequest | TB.CatTemplatesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatTemplatesResponse, unknown>>
  async templates (this: That, params?: T.CatTemplatesRequest | TB.CatTemplatesRequest, options?: TransportRequestOptions): Promise<T.CatTemplatesResponse>
  async templates (this: That, params?: T.CatTemplatesRequest | TB.CatTemplatesRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
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
      path = `/_cat/templates/${encodeURIComponent(params.name.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/templates'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async threadPool (this: That, params?: T.CatThreadPoolRequest | TB.CatThreadPoolRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatThreadPoolResponse>
  async threadPool (this: That, params?: T.CatThreadPoolRequest | TB.CatThreadPoolRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatThreadPoolResponse, unknown>>
  async threadPool (this: That, params?: T.CatThreadPoolRequest | TB.CatThreadPoolRequest, options?: TransportRequestOptions): Promise<T.CatThreadPoolResponse>
  async threadPool (this: That, params?: T.CatThreadPoolRequest | TB.CatThreadPoolRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['thread_pool_patterns']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.thread_pool_patterns != null) {
      method = 'GET'
      path = `/_cat/thread_pool/${encodeURIComponent(params.thread_pool_patterns.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/thread_pool'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async transforms (this: That, params?: T.CatTransformsRequest | TB.CatTransformsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatTransformsResponse>
  async transforms (this: That, params?: T.CatTransformsRequest | TB.CatTransformsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatTransformsResponse, unknown>>
  async transforms (this: That, params?: T.CatTransformsRequest | TB.CatTransformsRequest, options?: TransportRequestOptions): Promise<T.CatTransformsResponse>
  async transforms (this: That, params?: T.CatTransformsRequest | TB.CatTransformsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['transform_id']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        if (key === 'body') continue
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.transform_id != null) {
      method = 'GET'
      path = `/_cat/transforms/${encodeURIComponent(params.transform_id.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/transforms'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}
