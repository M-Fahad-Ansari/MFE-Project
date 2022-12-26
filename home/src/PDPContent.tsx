import React, { useEffect, useRef } from "react";
import { mount } from "pdp/PDPContent";

const PDPContent = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount();
  }, []);
  return (
    <div>
      <app-root></app-root>
    </div>
  );
};

export default PDPContent;
