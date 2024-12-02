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
  * Get terms in an index. Discover terms that match a partial string in an index. This "terms enum" API is designed for low-latency look-ups used in auto-complete scenarios. If the `complete` property in the response is false, the returned terms set may be incomplete and should be treated as approximate. This can occur due to a few reasons, such as a request timeout or a node error. NOTE: The terms enum API may return terms from deleted documents. Deleted documents are initially only marked as deleted. It is not until their segments are merged that documents are actually deleted. Until that happens, the terms enum API will return terms from these documents.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.17/search-terms-enum.html | Elasticsearch API documentation}
  */
export default async function TermsEnumApi (this: That, params: T.TermsEnumRequest | TB.TermsEnumRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.TermsEnumResponse>
export default async function TermsEnumApi (this: That, params: T.TermsEnumRequest | TB.TermsEnumRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TermsEnumResponse, unknown>>
export default async function TermsEnumApi (this: That, params: T.TermsEnumRequest | TB.TermsEnumRequest, options?: TransportRequestOptions): Promise<T.TermsEnumResponse>
export default async function TermsEnumApi (this: That, params: T.TermsEnumRequest | TB.TermsEnumRequest, options?: TransportRequestOptions): Promise<any> {
  const acceptedPath: string[] = ['index']
  const acceptedBody: string[] = ['field', 'size', 'timeout', 'case_insensitive', 'index_filter', 'string', 'search_after']
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
  const path = `/${encodeURIComponent(params.index.toString())}/_terms_enum`
  const meta: TransportRequestMetadata = {
    name: 'terms_enum',
    pathParts: {
      index: params.index
    }
  }
  return await this.transport.request({ path, method, querystring, body, meta }, options)
}
