type CardNumber = {
    textPreset2: string
    form: {
        name: string
        number: string
        month: string
        year: string
        cvc: string
    }
    errors: {
        name?: string
        number?: string
        month?: string
        year?: string
        cvc?: string
    }
    inputStyle: string
    onError: string
    setError: React.Dispatch<React.SetStateAction<{
        name?: string
        number?: string
        month?: string
        year?: string
        cvc?: string
    }>>
    setform: React.Dispatch<React.SetStateAction<{
        name: string
        number: string
        month: string
        year: string
        cvc: string
    }>>
}



export default function CardNumber({ textPreset2, form, errors, setform, setError, inputStyle, onError }: CardNumber) {
    return (
        <div className='flex flex-col gap-[8px]'>
            <label htmlFor="number" className={textPreset2}>Card Number</label>
            <div className={`rounded-[8px] overflow-hidden ${!errors.number ? "div" : undefined}`}>
                <input maxLength={19} value={form.number.replace(/(.{4})/g, '$1 ').trim()} onChange={(e) => {
                    const digitsOnly = e.target.value.replace(/\D/g, '')
                    setform({ ...form, [e.target.name]: digitsOnly.slice(0, 16) })
                    setError((prev: {}) => ({
                        ...prev, [e.target.name]: e.target.value === "" ? "Can't be blank" : undefined
                    }))
                }} name='number' className={`${inputStyle} ${errors.number ? onError : undefined}`} placeholder='e.g. 1234 5678 9123 0000' type="text" id='number' />
            </div>
            <p className={`${textPreset2} text-[#FF5050]`}>{errors.number}</p>
        </div>)
}
