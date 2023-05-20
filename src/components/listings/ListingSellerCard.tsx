import clsx from "clsx";

interface ListingSellerCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon?: React.ReactNode;
  items: string[];
}

export default function ListingSellerCard(props: ListingSellerCardProps) {
  return (
    <div className="flex w-full flex-col rounded-xl bg-white h-full">
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

      <div className="flex flex-col items-center justify-center gap-2 overflow-y-auto px-4 py-4">
        {props.items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}
