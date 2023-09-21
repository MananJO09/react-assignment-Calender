import React from 'react'
import { times } from '../data/times'

export default function Calender({ date }) {

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    // const today = new Date()
    const firstDayOfWeek = new Date(date)
    firstDayOfWeek.setDate(date.getDate() - date.getDay() + 1)
    // +1 for monday

    const formatDateToDayMonth = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        return `${day}/${month}`;
    }

    function getDayFromStart(firstDay, i) {
        const newDate = new Date(firstDayOfWeek)
        newDate.setDate(newDate.getDate() + i)
        return newDate
    }


    return (
        <section className='p-2 text-sm'>
            {
                Array(5).fill(0).map((i, index) => {
                    return (
                        <div key={index} className='flex'>
                            <div className='p-2 border border-y-black bg-gray-200'>
                                <p className='font-bold'>{days[firstDayOfWeek.getDay() - 1 + index]}</p>
                                <p>{formatDateToDayMonth(getDayFromStart(firstDayOfWeek, index))}</p>
                            </div>
                            <div className='p-2 border'>
                                <Checkboxes />
                            </div>

                        </div>
                    )
                })
            }
        </section>
    )
}


function Checkboxes() {
    return (
        times.map((time, index) => {
            return (
                <section key={index} className='flex flex-wrap mb-2'>
                    {
                        time.map((time_obj, i) => {
                            return (
                                <div key={time_obj.Id} className='mr-2'>
                                    <input type="checkbox" className='mr-1' />
                                    <label htmlFor="">{time_obj.Time}</label>
                                </div>
                            )
                        })
                    }
                </section>
            )
        })
    )
}
