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

/**
  * Explain a document match result. Get information about why a specific document matches, or doesn't match, a query. It computes a score explanation for a query and a specific document.
  * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-explain | Elasticsearch API documentation}
  */
export default async function ExplainApi<TDocument = unknown> (this: That, params: T.ExplainRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ExplainResponse<TDocument>>
export default async function ExplainApi<TDocument = unknown> (this: That, params: T.ExplainRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ExplainResponse<TDocument>, unknown>>
export default async function ExplainApi<TDocument = unknown> (this: That, params: T.ExplainRequest, options?: TransportRequestOptions): Promise<T.ExplainResponse<TDocument>>
export default async function ExplainApi<TDocument = unknown> (this: That, params: T.ExplainRequest, options?: TransportRequestOptions): Promise<any> {
  const acceptedPath: string[] = ['id', 'index']
  const acceptedBody: string[] = ['query']
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

  const method = body != null ? 'POST' : 'GET'
  const path = `/${encodeURIComponent(params.index.toString())}/_explain/${encodeURIComponent(params.id.toString())}`
  const meta: TransportRequestMetadata = {
    name: 'explain',
    pathParts: {
      id: params.id,
      index: params.index
    }
  }
  return await this.transport.request({ path, method, querystring, body, meta }, options)
}
