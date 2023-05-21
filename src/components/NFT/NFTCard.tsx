interface NFTCardProps {
  title: string;
  description: string;
  image: string;
}

export default function NFTCard(props: NFTCardProps) {
  return (
    <div className="flex h-fit flex-col justify-center gap-3 rounded-xl bg-[#929292] bg-opacity-[71%] px-8 py-8">
      <div className="flex flex-col gap-2">
        <img
          className="aspect-auto w-full	 object-fill"
          src={props.image}
          alt="image"
        />
        <div className="text-2xl text-white">Benefits Include</div>
        <div className="text-xl text-[#FFEE00]">{props.title}</div>
        <div className="text-white text-opacity-[54%] py-4">{props.description}</div>
      </div>

      <div className=" flex  items-center justify-center rounded-xl bg-white/70 px-8 py-4 ring-8 ring-white ring-opacity-[46%]">
        <button>Issue this NFT</button>
      </div>
    </div>
  );
}
