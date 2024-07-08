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

/**
  * Runs multiple templated searches with a single request.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.15/search-multi-search.html | Elasticsearch API documentation}
  */
export default async function MsearchTemplateApi<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>> (this: That, params: T.MsearchTemplateRequest | TB.MsearchTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.MsearchTemplateResponse<TDocument, TAggregations>>
export default async function MsearchTemplateApi<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>> (this: That, params: T.MsearchTemplateRequest | TB.MsearchTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.MsearchTemplateResponse<TDocument, TAggregations>, unknown>>
export default async function MsearchTemplateApi<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>> (this: That, params: T.MsearchTemplateRequest | TB.MsearchTemplateRequest, options?: TransportRequestOptions): Promise<T.MsearchTemplateResponse<TDocument, TAggregations>>
export default async function MsearchTemplateApi<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>> (this: That, params: T.MsearchTemplateRequest | TB.MsearchTemplateRequest, options?: TransportRequestOptions): Promise<any> {
  const acceptedPath: string[] = ['index']
  const acceptedBody: string[] = ['search_templates']
  const querystring: Record<string, any> = {}
  // @ts-expect-error
  let body: any = params.body ?? undefined

  for (const key in params) {
    if (acceptedBody.includes(key)) {
      // @ts-expect-error
      body = params[key]
    } else if (acceptedPath.includes(key)) {
      continue
    } else if (key !== 'body') {
      // @ts-expect-error
      querystring[key] = params[key]
    }
  }

  let method = ''
  let path = ''
  if (params.index != null) {
    method = body != null ? 'POST' : 'GET'
    path = `/${encodeURIComponent(params.index.toString())}/_msearch/template`
  } else {
    method = body != null ? 'POST' : 'GET'
    path = '/_msearch/template'
  }
  const meta: TransportRequestMetadata = {
    name: 'msearch_template',
    pathParts: {
      index: params.index
    }
  }
  return await this.transport.request({ path, method, querystring, bulkBody: body, meta }, options)
}
