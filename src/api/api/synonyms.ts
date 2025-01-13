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

export default class Synonyms {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Delete a synonym set. You can only delete a synonyms set that is not in use by any index analyzer. Synonyms sets can be used in synonym graph token filters and synonym token filters. These synonym filters can be used as part of search analyzers. Analyzers need to be loaded when an index is restored (such as when a node starts, or the index becomes open). Even if the analyzer is not used on any field mapping, it still needs to be loaded on the index recovery phase. If any analyzers cannot be loaded, the index becomes unavailable and the cluster status becomes red or yellow as index shards are not available. To prevent that, synonyms sets that are used in analyzers can't be deleted. A delete request in this case will return a 400 response code. To remove a synonyms set, you must first remove all indices that contain analyzers using it. You can migrate an index by creating a new index that does not contain the token filter with the synonyms set, and use the reindex API in order to copy over the index data. Once finished, you can delete the index. When the synonyms set is not used in analyzers, you will be able to delete it.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/delete-synonyms-set.html | Elasticsearch API documentation}
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
    const meta: TransportRequestMetadata = {
      name: 'synonyms.delete_synonym',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Delete a synonym rule. Delete a synonym rule from a synonym set.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/delete-synonym-rule.html | Elasticsearch API documentation}
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
    const meta: TransportRequestMetadata = {
      name: 'synonyms.delete_synonym_rule',
      pathParts: {
        set_id: params.set_id,
        rule_id: params.rule_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get a synonym set.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/get-synonyms-set.html | Elasticsearch API documentation}
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
    const meta: TransportRequestMetadata = {
      name: 'synonyms.get_synonym',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get a synonym rule. Get a synonym rule from a synonym set.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/get-synonym-rule.html | Elasticsearch API documentation}
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
    const meta: TransportRequestMetadata = {
      name: 'synonyms.get_synonym_rule',
      pathParts: {
        set_id: params.set_id,
        rule_id: params.rule_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get all synonym sets. Get a summary of all defined synonym sets.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/get-synonyms-set.html | Elasticsearch API documentation}
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
    const meta: TransportRequestMetadata = {
      name: 'synonyms.get_synonyms_sets'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Create or update a synonym set. Synonyms sets are limited to a maximum of 10,000 synonym rules per set. If you need to manage more synonym rules, you can create multiple synonym sets. When an existing synonyms set is updated, the search analyzers that use the synonyms set are reloaded automatically for all indices. This is equivalent to invoking the reload search analyzers API for all indices that use the synonyms set.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/put-synonyms-set.html | Elasticsearch API documentation}
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
    const meta: TransportRequestMetadata = {
      name: 'synonyms.put_synonym',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Create or update a synonym rule. Create or update a synonym rule in a synonym set. If any of the synonym rules included is invalid, the API returns an error. When you update a synonym rule, all analyzers using the synonyms set will be reloaded automatically to reflect the new rule.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/put-synonym-rule.html | Elasticsearch API documentation}
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
    const meta: TransportRequestMetadata = {
      name: 'synonyms.put_synonym_rule',
      pathParts: {
        set_id: params.set_id,
        rule_id: params.rule_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
