import Chip from "@/components/Chip";
import UpdateClassName from "@/components/UpdateClassName";

export default function NFTPage() {
  return (
    <>
      <div className="-mt-6 flex h-full w-full flex-col gap-4">
        <div className="w-fit">
          <Chip label="NFT Funds" className="bg-white text-2xl font-bold" />
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
