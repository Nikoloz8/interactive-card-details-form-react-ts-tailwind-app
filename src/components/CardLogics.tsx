import React, { useState } from 'react'

export default function CardLogics() {
    type FormData = {
        name: string;
        number: string;
        month: string;
        year: string;
        cvc: string;
    };

    const [form, setform] = useState<FormData>({
        name: "",
        number: "",
        month: "",
        year: "",
        cvc: ""
    })

    const [errors, setError] = useState<{
        name?: string
        number?: string
        month?: string
        year?: string
        cvc?: string
    }>({})

    function validateForm(form: FormData) {
        const newErrors: typeof errors = {}
        form.name.trim() === "" ? newErrors.name = "Can’t be blank" : ""
        form.number.trim() === "" ? newErrors.number = "Can’t be blank" : ""
        form.month.trim() === "" ? newErrors.month = "Can’t be blank" : ""
        form.year.trim() === "" ? newErrors.year = "Can’t be blank" : ""
        form.cvc.trim() === "" ? newErrors.cvc = "Can’t be blank" : ""

        return newErrors
    }

    const handleSubmit = (e: React.FormEvent) => {
        const newErrors = validateForm(form)
        e.preventDefault()
        setError(newErrors)


        const defaultForm: FormData = {
            name: "",
            number: "",
            month: "",
            year: "",
            cvc: ""
        }

        if (Object.values(newErrors).every((err) => err === undefined)) {
            setform(defaultForm)
            setConfirm(true)
        }
    }

    const [confirm, setConfirm] = useState<boolean>(false)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value

        setform((prev) => ({ ...prev, [name]: value }))
        setError((prev) => ({
            ...prev, [name]: value.trim() === "" ? "Can't be blank" : undefined
        }))
    }
    return {form, errors, confirm, setConfirm, handleSubmit, handleInputChange, setError, setform}
}
