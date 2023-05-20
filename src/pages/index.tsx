import { type NextPage } from "next";

import Chip from "@/components/Chip";

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
    </div>
  );
};

export default Home;
