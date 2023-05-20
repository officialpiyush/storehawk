import Chip from "@/components/Chip";
import VendorInfoBox from "@/components/vendors/VenderInfoBox";

export default function VendorPage() {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="w-fit">
        <Chip label="Vendors" className="text-2xl font-bold bg-[#FF8577]" />
      </div>

      <div className="flex h-full w-full flex-1 flex-col gap-4 rounded-2xl bg-[#C0DE77] px-4 py-4 overflow-y-auto">
        {new Array(10).fill(0).map((_, i) => (
          <VendorInfoBox title="SomeTitle" key={i} />
        ))}
      </div>
    </div>
  );
}
