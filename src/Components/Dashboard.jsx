
import React, { useState, useEffect } from 'react';
import { ReactComponent as DashIcon } from "../Assets/images 1dashicon.svg";
import { ReactComponent as TodoIcon } from "../Assets/images 3todoicon.svg" 
import { ReactComponent as DoneIcon } from "../Assets/download 1doneicon.svg"
import { ReactComponent as DoingIcon } from "../Assets/images 4doingicon.svg"  
import "../Styles/Dashboard.css";
import { FaSearch } from 'react-icons/fa';
import { MdNotificationsNone } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';
import Form from './Form';
import Taskcard from './Taskcard';
const Dashboard = () => {
   const [form,setForm] = useState(false)
  const [time, setTime] = useState(new Date());

  useEffect(() => {
      const interval = setInterval(() => {
          setTime(new Date());
      }, 1000);

      return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
      const hours = String(time.getHours()).padStart(2, '0');
      const minutes = String(time.getMinutes()).padStart(2, '0');
      const seconds = String(time.getSeconds()).padStart(2, '0');
      return `${hours}hrs:${minutes}mins:${seconds}sec`;
  };
  const handleFormPopUp = () => {
    setForm(true);
};

const [task, setTask] = useState([]);
console.log(task);

  return (
    <div className='dashboard'>
      <div className='dashboard-upper-section'>
      <DashIcon className='dashboard-icon'/>
      <div className='dash-lander'>
        <h4 className='dash-label'>Dashboard</h4>
        <h6 className='dash-time-label'>{formatTime(time)}</h6>
      </div>

      <div className='search-container'>
            <input type='text' className='search' placeholder='Search by activity name' />
            <FaSearch className='search-icon' />
      </div>


        <MdNotificationsNone className='notification-icon'/>


        <div className='btn-container' onClick={handleFormPopUp}>
        <IoIosAdd className='add-icon'/>
            <button className='btn_add'>
            
            Add Activity
            </button>
        </div>

</div>
<div className='hor-line'/>


<div className='body-header'>
  <span className='header-icon-label'>
      <TodoIcon className='header-icon'/>
      <h3>To-do</h3>
  </span>

  <span className='header-icon-label'>
      <DoingIcon className='header-icons'/>
      <h3>Doing</h3>
  </span>


  <span className='header-icon-label'>
      <DoneIcon className='header-icons'/>
      <h3>Done</h3>
  </span>
</div>


<div className='dashboard-body-container'>
  <div>
    {
      form && <Form
      formClosure={()=>{
        setForm(false)
      }}
      setTask={setTask}
      />
    }
  </div>
  
  <div className='taskcrdsplacement'>
    <Taskcard tasks={task} status="to-do" />
    <Taskcard tasks={task} status="doing" />
    <Taskcard tasks={task} status="done" />
</div>
  
</div>
    </div>
  );
}

export default Dashboard;