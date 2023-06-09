// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class StateChange extends ethereum.Event {
  get params(): StateChange__Params {
    return new StateChange__Params(this);
  }
}

export class StateChange__Params {
  _event: StateChange;

  constructor(event: StateChange) {
    this._event = event;
  }

  get author(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get data(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class CheckMarksCMS extends ethereum.SmartContract {
  static bind(address: Address): CheckMarksCMS {
    return new CheckMarksCMS("CheckMarksCMS", address);
  }
}

export class StateChangeCall extends ethereum.Call {
  get inputs(): StateChangeCall__Inputs {
    return new StateChangeCall__Inputs(this);
  }

  get outputs(): StateChangeCall__Outputs {
    return new StateChangeCall__Outputs(this);
  }
}

export class StateChangeCall__Inputs {
  _call: StateChangeCall;

  constructor(call: StateChangeCall) {
    this._call = call;
  }

  get data_(): Array<string> {
    return this._call.inputValues[0].value.toStringArray();
  }
}

export class StateChangeCall__Outputs {
  _call: StateChangeCall;

  constructor(call: StateChangeCall) {
    this._call = call;
  }
}
