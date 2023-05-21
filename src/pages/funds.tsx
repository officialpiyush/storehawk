import Chip from "@/components/Chip";
import NFTCard from "@/components/NFT/NFTCard";
import UpdateClassName from "@/components/UpdateClassName";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

const NFTs = [
  {
    image: "/nft-images/6.png",
    amount: faker.number.float({ min: 0.1, max: 1, precision: 0.1 }),
    sold: faker.helpers.arrayElement([true, false]),
    time: faker.date.future({
      refDate: dayjs().add(1, "hour").toDate(),
    }),
  },
  {
    image: "/nft-images/7.png",
    amount: faker.number.float({ min: 0.1, max: 1, precision: 0.1 }),
    sold: faker.helpers.arrayElement([true, false]),
    time: faker.date.future({
      refDate: dayjs().add(1, "hour").toDate(),
    }),
  },
  {
    image: "/nft-images/8.png",
    amount: faker.number.float({ min: 0.1, max: 1, precision: 0.1 }),
    sold: faker.helpers.arrayElement([true, false]),
    time: faker.date.future({
      refDate: dayjs().add(1, "hour").toDate(),
    }),
  },
  {
    image: "/nft-images/9.png",
    amount: faker.number.float({ min: 0.1, max: 1, precision: 0.1 }),
    sold: faker.helpers.arrayElement([true, false]),
    time: faker.date.future({
      refDate: dayjs().add(1, "day").toDate(),
    }),
  },
  {
    image: "/nft-images/10.png",
    amount: faker.number.float({ min: 0.1, max: 1, precision: 0.1 }),
    sold: faker.helpers.arrayElement([true, false]),
    time: faker.date.future({
      refDate: dayjs().add(1, "hour").toDate(),
    }),
  },
  {
    image: "/nft-images/11.png",
    amount: faker.number.float({ min: 0.1, max: 1, precision: 0.1 }),
    sold: faker.helpers.arrayElement([true, false]),
    time: faker.date.future({
      refDate: dayjs().add(1, "hour").toDate(),
    }),
  },
  {
    image: "/nft-images/12.png",
    amount: faker.number.float({ min: 0.1, max: 1, precision: 0.1 }),
    sold: faker.helpers.arrayElement([true, false]),
    time: faker.date.future({
      refDate: dayjs().add(1, "hour").toDate(),
    }),
  },
  {
    image: "/nft-images/13.png",
    amount: faker.number.float({ min: 0.1, max: 1, precision: 0.1 }),
    sold: faker.helpers.arrayElement([true, false]),
    time: faker.date.future({
      refDate: dayjs().add(1, "hour").toDate(),
    }),
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
                  sold={nft.sold}
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
