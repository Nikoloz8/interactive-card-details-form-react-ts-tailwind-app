type CardAfterConfirmation = {
    confirm: boolean
    textPreset4: string
    textPreset3: string
    setConfirm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CardAfterConfirmation({confirm, textPreset4, textPreset3, setConfirm}:CardAfterConfirmation) {
    return (
        <div className={`${confirm ? "flex" : "hidden!"} max-lg:pb-[40px] items-center justify-center flex-col gap-[30px]`}>
            <img src="/images/icon-complete.svg" alt="" />
            <h1 className={`${textPreset4} text-[#21092F]!`}>THANK YOU!</h1>
            <h3 className={`${textPreset3} text-[#8F8694]!`}>We’ve added your card details</h3>
            <button className={`${textPreset3}  text-[#ffffff] w-[100%] h-[53px] rounded-[8px] bg-[#21092F]`} onClick={() => setConfirm(false)}>Continue</button>
        </div>)
}
