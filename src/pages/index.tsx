import { type NextPage } from "next";

import Chip from "@/components/Chip";
import { faker } from "@faker-js/faker";
import { AreaChart, BarChart } from "@tremor/react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import dayjs from "dayjs";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { useState } from "react";

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

const MONTHLY_SALES = new Array(dayjs().diff(dayjs().startOf("year"), "month"))
  .fill(0)
  .map((_, index) => ({
    month: dayjs().startOf("year").add(index, "month").format("MMM-YY"),
    sales: faker.number.int({
      min: 240,
      max: 3000,
    }),
  }));

const Home: NextPage = () => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [todoField, setTodoField] = useState<string>("");
  const [animateTodoRef] = useAutoAnimate();
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="w-fit">
        <Chip label="Dashboard" className="text-2xl font-bold bg-[#FF8577]" />
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
          <div className="flex h-full flex-col gap-6 rounded-xl bg-[#C0DE77] px-4 py-4">
            <h1 className="text-xl">Monthly Sales:</h1>
            <div className="flex h-full items-center justify-center">
              <BarChart
                data={MONTHLY_SALES}
                index="month"
                categories={["sales"]}
                className="h-96 rounded-lg bg-white px-4 py-2"
                valueFormatter={(value) => `${value} USD`}
              />
            </div>
          </div>
        </div>

        {/* third column */}
        <div className="col-span-3 flex h-full w-full flex-col gap-4">
          <div className="flex h-full flex-col gap-2 rounded-xl bg-[#C0DE77] px-4 py-4">
            <h1 className="text-center text-xl">TODO List</h1>

            <div className="flex h-full w-full flex-1 flex-col gap-2 overflow-y-auto rounded-xl bg-white px-2 py-2">
              <div className="flex items-center gap-2">
                <input
                  className="w-full rounded-full border-2 px-2 py-1 text-lg"
                  placeholder="add todo"
                  value={todoField}
                  onChange={(e) => setTodoField(e.currentTarget.value)}
                  onKeyDown={(e) => setTodoField(e.currentTarget.value)}
                  type="text"
                />
                <button
                  onClick={() => {
                    setTodoList((prev) => [...prev, todoField]);
                    setTodoField("");
                  }}
                  className="rounded-full bg-[#c0de77] p-2"
                >
                  <IconPlus />
                </button>
              </div>

              <div ref={animateTodoRef} className="flex flex-col gap-2 pt-2">
                {todoList.map((todo, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-full bg-[#c0de77] px-4 py-2"
                  >
                    <div>{todo}</div>

                    <button
                      className="group place-self-end self-center"
                      onClick={() => {
                        setTodoList((prev) =>
                          prev.filter((_, i) => i !== index)
                        );
                      }}
                    >
                      <IconTrash className="group-hover:text-red-600" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
