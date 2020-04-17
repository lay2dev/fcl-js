// package: execution
// file: flow/execution/execution.proto

import * as jspb from "google-protobuf";
import * as flow_entities_account_pb from "../../flow/entities/account_pb";
import * as flow_entities_event_pb from "../../flow/entities/event_pb";

export class PingRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingRequest;
  static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
  export type AsObject = {
  }
}

export class PingResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PingResponse): PingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingResponse;
  static deserializeBinaryFromReader(message: PingResponse, reader: jspb.BinaryReader): PingResponse;
}

export namespace PingResponse {
  export type AsObject = {
  }
}

export class GetAccountAtBlockIDRequest extends jspb.Message {
  getBlockId(): Uint8Array | string;
  getBlockId_asU8(): Uint8Array;
  getBlockId_asB64(): string;
  setBlockId(value: Uint8Array | string): void;

  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountAtBlockIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountAtBlockIDRequest): GetAccountAtBlockIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountAtBlockIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountAtBlockIDRequest;
  static deserializeBinaryFromReader(message: GetAccountAtBlockIDRequest, reader: jspb.BinaryReader): GetAccountAtBlockIDRequest;
}

export namespace GetAccountAtBlockIDRequest {
  export type AsObject = {
    blockId: Uint8Array | string,
    address: Uint8Array | string,
  }
}

export class GetAccountAtBlockIDResponse extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): flow_entities_account_pb.Account | undefined;
  setAccount(value?: flow_entities_account_pb.Account): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountAtBlockIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountAtBlockIDResponse): GetAccountAtBlockIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountAtBlockIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountAtBlockIDResponse;
  static deserializeBinaryFromReader(message: GetAccountAtBlockIDResponse, reader: jspb.BinaryReader): GetAccountAtBlockIDResponse;
}

export namespace GetAccountAtBlockIDResponse {
  export type AsObject = {
    account?: flow_entities_account_pb.Account.AsObject,
  }
}

export class ExecuteScriptAtBlockIDRequest extends jspb.Message {
  getBlockId(): Uint8Array | string;
  getBlockId_asU8(): Uint8Array;
  getBlockId_asB64(): string;
  setBlockId(value: Uint8Array | string): void;

  getScript(): Uint8Array | string;
  getScript_asU8(): Uint8Array;
  getScript_asB64(): string;
  setScript(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteScriptAtBlockIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteScriptAtBlockIDRequest): ExecuteScriptAtBlockIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteScriptAtBlockIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteScriptAtBlockIDRequest;
  static deserializeBinaryFromReader(message: ExecuteScriptAtBlockIDRequest, reader: jspb.BinaryReader): ExecuteScriptAtBlockIDRequest;
}

export namespace ExecuteScriptAtBlockIDRequest {
  export type AsObject = {
    blockId: Uint8Array | string,
    script: Uint8Array | string,
  }
}

export class ExecuteScriptResponse extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteScriptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteScriptResponse): ExecuteScriptResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteScriptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteScriptResponse;
  static deserializeBinaryFromReader(message: ExecuteScriptResponse, reader: jspb.BinaryReader): ExecuteScriptResponse;
}

export namespace ExecuteScriptResponse {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class EventsResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<EventsResponse.Result>;
  setResultsList(value: Array<EventsResponse.Result>): void;
  addResults(value?: EventsResponse.Result, index?: number): EventsResponse.Result;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EventsResponse): EventsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventsResponse;
  static deserializeBinaryFromReader(message: EventsResponse, reader: jspb.BinaryReader): EventsResponse;
}

export namespace EventsResponse {
  export type AsObject = {
    resultsList: Array<EventsResponse.Result.AsObject>,
  }

  export class Result extends jspb.Message {
    getBlockId(): Uint8Array | string;
    getBlockId_asU8(): Uint8Array;
    getBlockId_asB64(): string;
    setBlockId(value: Uint8Array | string): void;

    getBlockHeight(): number;
    setBlockHeight(value: number): void;

    clearEventsList(): void;
    getEventsList(): Array<flow_entities_event_pb.Event>;
    setEventsList(value: Array<flow_entities_event_pb.Event>): void;
    addEvents(value?: flow_entities_event_pb.Event, index?: number): flow_entities_event_pb.Event;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Result.AsObject;
    static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Result;
    static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
  }

  export namespace Result {
    export type AsObject = {
      blockId: Uint8Array | string,
      blockHeight: number,
      eventsList: Array<flow_entities_event_pb.Event.AsObject>,
    }
  }
}

export class GetEventsForBlockIDsRequest extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  clearBlockIdsList(): void;
  getBlockIdsList(): Array<Uint8Array | string>;
  getBlockIdsList_asU8(): Array<Uint8Array>;
  getBlockIdsList_asB64(): Array<string>;
  setBlockIdsList(value: Array<Uint8Array | string>): void;
  addBlockIds(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventsForBlockIDsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventsForBlockIDsRequest): GetEventsForBlockIDsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEventsForBlockIDsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventsForBlockIDsRequest;
  static deserializeBinaryFromReader(message: GetEventsForBlockIDsRequest, reader: jspb.BinaryReader): GetEventsForBlockIDsRequest;
}

export namespace GetEventsForBlockIDsRequest {
  export type AsObject = {
    type: string,
    blockIdsList: Array<Uint8Array | string>,
  }
}

export class GetEventsForBlockIDTransactionIDRequest extends jspb.Message {
  getBlockId(): Uint8Array | string;
  getBlockId_asU8(): Uint8Array;
  getBlockId_asB64(): string;
  setBlockId(value: Uint8Array | string): void;

  getTransactionId(): Uint8Array | string;
  getTransactionId_asU8(): Uint8Array;
  getTransactionId_asB64(): string;
  setTransactionId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventsForBlockIDTransactionIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventsForBlockIDTransactionIDRequest): GetEventsForBlockIDTransactionIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEventsForBlockIDTransactionIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventsForBlockIDTransactionIDRequest;
  static deserializeBinaryFromReader(message: GetEventsForBlockIDTransactionIDRequest, reader: jspb.BinaryReader): GetEventsForBlockIDTransactionIDRequest;
}

export namespace GetEventsForBlockIDTransactionIDRequest {
  export type AsObject = {
    blockId: Uint8Array | string,
    transactionId: Uint8Array | string,
  }
}
