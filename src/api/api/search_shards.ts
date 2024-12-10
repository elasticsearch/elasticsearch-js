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
  * Get the search shards. Get the indices and shards that a search request would be run against. This information can be useful for working out issues or planning optimizations with routing and shard preferences. When filtered aliases are used, the filter is returned as part of the indices section.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/search-shards.html | Elasticsearch API documentation}
  */
export default async function SearchShardsApi (this: That, params?: T.SearchShardsRequest | TB.SearchShardsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchShardsResponse>
export default async function SearchShardsApi (this: That, params?: T.SearchShardsRequest | TB.SearchShardsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchShardsResponse, unknown>>
export default async function SearchShardsApi (this: That, params?: T.SearchShardsRequest | TB.SearchShardsRequest, options?: TransportRequestOptions): Promise<T.SearchShardsResponse>
export default async function SearchShardsApi (this: That, params?: T.SearchShardsRequest | TB.SearchShardsRequest, options?: TransportRequestOptions): Promise<any> {
  const acceptedPath: string[] = ['index']
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
  if (params.index != null) {
    method = body != null ? 'POST' : 'GET'
    path = `/${encodeURIComponent(params.index.toString())}/_search_shards`
  } else {
    method = body != null ? 'POST' : 'GET'
    path = '/_search_shards'
  }
  const meta: TransportRequestMetadata = {
    name: 'search_shards',
    pathParts: {
      index: params.index
    }
  }
  return await this.transport.request({ path, method, querystring, body, meta }, options)
}
