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

export default class Fleet {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Deletes a secret stored by Fleet.
    */
  async deleteSecret (this: That, params?: T.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async deleteSecret (this: That, params?: T.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async deleteSecret (this: That, params?: T.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async deleteSecret (this: That, params?: T.TODO, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
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
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_fleet/secret/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'fleet.delete_secret',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Retrieves a secret stored by Fleet.
    */
  async getSecret (this: That, params?: T.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async getSecret (this: That, params?: T.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async getSecret (this: That, params?: T.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async getSecret (this: That, params?: T.TODO, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
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
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = `/_fleet/secret/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'fleet.get_secret',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get global checkpoints. Get the current global checkpoints for an index. This API is designed for internal use by the Fleet server project.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/get-global-checkpoints.html | Elasticsearch API documentation}
    */
  async globalCheckpoints (this: That, params: T.FleetGlobalCheckpointsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.FleetGlobalCheckpointsResponse>
  async globalCheckpoints (this: That, params: T.FleetGlobalCheckpointsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.FleetGlobalCheckpointsResponse, unknown>>
  async globalCheckpoints (this: That, params: T.FleetGlobalCheckpointsRequest, options?: TransportRequestOptions): Promise<T.FleetGlobalCheckpointsResponse>
  async globalCheckpoints (this: That, params: T.FleetGlobalCheckpointsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
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

    const method = 'GET'
    const path = `/${encodeURIComponent(params.index.toString())}/_fleet/global_checkpoints`
    const meta: TransportRequestMetadata = {
      name: 'fleet.global_checkpoints',
      pathParts: {
        index: params.index
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Run multiple Fleet searches. Run several Fleet searches with a single API request. The API follows the same structure as the multi search API. However, similar to the Fleet search API, it supports the `wait_for_checkpoints` parameter.
    */
  async msearch<TDocument = unknown> (this: That, params: T.FleetMsearchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.FleetMsearchResponse<TDocument>>
  async msearch<TDocument = unknown> (this: That, params: T.FleetMsearchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.FleetMsearchResponse<TDocument>, unknown>>
  async msearch<TDocument = unknown> (this: That, params: T.FleetMsearchRequest, options?: TransportRequestOptions): Promise<T.FleetMsearchResponse<TDocument>>
  async msearch<TDocument = unknown> (this: That, params: T.FleetMsearchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const acceptedBody: string[] = ['searches']
    const userQuery = params?.querystring
    const querystring: Record<string, any> = userQuery != null ? { ...userQuery } : {}

    let body: any = params.body ?? undefined
    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body' && key !== 'querystring') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.index != null) {
      method = body != null ? 'POST' : 'GET'
      path = `/${encodeURIComponent(params.index.toString())}/_fleet/_fleet_msearch`
    } else {
      method = body != null ? 'POST' : 'GET'
      path = '/_fleet/_fleet_msearch'
    }
    const meta: TransportRequestMetadata = {
      name: 'fleet.msearch',
      pathParts: {
        index: params.index
      }
    }
    return await this.transport.request({ path, method, querystring, bulkBody: body, meta }, options)
  }

  /**
    * Creates a secret stored by Fleet.
    */
  async postSecret (this: That, params?: T.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async postSecret (this: That, params?: T.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async postSecret (this: That, params?: T.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async postSecret (this: That, params?: T.TODO, options?: TransportRequestOptions): Promise<any> {
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
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = '/_fleet/secret'
    const meta: TransportRequestMetadata = {
      name: 'fleet.post_secret'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Run a Fleet search. The purpose of the Fleet search API is to provide an API where the search will be run only after the provided checkpoint has been processed and is visible for searches inside of Elasticsearch.
    */
  async search<TDocument = unknown> (this: That, params: T.FleetSearchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.FleetSearchResponse<TDocument>>
  async search<TDocument = unknown> (this: That, params: T.FleetSearchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.FleetSearchResponse<TDocument>, unknown>>
  async search<TDocument = unknown> (this: That, params: T.FleetSearchRequest, options?: TransportRequestOptions): Promise<T.FleetSearchResponse<TDocument>>
  async search<TDocument = unknown> (this: That, params: T.FleetSearchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const acceptedBody: string[] = ['aggregations', 'aggs', 'collapse', 'explain', 'ext', 'from', 'highlight', 'track_total_hits', 'indices_boost', 'docvalue_fields', 'min_score', 'post_filter', 'profile', 'query', 'rescore', 'script_fields', 'search_after', 'size', 'slice', 'sort', '_source', 'fields', 'suggest', 'terminate_after', 'timeout', 'track_scores', 'version', 'seq_no_primary_term', 'stored_fields', 'pit', 'runtime_mappings', 'stats']
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

    const method = body != null ? 'POST' : 'GET'
    const path = `/${encodeURIComponent(params.index.toString())}/_fleet/_fleet_search`
    const meta: TransportRequestMetadata = {
      name: 'fleet.search',
      pathParts: {
        index: params.index
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
