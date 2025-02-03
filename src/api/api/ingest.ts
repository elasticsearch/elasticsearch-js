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

export default class Ingest {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Delete GeoIP database configurations. Delete one or more IP geolocation database configurations.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-ingest-delete-geoip-database | Elasticsearch API documentation}
    */
  async deleteGeoipDatabase (this: That, params: T.IngestDeleteGeoipDatabaseRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestDeleteGeoipDatabaseResponse>
  async deleteGeoipDatabase (this: That, params: T.IngestDeleteGeoipDatabaseRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestDeleteGeoipDatabaseResponse, unknown>>
  async deleteGeoipDatabase (this: That, params: T.IngestDeleteGeoipDatabaseRequest, options?: TransportRequestOptions): Promise<T.IngestDeleteGeoipDatabaseResponse>
  async deleteGeoipDatabase (this: That, params: T.IngestDeleteGeoipDatabaseRequest, options?: TransportRequestOptions): Promise<any> {
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

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body' && key !== 'querystring') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_ingest/geoip/database/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'ingest.delete_geoip_database',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Delete IP geolocation database configurations.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-ingest-delete-ip-location-database | Elasticsearch API documentation}
    */
  async deleteIpLocationDatabase (this: That, params: T.IngestDeleteIpLocationDatabaseRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestDeleteIpLocationDatabaseResponse>
  async deleteIpLocationDatabase (this: That, params: T.IngestDeleteIpLocationDatabaseRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestDeleteIpLocationDatabaseResponse, unknown>>
  async deleteIpLocationDatabase (this: That, params: T.IngestDeleteIpLocationDatabaseRequest, options?: TransportRequestOptions): Promise<T.IngestDeleteIpLocationDatabaseResponse>
  async deleteIpLocationDatabase (this: That, params: T.IngestDeleteIpLocationDatabaseRequest, options?: TransportRequestOptions): Promise<any> {
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

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body' && key !== 'querystring') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_ingest/ip_location/database/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'ingest.delete_ip_location_database',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Delete pipelines. Delete one or more ingest pipelines.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-ingest-delete-pipeline | Elasticsearch API documentation}
    */
  async deletePipeline (this: That, params: T.IngestDeletePipelineRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestDeletePipelineResponse>
  async deletePipeline (this: That, params: T.IngestDeletePipelineRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestDeletePipelineResponse, unknown>>
  async deletePipeline (this: That, params: T.IngestDeletePipelineRequest, options?: TransportRequestOptions): Promise<T.IngestDeletePipelineResponse>
  async deletePipeline (this: That, params: T.IngestDeletePipelineRequest, options?: TransportRequestOptions): Promise<any> {
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

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body' && key !== 'querystring') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_ingest/pipeline/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'ingest.delete_pipeline',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get GeoIP statistics. Get download statistics for GeoIP2 databases that are used with the GeoIP processor.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/geoip-processor.html | Elasticsearch API documentation}
    */
  async geoIpStats (this: That, params?: T.IngestGeoIpStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestGeoIpStatsResponse>
  async geoIpStats (this: That, params?: T.IngestGeoIpStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestGeoIpStatsResponse, unknown>>
  async geoIpStats (this: That, params?: T.IngestGeoIpStatsRequest, options?: TransportRequestOptions): Promise<T.IngestGeoIpStatsResponse>
  async geoIpStats (this: That, params?: T.IngestGeoIpStatsRequest, options?: TransportRequestOptions): Promise<any> {
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
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_ingest/geoip/stats'
    const meta: TransportRequestMetadata = {
      name: 'ingest.geo_ip_stats'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get GeoIP database configurations. Get information about one or more IP geolocation database configurations.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-ingest-get-geoip-database | Elasticsearch API documentation}
    */
  async getGeoipDatabase (this: That, params?: T.IngestGetGeoipDatabaseRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestGetGeoipDatabaseResponse>
  async getGeoipDatabase (this: That, params?: T.IngestGetGeoipDatabaseRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestGetGeoipDatabaseResponse, unknown>>
  async getGeoipDatabase (this: That, params?: T.IngestGetGeoipDatabaseRequest, options?: TransportRequestOptions): Promise<T.IngestGetGeoipDatabaseResponse>
  async getGeoipDatabase (this: That, params?: T.IngestGetGeoipDatabaseRequest, options?: TransportRequestOptions): Promise<any> {
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
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.id != null) {
      method = 'GET'
      path = `/_ingest/geoip/database/${encodeURIComponent(params.id.toString())}`
    } else {
      method = 'GET'
      path = '/_ingest/geoip/database'
    }
    const meta: TransportRequestMetadata = {
      name: 'ingest.get_geoip_database',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get IP geolocation database configurations.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-ingest-get-ip-location-database | Elasticsearch API documentation}
    */
  async getIpLocationDatabase (this: That, params?: T.IngestGetIpLocationDatabaseRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestGetIpLocationDatabaseResponse>
  async getIpLocationDatabase (this: That, params?: T.IngestGetIpLocationDatabaseRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestGetIpLocationDatabaseResponse, unknown>>
  async getIpLocationDatabase (this: That, params?: T.IngestGetIpLocationDatabaseRequest, options?: TransportRequestOptions): Promise<T.IngestGetIpLocationDatabaseResponse>
  async getIpLocationDatabase (this: That, params?: T.IngestGetIpLocationDatabaseRequest, options?: TransportRequestOptions): Promise<any> {
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
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.id != null) {
      method = 'GET'
      path = `/_ingest/ip_location/database/${encodeURIComponent(params.id.toString())}`
    } else {
      method = 'GET'
      path = '/_ingest/ip_location/database'
    }
    const meta: TransportRequestMetadata = {
      name: 'ingest.get_ip_location_database',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get pipelines. Get information about one or more ingest pipelines. This API returns a local reference of the pipeline.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-ingest-get-pipeline | Elasticsearch API documentation}
    */
  async getPipeline (this: That, params?: T.IngestGetPipelineRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestGetPipelineResponse>
  async getPipeline (this: That, params?: T.IngestGetPipelineRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestGetPipelineResponse, unknown>>
  async getPipeline (this: That, params?: T.IngestGetPipelineRequest, options?: TransportRequestOptions): Promise<T.IngestGetPipelineResponse>
  async getPipeline (this: That, params?: T.IngestGetPipelineRequest, options?: TransportRequestOptions): Promise<any> {
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
    const meta: TransportRequestMetadata = {
      name: 'ingest.get_pipeline',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Run a grok processor. Extract structured fields out of a single text field within a document. You must choose which field to extract matched fields from, as well as the grok pattern you expect will match. A grok pattern is like a regular expression that supports aliased expressions that can be reused.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/grok-processor.html | Elasticsearch API documentation}
    */
  async processorGrok (this: That, params?: T.IngestProcessorGrokRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestProcessorGrokResponse>
  async processorGrok (this: That, params?: T.IngestProcessorGrokRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestProcessorGrokResponse, unknown>>
  async processorGrok (this: That, params?: T.IngestProcessorGrokRequest, options?: TransportRequestOptions): Promise<T.IngestProcessorGrokResponse>
  async processorGrok (this: That, params?: T.IngestProcessorGrokRequest, options?: TransportRequestOptions): Promise<any> {
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
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_ingest/processor/grok'
    const meta: TransportRequestMetadata = {
      name: 'ingest.processor_grok'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Create or update a GeoIP database configuration. Refer to the create or update IP geolocation database configuration API.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-ingest-put-geoip-database | Elasticsearch API documentation}
    */
  async putGeoipDatabase (this: That, params: T.IngestPutGeoipDatabaseRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestPutGeoipDatabaseResponse>
  async putGeoipDatabase (this: That, params: T.IngestPutGeoipDatabaseRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestPutGeoipDatabaseResponse, unknown>>
  async putGeoipDatabase (this: That, params: T.IngestPutGeoipDatabaseRequest, options?: TransportRequestOptions): Promise<T.IngestPutGeoipDatabaseResponse>
  async putGeoipDatabase (this: That, params: T.IngestPutGeoipDatabaseRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const acceptedBody: string[] = ['name', 'maxmind']
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

    const method = 'PUT'
    const path = `/_ingest/geoip/database/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'ingest.put_geoip_database',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Create or update an IP geolocation database configuration.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-ingest-put-ip-location-database | Elasticsearch API documentation}
    */
  async putIpLocationDatabase (this: That, params: T.IngestPutIpLocationDatabaseRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestPutIpLocationDatabaseResponse>
  async putIpLocationDatabase (this: That, params: T.IngestPutIpLocationDatabaseRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestPutIpLocationDatabaseResponse, unknown>>
  async putIpLocationDatabase (this: That, params: T.IngestPutIpLocationDatabaseRequest, options?: TransportRequestOptions): Promise<T.IngestPutIpLocationDatabaseResponse>
  async putIpLocationDatabase (this: That, params: T.IngestPutIpLocationDatabaseRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const acceptedBody: string[] = ['configuration']
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

    const method = 'PUT'
    const path = `/_ingest/ip_location/database/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'ingest.put_ip_location_database',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Create or update a pipeline. Changes made using this API take effect immediately.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/ingest.html | Elasticsearch API documentation}
    */
  async putPipeline (this: That, params: T.IngestPutPipelineRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestPutPipelineResponse>
  async putPipeline (this: That, params: T.IngestPutPipelineRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestPutPipelineResponse, unknown>>
  async putPipeline (this: That, params: T.IngestPutPipelineRequest, options?: TransportRequestOptions): Promise<T.IngestPutPipelineResponse>
  async putPipeline (this: That, params: T.IngestPutPipelineRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const acceptedBody: string[] = ['_meta', 'description', 'on_failure', 'processors', 'version', 'deprecated']
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

    const method = 'PUT'
    const path = `/_ingest/pipeline/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'ingest.put_pipeline',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Simulate a pipeline. Run an ingest pipeline against a set of provided documents. You can either specify an existing pipeline to use with the provided documents or supply a pipeline definition in the body of the request.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-ingest-simulate | Elasticsearch API documentation}
    */
  async simulate (this: That, params: T.IngestSimulateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestSimulateResponse>
  async simulate (this: That, params: T.IngestSimulateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestSimulateResponse, unknown>>
  async simulate (this: That, params: T.IngestSimulateRequest, options?: TransportRequestOptions): Promise<T.IngestSimulateResponse>
  async simulate (this: That, params: T.IngestSimulateRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const acceptedBody: string[] = ['docs', 'pipeline']
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

    let method = ''
    let path = ''
    if (params.id != null) {
      method = body != null ? 'POST' : 'GET'
      path = `/_ingest/pipeline/${encodeURIComponent(params.id.toString())}/_simulate`
    } else {
      method = body != null ? 'POST' : 'GET'
      path = '/_ingest/pipeline/_simulate'
    }
    const meta: TransportRequestMetadata = {
      name: 'ingest.simulate',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
