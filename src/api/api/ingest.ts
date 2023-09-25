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

export default class Ingest {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Deletes a pipeline.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.10/delete-pipeline-api.html | Elasticsearch API documentation}
    */
  async deletePipeline (this: That, params: T.IngestDeletePipelineRequest | TB.IngestDeletePipelineRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestDeletePipelineResponse>
  async deletePipeline (this: That, params: T.IngestDeletePipelineRequest | TB.IngestDeletePipelineRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestDeletePipelineResponse, unknown>>
  async deletePipeline (this: That, params: T.IngestDeletePipelineRequest | TB.IngestDeletePipelineRequest, options?: TransportRequestOptions): Promise<T.IngestDeletePipelineResponse>
  async deletePipeline (this: That, params: T.IngestDeletePipelineRequest | TB.IngestDeletePipelineRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
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
    const path = `/_ingest/pipeline/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Returns statistical information about geoip databases
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.10/geoip-processor.html | Elasticsearch API documentation}
    */
  async geoIpStats (this: That, params?: T.IngestGeoIpStatsRequest | TB.IngestGeoIpStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestGeoIpStatsResponse>
  async geoIpStats (this: That, params?: T.IngestGeoIpStatsRequest | TB.IngestGeoIpStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestGeoIpStatsResponse, unknown>>
  async geoIpStats (this: That, params?: T.IngestGeoIpStatsRequest | TB.IngestGeoIpStatsRequest, options?: TransportRequestOptions): Promise<T.IngestGeoIpStatsResponse>
  async geoIpStats (this: That, params?: T.IngestGeoIpStatsRequest | TB.IngestGeoIpStatsRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = '/_ingest/geoip/stats'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Returns a pipeline.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.10/get-pipeline-api.html | Elasticsearch API documentation}
    */
  async getPipeline (this: That, params?: T.IngestGetPipelineRequest | TB.IngestGetPipelineRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestGetPipelineResponse>
  async getPipeline (this: That, params?: T.IngestGetPipelineRequest | TB.IngestGetPipelineRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestGetPipelineResponse, unknown>>
  async getPipeline (this: That, params?: T.IngestGetPipelineRequest | TB.IngestGetPipelineRequest, options?: TransportRequestOptions): Promise<T.IngestGetPipelineResponse>
  async getPipeline (this: That, params?: T.IngestGetPipelineRequest | TB.IngestGetPipelineRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
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
    if (params.id != null) {
      method = 'GET'
      path = `/_ingest/pipeline/${encodeURIComponent(params.id.toString())}`
    } else {
      method = 'GET'
      path = '/_ingest/pipeline'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Returns a list of the built-in patterns.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.10/grok-processor.html | Elasticsearch API documentation}
    */
  async processorGrok (this: That, params?: T.IngestProcessorGrokRequest | TB.IngestProcessorGrokRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestProcessorGrokResponse>
  async processorGrok (this: That, params?: T.IngestProcessorGrokRequest | TB.IngestProcessorGrokRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestProcessorGrokResponse, unknown>>
  async processorGrok (this: That, params?: T.IngestProcessorGrokRequest | TB.IngestProcessorGrokRequest, options?: TransportRequestOptions): Promise<T.IngestProcessorGrokResponse>
  async processorGrok (this: That, params?: T.IngestProcessorGrokRequest | TB.IngestProcessorGrokRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = '/_ingest/processor/grok'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Creates or updates a pipeline.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.10/ingest.html | Elasticsearch API documentation}
    */
  async putPipeline (this: That, params: T.IngestPutPipelineRequest | TB.IngestPutPipelineRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestPutPipelineResponse>
  async putPipeline (this: That, params: T.IngestPutPipelineRequest | TB.IngestPutPipelineRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestPutPipelineResponse, unknown>>
  async putPipeline (this: That, params: T.IngestPutPipelineRequest | TB.IngestPutPipelineRequest, options?: TransportRequestOptions): Promise<T.IngestPutPipelineResponse>
  async putPipeline (this: That, params: T.IngestPutPipelineRequest | TB.IngestPutPipelineRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const acceptedBody: string[] = ['_meta', 'description', 'on_failure', 'processors', 'version']
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
    const path = `/_ingest/pipeline/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Allows to simulate a pipeline with example documents.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.10/simulate-pipeline-api.html | Elasticsearch API documentation}
    */
  async simulate (this: That, params?: T.IngestSimulateRequest | TB.IngestSimulateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestSimulateResponse>
  async simulate (this: That, params?: T.IngestSimulateRequest | TB.IngestSimulateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestSimulateResponse, unknown>>
  async simulate (this: That, params?: T.IngestSimulateRequest | TB.IngestSimulateRequest, options?: TransportRequestOptions): Promise<T.IngestSimulateResponse>
  async simulate (this: That, params?: T.IngestSimulateRequest | TB.IngestSimulateRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const acceptedBody: string[] = ['docs', 'pipeline']
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
    if (params.id != null) {
      method = body != null ? 'POST' : 'GET'
      path = `/_ingest/pipeline/${encodeURIComponent(params.id.toString())}/_simulate`
    } else {
      method = body != null ? 'POST' : 'GET'
      path = '/_ingest/pipeline/_simulate'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}
