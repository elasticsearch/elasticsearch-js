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
  * Get a document by its ID. Get a document and its source or stored fields from an index. By default, this API is realtime and is not affected by the refresh rate of the index (when data will become visible for search). In the case where stored fields are requested with the `stored_fields` parameter and the document has been updated but is not yet refreshed, the API will have to parse and analyze the source to extract the stored fields. To turn off realtime behavior, set the `realtime` parameter to false. **Source filtering** By default, the API returns the contents of the `_source` field unless you have used the `stored_fields` parameter or the `_source` field is turned off. You can turn off `_source` retrieval by using the `_source` parameter: ``` GET my-index-000001/_doc/0?_source=false ``` If you only need one or two fields from the `_source`, use the `_source_includes` or `_source_excludes` parameters to include or filter out particular fields. This can be helpful with large documents where partial retrieval can save on network overhead Both parameters take a comma separated list of fields or wildcard expressions. For example: ``` GET my-index-000001/_doc/0?_source_includes=*.id&_source_excludes=entities ``` If you only want to specify includes, you can use a shorter notation: ``` GET my-index-000001/_doc/0?_source=*.id ``` **Routing** If routing is used during indexing, the routing value also needs to be specified to retrieve a document. For example: ``` GET my-index-000001/_doc/2?routing=user1 ``` This request gets the document with ID 2, but it is routed based on the user. The document is not fetched if the correct routing is not specified. **Distributed** The GET operation is hashed into a specific shard ID. It is then redirected to one of the replicas within that shard ID and returns the result. The replicas are the primary shard and its replicas within that shard ID group. This means that the more replicas you have, the better your GET scaling will be. **Versioning support** You can use the `version` parameter to retrieve the document only if its current version is equal to the specified one. Internally, Elasticsearch has marked the old document as deleted and added an entirely new document. The old version of the document doesn't disappear immediately, although you won't be able to access it. Elasticsearch cleans up deleted documents in the background as you continue to index more data.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.x/docs-get.html | Elasticsearch API documentation}
  */
export default async function GetApi<TDocument = unknown> (this: That, params: T.GetRequest | TB.GetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.GetResponse<TDocument>>
export default async function GetApi<TDocument = unknown> (this: That, params: T.GetRequest | TB.GetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.GetResponse<TDocument>, unknown>>
export default async function GetApi<TDocument = unknown> (this: That, params: T.GetRequest | TB.GetRequest, options?: TransportRequestOptions): Promise<T.GetResponse<TDocument>>
export default async function GetApi<TDocument = unknown> (this: That, params: T.GetRequest | TB.GetRequest, options?: TransportRequestOptions): Promise<any> {
  const acceptedPath: string[] = ['id', 'index']
  const querystring: Record<string, any> = {}
  const body = undefined

  for (const key in params) {
    if (acceptedPath.includes(key)) {
      continue
    } else if (key !== 'body') {
      // @ts-expect-error
      querystring[key] = params[key]
    }
  }

  const method = 'GET'
  const path = `/${encodeURIComponent(params.index.toString())}/_doc/${encodeURIComponent(params.id.toString())}`
  const meta: TransportRequestMetadata = {
    name: 'get',
    pathParts: {
      id: params.id,
      index: params.index
    }
  }
  return await this.transport.request({ path, method, querystring, body, meta }, options)
}
