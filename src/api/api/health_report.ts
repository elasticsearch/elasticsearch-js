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
  * Get the cluster health. Get a report with the health status of an Elasticsearch cluster. The report contains a list of indicators that compose Elasticsearch functionality. Each indicator has a health status of: green, unknown, yellow or red. The indicator will provide an explanation and metadata describing the reason for its current health status. The cluster’s status is controlled by the worst indicator status. In the event that an indicator’s status is non-green, a list of impacts may be present in the indicator result which detail the functionalities that are negatively affected by the health issue. Each impact carries with it a severity level, an area of the system that is affected, and a simple description of the impact on the system. Some health indicators can determine the root cause of a health problem and prescribe a set of steps that can be performed in order to improve the health of the system. The root cause and remediation steps are encapsulated in a diagnosis. A diagnosis contains a cause detailing a root cause analysis, an action containing a brief description of the steps to take to fix the problem, the list of affected resources (if applicable), and a detailed step-by-step troubleshooting guide to fix the diagnosed problem. NOTE: The health indicators perform root cause analysis of non-green health statuses. This can be computationally expensive when called frequently. When setting up automated polling of the API for health status, set verbose to false to disable the more expensive analysis logic.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.16/health-api.html | Elasticsearch API documentation}
  */
export default async function HealthReportApi (this: That, params?: T.HealthReportRequest | TB.HealthReportRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.HealthReportResponse>
export default async function HealthReportApi (this: That, params?: T.HealthReportRequest | TB.HealthReportRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.HealthReportResponse, unknown>>
export default async function HealthReportApi (this: That, params?: T.HealthReportRequest | TB.HealthReportRequest, options?: TransportRequestOptions): Promise<T.HealthReportResponse>
export default async function HealthReportApi (this: That, params?: T.HealthReportRequest | TB.HealthReportRequest, options?: TransportRequestOptions): Promise<any> {
  const acceptedPath: string[] = ['feature']
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
  if (params.feature != null) {
    method = 'GET'
    path = `/_health_report/${encodeURIComponent(params.feature.toString())}`
  } else {
    method = 'GET'
    path = '/_health_report'
  }
  const meta: TransportRequestMetadata = {
    name: 'health_report',
    pathParts: {
      feature: params.feature
    }
  }
  return await this.transport.request({ path, method, querystring, body, meta }, options)
}
