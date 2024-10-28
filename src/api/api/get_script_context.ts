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
  * Get script contexts. Get a list of supported script contexts and their methods.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/painless/8.16/painless-contexts.html | Elasticsearch API documentation}
  */
export default async function GetScriptContextApi (this: That, params?: T.GetScriptContextRequest | TB.GetScriptContextRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.GetScriptContextResponse>
export default async function GetScriptContextApi (this: That, params?: T.GetScriptContextRequest | TB.GetScriptContextRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.GetScriptContextResponse, unknown>>
export default async function GetScriptContextApi (this: That, params?: T.GetScriptContextRequest | TB.GetScriptContextRequest, options?: TransportRequestOptions): Promise<T.GetScriptContextResponse>
export default async function GetScriptContextApi (this: That, params?: T.GetScriptContextRequest | TB.GetScriptContextRequest, options?: TransportRequestOptions): Promise<any> {
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
  const path = '/_script_context'
  const meta: TransportRequestMetadata = {
    name: 'get_script_context'
  }
  return await this.transport.request({ path, method, querystring, body, meta }, options)
}
