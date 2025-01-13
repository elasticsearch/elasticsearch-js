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

export default class QueryRules {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Delete a query rule. Delete a query rule within a query ruleset. This is a destructive action that is only recoverable by re-adding the same rule with the create or update query rule API.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/delete-query-rule.html | Elasticsearch API documentation}
    */
  async deleteRule (this: That, params: T.QueryRulesDeleteRuleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesDeleteRuleResponse>
  async deleteRule (this: That, params: T.QueryRulesDeleteRuleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesDeleteRuleResponse, unknown>>
  async deleteRule (this: That, params: T.QueryRulesDeleteRuleRequest, options?: TransportRequestOptions): Promise<T.QueryRulesDeleteRuleResponse>
  async deleteRule (this: That, params: T.QueryRulesDeleteRuleRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['ruleset_id', 'rule_id']
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
    * Delete a query ruleset. Remove a query ruleset and its associated data. This is a destructive action that is not recoverable.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/delete-query-ruleset.html | Elasticsearch API documentation}
    */
  async deleteRuleset (this: That, params: T.QueryRulesDeleteRulesetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesDeleteRulesetResponse>
  async deleteRuleset (this: That, params: T.QueryRulesDeleteRulesetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesDeleteRulesetResponse, unknown>>
  async deleteRuleset (this: That, params: T.QueryRulesDeleteRulesetRequest, options?: TransportRequestOptions): Promise<T.QueryRulesDeleteRulesetResponse>
  async deleteRuleset (this: That, params: T.QueryRulesDeleteRulesetRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['ruleset_id']
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
    * Get a query rule. Get details about a query rule within a query ruleset.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/get-query-rule.html | Elasticsearch API documentation}
    */
  async getRule (this: That, params: T.QueryRulesGetRuleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesGetRuleResponse>
  async getRule (this: That, params: T.QueryRulesGetRuleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesGetRuleResponse, unknown>>
  async getRule (this: That, params: T.QueryRulesGetRuleRequest, options?: TransportRequestOptions): Promise<T.QueryRulesGetRuleResponse>
  async getRule (this: That, params: T.QueryRulesGetRuleRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['ruleset_id', 'rule_id']
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
    * Get a query ruleset. Get details about a query ruleset.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/get-query-ruleset.html | Elasticsearch API documentation}
    */
  async getRuleset (this: That, params: T.QueryRulesGetRulesetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesGetRulesetResponse>
  async getRuleset (this: That, params: T.QueryRulesGetRulesetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesGetRulesetResponse, unknown>>
  async getRuleset (this: That, params: T.QueryRulesGetRulesetRequest, options?: TransportRequestOptions): Promise<T.QueryRulesGetRulesetResponse>
  async getRuleset (this: That, params: T.QueryRulesGetRulesetRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['ruleset_id']
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
    * Get all query rulesets. Get summarized information about the query rulesets.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/list-query-rulesets.html | Elasticsearch API documentation}
    */
  async listRulesets (this: That, params?: T.QueryRulesListRulesetsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesListRulesetsResponse>
  async listRulesets (this: That, params?: T.QueryRulesListRulesetsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesListRulesetsResponse, unknown>>
  async listRulesets (this: That, params?: T.QueryRulesListRulesetsRequest, options?: TransportRequestOptions): Promise<T.QueryRulesListRulesetsResponse>
  async listRulesets (this: That, params?: T.QueryRulesListRulesetsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
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

    const method = 'GET'
    const path = '/_query_rules'
    const meta: TransportRequestMetadata = {
      name: 'query_rules.list_rulesets'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Create or update a query rule. Create or update a query rule within a query ruleset. IMPORTANT: Due to limitations within pinned queries, you can only pin documents using ids or docs, but cannot use both in single rule. It is advised to use one or the other in query rulesets, to avoid errors. Additionally, pinned queries have a maximum limit of 100 pinned hits. If multiple matching rules pin more than 100 documents, only the first 100 documents are pinned in the order they are specified in the ruleset.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/put-query-rule.html | Elasticsearch API documentation}
    */
  async putRule (this: That, params: T.QueryRulesPutRuleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesPutRuleResponse>
  async putRule (this: That, params: T.QueryRulesPutRuleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesPutRuleResponse, unknown>>
  async putRule (this: That, params: T.QueryRulesPutRuleRequest, options?: TransportRequestOptions): Promise<T.QueryRulesPutRuleResponse>
  async putRule (this: That, params: T.QueryRulesPutRuleRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['ruleset_id', 'rule_id']
    const acceptedBody: string[] = ['type', 'criteria', 'actions', 'priority']
    const querystring: Record<string, any> = {}
    const body: Record<string, any> = {}

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
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
    * Create or update a query ruleset. There is a limit of 100 rules per ruleset. This limit can be increased by using the `xpack.applications.rules.max_rules_per_ruleset` cluster setting. IMPORTANT: Due to limitations within pinned queries, you can only select documents using `ids` or `docs`, but cannot use both in single rule. It is advised to use one or the other in query rulesets, to avoid errors. Additionally, pinned queries have a maximum limit of 100 pinned hits. If multiple matching rules pin more than 100 documents, only the first 100 documents are pinned in the order they are specified in the ruleset.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/put-query-ruleset.html | Elasticsearch API documentation}
    */
  async putRuleset (this: That, params: T.QueryRulesPutRulesetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesPutRulesetResponse>
  async putRuleset (this: That, params: T.QueryRulesPutRulesetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesPutRulesetResponse, unknown>>
  async putRuleset (this: That, params: T.QueryRulesPutRulesetRequest, options?: TransportRequestOptions): Promise<T.QueryRulesPutRulesetResponse>
  async putRuleset (this: That, params: T.QueryRulesPutRulesetRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['ruleset_id']
    const acceptedBody: string[] = ['rules']
    const querystring: Record<string, any> = {}
    const body: Record<string, any> = {}

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
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
    * Test a query ruleset. Evaluate match criteria against a query ruleset to identify the rules that would match that criteria.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/test-query-ruleset.html | Elasticsearch API documentation}
    */
  async test (this: That, params: T.QueryRulesTestRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesTestResponse>
  async test (this: That, params: T.QueryRulesTestRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesTestResponse, unknown>>
  async test (this: That, params: T.QueryRulesTestRequest, options?: TransportRequestOptions): Promise<T.QueryRulesTestResponse>
  async test (this: That, params: T.QueryRulesTestRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['ruleset_id']
    const acceptedBody: string[] = ['match_criteria']
    const querystring: Record<string, any> = {}
    const body: Record<string, any> = {}

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
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
