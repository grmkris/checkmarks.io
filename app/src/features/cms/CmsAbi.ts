export const CmsAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "data",
        type: "string",
      },
    ],
    name: "StateChange",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "data_",
        type: "string[]",
      },
    ],
    name: "stateChange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
