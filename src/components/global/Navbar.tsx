import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

const NAVBAR_ITEMS = [
  {
    name: "StoreHawk",
    path: "/",
    customClassName: "font-lobster font-bold text-lg",
  },
  {
    name: "Orders",
    path: "/orders",
  },
  {
    name: "Listings",
    path: "/listings",
  },
  {
    name: "Vendors",
    path: "/vendors",
  },
  {
    name: "My Ledger",
    path: "/ledger",
  },
  {
    name: "Tokenized Debt",
    path: "/tokenized-debt",
  },
  {
    name: "NFT",
    path: "/nft",
  },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      {NAVBAR_ITEMS.map((item) => (
        <Link
          className={clsx(
            router.pathname === item.path &&
              "rounded-full bg-[#FF8577] px-6 py-1",
            "font-medium",
            item.customClassName && item.customClassName
          )}
          href={item.path}
          key={item.name}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
