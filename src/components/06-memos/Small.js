import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Volví a aparecer");
  return <smal>{value}</smal>;
});
