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

export default class Monitoring {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Used by the monitoring features to send monitoring data.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.13/monitor-elasticsearch-cluster.html | Elasticsearch API documentation}
    */
  async bulk<TDocument = unknown, TPartialDocument = unknown> (this: That, params: T.MonitoringBulkRequest<TDocument, TPartialDocument> | TB.MonitoringBulkRequest<TDocument, TPartialDocument>, options?: TransportRequestOptionsWithOutMeta): Promise<T.MonitoringBulkResponse>
  async bulk<TDocument = unknown, TPartialDocument = unknown> (this: That, params: T.MonitoringBulkRequest<TDocument, TPartialDocument> | TB.MonitoringBulkRequest<TDocument, TPartialDocument>, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.MonitoringBulkResponse, unknown>>
  async bulk<TDocument = unknown, TPartialDocument = unknown> (this: That, params: T.MonitoringBulkRequest<TDocument, TPartialDocument> | TB.MonitoringBulkRequest<TDocument, TPartialDocument>, options?: TransportRequestOptions): Promise<T.MonitoringBulkResponse>
  async bulk<TDocument = unknown, TPartialDocument = unknown> (this: That, params: T.MonitoringBulkRequest<TDocument, TPartialDocument> | TB.MonitoringBulkRequest<TDocument, TPartialDocument>, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['type']
    const acceptedBody: string[] = ['operations']
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

    const method = 'POST'
    const path = '/_monitoring/bulk'
    return await this.transport.request({ path, method, querystring, bulkBody: body }, options)
  }
}
