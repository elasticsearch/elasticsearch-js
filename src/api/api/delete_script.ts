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
  TransportRequestOptions,
  TransportRequestOptionsWithMeta,
  TransportRequestOptionsWithOutMeta,
  TransportResult
} from '@elastic/transport'
import * as T from '../types'
import * as TB from '../typesWithBodyKey'
interface That { transport: Transport }

export default async function DeleteScriptApi (this: That, params: T.DeleteScriptRequest | TB.DeleteScriptRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.DeleteScriptResponse>
export default async function DeleteScriptApi (this: That, params: T.DeleteScriptRequest | TB.DeleteScriptRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.DeleteScriptResponse, unknown>>
export default async function DeleteScriptApi (this: That, params: T.DeleteScriptRequest | TB.DeleteScriptRequest, options?: TransportRequestOptions): Promise<T.DeleteScriptResponse>
export default async function DeleteScriptApi (this: That, params: T.DeleteScriptRequest | TB.DeleteScriptRequest, options?: TransportRequestOptions): Promise<any> {
  const acceptedPath: string[] = ['id']
  const acceptedBody: string[] = []
  const querystring: Record<string, any> = {}
  // @ts-expect-error
  let body: Record<string, any> = params.body ?? undefined

  for (const key in params) {
    if (acceptedBody.includes(key)) {
      body = body ?? {}
      // @ts-expect-error
      body[key] = params[key]
    } else if (acceptedPath.includes(key)) {
      continue
    } else {
      if (key === 'body') continue
      // @ts-expect-error
      querystring[key] = params[key]
    }
  }

  const method = 'DELETE'
  const path = `/_scripts/${encodeURIComponent(params.id.toString())}`
  return await this.transport.request({ path, method, querystring, body }, options)
}
