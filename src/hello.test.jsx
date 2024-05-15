import { describe, it, expect } from 'vitest';

// describe(`something truthy and falsy`, () => {
//     it(`true to be true`, () => {
//         expect(true).toBe(true);
//     });

//     it(`false to be false`, () => {
//         expect(false).toBe(false);
//     })
// })



import {render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Hello from "./hello.jsx";

describe("Hello component", () => {
    it("renders Magnificent Monkeys", () => {
          // since screen does not have the container property, we'll destructure render to obtain a container for this test
        // const {container} = render(<Hello/>)
        render(<Hello />);
        expect(screen.getByRole("heading").textContent).toMatch(/Magnificent Monkeys/i);
    })
})