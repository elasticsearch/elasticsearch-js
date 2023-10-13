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

export default class Synonyms {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Deletes a synonym set
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.11/delete-synonyms-set.html | Elasticsearch API documentation}
    */
  async deleteSynonym (this: That, params: T.SynonymsDeleteSynonymRequest | TB.SynonymsDeleteSynonymRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SynonymsDeleteSynonymResponse>
  async deleteSynonym (this: That, params: T.SynonymsDeleteSynonymRequest | TB.SynonymsDeleteSynonymRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SynonymsDeleteSynonymResponse, unknown>>
  async deleteSynonym (this: That, params: T.SynonymsDeleteSynonymRequest | TB.SynonymsDeleteSynonymRequest, options?: TransportRequestOptions): Promise<T.SynonymsDeleteSynonymResponse>
  async deleteSynonym (this: That, params: T.SynonymsDeleteSynonymRequest | TB.SynonymsDeleteSynonymRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = `/_synonyms/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Deletes a synonym rule in a synonym set
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.11/delete-synonym-rule.html | Elasticsearch API documentation}
    */
  async deleteSynonymRule (this: That, params: T.SynonymsDeleteSynonymRuleRequest | TB.SynonymsDeleteSynonymRuleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SynonymsDeleteSynonymRuleResponse>
  async deleteSynonymRule (this: That, params: T.SynonymsDeleteSynonymRuleRequest | TB.SynonymsDeleteSynonymRuleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SynonymsDeleteSynonymRuleResponse, unknown>>
  async deleteSynonymRule (this: That, params: T.SynonymsDeleteSynonymRuleRequest | TB.SynonymsDeleteSynonymRuleRequest, options?: TransportRequestOptions): Promise<T.SynonymsDeleteSynonymRuleResponse>
  async deleteSynonymRule (this: That, params: T.SynonymsDeleteSynonymRuleRequest | TB.SynonymsDeleteSynonymRuleRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['set_id', 'rule_id']
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
    const path = `/_synonyms/${encodeURIComponent(params.set_id.toString())}/${encodeURIComponent(params.rule_id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Retrieves a synonym set
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.11/get-synonyms-set.html | Elasticsearch API documentation}
    */
  async getSynonym (this: That, params: T.SynonymsGetSynonymRequest | TB.SynonymsGetSynonymRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SynonymsGetSynonymResponse>
  async getSynonym (this: That, params: T.SynonymsGetSynonymRequest | TB.SynonymsGetSynonymRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SynonymsGetSynonymResponse, unknown>>
  async getSynonym (this: That, params: T.SynonymsGetSynonymRequest | TB.SynonymsGetSynonymRequest, options?: TransportRequestOptions): Promise<T.SynonymsGetSynonymResponse>
  async getSynonym (this: That, params: T.SynonymsGetSynonymRequest | TB.SynonymsGetSynonymRequest, options?: TransportRequestOptions): Promise<any> {
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

    const method = 'GET'
    const path = `/_synonyms/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Retrieves a synonym rule from a synonym set
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.11/get-synonym-rule.html | Elasticsearch API documentation}
    */
  async getSynonymRule (this: That, params: T.SynonymsGetSynonymRuleRequest | TB.SynonymsGetSynonymRuleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SynonymsGetSynonymRuleResponse>
  async getSynonymRule (this: That, params: T.SynonymsGetSynonymRuleRequest | TB.SynonymsGetSynonymRuleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SynonymsGetSynonymRuleResponse, unknown>>
  async getSynonymRule (this: That, params: T.SynonymsGetSynonymRuleRequest | TB.SynonymsGetSynonymRuleRequest, options?: TransportRequestOptions): Promise<T.SynonymsGetSynonymRuleResponse>
  async getSynonymRule (this: That, params: T.SynonymsGetSynonymRuleRequest | TB.SynonymsGetSynonymRuleRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['set_id', 'rule_id']
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
    const path = `/_synonyms/${encodeURIComponent(params.set_id.toString())}/${encodeURIComponent(params.rule_id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Retrieves a summary of all defined synonym sets
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.11/list-synonyms-sets.html | Elasticsearch API documentation}
    */
  async getSynonymsSets (this: That, params?: T.SynonymsGetSynonymsSetsRequest | TB.SynonymsGetSynonymsSetsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SynonymsGetSynonymsSetsResponse>
  async getSynonymsSets (this: That, params?: T.SynonymsGetSynonymsSetsRequest | TB.SynonymsGetSynonymsSetsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SynonymsGetSynonymsSetsResponse, unknown>>
  async getSynonymsSets (this: That, params?: T.SynonymsGetSynonymsSetsRequest | TB.SynonymsGetSynonymsSetsRequest, options?: TransportRequestOptions): Promise<T.SynonymsGetSynonymsSetsResponse>
  async getSynonymsSets (this: That, params?: T.SynonymsGetSynonymsSetsRequest | TB.SynonymsGetSynonymsSetsRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = '/_synonyms'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Creates or updates a synonyms set
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.11/put-synonyms-set.html | Elasticsearch API documentation}
    */
  async putSynonym (this: That, params: T.SynonymsPutSynonymRequest | TB.SynonymsPutSynonymRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SynonymsPutSynonymResponse>
  async putSynonym (this: That, params: T.SynonymsPutSynonymRequest | TB.SynonymsPutSynonymRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SynonymsPutSynonymResponse, unknown>>
  async putSynonym (this: That, params: T.SynonymsPutSynonymRequest | TB.SynonymsPutSynonymRequest, options?: TransportRequestOptions): Promise<T.SynonymsPutSynonymResponse>
  async putSynonym (this: That, params: T.SynonymsPutSynonymRequest | TB.SynonymsPutSynonymRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const acceptedBody: string[] = ['synonyms_set']
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
    const path = `/_synonyms/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Creates or updates a synonym rule in a synonym set
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.11/put-synonym-rule.html | Elasticsearch API documentation}
    */
  async putSynonymRule (this: That, params: T.SynonymsPutSynonymRuleRequest | TB.SynonymsPutSynonymRuleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SynonymsPutSynonymRuleResponse>
  async putSynonymRule (this: That, params: T.SynonymsPutSynonymRuleRequest | TB.SynonymsPutSynonymRuleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SynonymsPutSynonymRuleResponse, unknown>>
  async putSynonymRule (this: That, params: T.SynonymsPutSynonymRuleRequest | TB.SynonymsPutSynonymRuleRequest, options?: TransportRequestOptions): Promise<T.SynonymsPutSynonymRuleResponse>
  async putSynonymRule (this: That, params: T.SynonymsPutSynonymRuleRequest | TB.SynonymsPutSynonymRuleRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['set_id', 'rule_id']
    const acceptedBody: string[] = ['synonyms']
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
    const path = `/_synonyms/${encodeURIComponent(params.set_id.toString())}/${encodeURIComponent(params.rule_id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}
