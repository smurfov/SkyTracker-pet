export function DetailsButtons() {
  return (
    <div className="flex items-center justify-between">
      <button className="w-[24.45%] bg-neutral-800 flex flex-col items-center py-[24px] rounded-tl-3xl rounded-bl-3xl">
        <img
          src="/icons/Route.svg"
          alt="route ico"
          className="mb-[8px] w-[36px] h-[36px]"
        />
        Route
      </button>
      <button className="w-[24.45%] bg-neutral-800 flex flex-col items-center py-[24px]">
        <img
          src="/icons/Follow.svg"
          alt="follow ico"
          className="mb-[8px] w-[36px] h-[36px]"
        />
        Follow
      </button>
      <button className="w-[24.45%] bg-neutral-800 flex flex-col items-center py-[24px]">
        <img
          src="/icons/Share.svg"
          alt="share ico"
          className="mb-[8px] w-[36px] h-[36px]"
        />
        Share
      </button>
      <button className="w-[24.45%] bg-neutral-800 flex flex-col items-center py-[24px] rounded-tr-3xl rounded-br-3xl">
        <img
          src="/icons/More.svg"
          alt="more ico"
          className="mb-[8px] w-[36px] h-[36px]"
        />
        More
      </button>
    </div>
  );
}
