import { Button } from "./Button/button";

export function DetailsButtons() {
  return (
    <div className="flex items-center justify-between">
      <Button name="Route" first={true} />
      <Button name="Follow" />
      <Button name="Share" />
      <Button name="More" last={true} />
    </div>
  );
}
