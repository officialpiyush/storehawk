import dayjs from "dayjs";
import { useEffect, useState } from "react";

interface NFTCardProps {
  image: string;
  amount: number;
  sold: boolean;
  time: Date;
}

export default function NFTCard(props: NFTCardProps) {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(dayjs(props.time).diff(dayjs(), "hour").toString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full flex-col justify-center gap-2 rounded-xl bg-white/40 px-4 py-4">
      <img
        className="h-5/6 rounded-lg border-2 border-white"
        src={props.image}
        alt="image"
      />

      <div className="flex items-center justify-center gap-2 text-sm text-black">
        {props.sold ? "Sold For" : "Current Bid"}:{" "}
        <span className="font-bold text-[#3B3A81]"> {props.amount} EKYMT</span>
      </div>

      <div className="flex items-center justify-center gap-2 text-sm text-black">
        Bidding Time:
        <span className="font-bold text-[#3B3A81]">{timeRemaining}s</span>
      </div>
    </div>
  );
}
