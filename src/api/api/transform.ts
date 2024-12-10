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

export default class Transform {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Delete a transform. Deletes a transform.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/delete-transform.html | Elasticsearch API documentation}
    */
  async deleteTransform (this: That, params: T.TransformDeleteTransformRequest | TB.TransformDeleteTransformRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.TransformDeleteTransformResponse>
  async deleteTransform (this: That, params: T.TransformDeleteTransformRequest | TB.TransformDeleteTransformRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TransformDeleteTransformResponse, unknown>>
  async deleteTransform (this: That, params: T.TransformDeleteTransformRequest | TB.TransformDeleteTransformRequest, options?: TransportRequestOptions): Promise<T.TransformDeleteTransformResponse>
  async deleteTransform (this: That, params: T.TransformDeleteTransformRequest | TB.TransformDeleteTransformRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['transform_id']
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
    const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'transform.delete_transform',
      pathParts: {
        transform_id: params.transform_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Retrieves transform usage information for transform nodes.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/get-transform-node-stats.html | Elasticsearch API documentation}
    */
  async getNodeStats (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async getNodeStats (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async getNodeStats (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async getNodeStats (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_transform/_node_stats'
    const meta: TransportRequestMetadata = {
      name: 'transform.get_node_stats'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get transforms. Retrieves configuration information for transforms.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/get-transform.html | Elasticsearch API documentation}
    */
  async getTransform (this: That, params?: T.TransformGetTransformRequest | TB.TransformGetTransformRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.TransformGetTransformResponse>
  async getTransform (this: That, params?: T.TransformGetTransformRequest | TB.TransformGetTransformRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TransformGetTransformResponse, unknown>>
  async getTransform (this: That, params?: T.TransformGetTransformRequest | TB.TransformGetTransformRequest, options?: TransportRequestOptions): Promise<T.TransformGetTransformResponse>
  async getTransform (this: That, params?: T.TransformGetTransformRequest | TB.TransformGetTransformRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['transform_id']
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
    if (params.transform_id != null) {
      method = 'GET'
      path = `/_transform/${encodeURIComponent(params.transform_id.toString())}`
    } else {
      method = 'GET'
      path = '/_transform'
    }
    const meta: TransportRequestMetadata = {
      name: 'transform.get_transform',
      pathParts: {
        transform_id: params.transform_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get transform stats. Retrieves usage information for transforms.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/get-transform-stats.html | Elasticsearch API documentation}
    */
  async getTransformStats (this: That, params: T.TransformGetTransformStatsRequest | TB.TransformGetTransformStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.TransformGetTransformStatsResponse>
  async getTransformStats (this: That, params: T.TransformGetTransformStatsRequest | TB.TransformGetTransformStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TransformGetTransformStatsResponse, unknown>>
  async getTransformStats (this: That, params: T.TransformGetTransformStatsRequest | TB.TransformGetTransformStatsRequest, options?: TransportRequestOptions): Promise<T.TransformGetTransformStatsResponse>
  async getTransformStats (this: That, params: T.TransformGetTransformStatsRequest | TB.TransformGetTransformStatsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['transform_id']
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
    const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}/_stats`
    const meta: TransportRequestMetadata = {
      name: 'transform.get_transform_stats',
      pathParts: {
        transform_id: params.transform_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Preview a transform. Generates a preview of the results that you will get when you create a transform with the same configuration. It returns a maximum of 100 results. The calculations are based on all the current data in the source index. It also generates a list of mappings and settings for the destination index. These values are determined based on the field types of the source index and the transform aggregations.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/preview-transform.html | Elasticsearch API documentation}
    */
  async previewTransform<TTransform = unknown> (this: That, params?: T.TransformPreviewTransformRequest | TB.TransformPreviewTransformRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.TransformPreviewTransformResponse<TTransform>>
  async previewTransform<TTransform = unknown> (this: That, params?: T.TransformPreviewTransformRequest | TB.TransformPreviewTransformRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TransformPreviewTransformResponse<TTransform>, unknown>>
  async previewTransform<TTransform = unknown> (this: That, params?: T.TransformPreviewTransformRequest | TB.TransformPreviewTransformRequest, options?: TransportRequestOptions): Promise<T.TransformPreviewTransformResponse<TTransform>>
  async previewTransform<TTransform = unknown> (this: That, params?: T.TransformPreviewTransformRequest | TB.TransformPreviewTransformRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['transform_id']
    const acceptedBody: string[] = ['dest', 'description', 'frequency', 'pivot', 'source', 'settings', 'sync', 'retention_policy', 'latest']
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
    if (params.transform_id != null) {
      method = body != null ? 'POST' : 'GET'
      path = `/_transform/${encodeURIComponent(params.transform_id.toString())}/_preview`
    } else {
      method = body != null ? 'POST' : 'GET'
      path = '/_transform/_preview'
    }
    const meta: TransportRequestMetadata = {
      name: 'transform.preview_transform',
      pathParts: {
        transform_id: params.transform_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Create a transform. Creates a transform. A transform copies data from source indices, transforms it, and persists it into an entity-centric destination index. You can also think of the destination index as a two-dimensional tabular data structure (known as a data frame). The ID for each document in the data frame is generated from a hash of the entity, so there is a unique row per entity. You must choose either the latest or pivot method for your transform; you cannot use both in a single transform. If you choose to use the pivot method for your transform, the entities are defined by the set of `group_by` fields in the pivot object. If you choose to use the latest method, the entities are defined by the `unique_key` field values in the latest object. You must have `create_index`, `index`, and `read` privileges on the destination index and `read` and `view_index_metadata` privileges on the source indices. When Elasticsearch security features are enabled, the transform remembers which roles the user that created it had at the time of creation and uses those same roles. If those roles do not have the required privileges on the source and destination indices, the transform fails when it attempts unauthorized operations. NOTE: You must use Kibana or this API to create a transform. Do not add a transform directly into any `.transform-internal*` indices using the Elasticsearch index API. If Elasticsearch security features are enabled, do not give users any privileges on `.transform-internal*` indices. If you used transforms prior to 7.5, also do not give users any privileges on `.data-frame-internal*` indices.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/put-transform.html | Elasticsearch API documentation}
    */
  async putTransform (this: That, params: T.TransformPutTransformRequest | TB.TransformPutTransformRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.TransformPutTransformResponse>
  async putTransform (this: That, params: T.TransformPutTransformRequest | TB.TransformPutTransformRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TransformPutTransformResponse, unknown>>
  async putTransform (this: That, params: T.TransformPutTransformRequest | TB.TransformPutTransformRequest, options?: TransportRequestOptions): Promise<T.TransformPutTransformResponse>
  async putTransform (this: That, params: T.TransformPutTransformRequest | TB.TransformPutTransformRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['transform_id']
    const acceptedBody: string[] = ['dest', 'description', 'frequency', 'latest', '_meta', 'pivot', 'retention_policy', 'settings', 'source', 'sync']
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
    const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'transform.put_transform',
      pathParts: {
        transform_id: params.transform_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Reset a transform. Resets a transform. Before you can reset it, you must stop it; alternatively, use the `force` query parameter. If the destination index was created by the transform, it is deleted.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/reset-transform.html | Elasticsearch API documentation}
    */
  async resetTransform (this: That, params: T.TransformResetTransformRequest | TB.TransformResetTransformRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.TransformResetTransformResponse>
  async resetTransform (this: That, params: T.TransformResetTransformRequest | TB.TransformResetTransformRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TransformResetTransformResponse, unknown>>
  async resetTransform (this: That, params: T.TransformResetTransformRequest | TB.TransformResetTransformRequest, options?: TransportRequestOptions): Promise<T.TransformResetTransformResponse>
  async resetTransform (this: That, params: T.TransformResetTransformRequest | TB.TransformResetTransformRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['transform_id']
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
    const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}/_reset`
    const meta: TransportRequestMetadata = {
      name: 'transform.reset_transform',
      pathParts: {
        transform_id: params.transform_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Schedule a transform to start now. Instantly runs a transform to process data. If you _schedule_now a transform, it will process the new data instantly, without waiting for the configured frequency interval. After _schedule_now API is called, the transform will be processed again at now + frequency unless _schedule_now API is called again in the meantime.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/schedule-now-transform.html | Elasticsearch API documentation}
    */
  async scheduleNowTransform (this: That, params: T.TransformScheduleNowTransformRequest | TB.TransformScheduleNowTransformRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.TransformScheduleNowTransformResponse>
  async scheduleNowTransform (this: That, params: T.TransformScheduleNowTransformRequest | TB.TransformScheduleNowTransformRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TransformScheduleNowTransformResponse, unknown>>
  async scheduleNowTransform (this: That, params: T.TransformScheduleNowTransformRequest | TB.TransformScheduleNowTransformRequest, options?: TransportRequestOptions): Promise<T.TransformScheduleNowTransformResponse>
  async scheduleNowTransform (this: That, params: T.TransformScheduleNowTransformRequest | TB.TransformScheduleNowTransformRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['transform_id']
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
    const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}/_schedule_now`
    const meta: TransportRequestMetadata = {
      name: 'transform.schedule_now_transform',
      pathParts: {
        transform_id: params.transform_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Start a transform. Starts a transform. When you start a transform, it creates the destination index if it does not already exist. The `number_of_shards` is set to `1` and the `auto_expand_replicas` is set to `0-1`. If it is a pivot transform, it deduces the mapping definitions for the destination index from the source indices and the transform aggregations. If fields in the destination index are derived from scripts (as in the case of `scripted_metric` or `bucket_script` aggregations), the transform uses dynamic mappings unless an index template exists. If it is a latest transform, it does not deduce mapping definitions; it uses dynamic mappings. To use explicit mappings, create the destination index before you start the transform. Alternatively, you can create an index template, though it does not affect the deduced mappings in a pivot transform. When the transform starts, a series of validations occur to ensure its success. If you deferred validation when you created the transform, they occur when you start the transform—with the exception of privilege checks. When Elasticsearch security features are enabled, the transform remembers which roles the user that created it had at the time of creation and uses those same roles. If those roles do not have the required privileges on the source and destination indices, the transform fails when it attempts unauthorized operations.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/start-transform.html | Elasticsearch API documentation}
    */
  async startTransform (this: That, params: T.TransformStartTransformRequest | TB.TransformStartTransformRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.TransformStartTransformResponse>
  async startTransform (this: That, params: T.TransformStartTransformRequest | TB.TransformStartTransformRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TransformStartTransformResponse, unknown>>
  async startTransform (this: That, params: T.TransformStartTransformRequest | TB.TransformStartTransformRequest, options?: TransportRequestOptions): Promise<T.TransformStartTransformResponse>
  async startTransform (this: That, params: T.TransformStartTransformRequest | TB.TransformStartTransformRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['transform_id']
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
    const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}/_start`
    const meta: TransportRequestMetadata = {
      name: 'transform.start_transform',
      pathParts: {
        transform_id: params.transform_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Stop transforms. Stops one or more transforms.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/stop-transform.html | Elasticsearch API documentation}
    */
  async stopTransform (this: That, params: T.TransformStopTransformRequest | TB.TransformStopTransformRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.TransformStopTransformResponse>
  async stopTransform (this: That, params: T.TransformStopTransformRequest | TB.TransformStopTransformRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TransformStopTransformResponse, unknown>>
  async stopTransform (this: That, params: T.TransformStopTransformRequest | TB.TransformStopTransformRequest, options?: TransportRequestOptions): Promise<T.TransformStopTransformResponse>
  async stopTransform (this: That, params: T.TransformStopTransformRequest | TB.TransformStopTransformRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['transform_id']
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
    const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}/_stop`
    const meta: TransportRequestMetadata = {
      name: 'transform.stop_transform',
      pathParts: {
        transform_id: params.transform_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Update a transform. Updates certain properties of a transform. All updated properties except `description` do not take effect until after the transform starts the next checkpoint, thus there is data consistency in each checkpoint. To use this API, you must have `read` and `view_index_metadata` privileges for the source indices. You must also have `index` and `read` privileges for the destination index. When Elasticsearch security features are enabled, the transform remembers which roles the user who updated it had at the time of update and runs with those privileges.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/update-transform.html | Elasticsearch API documentation}
    */
  async updateTransform (this: That, params: T.TransformUpdateTransformRequest | TB.TransformUpdateTransformRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.TransformUpdateTransformResponse>
  async updateTransform (this: That, params: T.TransformUpdateTransformRequest | TB.TransformUpdateTransformRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TransformUpdateTransformResponse, unknown>>
  async updateTransform (this: That, params: T.TransformUpdateTransformRequest | TB.TransformUpdateTransformRequest, options?: TransportRequestOptions): Promise<T.TransformUpdateTransformResponse>
  async updateTransform (this: That, params: T.TransformUpdateTransformRequest | TB.TransformUpdateTransformRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['transform_id']
    const acceptedBody: string[] = ['dest', 'description', 'frequency', '_meta', 'source', 'settings', 'sync', 'retention_policy']
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
    const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}/_update`
    const meta: TransportRequestMetadata = {
      name: 'transform.update_transform',
      pathParts: {
        transform_id: params.transform_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Upgrades all transforms. This API identifies transforms that have a legacy configuration format and upgrades them to the latest version. It also cleans up the internal data structures that store the transform state and checkpoints. The upgrade does not affect the source and destination indices. The upgrade also does not affect the roles that transforms use when Elasticsearch security features are enabled; the role used to read source data and write to the destination index remains unchanged.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/upgrade-transforms.html | Elasticsearch API documentation}
    */
  async upgradeTransforms (this: That, params?: T.TransformUpgradeTransformsRequest | TB.TransformUpgradeTransformsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.TransformUpgradeTransformsResponse>
  async upgradeTransforms (this: That, params?: T.TransformUpgradeTransformsRequest | TB.TransformUpgradeTransformsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TransformUpgradeTransformsResponse, unknown>>
  async upgradeTransforms (this: That, params?: T.TransformUpgradeTransformsRequest | TB.TransformUpgradeTransformsRequest, options?: TransportRequestOptions): Promise<T.TransformUpgradeTransformsResponse>
  async upgradeTransforms (this: That, params?: T.TransformUpgradeTransformsRequest | TB.TransformUpgradeTransformsRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = '/_transform/_upgrade'
    const meta: TransportRequestMetadata = {
      name: 'transform.upgrade_transforms'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
