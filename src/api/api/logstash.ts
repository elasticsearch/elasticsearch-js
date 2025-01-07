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

export default class Logstash {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Delete a Logstash pipeline. Delete a pipeline that is used for Logstash Central Management.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/logstash-api-delete-pipeline.html | Elasticsearch API documentation}
    */
  async deletePipeline (this: That, params: T.LogstashDeletePipelineRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LogstashDeletePipelineResponse>
  async deletePipeline (this: That, params: T.LogstashDeletePipelineRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LogstashDeletePipelineResponse, unknown>>
  async deletePipeline (this: That, params: T.LogstashDeletePipelineRequest, options?: TransportRequestOptions): Promise<T.LogstashDeletePipelineResponse>
  async deletePipeline (this: That, params: T.LogstashDeletePipelineRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = `/_logstash/pipeline/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'logstash.delete_pipeline',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get Logstash pipelines. Get pipelines that are used for Logstash Central Management.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/logstash-api-get-pipeline.html | Elasticsearch API documentation}
    */
  async getPipeline (this: That, params?: T.LogstashGetPipelineRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LogstashGetPipelineResponse>
  async getPipeline (this: That, params?: T.LogstashGetPipelineRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LogstashGetPipelineResponse, unknown>>
  async getPipeline (this: That, params?: T.LogstashGetPipelineRequest, options?: TransportRequestOptions): Promise<T.LogstashGetPipelineResponse>
  async getPipeline (this: That, params?: T.LogstashGetPipelineRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
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
    if (params.id != null) {
      method = 'GET'
      path = `/_logstash/pipeline/${encodeURIComponent(params.id.toString())}`
    } else {
      method = 'GET'
      path = '/_logstash/pipeline'
    }
    const meta: TransportRequestMetadata = {
      name: 'logstash.get_pipeline',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Create or update a Logstash pipeline. Create a pipeline that is used for Logstash Central Management. If the specified pipeline exists, it is replaced.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/logstash-api-put-pipeline.html | Elasticsearch API documentation}
    */
  async putPipeline (this: That, params: T.LogstashPutPipelineRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LogstashPutPipelineResponse>
  async putPipeline (this: That, params: T.LogstashPutPipelineRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LogstashPutPipelineResponse, unknown>>
  async putPipeline (this: That, params: T.LogstashPutPipelineRequest, options?: TransportRequestOptions): Promise<T.LogstashPutPipelineResponse>
  async putPipeline (this: That, params: T.LogstashPutPipelineRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const acceptedBody: string[] = ['pipeline']
    const querystring: Record<string, any> = {}
    let body: any

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = `/_logstash/pipeline/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'logstash.put_pipeline',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
