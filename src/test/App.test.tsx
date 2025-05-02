import { describe, it, expect } from "vitest"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"

import App from "../App"

const testOperation = (operation: "+" | "-" | "X" | "/") => {
    render(<App />)

    const buttonA = screen.getByText((content) => content.includes("3"))
    const buttonB = screen.getByText((content) => content.includes(operation))
    const buttonC = screen.getByText((content) => content.includes("="))

    fireEvent.click(buttonA)
    fireEvent.click(buttonB)
    fireEvent.click(buttonA)
    fireEvent.click(buttonC)
}

describe("Kalkylator tester", () => {
    it("testar addition", async () => {
        testOperation("+")

        await waitFor(() => {
            const result = screen.getByTestId("output")
            expect(result.textContent).toBe("6")
        })
    })
    it("testar subtraktion", async () => {
        testOperation("-")

        await waitFor(() => {
            const result = screen.getByTestId("output")
            expect(result.textContent).toBe("0")
        })
    })
    it("testar multiplikation", async () => {
        testOperation("X")

        await waitFor(() => {
            const result = screen.getByTestId("output")
            expect(result.textContent).toBe("9")
        })
    })
    it("testar division", async () => {
        testOperation("/")

        await waitFor(() => {
            const result = screen.getByTestId("output")
            expect(result.textContent).toBe("1")
        })
    })
})
