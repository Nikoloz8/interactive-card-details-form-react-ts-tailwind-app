type CardholderName = {
    textPreset2: string
    form: {
        name: string | undefined
    }
    errors: {
        name?: string
    }
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    inputStyle: string
    onError: string
}

export default function CardholderName({ textPreset2, form, errors, handleInputChange, inputStyle, onError }: CardholderName) {
    return (
        <div className='flex flex-col gap-[8px]'>
            <label htmlFor="name" className={textPreset2}>Cardholder Name</label>
            <div className={`rounded-[8px] overflow-hidden ${!errors.name ? "div" : undefined}`}>
                <input maxLength={24} value={form.name} onChange={(e) => {
                    handleInputChange(e)
                }} name='name' className={`${inputStyle} ${errors.name ? onError : undefined}`} placeholder='e.g. Jane Appleseed' type="text" id='name' />
            </div>
            <p className={`${textPreset2} text-[#FF5050]`}>{errors.name}</p>
        </div>)
}
