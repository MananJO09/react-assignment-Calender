import React from 'react'

export default function Timezone() {
    return (
        <section className='p-2'>
            <p className='font-bold'>Timezone</p>
            <select name="timezone" id="timezone" className='border w-full'>
                <option value="UTC+0:00">UTC+0:00</option>
                <option value="UTC+5:30">UTC+5:30</option>
            </select>
        </section>
    )
}
