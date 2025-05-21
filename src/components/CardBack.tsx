type CardBack = {
    textPreset1: string
    form: {
        cvc:string
    }
}

export default function CardBack({textPreset1, form}:CardBack) {
    return (
        <div className='max-lg:ml-[80px]! max-sm:ml-[50px]! max-md:px-[24px]! max-md:w-[305px]! max-md:h-[200px]! w-[447px] rounded-[10px] shadow-[0_39px_120px_0_#000000] h-[245px] bg-[url("/images/bg-card-back.png")] max-lg:m-0! ml-[70px]! flex items-center max-md:bg-cover max-md:bg-center justify-end p-[50px]! bg-no-repeat'>
            <h4 className={`${textPreset1} max-md:mb-[1px] max-md:ml-[0px] mb-[5px]`}>
                {form.cvc ? `${form.cvc}${"0".repeat(3 - form.cvc.length)}` : "000"}
            </h4>
        </div>
    )
}
