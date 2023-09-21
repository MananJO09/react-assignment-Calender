import React from 'react'
import { useState } from 'react';
import { IoCaretBackOutline } from 'react-icons/io5'
import { IoCaretForwardOutline } from 'react-icons/io5'


export default function Header({ date, setdate }) {
    // const [date, setdate] = useState(() => new Date())

    const formatDate = (date) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[date.getMonth()]}, ${date.getDate()} ${date.getFullYear()}`;
    }

    const prevWeek = () => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() - 7)
        setdate(newDate)
    }
    const nextWeek = () => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + 7)
        setdate(newDate)
    }



    return (
        <header className='flex bg-gray-400 p-2 gap-10'>
            <div className='flex justify-center items-center cursor-pointer' onClick={prevWeek}>
                <IoCaretBackOutline />
                <p className='text-blue-200'>Previous Week</p>
            </div>
            <div className='flex-1'>{formatDate(date)}</div>
            <div className='flex items-center cursor-pointer ' onClick={nextWeek}>
                <p className='text-blue-200'>Next Week</p>
                <IoCaretForwardOutline /></div>
        </header>
    )
}
