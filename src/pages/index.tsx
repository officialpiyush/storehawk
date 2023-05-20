import { type NextPage } from "next";

import Chip from "@/components/Chip";
import { faker } from "@faker-js/faker";
import { AreaChart } from "@tremor/react";
import dayjs from "dayjs";

const CHIP_DATA = [
  {
    label: "Profit: 50$",

    className: "bg-black text-white",
  },
  {
    label: "Revenue: 100$",

    className: "bg-black text-white",
  },
  {
    label: "Unpaid: 20$",

    className: "bg-black text-white",
  },
  {
    label: "Batches Inc: 10",

    className: "bg-black text-white",
  },
  {
    label: "Daily casual visitors: 40",
    className: "bg-[#9FC2D1]",
  },
];

const daysElapsed = dayjs().diff(dayjs(dayjs().startOf("month")), "day");

const ORDER_DATA = new Array(daysElapsed).fill(0).map((_, index) => ({
  date: dayjs().startOf("month").add(index, "day").format("MMM-DD"),

  skateboard: faker.number.int({
    min: 0,
    max: 40,
  }),
  surfboard: faker.number.int({
    min: 0,
    max: 20,
  }),
  kords: faker.number.int({
    min: 0,
    max: 90,
  }),
}));

const Home: NextPage = () => {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="w-fit">
        <Chip label="Dashboard" className="text-2xl font-bold" />
      </div>

      <div className="flex flex-wrap items-center gap-2 font-medium">
        {CHIP_DATA.map((chip, index) => (
          <Chip key={index} label={chip.label} className={chip.className} />
        ))}
      </div>

      <div className="grid flex-1 grid-cols-12 gap-4 font-medium">
        <div className="col-span-5 flex h-fit w-full flex-col gap-4">
          <div className="flex h-fit flex-col gap-2  rounded-xl bg-[#C0DE77] px-4 py-4">
            <h1 className="text-xl">Orders this Month:</h1>

            <AreaChart
              className="h-72 rounded-xl bg-white"
              data={ORDER_DATA}
              categories={["skateboard", "surfboard", "kords"]}
              index="date"
              colors={["yellow", "red", "lime"]}
            />
          </div>

          <div className="flex h-full w-full rounded-xl bg-white ">
            <div className="flex w-full flex-col gap-2 overflow-y-auto px-4 py-4 text-sm">
              <span className="">Lucifer purchases made on Skateboard</span>
              <span className="">Lucifer purchases made on Skateboard</span>
              <span className="">Lucifer purchases made on Skateboard</span>
            </div>

            <div className="flex h-full w-1/2 flex-col rounded-r-xl bg-[#9FC2D1]">
              <div className="rounded-tr-xl bg-[#6095AC] px-2 py-2 text-center">
                Total Sales
              </div>

              <div className="flex h-full items-center justify-center px-2 py-6">
                SomEAmount
              </div>
            </div>
          </div>
        </div>

        {/* second column */}
        <div className="col-span-4 flex h-full w-full flex-col gap-4">
          <div className="h-full rounded-xl bg-[#C0DE77]">C0DE77</div>
        </div>

        {/* third column */}
        <div className="col-span-3 flex h-full w-full flex-col gap-4">
          <div className="h-full rounded-xl bg-[#C0DE77]">C0DE77</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
