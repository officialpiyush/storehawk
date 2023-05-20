import Chip from "@/components/Chip";
import VendorInfoBox from "@/components/vendors/VenderInfoBox";
import { IconLicense, IconPhotoPlus, IconSend } from "@tabler/icons-react";
import clsx from "clsx";
import type { ReactElement } from "react";

function VendorChipWithIcon(props: { icon: ReactElement; label: string }) {
  return (
    <div
      className={clsx(
        "rounded-full bg-black px-6 py-1 text-white",
        "flex items-center gap-1"
      )}
    >
      {props.icon}
      {props.label}
    </div>
  );
}

export default function VendorChatPage() {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="w-fit">
        <Chip label="Vendors" className="text-2xl font-bold bg-[#FF8577]" />
      </div>

      <div className="flex h-full w-full flex-1 flex-col gap-4 overflow-y-auto rounded-2xl bg-[#C0DE77] px-4 py-4">
        <VendorInfoBox title="SomeTitle" />

        <div className="flex h-full flex-col gap-4">
          <div className="flex-1 rounded-xl bg-[#D7ECF4] px-4 py-4">,.</div>

          <div className="flex items-center justify-between gap-4 rounded-xl bg-[#9FC2D1] px-4 py-2">
            <div className="flex flex-1 items-center gap-4">
              <input
                className="w-full rounded-md bg-[#d7ecf4] px-4 py-1"
                placeholder=""
                type="text"
              />

              <button>
                <VendorChipWithIcon
                  label="Send"
                  icon={<IconSend color="#D6F18E" />}
                />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button>
                <VendorChipWithIcon
                  label="Message Agreement"
                  icon={<IconLicense color="#D6F18E" />}
                />
              </button>
              <button>
                <VendorChipWithIcon
                  label="Image"
                  icon={<IconPhotoPlus color="#D6F18E" />}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
