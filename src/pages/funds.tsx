import Chip from "@/components/Chip";
import NFTCard from "@/components/NFT/NFTCard";
import UpdateClassName from "@/components/UpdateClassName";

const NFTs = [
  {
    image: "/nft-images/6.png",
    amount: 0.5,
    sold: false,
    time: new Date(),
  },
  {
    image: "/nft-images/7.png",
    amount: 0.5,
    sold: false,
    time: new Date(),
  },
  {
    image: "/nft-images/8.png",
    amount: 0.5,
    sold: false,
    time: new Date(),
  },
  {
    image: "/nft-images/9.png",
    amount: 0.5,
    sold: false,
    time: new Date(),
  },
  {
    image: "/nft-images/10.png",
    amount: 0.5,
    sold: false,
    time: new Date(),
  },
  {
    image: "/nft-images/11.png",
    amount: 0.5,
    sold: false,
    time: new Date(),
  },
  {
    image: "/nft-images/12.png",
    amount: 0.5,
    sold: false,
    time: new Date(),
  },
  {
    image: "/nft-images/13.png",
    amount: 0.5,
    sold: false,
    time: new Date(),
  },
];

export default function NFTFundsPage() {
  return (
    <>
      <div className="-mt-6 flex h-full w-full flex-col gap-4">
        <div className="w-fit">
          <Chip label="NFT Funds" className="bg-white text-2xl font-bold" />
        </div>

        <div className="grid h-full w-full flex-1 grid-cols-12 gap-4">
          {/* nft cards */}
          <div className="col-span-8">
            <div className="grid h-full grid-cols-4 gap-4">
              {NFTs.map((nft, index) => (
                <NFTCard
                  key={index}
                  image={nft.image}
                  amount={nft.amount}
                  sold={false}
                  time={nft.time}
                />
              ))}
            </div>
          </div>

          {/* nft upload minting */}
          <div className="col-span-4"></div>
        </div>
      </div>

      <UpdateClassName
        selector="#navbarColor"
        removeClassName={[]}
        className={["bg-[#b25cff]"]}
      />

      <UpdateClassName
        selector="#navbarLink"
        removeClassName={["bg-[#FF8577]"]}
        className={["bg-[#d4ff5d]"]}
      />

      <UpdateClassName
        selector="#backgroundImage"
        removeClassName={["bg-[url('/wave.png')]", "h-40"]}
        className={["bg-[url('/nft-bg.png')]"]}
      />
    </>
  );
}
