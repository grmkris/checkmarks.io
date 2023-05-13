import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import { StateChange } from "../generated/CheckMarksCMS/CheckMarksCMS"

export function createStateChangeEvent(
  author: Address,
  data: Bytes
): StateChange {
  let stateChangeEvent = changetype<StateChange>(newMockEvent())

  stateChangeEvent.parameters = new Array()

  stateChangeEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromAddress(author))
  )
  stateChangeEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )

  return stateChangeEvent
}
