# Checkmarks.io

## Problem?

Checkmarks.io addresses the issue of fragmented identity and credibility verification across multiple platforms,
offering a unified solution that enhances trust, authenticity, and transparency in both web2 and web3 ecosystems.

## Solution!

Checkmarks.io lets you verify your credentials across both web2 and web3 platforms. 1) Connect with a wallet of your
choice

2) Select the social accounts you want to link to your profile
3) Receive verifiable credentials
4) Decide which info is made public and which remains hidden.

And there's more: anyone can run checkmarks and be an issuer of these credentials.

Being able to prove that you own your account and data not only sounds like a good thing - it really, really is. But why
pay for a check or badge on multiple separate platforms, if you can use one single service that runs as an extension on
any platform? Not only will you be able to support your own authenticity, but you'll also be able to critically evaluate
any content offered to you.

- It allows users to provide credentials required for access to a feature or platform, either publicly or through
  zk-proofing with Sismo.
- Third parties can query credentials through Checkmarks.io to see if you're eligible for any perks or rewards.
- When you're browsing reviews for a certain product or service, it'll be easier to discard unverified content and focus
  on what's written by verified clients or users. Go ahead and buy that lawnmower, it's actually good!
- Adding your Github checkmark to your post about programming shows your readers that you probably know what you're
  talking about.

### Landing:

https://checkmarks.io

### Slidedeck:

https://www.figma.com/proto/Xebftz6g7EsM12bnInoU1U/ETHLISBON_SLIDEDECK_CHECKMARKS?page-id=0%3A1&type=design&node-id=1-241&viewport=459%2C395%2C0.04&scaling=contain

### Prototype:

https://www.figma.com/file/kzYpGdafdvQUw9hU9qSCSg/wireframe?type=design&node-id=0%3A1&t=ebxww0OahMkXh1CE-1

## How it's Made

The project integrates all kinds of interesting tech from ETHLisbon's sponsors.

- IPFS/Filecoin
- Polygon ID
- The Graph
- Airstack (obtain wallet data)
- Sismo (zk authentication)
- Chainlink (datafeed)
- Lens
- Optimism

For our design, we used Figma, Framer, Adobe Illustrator, Affinity Design and Vectornator. Our landing page on Framer
links to the app on checkmarks.io

## How to run the App?

1.

```bash
pnpm install
```

2.

```bash
cd app && pnpm run dev 
```