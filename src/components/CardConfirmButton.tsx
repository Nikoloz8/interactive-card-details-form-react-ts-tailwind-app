import type React from "react"

type CardConfirmButton = {
    handleSubmit: (e: React.FormEvent) => void
    textPreset3: string
}

export default function CardConfirmButton({ handleSubmit, textPreset3 }: CardConfirmButton) {
    return (
        <button onClick={(e) => {
            handleSubmit(e)
        }} className={`${textPreset3}  text-[#ffffff] w-[100%] h-[53px] rounded-[8px] bg-[#21092F]`}>Confirm</button>
    )
}
