type CardCVC = {
    textPreset2: string
    errors: {
        cvc?: string
    }
    form: {
        name: string
        number: string
        month: string
        year: string
        cvc: string
    }
    setform: React.Dispatch<React.SetStateAction<{
        name: string
        number: string
        month: string
        year: string
        cvc: string
    }>>
    setError: React.Dispatch<React.SetStateAction<{
        name?: string
        number?: string
        month?: string
        year?: string
        cvc?: string
    }>>
    inputStyle: string
    onError: string
}

export default function CardCVC({ textPreset2, errors, form, setform, setError, inputStyle, onError }: CardCVC) {
    return (
        <div className='flex flex-col gap-[8px]'>
            <label htmlFor="cvc" className={textPreset2}>CVC</label>
            <div className={`rounded-[8px] overflow-hidden ${!errors.cvc ? "div" : undefined}`}>
                <input value={form.cvc} name='cvc' onChange={(e) => {
                    const digitsOnly = e.target.value.replace(/\D/g, '');
                    setform({ ...form, [e.target.name]: digitsOnly })
                    setError((prev) => ({
                        ...prev, [e.target.name]: e.target.value === "" ? "Can't be blank" : undefined
                    }))
                }} maxLength={3} className={`${inputStyle} ${errors.cvc ? onError : undefined}`} placeholder='e.g. 123' type="text" id='cvc' />
            </div>
            <p className={`${textPreset2} text-[#FF5050]`}>{errors.cvc ? errors.cvc : ""}</p>
        </div>)
}
