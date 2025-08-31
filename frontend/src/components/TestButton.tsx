'use client'

import { useEffect, useState } from 'react'
import {testApi} from "@/lib/api/client";

export default function TestButton() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleClick = async () => {
        const apiResult = await testApi()
        alert(apiResult)
    }

    if (!mounted) return <div>로딩중...</div>

    return (
        <button onClick={handleClick}>🎀TEST🎀</button>
)
}