import Chip from "@/components/Chip";
import EkyamIcon from "@/components/icons/ekyam";
import { faker } from "@faker-js/faker";
import clsx from "clsx";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

interface OrderData {
  orderId: number;
  orderDate: string;
  customerName: string;
  payment: "paid" | "unpaid" | "authorized";
  fullfilment: "fulfilled" | "unfulfilled" | "partially-fulfilled";
  discount: number;
  total: number;
}

export default function OrdersPage() {
  const [ORDER_DATA, setOrderData] = useState<OrderData[]>([]);

  useEffect(() => {
    setOrderData(
      new Array(10).fill(0).map((_, i) => ({
        orderId: 1731 + i,
        orderDate: dayjs(
          faker.date.between({
            from: dayjs().subtract(1, "month").toDate(),
            to: new Date(),
          })
        ).format("ddd, DD/MM/YY"),
        customerName: faker.person.firstName(),
        payment: faker.helpers.arrayElement(["paid", "unpaid", "authorized"]),
        fullfilment: faker.helpers.arrayElement([
          "fulfilled",
          "unfulfilled",
          "partially-fulfilled",
        ]),
        discount:
          i === 4
            ? 0
            : faker.number.float({ min: 0, max: 1, precision: 0.0001 }),
        total: faker.number.int({ min: 0, max: 1000 }),
      }))
    );
  }, []);

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="w-fit">
        <Chip label="Orders" className="text-2xl font-bold" />
      </div>

      <div className=" grid grid-cols-8 gap-4 overflow-y-auto rounded-2xl bg-[#343434] px-4 py-4">
        {/*  row 1 */}
        <div className="col-span-1"></div>

        <div className="col-span-7 flex items-center gap-2 text-white">
          <Chip
            label={`Paid: ${
              ORDER_DATA.filter((order) => order.payment === "paid").length
            }`}
            className="bg-[#59a04d] text-xs font-medium"
          />
          <Chip
            label={`Unpaid: ${
              ORDER_DATA.filter((order) => order.payment === "unpaid").length
            }`}
            className="bg-[#b35050] text-xs font-medium"
          />
          <Chip
            label={`Fulfilled: ${
              ORDER_DATA.filter((order) => order.fullfilment === "fulfilled")
                .length
            }`}
            className="bg-[#706a6a] text-xs font-medium"
          />
          <Chip
            label={`Fulfilled: ${
              ORDER_DATA.filter((order) => order.fullfilment === "unfulfilled")
                .length
            }`}
            className="bg-[#3c9ca2] text-xs font-medium"
          />
        </div>

        {/* row 2 */}
        <div className="col-span-1 w-full"></div>

        <div className="col-span-1 flex w-full items-center justify-center rounded-md bg-[#dfff90] px-1 py-1">
          Order
        </div>

        <div className="col-span-1 flex w-full items-center justify-center rounded-md bg-[#dfff90] px-1 py-1">
          Day, Date
        </div>

        <div className="col-span-1 flex w-full items-center justify-center rounded-md bg-[#dfff90] px-1 py-1">
          Customer
        </div>

        <div className="col-span-1 flex w-full items-center justify-center rounded-md bg-[#dfff90] px-1 py-1">
          Payment
        </div>

        <div className="col-span-1 flex w-full items-center justify-center rounded-md bg-[#dfff90] px-1 py-1">
          Fulfilment
        </div>

        <div className="col-span-1 flex w-full items-center justify-center rounded-md bg-[#dfff90] px-1 py-1">
          Discount
        </div>

        <div className="col-span-1 flex w-full items-center justify-center rounded-md bg-[#dfff90] px-1 py-1">
          Total
        </div>

        {/* row 3 */}

        {ORDER_DATA.map((order) => (
          <>
            <div
              key={`ekyamStatus-${order.orderId}`}
              className={clsx(
                order.discount > 0 && "bg-[#FF9E9E]",
                order.discount <= 0 && "bg-[#A5A5A5]",
                " flex w-full items-center justify-center rounded-full p-2 text-center text-xs"
              )}
            >
              <EkyamIcon className=" h-4 w-4 text-center" />
              <span>{order.discount > 0 ? "Eligible" : "Not-eligible"}</span>
            </div>

            <div
              className="w-full text-center"
              key={`orderId-${order.orderId}`}
            >
              <span className=" w-full text-center text-white">
                {order.orderId}
              </span>
            </div>

            <div
              className="w-full text-center"
              key={`orderDate-${order.orderId}`}
            >
              <span className=" w-full text-center text-white">
                {order.orderDate}
              </span>
            </div>

            <div className="w-full text-center" key={`name-${order.orderId}`}>
              <span className=" w-full text-center text-white">
                {order.customerName}
              </span>
            </div>

            <div
              className={clsx(
                order.payment === "paid" && "bg-[#59a04d]",
                order.payment === "unpaid" && "bg-[#b35050]",
                order.payment === "authorized" && "bg-[#dfba36]",
                " w-full  items-center justify-center rounded-full p-2 text-center text-xs"
              )}
              key={`paymentStatus-${order.orderId}`}
            >
              <span className=" w-full text-center text-white">
                {order.payment}
              </span>
            </div>

            <div
              className={clsx(
                order.fullfilment === "fulfilled" && "bg-[#706a6a]",
                order.fullfilment === "unfulfilled" && "bg-[#3c9ca2]",
                order.fullfilment === "partially-fulfilled" && "bg-[#e09859]",
                "flex w-full items-center  justify-center rounded-full p-2 text-center text-xs"
              )}
              key={`fulltfilment-${order.orderId}`}
            >
              <span className=" w-full text-center text-white">
                {order.fullfilment}
              </span>
            </div>

            <div className="w-full text-center" key={`tokens-${order.orderId}`}>
              <span className=" w-full text-center text-white">
                {order.discount} Tokens
              </span>
            </div>

            <div className="w-full text-center" key={`total-${order.orderId}`}>
              <span className=" w-full text-center text-white">
                {order.total} $
              </span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
