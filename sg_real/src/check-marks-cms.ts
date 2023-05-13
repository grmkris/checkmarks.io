import { StateChange as StateChangeEvent } from "../generated/CheckMarksCMS/CheckMarksCMS";
import { StateChange } from "../generated/schema";
import { log } from "@graphprotocol/graph-ts";

export function handleStateChange(event: StateChangeEvent): void {
  let entity = new StateChange(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  log.debug("handleStateChange: {}", [event.transaction.hash.toHexString()]);
  entity.author = event.params.author;
  entity.data = event.params.data;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
