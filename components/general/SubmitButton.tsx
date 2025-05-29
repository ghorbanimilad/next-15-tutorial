'use client';

import { useFormStatus } from "react-dom"

export default function SubmitButton() {
    const {pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending} className="bg-gray-900 text-white p-3 rounded-lg cursor-pointer">{pending ? "Submitting": "Create Post"}</button>
    )
}