import { Button } from "@rs-client/design-system";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button
        label="Design System Button"
        onClick={() => console.log("Design System Button Clicked")}
      />
    </div>
  );
}
