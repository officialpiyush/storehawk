import Chip from "@/components/Chip";
import { faker } from "@faker-js/faker";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function LedgerPage() {
  const [LEDGER_DATA, setLedgerData] = useState<
    {
      date: string;
      name: string;
      amount: number;
      type: "credit" | "debit";
      direction: "Incoming" | "Expense";
    }[]
  >([]);

  useEffect(() => {
    setLedgerData(
      new Array(10).fill(0).map((_, index) => ({
        date: dayjs().startOf("month").add(index, "day").format("MMM-DD"),
        name: faker.person.fullName(),
        amount: faker.number.int({
          min: 0,
          max: 1000,
        }),
        type: faker.helpers.arrayElement(["credit", "debit"]),
        direction: faker.helpers.arrayElement(["Incoming", "Expense"]),
      }))
    );
  }, []);

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="w-fit">
        <Chip label="My Ledger" className="bg-[#FF8577] text-2xl font-bold" />
      </div>

      <div className="flex h-full flex-1 flex-col gap-4  overflow-y-auto rounded-lg bg-[#C0DE77] px-4 py-4 text-white">
        {LEDGER_DATA.map((data) => (
          <div
            key={data.name}
            className="flex w-full items-center justify-between rounded-lg bg-[#9fc2d1] px-4 py-2 text-black"
          >
            {data.name}

            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center justify-center gap-1 rounded-lg bg-black px-6 py-1">
                {data.type === "credit" ? (
                  <IconPlus color="green" />
                ) : (
                  <IconMinus color="red" />
                )}
                ${data.amount}
              </div>

              <div className="flex items-center justify-center gap-1 rounded-lg bg-[#d7ecf4] px-6 py-1 text-[#706A6A]">
                {data.direction}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
