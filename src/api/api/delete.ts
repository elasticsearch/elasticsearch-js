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
  * Delete a document. Remove a JSON document from the specified index. NOTE: You cannot send deletion requests directly to a data stream. To delete a document in a data stream, you must target the backing index containing the document. **Optimistic concurrency control** Delete operations can be made conditional and only be performed if the last modification to the document was assigned the sequence number and primary term specified by the `if_seq_no` and `if_primary_term` parameters. If a mismatch is detected, the operation will result in a `VersionConflictException` and a status code of `409`. **Versioning** Each document indexed is versioned. When deleting a document, the version can be specified to make sure the relevant document you are trying to delete is actually being deleted and it has not changed in the meantime. Every write operation run on a document, deletes included, causes its version to be incremented. The version number of a deleted document remains available for a short time after deletion to allow for control of concurrent operations. The length of time for which a deleted document's version remains available is determined by the `index.gc_deletes` index setting. **Routing** If routing is used during indexing, the routing value also needs to be specified to delete a document. If the `_routing` mapping is set to `required` and no routing value is specified, the delete API throws a `RoutingMissingException` and rejects the request. For example: ``` DELETE /my-index-000001/_doc/1?routing=shard-1 ``` This request deletes the document with ID 1, but it is routed based on the user. The document is not deleted if the correct routing is not specified. **Distributed** The delete operation gets hashed into a specific shard ID. It then gets redirected into the primary shard within that ID group and replicated (if needed) to shard replicas within that ID group.
  * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-delete | Elasticsearch API documentation}
  */
export default async function DeleteApi (this: That, params: T.DeleteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.DeleteResponse>
export default async function DeleteApi (this: That, params: T.DeleteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.DeleteResponse, unknown>>
export default async function DeleteApi (this: That, params: T.DeleteRequest, options?: TransportRequestOptions): Promise<T.DeleteResponse>
export default async function DeleteApi (this: That, params: T.DeleteRequest, options?: TransportRequestOptions): Promise<any> {
  const acceptedPath: string[] = ['id', 'index']
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
    if (acceptedPath.includes(key)) {
      continue
    } else if (key !== 'body' && key !== 'querystring') {
      // @ts-expect-error
      querystring[key] = params[key]
    }
  }

  const method = 'DELETE'
  const path = `/${encodeURIComponent(params.index.toString())}/_doc/${encodeURIComponent(params.id.toString())}`
  const meta: TransportRequestMetadata = {
    name: 'delete',
    pathParts: {
      id: params.id,
      index: params.index
    }
  }
  return await this.transport.request({ path, method, querystring, body, meta }, options)
}
