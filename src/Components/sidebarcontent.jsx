import React from 'react';
import { FaChartPie, FaBook } from 'react-icons/fa';
import { MdNotifications, MdDateRange } from 'react-icons/md';
import "../Styles/sidebarcontent.css"

export const Sidebarcontent = [
    {
        icon:<FaChartPie  className='dashboard-icons'/>,
        title:"Dashboard",
        link:"/"
        
    },

    {
        icon:<MdDateRange className='dashboard-icons'/>,
        title:"Calendar",
        link:"/Calendar"
        
    },


    {
        icon:<FaBook  className='dashboard-icons'/>,
        title:"Notebook",
        link:"/Notebook"
        
    },

    {
        icon:<MdNotifications  className='dashboard-icons'/>,
        title:"Reminder",
        link:"/Reminder"
        
    },
]