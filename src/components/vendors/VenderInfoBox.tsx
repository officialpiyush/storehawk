import { faker } from "@faker-js/faker";
import {
  IconBookmarks,
  IconFileDescription,
  IconMessageDots,
  IconTags,
} from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";
import type { ReactElement } from "react";

interface VendorInfoBoxProps {
  title: string;
}

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

export default function VendorInfoBox({ title }: VendorInfoBoxProps) {
  return (
    <div className="flex w-full flex-col rounded-xl bg-[#D7ECF4]">
      {/* first row */}
      <div className="flex items-center justify-between rounded-xl bg-[#9FC2D1] px-4 py-2">
        <span className="font-medium">{faker.person.fullName()}</span>

        <div className="flex gap-2">
          <button>
            <VendorChipWithIcon
              icon={<IconFileDescription color="#CFEB70" />}
              label="Agreements"
            />
          </button>

          <button>
            <VendorChipWithIcon
              icon={<IconBookmarks color="#CFEB70" />}
              label="9.33/10"
            />
          </button>

          <Link href={`/vendors/chat/${faker.number.hex(900090000000)}`}>
            <VendorChipWithIcon
              icon={<IconMessageDots color="#CFEB70" />}
              label="Text"
            />
          </Link>

          <button>
            <div
              className={clsx(
                "rounded-full bg-[#D7ECF4] px-6 py-1 text-[#706A6A]",
                "flex items-center gap-1"
              )}
            >
              <IconTags color="#706A6A" />
              Tags
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
