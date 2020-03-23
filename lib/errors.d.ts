// Licensed to Elasticsearch B.V under one or more agreements.
// Elasticsearch B.V licenses this file to you under the Apache 2.0 License.
// See the LICENSE file in the project root for more information

import { ApiResponse, ResponseBody } from './Transport'

export declare class ElasticsearchClientError extends Error {
  name: string;
  message: string;
}

export declare class TimeoutError extends ElasticsearchClientError {
  name: string;
  message: string;
  meta: ApiResponse;
  constructor(message: string, meta: ApiResponse);
}

export declare class ConnectionError extends ElasticsearchClientError {
  name: string;
  message: string;
  meta: ApiResponse;
  constructor(message: string, meta: ApiResponse);
}

export declare class NoLivingConnectionsError extends ElasticsearchClientError {
  name: string;
  message: string;
  meta: ApiResponse;
  constructor(message: string, meta: ApiResponse);
}

export declare class SerializationError extends ElasticsearchClientError {
  name: string;
  message: string;
  data: object;
  constructor(message: string, data: object);
}

export declare class DeserializationError extends ElasticsearchClientError {
  name: string;
  message: string;
  data: string;
  constructor(message: string, data: string);
}

export declare class ConfigurationError extends ElasticsearchClientError {
  name: string;
  message: string;
  constructor(message: string);
}

export declare class ResponseError extends ElasticsearchClientError {
  name: string;
  message: string;
  meta: ApiResponse;
  body: ResponseBody;
  statusCode: number;
  headers: Record<string, any>;
  constructor(meta: ApiResponse);
}
