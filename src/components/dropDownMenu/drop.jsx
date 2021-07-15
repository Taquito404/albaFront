import React, { useCallback } from "react";
import items from "./items";
import Dropdown from "./dropdown";

export default function Drop() {
  const handleStateChange = useCallback((state) => console.log(state), []);

  return (
    <Dropdown items={items} id="categories" onStateChange={handleStateChange} />
  );
}