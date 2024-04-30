import { Logo } from "@pmndrs/branding";
import { Fairy } from "./Fairy";
import { Overlay } from "./Overlay";

export function App() {
  return (
    <>
      <Fairy />
      <Overlay />
      <Logo style={{ position: "absolute", bottom: 40, left: 40, width: 30 }} />
    </>
  );
}

export default App;
