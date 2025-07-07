import type { CSSProperties } from "react";
import "./SkeletonLoader.scss";

interface ISkeletonLoader {
  count?: number;
  style?: CSSProperties;
}

export function SkeletonLoader({ count = 1, style }: ISkeletonLoader) {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className={`skeleton-loader`} style={style} />
      ))}
    </>
  );
}
