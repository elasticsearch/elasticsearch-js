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

export default class Simulate {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Simulates running ingest with example documents.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/simulate-ingest-api.html | Elasticsearch API documentation}
    */
  async ingest (this: That, params?: T.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async ingest (this: That, params?: T.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async ingest (this: That, params?: T.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async ingest (this: That, params?: T.TODO, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.index != null) {
      method = body != null ? 'POST' : 'GET'
      path = `/_ingest/${encodeURIComponent(params.index.toString())}/_simulate`
    } else {
      method = body != null ? 'POST' : 'GET'
      path = '/_ingest/_simulate'
    }
    const meta: TransportRequestMetadata = {
      name: 'simulate.ingest',
      pathParts: {
        index: params.index
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
