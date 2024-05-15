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
import Hello from "./hello.jsx";

describe("Hello component", () => {
    it("renders correct heading", () => {
        render(<Hello />);
        expect(screen.getByRole("heading").textContent).toMatch(/hello buttface/i);
    })
})