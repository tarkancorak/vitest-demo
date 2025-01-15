import { describe, expect, test } from "vitest";
import Demo from "./Demo";

describe("Demo", () => {
  test("should render 'Hello, World!'", () => {
    const demo = Demo();
    expect(demo.props.children).toBe("Hello, World!");
  });
});
