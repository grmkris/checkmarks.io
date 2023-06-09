/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface CMSInterface extends utils.Interface {
  functions: {
    "stateChange(bytes[])": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "stateChange"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "stateChange",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "stateChange",
    data: BytesLike
  ): Result;

  events: {
    "StateChange(address,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "StateChange"): EventFragment;
}

export interface StateChangeEventObject {
  author: string;
  data: string;
}
export type StateChangeEvent = TypedEvent<
  [string, string],
  StateChangeEventObject
>;

export type StateChangeEventFilter = TypedEventFilter<StateChangeEvent>;

export interface CMS extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CMSInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    stateChange(
      data_: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  stateChange(
    data_: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    stateChange(
      data_: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "StateChange(address,bytes)"(
      author?: null,
      data?: null
    ): StateChangeEventFilter;
    StateChange(author?: null, data?: null): StateChangeEventFilter;
  };

  estimateGas: {
    stateChange(
      data_: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    stateChange(
      data_: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
