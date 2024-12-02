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

export default class QueryRules {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Deletes a query rule within a query ruleset.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.17/delete-query-rule.html | Elasticsearch API documentation}
    */
  async deleteRule (this: That, params: T.QueryRulesDeleteRuleRequest | TB.QueryRulesDeleteRuleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesDeleteRuleResponse>
  async deleteRule (this: That, params: T.QueryRulesDeleteRuleRequest | TB.QueryRulesDeleteRuleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesDeleteRuleResponse, unknown>>
  async deleteRule (this: That, params: T.QueryRulesDeleteRuleRequest | TB.QueryRulesDeleteRuleRequest, options?: TransportRequestOptions): Promise<T.QueryRulesDeleteRuleResponse>
  async deleteRule (this: That, params: T.QueryRulesDeleteRuleRequest | TB.QueryRulesDeleteRuleRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['ruleset_id', 'rule_id']
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
    const path = `/_query_rules/${encodeURIComponent(params.ruleset_id.toString())}/_rule/${encodeURIComponent(params.rule_id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'query_rules.delete_rule',
      pathParts: {
        ruleset_id: params.ruleset_id,
        rule_id: params.rule_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Deletes a query ruleset.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.17/delete-query-ruleset.html | Elasticsearch API documentation}
    */
  async deleteRuleset (this: That, params: T.QueryRulesDeleteRulesetRequest | TB.QueryRulesDeleteRulesetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesDeleteRulesetResponse>
  async deleteRuleset (this: That, params: T.QueryRulesDeleteRulesetRequest | TB.QueryRulesDeleteRulesetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesDeleteRulesetResponse, unknown>>
  async deleteRuleset (this: That, params: T.QueryRulesDeleteRulesetRequest | TB.QueryRulesDeleteRulesetRequest, options?: TransportRequestOptions): Promise<T.QueryRulesDeleteRulesetResponse>
  async deleteRuleset (this: That, params: T.QueryRulesDeleteRulesetRequest | TB.QueryRulesDeleteRulesetRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['ruleset_id']
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
    const path = `/_query_rules/${encodeURIComponent(params.ruleset_id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'query_rules.delete_ruleset',
      pathParts: {
        ruleset_id: params.ruleset_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Returns the details about a query rule within a query ruleset
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.17/get-query-rule.html | Elasticsearch API documentation}
    */
  async getRule (this: That, params: T.QueryRulesGetRuleRequest | TB.QueryRulesGetRuleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesGetRuleResponse>
  async getRule (this: That, params: T.QueryRulesGetRuleRequest | TB.QueryRulesGetRuleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesGetRuleResponse, unknown>>
  async getRule (this: That, params: T.QueryRulesGetRuleRequest | TB.QueryRulesGetRuleRequest, options?: TransportRequestOptions): Promise<T.QueryRulesGetRuleResponse>
  async getRule (this: That, params: T.QueryRulesGetRuleRequest | TB.QueryRulesGetRuleRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['ruleset_id', 'rule_id']
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
    const path = `/_query_rules/${encodeURIComponent(params.ruleset_id.toString())}/_rule/${encodeURIComponent(params.rule_id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'query_rules.get_rule',
      pathParts: {
        ruleset_id: params.ruleset_id,
        rule_id: params.rule_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Returns the details about a query ruleset
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.17/get-query-ruleset.html | Elasticsearch API documentation}
    */
  async getRuleset (this: That, params: T.QueryRulesGetRulesetRequest | TB.QueryRulesGetRulesetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesGetRulesetResponse>
  async getRuleset (this: That, params: T.QueryRulesGetRulesetRequest | TB.QueryRulesGetRulesetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesGetRulesetResponse, unknown>>
  async getRuleset (this: That, params: T.QueryRulesGetRulesetRequest | TB.QueryRulesGetRulesetRequest, options?: TransportRequestOptions): Promise<T.QueryRulesGetRulesetResponse>
  async getRuleset (this: That, params: T.QueryRulesGetRulesetRequest | TB.QueryRulesGetRulesetRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['ruleset_id']
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
    const path = `/_query_rules/${encodeURIComponent(params.ruleset_id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'query_rules.get_ruleset',
      pathParts: {
        ruleset_id: params.ruleset_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Returns summarized information about existing query rulesets.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.17/list-query-rulesets.html | Elasticsearch API documentation}
    */
  async listRulesets (this: That, params?: T.QueryRulesListRulesetsRequest | TB.QueryRulesListRulesetsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesListRulesetsResponse>
  async listRulesets (this: That, params?: T.QueryRulesListRulesetsRequest | TB.QueryRulesListRulesetsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesListRulesetsResponse, unknown>>
  async listRulesets (this: That, params?: T.QueryRulesListRulesetsRequest | TB.QueryRulesListRulesetsRequest, options?: TransportRequestOptions): Promise<T.QueryRulesListRulesetsResponse>
  async listRulesets (this: That, params?: T.QueryRulesListRulesetsRequest | TB.QueryRulesListRulesetsRequest, options?: TransportRequestOptions): Promise<any> {
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
    const path = '/_query_rules'
    const meta: TransportRequestMetadata = {
      name: 'query_rules.list_rulesets'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Creates or updates a query rule within a query ruleset.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.17/put-query-rule.html | Elasticsearch API documentation}
    */
  async putRule (this: That, params: T.QueryRulesPutRuleRequest | TB.QueryRulesPutRuleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesPutRuleResponse>
  async putRule (this: That, params: T.QueryRulesPutRuleRequest | TB.QueryRulesPutRuleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesPutRuleResponse, unknown>>
  async putRule (this: That, params: T.QueryRulesPutRuleRequest | TB.QueryRulesPutRuleRequest, options?: TransportRequestOptions): Promise<T.QueryRulesPutRuleResponse>
  async putRule (this: That, params: T.QueryRulesPutRuleRequest | TB.QueryRulesPutRuleRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['ruleset_id', 'rule_id']
    const acceptedBody: string[] = ['type', 'criteria', 'actions', 'priority']
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
    const path = `/_query_rules/${encodeURIComponent(params.ruleset_id.toString())}/_rule/${encodeURIComponent(params.rule_id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'query_rules.put_rule',
      pathParts: {
        ruleset_id: params.ruleset_id,
        rule_id: params.rule_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Creates or updates a query ruleset.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.17/put-query-ruleset.html | Elasticsearch API documentation}
    */
  async putRuleset (this: That, params: T.QueryRulesPutRulesetRequest | TB.QueryRulesPutRulesetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesPutRulesetResponse>
  async putRuleset (this: That, params: T.QueryRulesPutRulesetRequest | TB.QueryRulesPutRulesetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesPutRulesetResponse, unknown>>
  async putRuleset (this: That, params: T.QueryRulesPutRulesetRequest | TB.QueryRulesPutRulesetRequest, options?: TransportRequestOptions): Promise<T.QueryRulesPutRulesetResponse>
  async putRuleset (this: That, params: T.QueryRulesPutRulesetRequest | TB.QueryRulesPutRulesetRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['ruleset_id']
    const acceptedBody: string[] = ['rules']
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
    const path = `/_query_rules/${encodeURIComponent(params.ruleset_id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'query_rules.put_ruleset',
      pathParts: {
        ruleset_id: params.ruleset_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Creates or updates a query ruleset.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.17/test-query-ruleset.html | Elasticsearch API documentation}
    */
  async test (this: That, params: T.QueryRulesTestRequest | TB.QueryRulesTestRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesTestResponse>
  async test (this: That, params: T.QueryRulesTestRequest | TB.QueryRulesTestRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesTestResponse, unknown>>
  async test (this: That, params: T.QueryRulesTestRequest | TB.QueryRulesTestRequest, options?: TransportRequestOptions): Promise<T.QueryRulesTestResponse>
  async test (this: That, params: T.QueryRulesTestRequest | TB.QueryRulesTestRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['ruleset_id']
    const acceptedBody: string[] = ['match_criteria']
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
    const path = `/_query_rules/${encodeURIComponent(params.ruleset_id.toString())}/_test`
    const meta: TransportRequestMetadata = {
      name: 'query_rules.test',
      pathParts: {
        ruleset_id: params.ruleset_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
