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

export default class Ccr {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Deletes auto-follow patterns.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.13/ccr-delete-auto-follow-pattern.html | Elasticsearch API documentation}
    */
  async deleteAutoFollowPattern (this: That, params: T.CcrDeleteAutoFollowPatternRequest | TB.CcrDeleteAutoFollowPatternRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrDeleteAutoFollowPatternResponse>
  async deleteAutoFollowPattern (this: That, params: T.CcrDeleteAutoFollowPatternRequest | TB.CcrDeleteAutoFollowPatternRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrDeleteAutoFollowPatternResponse, unknown>>
  async deleteAutoFollowPattern (this: That, params: T.CcrDeleteAutoFollowPatternRequest | TB.CcrDeleteAutoFollowPatternRequest, options?: TransportRequestOptions): Promise<T.CcrDeleteAutoFollowPatternResponse>
  async deleteAutoFollowPattern (this: That, params: T.CcrDeleteAutoFollowPatternRequest | TB.CcrDeleteAutoFollowPatternRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = `/_ccr/auto_follow/${encodeURIComponent(params.name.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Creates a new follower index configured to follow the referenced leader index.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.13/ccr-put-follow.html | Elasticsearch API documentation}
    */
  async follow (this: That, params: T.CcrFollowRequest | TB.CcrFollowRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrFollowResponse>
  async follow (this: That, params: T.CcrFollowRequest | TB.CcrFollowRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrFollowResponse, unknown>>
  async follow (this: That, params: T.CcrFollowRequest | TB.CcrFollowRequest, options?: TransportRequestOptions): Promise<T.CcrFollowResponse>
  async follow (this: That, params: T.CcrFollowRequest | TB.CcrFollowRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const acceptedBody: string[] = ['leader_index', 'max_outstanding_read_requests', 'max_outstanding_write_requests', 'max_read_request_operation_count', 'max_read_request_size', 'max_retry_delay', 'max_write_buffer_count', 'max_write_buffer_size', 'max_write_request_operation_count', 'max_write_request_size', 'read_poll_timeout', 'remote_cluster']
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
    const path = `/${encodeURIComponent(params.index.toString())}/_ccr/follow`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Retrieves information about all follower indices, including parameters and status for each follower index
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.13/ccr-get-follow-info.html | Elasticsearch API documentation}
    */
  async followInfo (this: That, params: T.CcrFollowInfoRequest | TB.CcrFollowInfoRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrFollowInfoResponse>
  async followInfo (this: That, params: T.CcrFollowInfoRequest | TB.CcrFollowInfoRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrFollowInfoResponse, unknown>>
  async followInfo (this: That, params: T.CcrFollowInfoRequest | TB.CcrFollowInfoRequest, options?: TransportRequestOptions): Promise<T.CcrFollowInfoResponse>
  async followInfo (this: That, params: T.CcrFollowInfoRequest | TB.CcrFollowInfoRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = `/${encodeURIComponent(params.index.toString())}/_ccr/info`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Retrieves follower stats. return shard-level stats about the following tasks associated with each shard for the specified indices.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.13/ccr-get-follow-stats.html | Elasticsearch API documentation}
    */
  async followStats (this: That, params: T.CcrFollowStatsRequest | TB.CcrFollowStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrFollowStatsResponse>
  async followStats (this: That, params: T.CcrFollowStatsRequest | TB.CcrFollowStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrFollowStatsResponse, unknown>>
  async followStats (this: That, params: T.CcrFollowStatsRequest | TB.CcrFollowStatsRequest, options?: TransportRequestOptions): Promise<T.CcrFollowStatsResponse>
  async followStats (this: That, params: T.CcrFollowStatsRequest | TB.CcrFollowStatsRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = `/${encodeURIComponent(params.index.toString())}/_ccr/stats`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Removes the follower retention leases from the leader.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.13/ccr-post-forget-follower.html | Elasticsearch API documentation}
    */
  async forgetFollower (this: That, params: T.CcrForgetFollowerRequest | TB.CcrForgetFollowerRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrForgetFollowerResponse>
  async forgetFollower (this: That, params: T.CcrForgetFollowerRequest | TB.CcrForgetFollowerRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrForgetFollowerResponse, unknown>>
  async forgetFollower (this: That, params: T.CcrForgetFollowerRequest | TB.CcrForgetFollowerRequest, options?: TransportRequestOptions): Promise<T.CcrForgetFollowerResponse>
  async forgetFollower (this: That, params: T.CcrForgetFollowerRequest | TB.CcrForgetFollowerRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const acceptedBody: string[] = ['follower_cluster', 'follower_index', 'follower_index_uuid', 'leader_remote_cluster']
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
    const path = `/${encodeURIComponent(params.index.toString())}/_ccr/forget_follower`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Gets configured auto-follow patterns. Returns the specified auto-follow pattern collection.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.13/ccr-get-auto-follow-pattern.html | Elasticsearch API documentation}
    */
  async getAutoFollowPattern (this: That, params?: T.CcrGetAutoFollowPatternRequest | TB.CcrGetAutoFollowPatternRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrGetAutoFollowPatternResponse>
  async getAutoFollowPattern (this: That, params?: T.CcrGetAutoFollowPatternRequest | TB.CcrGetAutoFollowPatternRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrGetAutoFollowPatternResponse, unknown>>
  async getAutoFollowPattern (this: That, params?: T.CcrGetAutoFollowPatternRequest | TB.CcrGetAutoFollowPatternRequest, options?: TransportRequestOptions): Promise<T.CcrGetAutoFollowPatternResponse>
  async getAutoFollowPattern (this: That, params?: T.CcrGetAutoFollowPatternRequest | TB.CcrGetAutoFollowPatternRequest, options?: TransportRequestOptions): Promise<any> {
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
      path = `/_ccr/auto_follow/${encodeURIComponent(params.name.toString())}`
    } else {
      method = 'GET'
      path = '/_ccr/auto_follow'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Pauses an auto-follow pattern
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.13/ccr-pause-auto-follow-pattern.html | Elasticsearch API documentation}
    */
  async pauseAutoFollowPattern (this: That, params: T.CcrPauseAutoFollowPatternRequest | TB.CcrPauseAutoFollowPatternRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrPauseAutoFollowPatternResponse>
  async pauseAutoFollowPattern (this: That, params: T.CcrPauseAutoFollowPatternRequest | TB.CcrPauseAutoFollowPatternRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrPauseAutoFollowPatternResponse, unknown>>
  async pauseAutoFollowPattern (this: That, params: T.CcrPauseAutoFollowPatternRequest | TB.CcrPauseAutoFollowPatternRequest, options?: TransportRequestOptions): Promise<T.CcrPauseAutoFollowPatternResponse>
  async pauseAutoFollowPattern (this: That, params: T.CcrPauseAutoFollowPatternRequest | TB.CcrPauseAutoFollowPatternRequest, options?: TransportRequestOptions): Promise<any> {
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

    const method = 'POST'
    const path = `/_ccr/auto_follow/${encodeURIComponent(params.name.toString())}/pause`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Pauses a follower index. The follower index will not fetch any additional operations from the leader index.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.13/ccr-post-pause-follow.html | Elasticsearch API documentation}
    */
  async pauseFollow (this: That, params: T.CcrPauseFollowRequest | TB.CcrPauseFollowRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrPauseFollowResponse>
  async pauseFollow (this: That, params: T.CcrPauseFollowRequest | TB.CcrPauseFollowRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrPauseFollowResponse, unknown>>
  async pauseFollow (this: That, params: T.CcrPauseFollowRequest | TB.CcrPauseFollowRequest, options?: TransportRequestOptions): Promise<T.CcrPauseFollowResponse>
  async pauseFollow (this: That, params: T.CcrPauseFollowRequest | TB.CcrPauseFollowRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = `/${encodeURIComponent(params.index.toString())}/_ccr/pause_follow`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Creates a new named collection of auto-follow patterns against a specified remote cluster. Newly created indices on the remote cluster matching any of the specified patterns will be automatically configured as follower indices.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.13/ccr-put-auto-follow-pattern.html | Elasticsearch API documentation}
    */
  async putAutoFollowPattern (this: That, params: T.CcrPutAutoFollowPatternRequest | TB.CcrPutAutoFollowPatternRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrPutAutoFollowPatternResponse>
  async putAutoFollowPattern (this: That, params: T.CcrPutAutoFollowPatternRequest | TB.CcrPutAutoFollowPatternRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrPutAutoFollowPatternResponse, unknown>>
  async putAutoFollowPattern (this: That, params: T.CcrPutAutoFollowPatternRequest | TB.CcrPutAutoFollowPatternRequest, options?: TransportRequestOptions): Promise<T.CcrPutAutoFollowPatternResponse>
  async putAutoFollowPattern (this: That, params: T.CcrPutAutoFollowPatternRequest | TB.CcrPutAutoFollowPatternRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const acceptedBody: string[] = ['remote_cluster', 'follow_index_pattern', 'leader_index_patterns', 'leader_index_exclusion_patterns', 'max_outstanding_read_requests', 'settings', 'max_outstanding_write_requests', 'read_poll_timeout', 'max_read_request_operation_count', 'max_read_request_size', 'max_retry_delay', 'max_write_buffer_count', 'max_write_buffer_size', 'max_write_request_operation_count', 'max_write_request_size']
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
    const path = `/_ccr/auto_follow/${encodeURIComponent(params.name.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Resumes an auto-follow pattern that has been paused
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.13/ccr-resume-auto-follow-pattern.html | Elasticsearch API documentation}
    */
  async resumeAutoFollowPattern (this: That, params: T.CcrResumeAutoFollowPatternRequest | TB.CcrResumeAutoFollowPatternRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrResumeAutoFollowPatternResponse>
  async resumeAutoFollowPattern (this: That, params: T.CcrResumeAutoFollowPatternRequest | TB.CcrResumeAutoFollowPatternRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrResumeAutoFollowPatternResponse, unknown>>
  async resumeAutoFollowPattern (this: That, params: T.CcrResumeAutoFollowPatternRequest | TB.CcrResumeAutoFollowPatternRequest, options?: TransportRequestOptions): Promise<T.CcrResumeAutoFollowPatternResponse>
  async resumeAutoFollowPattern (this: That, params: T.CcrResumeAutoFollowPatternRequest | TB.CcrResumeAutoFollowPatternRequest, options?: TransportRequestOptions): Promise<any> {
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

    const method = 'POST'
    const path = `/_ccr/auto_follow/${encodeURIComponent(params.name.toString())}/resume`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Resumes a follower index that has been paused
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.13/ccr-post-resume-follow.html | Elasticsearch API documentation}
    */
  async resumeFollow (this: That, params: T.CcrResumeFollowRequest | TB.CcrResumeFollowRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrResumeFollowResponse>
  async resumeFollow (this: That, params: T.CcrResumeFollowRequest | TB.CcrResumeFollowRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrResumeFollowResponse, unknown>>
  async resumeFollow (this: That, params: T.CcrResumeFollowRequest | TB.CcrResumeFollowRequest, options?: TransportRequestOptions): Promise<T.CcrResumeFollowResponse>
  async resumeFollow (this: That, params: T.CcrResumeFollowRequest | TB.CcrResumeFollowRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const acceptedBody: string[] = ['max_outstanding_read_requests', 'max_outstanding_write_requests', 'max_read_request_operation_count', 'max_read_request_size', 'max_retry_delay', 'max_write_buffer_count', 'max_write_buffer_size', 'max_write_request_operation_count', 'max_write_request_size', 'read_poll_timeout']
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
    const path = `/${encodeURIComponent(params.index.toString())}/_ccr/resume_follow`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Gets all stats related to cross-cluster replication.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.13/ccr-get-stats.html | Elasticsearch API documentation}
    */
  async stats (this: That, params?: T.CcrStatsRequest | TB.CcrStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrStatsResponse>
  async stats (this: That, params?: T.CcrStatsRequest | TB.CcrStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrStatsResponse, unknown>>
  async stats (this: That, params?: T.CcrStatsRequest | TB.CcrStatsRequest, options?: TransportRequestOptions): Promise<T.CcrStatsResponse>
  async stats (this: That, params?: T.CcrStatsRequest | TB.CcrStatsRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = '/_ccr/stats'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Stops the following task associated with a follower index and removes index metadata and settings associated with cross-cluster replication.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.13/ccr-post-unfollow.html | Elasticsearch API documentation}
    */
  async unfollow (this: That, params: T.CcrUnfollowRequest | TB.CcrUnfollowRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrUnfollowResponse>
  async unfollow (this: That, params: T.CcrUnfollowRequest | TB.CcrUnfollowRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrUnfollowResponse, unknown>>
  async unfollow (this: That, params: T.CcrUnfollowRequest | TB.CcrUnfollowRequest, options?: TransportRequestOptions): Promise<T.CcrUnfollowResponse>
  async unfollow (this: That, params: T.CcrUnfollowRequest | TB.CcrUnfollowRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = `/${encodeURIComponent(params.index.toString())}/_ccr/unfollow`
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}
