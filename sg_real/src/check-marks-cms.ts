import { StateChange as StateChangeEvent } from "../generated/CheckMarksCMS/CheckMarksCMS"
import { StateChange } from "../generated/schema"

export function handleStateChange(event: StateChangeEvent): void {
  let entity = new StateChange(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.author = event.params.author
  entity.data = event.params.data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
