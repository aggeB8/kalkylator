import { useState } from "react"

function App() {
    const [output, setOutput] = useState("")

    const [operation, setOperation] = useState<"+" | "-" | "*" | "/" | null>(null)

    const [calcA, setCalcA] = useState("")
    const [calcB, setCalcB] = useState("")

    const numClick = (i: number) => {
        setOutput("")
        if (operation == null) {
            setCalcA((state) => state + i)
        } else {
            setCalcB((state) => state + i)
        }
    }

    const equals = () => {
        const a = Number(calcA)
        const b = Number(calcB)

        const result = (a: string) => {
            setOutput(a)
            setOperation(null)
            setCalcA(a)
            setCalcB("")
        }

        switch (operation) {
            case "+": {
                result((a + b).toString())
                break
            }
            case "-": {
                result((a - b).toString())
                break
            }
            case "*": {
                result((a * b).toString())
                break
            }
            case "/": {
                result((a / b).toString())
                break
            }
        }
    }

    return (
        <main className="h-dvh w-dvw flex flex-col justify-center items-center bg-slate-900">
            <div className="grid gap-2 grid-cols-3 font-semibold text-2xl">
                <div className="col-span-3 bg-slate-800 text-slate-50">
                    {output !== "" ? (
                        output
                    ) : (
                        <div className="flex gap-2">
                            <p>{calcA}</p>
                            <p>{operation}</p>
                            <p>{calcB}</p>
                        </div>
                    )}
                </div>

                <button className="p-4 bg-slate-800 border border-slate-700 rounded-md text-slate-50">
                    AC
                </button>
                <button className="p-4 bg-slate-800 border border-slate-700 rounded-md text-slate-50">
                    DEL
                </button>
                <button
                    onClick={() => {
                        setOperation("+")
                        setOutput("")
                    }}
                    className="p-4 bg-slate-800 border border-slate-700 rounded-md text-slate-50"
                >
                    +
                </button>
                <button
                    onClick={() => {
                        setOperation("-")
                        setOutput("")
                    }}
                    className="p-4 bg-slate-800 border border-slate-700 rounded-md text-slate-50"
                >
                    -
                </button>
                <button
                    onClick={() => {
                        setOperation("*")
                        setOutput("")
                    }}
                    className="p-4 bg-slate-800 border border-slate-700 rounded-md text-slate-50"
                >
                    X
                </button>
                <button
                    onClick={() => {
                        setOperation("/")
                        setOutput("")
                    }}
                    className="p-4 bg-slate-800 border border-slate-700 rounded-md text-slate-50"
                >
                    /
                </button>

                <div></div>
                <div></div>
                {[...Array(10)]
                    .map((x, i) => {
                        return (
                            <button
                                onClick={() => numClick(i)}
                                className="p-4 bg-slate-800 border border-slate-700 rounded-md text-slate-50"
                            >
                                {i}
                            </button>
                        )
                    })
                    .reverse()}
                <button
                    onClick={() => equals()}
                    className="p-4 bg-slate-800 border border-slate-700 rounded-md text-slate-50"
                >
                    =
                </button>
            </div>
        </main>
    )
}

export default App
