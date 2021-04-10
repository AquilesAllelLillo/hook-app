import React from "react";
import { shallow } from "@wojtekmaj/enzyme-adapter-react-17";
import { HookApp } from "../HookApp";

describe("Pruebas en useCounter", () => {
  test("Debe retornar valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    console.log(result.current);

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });
});
