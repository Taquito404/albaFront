import React, { useCallback } from "react";
import items from "./items";
import Dropdown from "./dropDown.sjx";

export default function Drop() {
  const handleStateChange = useCallback((state) => console.log(state), []);

  return (
    <Dropdown items={items} id="categories" onStateChange={handleStateChange} />
  );
}
