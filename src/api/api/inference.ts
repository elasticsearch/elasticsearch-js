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

export default class Inference {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Delete an inference endpoint
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-inference-delete | Elasticsearch API documentation}
    */
  async delete (this: That, params: T.InferenceDeleteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.InferenceDeleteResponse>
  async delete (this: That, params: T.InferenceDeleteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.InferenceDeleteResponse, unknown>>
  async delete (this: That, params: T.InferenceDeleteRequest, options?: TransportRequestOptions): Promise<T.InferenceDeleteResponse>
  async delete (this: That, params: T.InferenceDeleteRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['task_type', 'inference_id']
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

    let method = ''
    let path = ''
    if (params.task_type != null && params.inference_id != null) {
      method = 'DELETE'
      path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.inference_id.toString())}`
    } else {
      method = 'DELETE'
      path = `/_inference/${encodeURIComponent(params.inference_id.toString())}`
    }
    const meta: TransportRequestMetadata = {
      name: 'inference.delete',
      pathParts: {
        task_type: params.task_type,
        inference_id: params.inference_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get an inference endpoint
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-inference-get | Elasticsearch API documentation}
    */
  async get (this: That, params?: T.InferenceGetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.InferenceGetResponse>
  async get (this: That, params?: T.InferenceGetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.InferenceGetResponse, unknown>>
  async get (this: That, params?: T.InferenceGetRequest, options?: TransportRequestOptions): Promise<T.InferenceGetResponse>
  async get (this: That, params?: T.InferenceGetRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['task_type', 'inference_id']
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

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body' && key !== 'querystring') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.task_type != null && params.inference_id != null) {
      method = 'GET'
      path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.inference_id.toString())}`
    } else if (params.inference_id != null) {
      method = 'GET'
      path = `/_inference/${encodeURIComponent(params.inference_id.toString())}`
    } else {
      method = 'GET'
      path = '/_inference'
    }
    const meta: TransportRequestMetadata = {
      name: 'inference.get',
      pathParts: {
        task_type: params.task_type,
        inference_id: params.inference_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Perform inference on the service. This API enables you to use machine learning models to perform specific tasks on data that you provide as an input. It returns a response with the results of the tasks. The inference endpoint you use can perform one specific task that has been defined when the endpoint was created with the create inference API. > info > The inference APIs enable you to use certain services, such as built-in machine learning models (ELSER, E5), models uploaded through Eland, Cohere, OpenAI, Azure, Google AI Studio, Google Vertex AI, Anthropic, Watsonx.ai, or Hugging Face. For built-in models and models uploaded through Eland, the inference APIs offer an alternative way to use and manage trained models. However, if you do not plan to use the inference APIs to use these models or if you want to use non-NLP models, use the machine learning trained model APIs.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-inference-inference | Elasticsearch API documentation}
    */
  async inference (this: That, params: T.InferenceInferenceRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.InferenceInferenceResponse>
  async inference (this: That, params: T.InferenceInferenceRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.InferenceInferenceResponse, unknown>>
  async inference (this: That, params: T.InferenceInferenceRequest, options?: TransportRequestOptions): Promise<T.InferenceInferenceResponse>
  async inference (this: That, params: T.InferenceInferenceRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['task_type', 'inference_id']
    const acceptedBody: string[] = ['query', 'input', 'task_settings']
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

    let method = ''
    let path = ''
    if (params.task_type != null && params.inference_id != null) {
      method = 'POST'
      path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.inference_id.toString())}`
    } else {
      method = 'POST'
      path = `/_inference/${encodeURIComponent(params.inference_id.toString())}`
    }
    const meta: TransportRequestMetadata = {
      name: 'inference.inference',
      pathParts: {
        task_type: params.task_type,
        inference_id: params.inference_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Create an inference endpoint. When you create an inference endpoint, the associated machine learning model is automatically deployed if it is not already running. After creating the endpoint, wait for the model deployment to complete before using it. To verify the deployment status, use the get trained model statistics API. Look for `"state": "fully_allocated"` in the response and ensure that the `"allocation_count"` matches the `"target_allocation_count"`. Avoid creating multiple endpoints for the same model unless required, as each endpoint consumes significant resources. IMPORTANT: The inference APIs enable you to use certain services, such as built-in machine learning models (ELSER, E5), models uploaded through Eland, Cohere, OpenAI, Mistral, Azure OpenAI, Google AI Studio, Google Vertex AI, Anthropic, Watsonx.ai, or Hugging Face. For built-in models and models uploaded through Eland, the inference APIs offer an alternative way to use and manage trained models. However, if you do not plan to use the inference APIs to use these models or if you want to use non-NLP models, use the machine learning trained model APIs.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-inference-put | Elasticsearch API documentation}
    */
  async put (this: That, params: T.InferencePutRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.InferencePutResponse>
  async put (this: That, params: T.InferencePutRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.InferencePutResponse, unknown>>
  async put (this: That, params: T.InferencePutRequest, options?: TransportRequestOptions): Promise<T.InferencePutResponse>
  async put (this: That, params: T.InferencePutRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['task_type', 'inference_id']
    const acceptedBody: string[] = ['inference_config']
    const userQuery = params?.querystring
    const querystring: Record<string, any> = userQuery != null ? { ...userQuery } : {}

    let body: any = params.body ?? undefined
    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body' && key !== 'querystring') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.task_type != null && params.inference_id != null) {
      method = 'PUT'
      path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.inference_id.toString())}`
    } else {
      method = 'PUT'
      path = `/_inference/${encodeURIComponent(params.inference_id.toString())}`
    }
    const meta: TransportRequestMetadata = {
      name: 'inference.put',
      pathParts: {
        task_type: params.task_type,
        inference_id: params.inference_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Perform streaming inference. Get real-time responses for completion tasks by delivering answers incrementally, reducing response times during computation. This API works only with the completion task type. IMPORTANT: The inference APIs enable you to use certain services, such as built-in machine learning models (ELSER, E5), models uploaded through Eland, Cohere, OpenAI, Azure, Google AI Studio, Google Vertex AI, Anthropic, Watsonx.ai, or Hugging Face. For built-in models and models uploaded through Eland, the inference APIs offer an alternative way to use and manage trained models. However, if you do not plan to use the inference APIs to use these models or if you want to use non-NLP models, use the machine learning trained model APIs. This API requires the `monitor_inference` cluster privilege (the built-in `inference_admin` and `inference_user` roles grant this privilege). You must use a client that supports streaming.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-inference-stream-inference | Elasticsearch API documentation}
    */
  async streamInference (this: That, params: T.InferenceStreamInferenceRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.InferenceStreamInferenceResponse>
  async streamInference (this: That, params: T.InferenceStreamInferenceRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.InferenceStreamInferenceResponse, unknown>>
  async streamInference (this: That, params: T.InferenceStreamInferenceRequest, options?: TransportRequestOptions): Promise<T.InferenceStreamInferenceResponse>
  async streamInference (this: That, params: T.InferenceStreamInferenceRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['inference_id', 'task_type']
    const acceptedBody: string[] = ['input']
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

    let method = ''
    let path = ''
    if (params.task_type != null && params.inference_id != null) {
      method = 'POST'
      path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.inference_id.toString())}/_stream`
    } else {
      method = 'POST'
      path = `/_inference/${encodeURIComponent(params.inference_id.toString())}/_stream`
    }
    const meta: TransportRequestMetadata = {
      name: 'inference.stream_inference',
      pathParts: {
        inference_id: params.inference_id,
        task_type: params.task_type
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Perform inference on the service using the Unified Schema
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/unified-inference-api.html | Elasticsearch API documentation}
    */
  async unifiedInference (this: That, params: T.InferenceUnifiedInferenceRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.InferenceUnifiedInferenceResponse>
  async unifiedInference (this: That, params: T.InferenceUnifiedInferenceRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.InferenceUnifiedInferenceResponse, unknown>>
  async unifiedInference (this: That, params: T.InferenceUnifiedInferenceRequest, options?: TransportRequestOptions): Promise<T.InferenceUnifiedInferenceResponse>
  async unifiedInference (this: That, params: T.InferenceUnifiedInferenceRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['task_type', 'inference_id']
    const acceptedBody: string[] = ['messages', 'model', 'max_completion_tokens', 'stop', 'temperature', 'tool_choice', 'tools', 'top_p']
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

    let method = ''
    let path = ''
    if (params.task_type != null && params.inference_id != null) {
      method = 'POST'
      path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.inference_id.toString())}/_unified`
    } else {
      method = 'POST'
      path = `/_inference/${encodeURIComponent(params.inference_id.toString())}/_unified`
    }
    const meta: TransportRequestMetadata = {
      name: 'inference.unified_inference',
      pathParts: {
        task_type: params.task_type,
        inference_id: params.inference_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Update an inference endpoint. Modify `task_settings`, secrets (within `service_settings`), or `num_allocations` for an inference endpoint, depending on the specific endpoint service and `task_type`. IMPORTANT: The inference APIs enable you to use certain services, such as built-in machine learning models (ELSER, E5), models uploaded through Eland, Cohere, OpenAI, Azure, Google AI Studio, Google Vertex AI, Anthropic, Watsonx.ai, or Hugging Face. For built-in models and models uploaded through Eland, the inference APIs offer an alternative way to use and manage trained models. However, if you do not plan to use the inference APIs to use these models or if you want to use non-NLP models, use the machine learning trained model APIs.
    * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-inference-update | Elasticsearch API documentation}
    */
  async update (this: That, params: T.InferenceUpdateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.InferenceUpdateResponse>
  async update (this: That, params: T.InferenceUpdateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.InferenceUpdateResponse, unknown>>
  async update (this: That, params: T.InferenceUpdateRequest, options?: TransportRequestOptions): Promise<T.InferenceUpdateResponse>
  async update (this: That, params: T.InferenceUpdateRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['inference_id', 'task_type']
    const acceptedBody: string[] = ['inference_config']
    const userQuery = params?.querystring
    const querystring: Record<string, any> = userQuery != null ? { ...userQuery } : {}

    let body: any = params.body ?? undefined
    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body' && key !== 'querystring') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.task_type != null && params.inference_id != null) {
      method = 'POST'
      path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.inference_id.toString())}/_update`
    } else {
      method = 'POST'
      path = `/_inference/${encodeURIComponent(params.inference_id.toString())}/_update`
    }
    const meta: TransportRequestMetadata = {
      name: 'inference.update',
      pathParts: {
        inference_id: params.inference_id,
        task_type: params.task_type
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
