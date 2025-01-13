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

export default class Cluster {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Explain the shard allocations. Get explanations for shard allocations in the cluster. For unassigned shards, it provides an explanation for why the shard is unassigned. For assigned shards, it provides an explanation for why the shard is remaining on its current node and has not moved or rebalanced to another node. This API can be very useful when attempting to diagnose why a shard is unassigned or why a shard continues to remain on its current node when you might expect otherwise.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/cluster-allocation-explain.html | Elasticsearch API documentation}
    */
  async allocationExplain (this: That, params?: T.ClusterAllocationExplainRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterAllocationExplainResponse>
  async allocationExplain (this: That, params?: T.ClusterAllocationExplainRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterAllocationExplainResponse, unknown>>
  async allocationExplain (this: That, params?: T.ClusterAllocationExplainRequest, options?: TransportRequestOptions): Promise<T.ClusterAllocationExplainResponse>
  async allocationExplain (this: That, params?: T.ClusterAllocationExplainRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = ['current_node', 'index', 'primary', 'shard']
    const querystring: Record<string, any> = {}
    const body: Record<string, any> = {}

    params = params ?? {}
    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = body != null ? 'POST' : 'GET'
    const path = '/_cluster/allocation/explain'
    const meta: TransportRequestMetadata = {
      name: 'cluster.allocation_explain'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Delete component templates. Component templates are building blocks for constructing index templates that specify index mappings, settings, and aliases.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/indices-component-template.html | Elasticsearch API documentation}
    */
  async deleteComponentTemplate (this: That, params: T.ClusterDeleteComponentTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterDeleteComponentTemplateResponse>
  async deleteComponentTemplate (this: That, params: T.ClusterDeleteComponentTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterDeleteComponentTemplateResponse, unknown>>
  async deleteComponentTemplate (this: That, params: T.ClusterDeleteComponentTemplateRequest, options?: TransportRequestOptions): Promise<T.ClusterDeleteComponentTemplateResponse>
  async deleteComponentTemplate (this: That, params: T.ClusterDeleteComponentTemplateRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_component_template/${encodeURIComponent(params.name.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'cluster.delete_component_template',
      pathParts: {
        name: params.name
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Clear cluster voting config exclusions. Remove master-eligible nodes from the voting configuration exclusion list.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/voting-config-exclusions.html | Elasticsearch API documentation}
    */
  async deleteVotingConfigExclusions (this: That, params?: T.ClusterDeleteVotingConfigExclusionsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterDeleteVotingConfigExclusionsResponse>
  async deleteVotingConfigExclusions (this: That, params?: T.ClusterDeleteVotingConfigExclusionsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterDeleteVotingConfigExclusionsResponse, unknown>>
  async deleteVotingConfigExclusions (this: That, params?: T.ClusterDeleteVotingConfigExclusionsRequest, options?: TransportRequestOptions): Promise<T.ClusterDeleteVotingConfigExclusionsResponse>
  async deleteVotingConfigExclusions (this: That, params?: T.ClusterDeleteVotingConfigExclusionsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = '/_cluster/voting_config_exclusions'
    const meta: TransportRequestMetadata = {
      name: 'cluster.delete_voting_config_exclusions'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Check component templates. Returns information about whether a particular component template exists.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/indices-component-template.html | Elasticsearch API documentation}
    */
  async existsComponentTemplate (this: That, params: T.ClusterExistsComponentTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterExistsComponentTemplateResponse>
  async existsComponentTemplate (this: That, params: T.ClusterExistsComponentTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterExistsComponentTemplateResponse, unknown>>
  async existsComponentTemplate (this: That, params: T.ClusterExistsComponentTemplateRequest, options?: TransportRequestOptions): Promise<T.ClusterExistsComponentTemplateResponse>
  async existsComponentTemplate (this: That, params: T.ClusterExistsComponentTemplateRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'HEAD'
    const path = `/_component_template/${encodeURIComponent(params.name.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'cluster.exists_component_template',
      pathParts: {
        name: params.name
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get component templates. Get information about component templates.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/indices-component-template.html | Elasticsearch API documentation}
    */
  async getComponentTemplate (this: That, params?: T.ClusterGetComponentTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterGetComponentTemplateResponse>
  async getComponentTemplate (this: That, params?: T.ClusterGetComponentTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterGetComponentTemplateResponse, unknown>>
  async getComponentTemplate (this: That, params?: T.ClusterGetComponentTemplateRequest, options?: TransportRequestOptions): Promise<T.ClusterGetComponentTemplateResponse>
  async getComponentTemplate (this: That, params?: T.ClusterGetComponentTemplateRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.name != null) {
      method = 'GET'
      path = `/_component_template/${encodeURIComponent(params.name.toString())}`
    } else {
      method = 'GET'
      path = '/_component_template'
    }
    const meta: TransportRequestMetadata = {
      name: 'cluster.get_component_template',
      pathParts: {
        name: params.name
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get cluster-wide settings. By default, it returns only settings that have been explicitly defined.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/cluster-get-settings.html | Elasticsearch API documentation}
    */
  async getSettings (this: That, params?: T.ClusterGetSettingsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterGetSettingsResponse>
  async getSettings (this: That, params?: T.ClusterGetSettingsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterGetSettingsResponse, unknown>>
  async getSettings (this: That, params?: T.ClusterGetSettingsRequest, options?: TransportRequestOptions): Promise<T.ClusterGetSettingsResponse>
  async getSettings (this: That, params?: T.ClusterGetSettingsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_cluster/settings'
    const meta: TransportRequestMetadata = {
      name: 'cluster.get_settings'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get the cluster health status. You can also use the API to get the health status of only specified data streams and indices. For data streams, the API retrieves the health status of the stream’s backing indices. The cluster health status is: green, yellow or red. On the shard level, a red status indicates that the specific shard is not allocated in the cluster. Yellow means that the primary shard is allocated but replicas are not. Green means that all shards are allocated. The index level status is controlled by the worst shard status. One of the main benefits of the API is the ability to wait until the cluster reaches a certain high watermark health level. The cluster status is controlled by the worst index status.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/cluster-health.html | Elasticsearch API documentation}
    */
  async health (this: That, params?: T.ClusterHealthRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterHealthResponse>
  async health (this: That, params?: T.ClusterHealthRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterHealthResponse, unknown>>
  async health (this: That, params?: T.ClusterHealthRequest, options?: TransportRequestOptions): Promise<T.ClusterHealthResponse>
  async health (this: That, params?: T.ClusterHealthRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.index != null) {
      method = 'GET'
      path = `/_cluster/health/${encodeURIComponent(params.index.toString())}`
    } else {
      method = 'GET'
      path = '/_cluster/health'
    }
    const meta: TransportRequestMetadata = {
      name: 'cluster.health',
      pathParts: {
        index: params.index
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get cluster info. Returns basic information about the cluster.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/cluster-info.html | Elasticsearch API documentation}
    */
  async info (this: That, params: T.ClusterInfoRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterInfoResponse>
  async info (this: That, params: T.ClusterInfoRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterInfoResponse, unknown>>
  async info (this: That, params: T.ClusterInfoRequest, options?: TransportRequestOptions): Promise<T.ClusterInfoResponse>
  async info (this: That, params: T.ClusterInfoRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['target']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = `/_info/${encodeURIComponent(params.target.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'cluster.info',
      pathParts: {
        target: params.target
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get the pending cluster tasks. Get information about cluster-level changes (such as create index, update mapping, allocate or fail shard) that have not yet taken effect. NOTE: This API returns a list of any pending updates to the cluster state. These are distinct from the tasks reported by the task management API which include periodic tasks and tasks initiated by the user, such as node stats, search queries, or create index requests. However, if a user-initiated task such as a create index command causes a cluster state update, the activity of this task might be reported by both task api and pending cluster tasks API.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/cluster-pending.html | Elasticsearch API documentation}
    */
  async pendingTasks (this: That, params?: T.ClusterPendingTasksRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterPendingTasksResponse>
  async pendingTasks (this: That, params?: T.ClusterPendingTasksRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterPendingTasksResponse, unknown>>
  async pendingTasks (this: That, params?: T.ClusterPendingTasksRequest, options?: TransportRequestOptions): Promise<T.ClusterPendingTasksResponse>
  async pendingTasks (this: That, params?: T.ClusterPendingTasksRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_cluster/pending_tasks'
    const meta: TransportRequestMetadata = {
      name: 'cluster.pending_tasks'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Update voting configuration exclusions. Update the cluster voting config exclusions by node IDs or node names. By default, if there are more than three master-eligible nodes in the cluster and you remove fewer than half of the master-eligible nodes in the cluster at once, the voting configuration automatically shrinks. If you want to shrink the voting configuration to contain fewer than three nodes or to remove half or more of the master-eligible nodes in the cluster at once, use this API to remove departing nodes from the voting configuration manually. The API adds an entry for each specified node to the cluster’s voting configuration exclusions list. It then waits until the cluster has reconfigured its voting configuration to exclude the specified nodes. Clusters should have no voting configuration exclusions in normal operation. Once the excluded nodes have stopped, clear the voting configuration exclusions with `DELETE /_cluster/voting_config_exclusions`. This API waits for the nodes to be fully removed from the cluster before it returns. If your cluster has voting configuration exclusions for nodes that you no longer intend to remove, use `DELETE /_cluster/voting_config_exclusions?wait_for_removal=false` to clear the voting configuration exclusions without waiting for the nodes to leave the cluster. A response to `POST /_cluster/voting_config_exclusions` with an HTTP status code of 200 OK guarantees that the node has been removed from the voting configuration and will not be reinstated until the voting configuration exclusions are cleared by calling `DELETE /_cluster/voting_config_exclusions`. If the call to `POST /_cluster/voting_config_exclusions` fails or returns a response with an HTTP status code other than 200 OK then the node may not have been removed from the voting configuration. In that case, you may safely retry the call. NOTE: Voting exclusions are required only when you remove at least half of the master-eligible nodes from a cluster in a short time period. They are not required when removing master-ineligible nodes or when removing fewer than half of the master-eligible nodes.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/voting-config-exclusions.html | Elasticsearch API documentation}
    */
  async postVotingConfigExclusions (this: That, params?: T.ClusterPostVotingConfigExclusionsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterPostVotingConfigExclusionsResponse>
  async postVotingConfigExclusions (this: That, params?: T.ClusterPostVotingConfigExclusionsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterPostVotingConfigExclusionsResponse, unknown>>
  async postVotingConfigExclusions (this: That, params?: T.ClusterPostVotingConfigExclusionsRequest, options?: TransportRequestOptions): Promise<T.ClusterPostVotingConfigExclusionsResponse>
  async postVotingConfigExclusions (this: That, params?: T.ClusterPostVotingConfigExclusionsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = '/_cluster/voting_config_exclusions'
    const meta: TransportRequestMetadata = {
      name: 'cluster.post_voting_config_exclusions'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Create or update a component template. Component templates are building blocks for constructing index templates that specify index mappings, settings, and aliases. An index template can be composed of multiple component templates. To use a component template, specify it in an index template’s `composed_of` list. Component templates are only applied to new data streams and indices as part of a matching index template. Settings and mappings specified directly in the index template or the create index request override any settings or mappings specified in a component template. Component templates are only used during index creation. For data streams, this includes data stream creation and the creation of a stream’s backing indices. Changes to component templates do not affect existing indices, including a stream’s backing indices. You can use C-style `/* *\/` block comments in component templates. You can include comments anywhere in the request body except before the opening curly bracket. **Applying component templates** You cannot directly apply a component template to a data stream or index. To be applied, a component template must be included in an index template's `composed_of` list.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/indices-component-template.html | Elasticsearch API documentation}
    */
  async putComponentTemplate (this: That, params: T.ClusterPutComponentTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterPutComponentTemplateResponse>
  async putComponentTemplate (this: That, params: T.ClusterPutComponentTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterPutComponentTemplateResponse, unknown>>
  async putComponentTemplate (this: That, params: T.ClusterPutComponentTemplateRequest, options?: TransportRequestOptions): Promise<T.ClusterPutComponentTemplateResponse>
  async putComponentTemplate (this: That, params: T.ClusterPutComponentTemplateRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const acceptedBody: string[] = ['template', 'version', '_meta', 'deprecated']
    const querystring: Record<string, any> = {}
    const body: Record<string, any> = {}

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = `/_component_template/${encodeURIComponent(params.name.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'cluster.put_component_template',
      pathParts: {
        name: params.name
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Update the cluster settings. Configure and update dynamic settings on a running cluster. You can also configure dynamic settings locally on an unstarted or shut down node in `elasticsearch.yml`. Updates made with this API can be persistent, which apply across cluster restarts, or transient, which reset after a cluster restart. You can also reset transient or persistent settings by assigning them a null value. If you configure the same setting using multiple methods, Elasticsearch applies the settings in following order of precedence: 1) Transient setting; 2) Persistent setting; 3) `elasticsearch.yml` setting; 4) Default setting value. For example, you can apply a transient setting to override a persistent setting or `elasticsearch.yml` setting. However, a change to an `elasticsearch.yml` setting will not override a defined transient or persistent setting. TIP: In Elastic Cloud, use the user settings feature to configure all cluster settings. This method automatically rejects unsafe settings that could break your cluster. If you run Elasticsearch on your own hardware, use this API to configure dynamic cluster settings. Only use `elasticsearch.yml` for static cluster settings and node settings. The API doesn’t require a restart and ensures a setting’s value is the same on all nodes. WARNING: Transient cluster settings are no longer recommended. Use persistent cluster settings instead. If a cluster becomes unstable, transient settings can clear unexpectedly, resulting in a potentially undesired cluster configuration.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/cluster-update-settings.html | Elasticsearch API documentation}
    */
  async putSettings (this: That, params?: T.ClusterPutSettingsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterPutSettingsResponse>
  async putSettings (this: That, params?: T.ClusterPutSettingsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterPutSettingsResponse, unknown>>
  async putSettings (this: That, params?: T.ClusterPutSettingsRequest, options?: TransportRequestOptions): Promise<T.ClusterPutSettingsResponse>
  async putSettings (this: That, params?: T.ClusterPutSettingsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = ['persistent', 'transient']
    const querystring: Record<string, any> = {}
    const body: Record<string, any> = {}

    params = params ?? {}
    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = '/_cluster/settings'
    const meta: TransportRequestMetadata = {
      name: 'cluster.put_settings'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get remote cluster information. Get all of the configured remote cluster information. This API returns connection and endpoint information keyed by the configured remote cluster alias.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/cluster-remote-info.html | Elasticsearch API documentation}
    */
  async remoteInfo (this: That, params?: T.ClusterRemoteInfoRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterRemoteInfoResponse>
  async remoteInfo (this: That, params?: T.ClusterRemoteInfoRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterRemoteInfoResponse, unknown>>
  async remoteInfo (this: That, params?: T.ClusterRemoteInfoRequest, options?: TransportRequestOptions): Promise<T.ClusterRemoteInfoResponse>
  async remoteInfo (this: That, params?: T.ClusterRemoteInfoRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_remote/info'
    const meta: TransportRequestMetadata = {
      name: 'cluster.remote_info'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Reroute the cluster. Manually change the allocation of individual shards in the cluster. For example, a shard can be moved from one node to another explicitly, an allocation can be canceled, and an unassigned shard can be explicitly allocated to a specific node. It is important to note that after processing any reroute commands Elasticsearch will perform rebalancing as normal (respecting the values of settings such as `cluster.routing.rebalance.enable`) in order to remain in a balanced state. For example, if the requested allocation includes moving a shard from node1 to node2 then this may cause a shard to be moved from node2 back to node1 to even things out. The cluster can be set to disable allocations using the `cluster.routing.allocation.enable` setting. If allocations are disabled then the only allocations that will be performed are explicit ones given using the reroute command, and consequent allocations due to rebalancing. The cluster will attempt to allocate a shard a maximum of `index.allocation.max_retries` times in a row (defaults to `5`), before giving up and leaving the shard unallocated. This scenario can be caused by structural problems such as having an analyzer which refers to a stopwords file which doesn’t exist on all nodes. Once the problem has been corrected, allocation can be manually retried by calling the reroute API with the `?retry_failed` URI query parameter, which will attempt a single retry round for these shards.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/cluster-reroute.html | Elasticsearch API documentation}
    */
  async reroute (this: That, params?: T.ClusterRerouteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterRerouteResponse>
  async reroute (this: That, params?: T.ClusterRerouteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterRerouteResponse, unknown>>
  async reroute (this: That, params?: T.ClusterRerouteRequest, options?: TransportRequestOptions): Promise<T.ClusterRerouteResponse>
  async reroute (this: That, params?: T.ClusterRerouteRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const acceptedBody: string[] = ['commands']
    const querystring: Record<string, any> = {}
    const body: Record<string, any> = {}

    params = params ?? {}
    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = '/_cluster/reroute'
    const meta: TransportRequestMetadata = {
      name: 'cluster.reroute'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get the cluster state. Get comprehensive information about the state of the cluster. The cluster state is an internal data structure which keeps track of a variety of information needed by every node, including the identity and attributes of the other nodes in the cluster; cluster-wide settings; index metadata, including the mapping and settings for each index; the location and status of every shard copy in the cluster. The elected master node ensures that every node in the cluster has a copy of the same cluster state. This API lets you retrieve a representation of this internal state for debugging or diagnostic purposes. You may need to consult the Elasticsearch source code to determine the precise meaning of the response. By default the API will route requests to the elected master node since this node is the authoritative source of cluster states. You can also retrieve the cluster state held on the node handling the API request by adding the `?local=true` query parameter. Elasticsearch may need to expend significant effort to compute a response to this API in larger clusters, and the response may comprise a very large quantity of data. If you use this API repeatedly, your cluster may become unstable. WARNING: The response is a representation of an internal data structure. Its format is not subject to the same compatibility guarantees as other more stable APIs and may change from version to version. Do not query this API using external monitoring tools. Instead, obtain the information you require using other more stable cluster APIs.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/cluster-state.html | Elasticsearch API documentation}
    */
  async state (this: That, params?: T.ClusterStateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterStateResponse>
  async state (this: That, params?: T.ClusterStateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterStateResponse, unknown>>
  async state (this: That, params?: T.ClusterStateRequest, options?: TransportRequestOptions): Promise<T.ClusterStateResponse>
  async state (this: That, params?: T.ClusterStateRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['metric', 'index']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.metric != null && params.index != null) {
      method = 'GET'
      path = `/_cluster/state/${encodeURIComponent(params.metric.toString())}/${encodeURIComponent(params.index.toString())}`
    } else if (params.metric != null) {
      method = 'GET'
      path = `/_cluster/state/${encodeURIComponent(params.metric.toString())}`
    } else {
      method = 'GET'
      path = '/_cluster/state'
    }
    const meta: TransportRequestMetadata = {
      name: 'cluster.state',
      pathParts: {
        metric: params.metric,
        index: params.index
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get cluster statistics. Get basic index metrics (shard numbers, store size, memory usage) and information about the current nodes that form the cluster (number, roles, os, jvm versions, memory usage, cpu and installed plugins).
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/cluster-stats.html | Elasticsearch API documentation}
    */
  async stats (this: That, params?: T.ClusterStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClusterStatsResponse>
  async stats (this: That, params?: T.ClusterStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClusterStatsResponse, unknown>>
  async stats (this: That, params?: T.ClusterStatsRequest, options?: TransportRequestOptions): Promise<T.ClusterStatsResponse>
  async stats (this: That, params?: T.ClusterStatsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['node_id']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.node_id != null) {
      method = 'GET'
      path = `/_cluster/stats/nodes/${encodeURIComponent(params.node_id.toString())}`
    } else {
      method = 'GET'
      path = '/_cluster/stats'
    }
    const meta: TransportRequestMetadata = {
      name: 'cluster.stats',
      pathParts: {
        node_id: params.node_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
