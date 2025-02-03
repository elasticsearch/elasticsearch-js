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
  * Update documents. Updates documents that match the specified query. If no query is specified, performs an update on every document in the data stream or index without modifying the source, which is useful for picking up mapping changes. If the Elasticsearch security features are enabled, you must have the following index privileges for the target data stream, index, or alias: * `read` * `index` or `write` You can specify the query criteria in the request URI or the request body using the same syntax as the search API. When you submit an update by query request, Elasticsearch gets a snapshot of the data stream or index when it begins processing the request and updates matching documents using internal versioning. When the versions match, the document is updated and the version number is incremented. If a document changes between the time that the snapshot is taken and the update operation is processed, it results in a version conflict and the operation fails. You can opt to count version conflicts instead of halting and returning by setting `conflicts` to `proceed`. Note that if you opt to count version conflicts, the operation could attempt to update more documents from the source than `max_docs` until it has successfully updated `max_docs` documents or it has gone through every document in the source query. NOTE: Documents with a version equal to 0 cannot be updated using update by query because internal versioning does not support 0 as a valid version number. While processing an update by query request, Elasticsearch performs multiple search requests sequentially to find all of the matching documents. A bulk update request is performed for each batch of matching documents. Any query or update failures cause the update by query request to fail and the failures are shown in the response. Any update requests that completed successfully still stick, they are not rolled back. **Throttling update requests** To control the rate at which update by query issues batches of update operations, you can set `requests_per_second` to any positive decimal number. This pads each batch with a wait time to throttle the rate. Set `requests_per_second` to `-1` to turn off throttling. Throttling uses a wait time between batches so that the internal scroll requests can be given a timeout that takes the request padding into account. The padding time is the difference between the batch size divided by the `requests_per_second` and the time spent writing. By default the batch size is 1000, so if `requests_per_second` is set to `500`: ``` target_time = 1000 / 500 per second = 2 seconds wait_time = target_time - write_time = 2 seconds - .5 seconds = 1.5 seconds ``` Since the batch is issued as a single _bulk request, large batch sizes cause Elasticsearch to create many requests and wait before starting the next set. This is "bursty" instead of "smooth". **Slicing** Update by query supports sliced scroll to parallelize the update process. This can improve efficiency and provide a convenient way to break the request down into smaller parts. Setting `slices` to `auto` chooses a reasonable number for most data streams and indices. This setting will use one slice per shard, up to a certain limit. If there are multiple source data streams or indices, it will choose the number of slices based on the index or backing index with the smallest number of shards. Adding `slices` to `_update_by_query` just automates the manual process of creating sub-requests, which means it has some quirks: * You can see these requests in the tasks APIs. These sub-requests are "child" tasks of the task for the request with slices. * Fetching the status of the task for the request with `slices` only contains the status of completed slices. * These sub-requests are individually addressable for things like cancellation and rethrottling. * Rethrottling the request with `slices` will rethrottle the unfinished sub-request proportionally. * Canceling the request with slices will cancel each sub-request. * Due to the nature of slices each sub-request won't get a perfectly even portion of the documents. All documents will be addressed, but some slices may be larger than others. Expect larger slices to have a more even distribution. * Parameters like `requests_per_second` and `max_docs` on a request with slices are distributed proportionally to each sub-request. Combine that with the point above about distribution being uneven and you should conclude that using `max_docs` with `slices` might not result in exactly `max_docs` documents being updated. * Each sub-request gets a slightly different snapshot of the source data stream or index though these are all taken at approximately the same time. If you're slicing manually or otherwise tuning automatic slicing, keep in mind that: * Query performance is most efficient when the number of slices is equal to the number of shards in the index or backing index. If that number is large (for example, 500), choose a lower number as too many slices hurts performance. Setting slices higher than the number of shards generally does not improve efficiency and adds overhead. * Update performance scales linearly across available resources with the number of slices. Whether query or update performance dominates the runtime depends on the documents being reindexed and cluster resources. **Update the document source** Update by query supports scripts to update the document source. As with the update API, you can set `ctx.op` to change the operation that is performed. Set `ctx.op = "noop"` if your script decides that it doesn't have to make any changes. The update by query operation skips updating the document and increments the `noop` counter. Set `ctx.op = "delete"` if your script decides that the document should be deleted. The update by query operation deletes the document and increments the `deleted` counter. Update by query supports only `index`, `noop`, and `delete`. Setting `ctx.op` to anything else is an error. Setting any other field in `ctx` is an error. This API enables you to only modify the source of matching documents; you cannot move them.
  * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-update-by-query | Elasticsearch API documentation}
  */
export default async function UpdateByQueryApi (this: That, params: T.UpdateByQueryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.UpdateByQueryResponse>
export default async function UpdateByQueryApi (this: That, params: T.UpdateByQueryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.UpdateByQueryResponse, unknown>>
export default async function UpdateByQueryApi (this: That, params: T.UpdateByQueryRequest, options?: TransportRequestOptions): Promise<T.UpdateByQueryResponse>
export default async function UpdateByQueryApi (this: That, params: T.UpdateByQueryRequest, options?: TransportRequestOptions): Promise<any> {
  const acceptedPath: string[] = ['index']
  const acceptedBody: string[] = ['max_docs', 'query', 'script', 'slice', 'conflicts']
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

  const method = 'POST'
  const path = `/${encodeURIComponent(params.index.toString())}/_update_by_query`
  const meta: TransportRequestMetadata = {
    name: 'update_by_query',
    pathParts: {
      index: params.index
    }
  }
  return await this.transport.request({ path, method, querystring, body, meta }, options)
}
