import clsx from "clsx";

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

export default function Chip(props: ChipProps) {
  return (
    <div
      {...props}
      className={clsx(
        "rounded-full px-6 py-1",
        props.className && props.className
      )}
    >
      {props.label}
    </div>
  );
}
