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
  * Run a scrolling search. IMPORTANT: The scroll API is no longer recommend for deep pagination. If you need to preserve the index state while paging through more than 10,000 hits, use the `search_after` parameter with a point in time (PIT). The scroll API gets large sets of results from a single scrolling search request. To get the necessary scroll ID, submit a search API request that includes an argument for the `scroll` query parameter. The `scroll` parameter indicates how long Elasticsearch should retain the search context for the request. The search response returns a scroll ID in the `_scroll_id` response body parameter. You can then use the scroll ID with the scroll API to retrieve the next batch of results for the request. If the Elasticsearch security features are enabled, the access to the results of a specific scroll ID is restricted to the user or API key that submitted the search. You can also use the scroll API to specify a new scroll parameter that extends or shortens the retention period for the search context. IMPORTANT: Results from a scrolling search reflect the state of the index at the time of the initial search request. Subsequent indexing or document changes only affect later search and scroll requests.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/search-request-body.html#request-body-search-scroll | Elasticsearch API documentation}
  */
export default async function ScrollApi<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>> (this: That, params: T.ScrollRequest | TB.ScrollRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ScrollResponse<TDocument, TAggregations>>
export default async function ScrollApi<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>> (this: That, params: T.ScrollRequest | TB.ScrollRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ScrollResponse<TDocument, TAggregations>, unknown>>
export default async function ScrollApi<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>> (this: That, params: T.ScrollRequest | TB.ScrollRequest, options?: TransportRequestOptions): Promise<T.ScrollResponse<TDocument, TAggregations>>
export default async function ScrollApi<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>> (this: That, params: T.ScrollRequest | TB.ScrollRequest, options?: TransportRequestOptions): Promise<any> {
  const acceptedPath: string[] = []
  const acceptedBody: string[] = ['scroll', 'scroll_id']
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

  const method = body != null ? 'POST' : 'GET'
  const path = '/_search/scroll'
  const meta: TransportRequestMetadata = {
    name: 'scroll',
    pathParts: {
      scroll_id: params.scroll_id
    }
  }
  return await this.transport.request({ path, method, querystring, body, meta }, options)
}
