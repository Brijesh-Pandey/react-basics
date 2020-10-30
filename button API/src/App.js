import React from "react";
import "./styles.css";
import { Button } from "./components/buttonComponent";

export default function App() {
  // button
  // 3 variants (success(green) , warning(orange) , error(red))

  return (
    <>
      <Button type={"success"}>Click Me</Button>
      <Button type={"warning"}>Click Me</Button>
      <Button type={"error"}>Click Me</Button>
    </>
  );
}
