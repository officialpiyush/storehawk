import { faker } from "@faker-js/faker";
import { Momentum } from "@uiball/loaders";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface ListingSellerCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon?: React.ReactNode;
  items: string[];
}

export default function ListingSellerCard(props: ListingSellerCardProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutTime = faker.number.int({ min: 1000, max: 3000 });

    setTimeout(() => {
      setLoading(false);
    }, timeoutTime);
  }, []);

  return (
    <div className="flex h-full w-full flex-col rounded-xl bg-white">
      <div
        className={clsx(
          "flex items-center justify-center gap-2",
          "px-4 py-3",
          "rounded-t-xl",
          props.className ?? "bg-[#fbd444]"
        )}
      >
        {props.icon}
        <div className="font-bold">{props.title}</div>
      </div>

      <div className="relative flex flex-col items-center justify-center gap-2 overflow-y-auto px-4 py-4">
        {props.items.map((item) => (
          <div key={item}>{item}</div>
        ))}

        <div
          className={clsx(
            "absolute bottom-0 left-0 right-0 top-0",
            "rounded-xl bg-white",
            "flex items-center justify-center",
            !loading && "hidden"
          )}
        >
          <Momentum color="#706a6a" />
        </div>
      </div>
    </div>
  );
}
