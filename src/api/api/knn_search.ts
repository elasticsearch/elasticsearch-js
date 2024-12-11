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
  * Run a knn search. NOTE: The kNN search API has been replaced by the `knn` option in the search API. Perform a k-nearest neighbor (kNN) search on a dense_vector field and return the matching documents. Given a query vector, the API finds the k closest vectors and returns those documents as search hits. Elasticsearch uses the HNSW algorithm to support efficient kNN search. Like most kNN algorithms, HNSW is an approximate method that sacrifices result accuracy for improved search speed. This means the results returned are not always the true k closest neighbors. The kNN search API supports restricting the search using a filter. The search will return the top k documents that also match the filter query.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/search-search.html | Elasticsearch API documentation}
  */
export default async function KnnSearchApi<TDocument = unknown> (this: That, params: T.KnnSearchRequest | TB.KnnSearchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.KnnSearchResponse<TDocument>>
export default async function KnnSearchApi<TDocument = unknown> (this: That, params: T.KnnSearchRequest | TB.KnnSearchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.KnnSearchResponse<TDocument>, unknown>>
export default async function KnnSearchApi<TDocument = unknown> (this: That, params: T.KnnSearchRequest | TB.KnnSearchRequest, options?: TransportRequestOptions): Promise<T.KnnSearchResponse<TDocument>>
export default async function KnnSearchApi<TDocument = unknown> (this: That, params: T.KnnSearchRequest | TB.KnnSearchRequest, options?: TransportRequestOptions): Promise<any> {
  const acceptedPath: string[] = ['index']
  const acceptedBody: string[] = ['_source', 'docvalue_fields', 'stored_fields', 'fields', 'filter', 'knn']
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
  const path = `/${encodeURIComponent(params.index.toString())}/_knn_search`
  const meta: TransportRequestMetadata = {
    name: 'knn_search',
    pathParts: {
      index: params.index
    }
  }
  return await this.transport.request({ path, method, querystring, body, meta }, options)
}
