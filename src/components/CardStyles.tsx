export default function CardStyles() {
    const textPreset1: string = "text-[#ffffff] font-[500] max-md:text-[0.9rem] text-[1.4rem] leading-[100%] tracking-[2px]"
    const textPreset2: string = "font-[500] text-[1.2rem] leading-[100%] tracking-[2px] text-[#21092F]"
    const textPreset3: string = "font-[500] text-[1.8rem] leading-[100%] text-[#21092F] text-[#21092F]"
    const textPreset4 = 'max-md:text-[18px] font-[500] text-[#FFFFFF] text-[2.8rem] leading-[100%] tracking-[3.42px]'

    const inputStyle: string = `border-[1px] border-solid border-[#DFDEE0] rounded-[8px] h-[45px] w-[100%] outline-none p-[0_24px_0_16px]! focus:border-none focus:bg-[#FFFFFF] placeholder:font-[500] placeholder:text-[18px] placeholder:leading-[100%] placeholder:text-[#21092F] placeholder:opacity-[25%] ${textPreset3}`

    const onError: string = "focus:border-[1px] focus:border-solid focus:border-[#FF5050] border-[1px] border-solid border-[#FF5050]"
    return { textPreset1, inputStyle, textPreset2, textPreset3, textPreset4, onError }
}
