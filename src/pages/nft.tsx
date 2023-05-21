import Chip from "@/components/Chip";
import UpdateClassName from "@/components/UpdateClassName";

export default function NFTPage() {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="w-fit">
        <Chip label="NFT Funds" className="bg-white text-2xl font-bold" />
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
    </div>
  );
}
