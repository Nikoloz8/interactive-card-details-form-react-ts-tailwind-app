type CardFront = {
    textPreset4: string
    textPreset1: string
    form: {
        number:string
        name:string
        month:string
        year:string
    }
}

export default function CardFront({textPreset4, textPreset1, form}:CardFront) {
    return (
        <div className='bg-no-repeat max-lg:mr-[20px]! max-md:p-[20px]! max-md:w-[305px]! max-md:h-[200px]! max-lg:mb-[60px]! max-lg:mt-[-136px]! max-md:mt-[-117px]! max-lg:order-[2] bg-[url("./images/bg-card-front.png")] max-md:bg-cover max-md:bg-center w-[447px] h-[245px] p-[35.5px]! flex flex-col justify-between items-start shadow-[0_5px_20 0px_0_#000000] rounded-[10px]'>
            <img src="/images/card-logo.svg" alt="" />
            <div className='flex flex-col gap-[12px] w-[100%]'>
                <h3 className={`${textPreset4} max-md:text-[18px]`}>  {(
                    (form.number + "0".repeat(16))
                        .slice(0, 16)
                        .replace(/(.{4})/g, "$1 ")
                        .trim()
                )}</h3>
                <div className='flex justify-between'>
                    <h4 className={textPreset1}>{form.name ? form.name.toUpperCase() : "JANE APPLESEED"}</h4>
                    <h4 className={textPreset1}>{form.month ? form.month : "00"}/{form.year ? form.year : "00"}</h4>
                </div>
            </div>
        </div>)
}
