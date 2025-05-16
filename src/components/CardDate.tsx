type CardDate = {
  textPreset2: string
  errors: {
    month?: string
    year?: string
  }
  inputStyle: string
  form: {
    month: string
    year: string
  }
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onError: string
}


export default function CardDate({ textPreset2, errors, inputStyle, form, handleInputChange, onError
}: CardDate) {
    return (
        <div className='w-[50%] max-sm:w-[80%]! flex flex-col gap-[8px]'>
            <label htmlFor="" className={textPreset2}>Exp. Date (MM/YY)</label>
            <div className='flex gap-[10px]'>
                <div className={`rounded-[8px] overflow-hidden ${!errors.month ? "div" : undefined}`}>
                    <input className={`${inputStyle} ${errors.month ? onError : undefined}`} value={form.month} onChange={(e) => {
                        handleInputChange(e)
                    }} placeholder='MM' type="text" name='month' maxLength={2} id='month' />
                </div>
                <div className={`rounded-[8px] overflow-hidden ${!errors.year ? "div" : undefined}`}>
                    <input value={form.year} name='year' maxLength={2} onChange={(e) => {
                        handleInputChange(e)
                    }} className={`${inputStyle} ${errors.year ? onError : undefined}`} placeholder='YY' type="text" id='year' />
                </div>
            </div>
            <p className={`${textPreset2} text-[#FF5050]`}>{errors.month ? errors.month : errors.year ? errors.year : ""}</p>
        </div>)
}
