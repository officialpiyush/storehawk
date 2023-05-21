import Chip from "@/components/Chip";
import UpdateClassName from "@/components/UpdateClassName";

export default function NFTPage() {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="w-fit">
        <Chip label="Dashboard" className="bg-[#FF8577] text-2xl font-bold" />
      </div>

      <UpdateClassName
        selector="#navbarColor"
        removeClassName={[]}
        className={["bg-[#b25cff]"]}
      />
    </div>
  );
}
