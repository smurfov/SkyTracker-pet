import { cn } from "../../../../utils/cn";

interface ButtonsProps {
  name: string;
  first?: boolean;
  last?: boolean;
}

export function Button({ name, first, last }: ButtonsProps) {
  return (
    <button
      className={cn(
        "w-[24.45%] bg-neutral-800 flex flex-col items-center py-[24px] cursor-pointer",
        first && "rounded-tl-3xl rounded-bl-3xl",
        last && "rounded-tr-3xl rounded-br-3xl"
      )}
    >
      <img
        src={`/icons/${name}.svg`}
        alt={`${name} ico`}
        className="mb-[8px] w-[36px] h-[36px]"
      />
      {name}
    </button>
  );
}
