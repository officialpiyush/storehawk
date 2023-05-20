import Chip from "@/components/Chip";
import InventoryCard from "@/components/listings/InventoryCard";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

interface InventoryData {
  itemName: string;
  currentBatch: number;
  sold: number;
  unsold: number;
  restock: number;
  backordered: number;
}

export default function ListingsPage() {
  const [INVENTORY_DATA, setInventoryData] = useState<InventoryData[]>([]);

  useEffect(() => {
    setInventoryData(
      new Array(4).fill(0).map((_) => ({
        itemName: faker.commerce.product(),
        currentBatch: faker.number.int({ min: 5, max: 30 }),
        sold: faker.number.int({ min: 0, max: 100 }),
        unsold: faker.number.int({ min: 0, max: 100 }),
        restock: faker.number.int({ min: 2, max: 20 }),
        backordered: faker.number.int({ min: 0, max: 10 }),
      }))
    );
  }, []);

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="w-fit">
        <Chip label="Listings" className="bg-[#FF8577] text-2xl font-bold" />
      </div>

      <div className="flex h-full w-full flex-1 gap-2">
        <div className="grid h-full w-3/4 grid-cols-2 gap-4">
          {INVENTORY_DATA.map((item) => (
            <InventoryCard key={item.itemName} {...item} />
          ))}
        </div>

        <div className="h-full w-3/6 bg-pink-950">.</div>
      </div>
    </div>
  );
}
