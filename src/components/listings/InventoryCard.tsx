import clsx from "clsx";
import { useEffect, useState } from "react";
import Chip from "../Chip";
import { Momentum } from "@uiball/loaders";
import { faker } from "@faker-js/faker";

interface InventoryCardProps {
  itemName: string;
  currentBatch: number;
  sold: number;
  unsold: number;
  restock: number;
  backordered: number;
}

export default function InventoryCard(props: InventoryCardProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutTime = faker.number.int({ min: 1000, max: 3000 });

    setTimeout(() => {
      setLoading(false);
    }, timeoutTime);
  }, []);

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-2 bg-[#6095ac] text-white",
        "font-medium",
        "rounded-xl px-4 py-4",
        "relative"
      )}
    >
      <div
        className={clsx(
          !loading && "hidden",
          "absolute bottom-0 left-0 right-0 top-0",
          "rounded-xl bg-[#6095ac]",
          "flex items-center justify-center"
        )}
      >
        <Momentum color="#244f62" />
      </div>

      <div className=" font-normal">Inventory: {props.itemName}</div>

      <Chip
        label={`Current Batch: ${props.currentBatch}`}
        className="w-full bg-[#E8E8E8] text-center font-medium text-[#244F62]"
      />

      <div className="grid w-full grid-cols-2 gap-4">
        {/* sold */}
        <div className="flex w-full flex-col rounded-xl bg-[#9fc2d1]">
          <div className="rounded-t-xl bg-[#244f62] px-4 py-1 text-center">
            Sold
          </div>

          <div className="flex items-center justify-center px-4 py-2 text-[#244F62]">
            {props.sold}
          </div>
        </div>

        {/* unsold */}
        <div className="flex w-full flex-col rounded-xl bg-[#9fc2d1]">
          <div className="rounded-t-xl bg-[#244f62] px-4 py-1 text-center">
            Unsold
          </div>

          <div className="flex items-center justify-center px-4 py-2 text-[#244F62]">
            {props.unsold}
          </div>
        </div>

        {/* restock */}
        <div className="flex w-full flex-col rounded-xl bg-[#9fc2d1]">
          <div className="rounded-t-xl bg-[#244f62] px-4 py-1 text-center">
            Restock
          </div>

          <div className="flex items-center justify-center px-4 py-2 text-[#244F62]">
            {props.restock}
          </div>
        </div>

        {/* backordered */}
        <div className="flex w-full flex-col rounded-xl bg-[#9fc2d1]">
          <div className="rounded-t-xl bg-[#244f62] px-4 py-1 text-center">
            Backordered
          </div>

          <div className="flex items-center justify-center px-4 py-2 text-[#244F62]">
            {props.backordered}
          </div>
        </div>
      </div>
    </div>
  );
}
