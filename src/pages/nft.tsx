import Chip from "@/components/Chip";
import NFTCard from "@/components/NFT/NFTCard";
import UpdateClassName from "@/components/UpdateClassName";

const NFT_DETAILS = [
  {
    title: "Enjoy free delivery on your next 5 orders.*^",
    description:
      "*Above 60 units, compared to 100 units for a normal customer.^Revoked after 5 orders.",
    image: "/nft-issue/14.png",
  },
  {
    title: "A drop of sustainable freebies on your next 5 orders.*^",
    description:
      "*Subject to availability, supply comes from certified sustainable vendors. ^Revoked after 5 orders.",
    image: "/nft-issue/15.png",
  },
  {
    title: "Enjoy a discount on your next 5 orders.*^",
    description:
      "*The order must amount to a minimum of 70% or above of the last splurge purchase. ^Revoked after 5 orders.",
    image: "/nft-issue/16.png",
  },
];

export default function NFTPage() {
  return (
    <>
      <div className="-mt-6 flex h-full w-full flex-col gap-4">
        <div className="w-fit">
          <Chip label="NFT" className="bg-white text-2xl font-bold" />
        </div>

        <div className="grid h-full w-full flex-1 grid-cols-3 gap-12">
          {NFT_DETAILS.map((detail, index) => (
            <NFTCard
              key={index}
              title={detail.title}
              description={detail.description}
              image={detail.image}
            />
          ))}
        </div>
      </div>

      <UpdateClassName
        selector="#navbarColor"
        removeClassName={[]}
        className={["bg-[#ff0000]"]}
      />

      <UpdateClassName
        selector="#navbarLink"
        removeClassName={["bg-[#FF8577]"]}
        className={["bg-[#ffee00]"]}
      />

      <UpdateClassName
        selector="#backgroundImage"
        removeClassName={["bg-[url('/wave.png')]", "h-40"]}
        className={["bg-[url('/nft-issue.png')]"]}
      />
    </>
  );
}
