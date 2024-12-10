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
  * Get multiple term vectors. You can specify existing documents by index and ID or provide artificial documents in the body of the request. You can specify the index in the request body or request URI. The response contains a `docs` array with all the fetched termvectors. Each element has the structure provided by the termvectors API.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/docs-multi-termvectors.html | Elasticsearch API documentation}
  */
export default async function MtermvectorsApi (this: That, params?: T.MtermvectorsRequest | TB.MtermvectorsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.MtermvectorsResponse>
export default async function MtermvectorsApi (this: That, params?: T.MtermvectorsRequest | TB.MtermvectorsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.MtermvectorsResponse, unknown>>
export default async function MtermvectorsApi (this: That, params?: T.MtermvectorsRequest | TB.MtermvectorsRequest, options?: TransportRequestOptions): Promise<T.MtermvectorsResponse>
export default async function MtermvectorsApi (this: That, params?: T.MtermvectorsRequest | TB.MtermvectorsRequest, options?: TransportRequestOptions): Promise<any> {
  const acceptedPath: string[] = ['index']
  const acceptedBody: string[] = ['docs', 'ids']
  const querystring: Record<string, any> = {}
  // @ts-expect-error
  const userBody: any = params?.body
  let body: Record<string, any> | string
  if (typeof userBody === 'string') {
    body = userBody
  } else {
    body = userBody != null ? { ...userBody } : undefined
  }

  params = params ?? {}
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

  let method = ''
  let path = ''
  if (params.index != null) {
    method = body != null ? 'POST' : 'GET'
    path = `/${encodeURIComponent(params.index.toString())}/_mtermvectors`
  } else {
    method = body != null ? 'POST' : 'GET'
    path = '/_mtermvectors'
  }
  const meta: TransportRequestMetadata = {
    name: 'mtermvectors',
    pathParts: {
      index: params.index
    }
  }
  return await this.transport.request({ path, method, querystring, body, meta }, options)
}
