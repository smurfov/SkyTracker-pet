import { Button } from "./Button/Button";

export function DetailsButtons() {
  return (
    <div className="flight-detail__buttons">
      <Button name="Route" first={true} />
      <Button name="Follow" />
      <Button name="Share" />
      <Button name="More" last={true} />
    </div>
  );
}
