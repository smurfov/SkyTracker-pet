import "../../FlightDetail.scss";

interface ButtonsProps {
  name: string;
  first?: boolean;
  last?: boolean;
}

export function Button({ name, first, last }: ButtonsProps) {
  return (
    <button
      className={`flight-detail__button ${
        first && "flight-detail__button--first"
      } ${last && "flight-detail__button--last"}`}
    >
      <img src={`./icons/${name}.svg`} alt={`${name} ico`} />
      <span className="flight-detail__button-text">{name}</span>
    </button>
  );
}
