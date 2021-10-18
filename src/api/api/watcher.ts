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

export default class Watcher {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  async ackWatch (this: That, params: T.WatcherAckWatchRequest | TB.WatcherAckWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherAckWatchResponse>
  async ackWatch (this: That, params: T.WatcherAckWatchRequest | TB.WatcherAckWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherAckWatchResponse, unknown>>
  async ackWatch (this: That, params: T.WatcherAckWatchRequest | TB.WatcherAckWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherAckWatchResponse>
  async ackWatch (this: That, params: T.WatcherAckWatchRequest | TB.WatcherAckWatchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['watch_id', 'action_id']
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

    let method = ''
    let path = ''
    if (params.watch_id != null && params.action_id != null) {
      method = 'PUT'
      path = `/_watcher/watch/${encodeURIComponent(params.watch_id.toString())}/_ack/${encodeURIComponent(params.action_id.toString())}`
    } else {
      method = 'PUT'
      path = `/_watcher/watch/${encodeURIComponent(params.watch_id.toString())}/_ack`
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async activateWatch (this: That, params: T.WatcherActivateWatchRequest | TB.WatcherActivateWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherActivateWatchResponse>
  async activateWatch (this: That, params: T.WatcherActivateWatchRequest | TB.WatcherActivateWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherActivateWatchResponse, unknown>>
  async activateWatch (this: That, params: T.WatcherActivateWatchRequest | TB.WatcherActivateWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherActivateWatchResponse>
  async activateWatch (this: That, params: T.WatcherActivateWatchRequest | TB.WatcherActivateWatchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['watch_id']
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

    const method = 'PUT'
    const path = `/_watcher/watch/${encodeURIComponent(params.watch_id.toString())}/_activate`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async deactivateWatch (this: That, params: T.WatcherDeactivateWatchRequest | TB.WatcherDeactivateWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherDeactivateWatchResponse>
  async deactivateWatch (this: That, params: T.WatcherDeactivateWatchRequest | TB.WatcherDeactivateWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherDeactivateWatchResponse, unknown>>
  async deactivateWatch (this: That, params: T.WatcherDeactivateWatchRequest | TB.WatcherDeactivateWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherDeactivateWatchResponse>
  async deactivateWatch (this: That, params: T.WatcherDeactivateWatchRequest | TB.WatcherDeactivateWatchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['watch_id']
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

    const method = 'PUT'
    const path = `/_watcher/watch/${encodeURIComponent(params.watch_id.toString())}/_deactivate`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async deleteWatch (this: That, params: T.WatcherDeleteWatchRequest | TB.WatcherDeleteWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherDeleteWatchResponse>
  async deleteWatch (this: That, params: T.WatcherDeleteWatchRequest | TB.WatcherDeleteWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherDeleteWatchResponse, unknown>>
  async deleteWatch (this: That, params: T.WatcherDeleteWatchRequest | TB.WatcherDeleteWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherDeleteWatchResponse>
  async deleteWatch (this: That, params: T.WatcherDeleteWatchRequest | TB.WatcherDeleteWatchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
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
    const path = `/_watcher/watch/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async executeWatch (this: That, params?: T.WatcherExecuteWatchRequest | TB.WatcherExecuteWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherExecuteWatchResponse>
  async executeWatch (this: That, params?: T.WatcherExecuteWatchRequest | TB.WatcherExecuteWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherExecuteWatchResponse, unknown>>
  async executeWatch (this: That, params?: T.WatcherExecuteWatchRequest | TB.WatcherExecuteWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherExecuteWatchResponse>
  async executeWatch (this: That, params?: T.WatcherExecuteWatchRequest | TB.WatcherExecuteWatchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const acceptedBody: string[] = ['action_modes', 'alternative_input', 'ignore_condition', 'record_execution', 'simulated_actions', 'trigger_data', 'watch']
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
    if (params.id != null) {
      method = 'PUT'
      path = `/_watcher/watch/${encodeURIComponent(params.id.toString())}/_execute`
    } else {
      method = 'PUT'
      path = '/_watcher/watch/_execute'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async getWatch (this: That, params: T.WatcherGetWatchRequest | TB.WatcherGetWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherGetWatchResponse>
  async getWatch (this: That, params: T.WatcherGetWatchRequest | TB.WatcherGetWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherGetWatchResponse, unknown>>
  async getWatch (this: That, params: T.WatcherGetWatchRequest | TB.WatcherGetWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherGetWatchResponse>
  async getWatch (this: That, params: T.WatcherGetWatchRequest | TB.WatcherGetWatchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
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

    const method = 'GET'
    const path = `/_watcher/watch/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async putWatch (this: That, params: T.WatcherPutWatchRequest | TB.WatcherPutWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherPutWatchResponse>
  async putWatch (this: That, params: T.WatcherPutWatchRequest | TB.WatcherPutWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherPutWatchResponse, unknown>>
  async putWatch (this: That, params: T.WatcherPutWatchRequest | TB.WatcherPutWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherPutWatchResponse>
  async putWatch (this: That, params: T.WatcherPutWatchRequest | TB.WatcherPutWatchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const acceptedBody: string[] = ['actions', 'condition', 'input', 'metadata', 'throttle_period', 'transform', 'trigger']
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
    const path = `/_watcher/watch/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async queryWatches (this: That, params?: T.WatcherQueryWatchesRequest | TB.WatcherQueryWatchesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherQueryWatchesResponse>
  async queryWatches (this: That, params?: T.WatcherQueryWatchesRequest | TB.WatcherQueryWatchesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherQueryWatchesResponse, unknown>>
  async queryWatches (this: That, params?: T.WatcherQueryWatchesRequest | TB.WatcherQueryWatchesRequest, options?: TransportRequestOptions): Promise<T.WatcherQueryWatchesResponse>
  async queryWatches (this: That, params?: T.WatcherQueryWatchesRequest | TB.WatcherQueryWatchesRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = ['from', 'size', 'query', 'sort', 'search_after']
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
    const path = '/_watcher/_query/watches'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async start (this: That, params?: T.WatcherStartRequest | TB.WatcherStartRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherStartResponse>
  async start (this: That, params?: T.WatcherStartRequest | TB.WatcherStartRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherStartResponse, unknown>>
  async start (this: That, params?: T.WatcherStartRequest | TB.WatcherStartRequest, options?: TransportRequestOptions): Promise<T.WatcherStartResponse>
  async start (this: That, params?: T.WatcherStartRequest | TB.WatcherStartRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = '/_watcher/_start'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async stats (this: That, params?: T.WatcherStatsRequest | TB.WatcherStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherStatsResponse>
  async stats (this: That, params?: T.WatcherStatsRequest | TB.WatcherStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherStatsResponse, unknown>>
  async stats (this: That, params?: T.WatcherStatsRequest | TB.WatcherStatsRequest, options?: TransportRequestOptions): Promise<T.WatcherStatsResponse>
  async stats (this: That, params?: T.WatcherStatsRequest | TB.WatcherStatsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['metric']
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
    if (params.metric != null) {
      method = 'GET'
      path = `/_watcher/stats/${encodeURIComponent(params.metric.toString())}`
    } else {
      method = 'GET'
      path = '/_watcher/stats'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async stop (this: That, params?: T.WatcherStopRequest | TB.WatcherStopRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherStopResponse>
  async stop (this: That, params?: T.WatcherStopRequest | TB.WatcherStopRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherStopResponse, unknown>>
  async stop (this: That, params?: T.WatcherStopRequest | TB.WatcherStopRequest, options?: TransportRequestOptions): Promise<T.WatcherStopResponse>
  async stop (this: That, params?: T.WatcherStopRequest | TB.WatcherStopRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = '/_watcher/_stop'
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}
