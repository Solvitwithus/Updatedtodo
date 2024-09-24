import React, { useRef, useEffect,useState } from 'react';
import "../Styles/Form.css";

const Form = ({ formClosure,setTask }) => {

    // const [taskname,setTaskname] = useState("");

    // const handleTaskname = (e) => {
    //     setTaskname(e.target.value)
    //     console.log(taskname);
        
    // }

    // const [status,setStatus] = useState("to-do");

    // const handleChangeStatus = (e) => {
    //     setStatus(e.target.value);
    //     console.log(status);
    // }

const [formvalues,setFormvalues] = useState({
    taskName:"",
    description:"",
    start:"",
    finish:"",
    priority:"high",
    category:"personal",
    status:"to-do"
})

const handleSubmit =(e)=>{

    
    
    const name = e.target.name
    const value = e.target.value

    setFormvalues(prev => {
        return{
            ...prev,[name]:value
        }
    })


    
}
    
const handleSubmission = (e) => {
    e.preventDefault();
    console.log(formvalues);
    setTask(prev => {
        return [...prev, formvalues]; // Add the form values directly
    });
    formClosure(); // Close the form after submission
};


    const popupFormRef = useRef();

    const handleCancel = () => {
        formClosure();
        alert("hello");
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (e) => {
        if (popupFormRef.current && !popupFormRef.current.contains(e.target)) {
            formClosure();
        }
    };

    return (
        <div ref={popupFormRef} className="popup-form">
            <form className='entire-form-wrapper' onSubmit={handleSubmission}>
                <div className='label-container'>
                    <label htmlFor='TaskName' className='label-across'>Task Name</label>
                    <input type='text' placeholder='enter activity' name='taskName' className='task-description' onChange={handleSubmit}/>
                </div>
                <div className='label-container'>
                    <label htmlFor='TaskDescription' className='label-across'>Task Description</label>
                    <textarea type='text' placeholder='enter activity' name='description' className='task-description' onChange={handleSubmit}/>
                </div>
                <div className='label-container'>
                    <label htmlFor='StartTime' className='label-across'>Start Time</label>
                    <input type='time' defaultValue='enter activity' name='start' className='task-name' onChange={handleSubmit}/>
                    <label htmlFor='FinishTime'>Finish Time</label>
                    <input type='time' defaultValue='enter activity' name='finish' className='task-name' onChange={handleSubmit}/>
                </div>

                <div className='drop-downs'>
                <div className='label-container'>
                    <label htmlFor='Priority' className='label-across'>Priority</label>
                    <select defaultValue='enter activity' name='priority' className='task-name' onChange={handleSubmit}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                <div className='label-container'>
                    <label htmlFor='Category' className='label-across'>Category</label>
                    <select defaultValue='category' name='category' className='task-name' onChange={handleSubmit}>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                        <option value="School">School</option>
                        <option value="Shopping">Shopping</option>
                    </select>
                </div>
                <div className='label-container'>
                    <label htmlFor='Status' className='label-across'>Status</label>
                    <select defaultValue='Status' name='status' className='task-name' onChange={handleSubmit}>
                        <option value="To-Do">To-Do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </div>

            </div >
            <div className='form-button-container'>
                <button onClick={handleCancel}>Clear</button>
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
    );
};

export default Form;