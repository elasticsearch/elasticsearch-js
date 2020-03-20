// Licensed to Elasticsearch B.V under one or more agreements.
// Elasticsearch B.V licenses this file to you under the Apache 2.0 License.
// See the LICENSE file in the project root for more information

import { Readable as ReadableStream } from 'stream';
import { ConnectionPool, CloudConnectionPool } from './pool';
import Connection from './Connection';
import Serializer from './Serializer';
import * as errors from './errors';

export type ApiError = errors.ConfigurationError | errors.ConnectionError |
                       errors.DeserializationError | errors.SerializationError |
                       errors.NoLivingConnectionsError | errors.ResponseError |
                       errors.TimeoutError

export interface nodeSelectorFn {
  (connections: Connection[]): Connection;
}

export interface nodeFilterFn {
  (connection: Connection): boolean;
}

export interface generateRequestIdFn {
  (params: TransportRequestParams, options: TransportRequestOptions): any;
}

interface TransportOptions {
  emit: (event: string | symbol, ...args: any[]) => boolean;
  connectionPool: ConnectionPool | CloudConnectionPool;
  serializer: Serializer;
  maxRetries: number;
  requestTimeout: number | string;
  suggestCompression?: boolean;
  compression?: 'gzip';
  sniffInterval?: number;
  sniffOnConnectionFault?: boolean;
  sniffEndpoint: string;
  sniffOnStart?: boolean;
  nodeFilter?: nodeFilterFn;
  nodeSelector?: string | nodeSelectorFn;
  headers?: Record<string, any>;
  generateRequestId?: generateRequestIdFn;
  name?: string;
  opaqueIdPrefix?: string;
}

export interface RequestEvent<Response = any, Context = unknown> {
  body: Response;
  statusCode: number | null;
  headers: Record<string, any> | null;
  warnings: string[] | null;
  meta: {
    context: Context;
    name: string;
    request: {
      params: TransportRequestParams;
      options: TransportRequestOptions;
      id: any;
    };
    connection: Connection;
    attempts: number;
    aborted: boolean;
    sniff?: {
      hosts: any[];
      reason: string;
    };
  };
}

// ApiResponse and RequestEvent are the same thing
// we are doing this for have more clear names
export interface ApiResponse<Response = any, Context = unknown> extends RequestEvent<Response, Context> {}

export type BodyType = Record<string, any> | string | Buffer | ReadableStream
export type NDBodyType = Record<string, any>[] | string[] | Buffer | ReadableStream

export interface TransportRequestParams {
  method: string;
  path: string;
  body?: BodyType;
  bulkBody?: NDBodyType;
  querystring?: Record<string, any>;
}

export interface TransportRequestOptions {
  ignore?: number[];
  requestTimeout?: number | string;
  maxRetries?: number;
  asStream?: boolean;
  headers?: Record<string, any>;
  querystring?: Record<string, any>;
  compression?: 'gzip';
  id?: any;
  context?: any;
  warnings?: string[];
  opaqueId?: string;
}

export interface TransportRequestCallback {
  abort: () => void;
}

export interface TransportGetConnectionOptions {
  requestId: string;
}

export interface TransportSniffOptions {
  reason: string;
  requestId?: string;
}

export default class Transport {
  static sniffReasons: {
    SNIFF_ON_START: string;
    SNIFF_INTERVAL: string;
    SNIFF_ON_CONNECTION_FAULT: string;
    DEFAULT: string;
  };
  emit: (event: string | symbol, ...args: any[]) => boolean;
  connectionPool: ConnectionPool | CloudConnectionPool;
  serializer: Serializer;
  maxRetries: number;
  requestTimeout: number;
  suggestCompression: boolean;
  compression: 'gzip' | false;
  sniffInterval: number;
  sniffOnConnectionFault: boolean;
  opaqueIdPrefix: string | null;
  sniffEndpoint: string;
  _sniffEnabled: boolean;
  _nextSniff: number;
  _isSniffing: boolean;
  constructor(opts: TransportOptions);
  request(params: TransportRequestParams, options?: TransportRequestOptions): Promise<ApiResponse>;
  request(params: TransportRequestParams, options?: TransportRequestOptions, callback?: (err: ApiError, result: ApiResponse) => void): TransportRequestCallback;
  getConnection(opts: TransportGetConnectionOptions): Connection | null;
  sniff(opts?: TransportSniffOptions, callback?: (...args: any[]) => void): void;
}
