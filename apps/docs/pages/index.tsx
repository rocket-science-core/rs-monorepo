import { Button } from "@rs-client/design-system";

export default function Docs() {
  return (
    <div>
      <h1>Docs</h1>
      <Button
        label="Design System Button"
        onClick={() => console.log("Design System Button Clicked")}
      />
    </div>
  );
}
