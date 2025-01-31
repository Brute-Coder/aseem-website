"use client"
import { Button } from './ui/button'
import React from 'react'
import { useDialog } from '@/hooks/useDialog'

function Floating() {
    const { onOpen } = useDialog()

    const handleOnClick = () => {
        onOpen("lead-form")
    };
    return (
        <div className='md:hidden bottom-0 z-50 fixed flex w-full items-center justify-between bg-black/80 py-4'>
            <h1 className='text-white text-sm px-3'> Want To Learn With Aseem Singhal ?</h1>
            <Button
                className="px-12 py-6 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 mx-2"
                onClick={handleOnClick}>
                Enroll Now
            </Button>
        </div>
    )
}

export default Floating