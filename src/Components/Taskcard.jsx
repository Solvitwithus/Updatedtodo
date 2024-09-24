import React from 'react';
import "../Styles/Taskcard.css";
import { FaTrash, FaEdit } from 'react-icons/fa';

const Taskcard = ({ tasks, status }) => {
    return (
        <div className='taskcard-container'>
            {tasks.filter(task => task.status.toLowerCase() === status).map((task, index) => (
                <div key={index} className='card'>
                    <div className='card-uppersection'>
                        <h4 className='taskname-title'>{task.taskName}</h4>
                        <div className='the-icons'>
                            <FaEdit className='edit-icon' />
                            <FaTrash className='delete-icon' />
                        </div>
                    </div>
                    <p className='taskdescriptionsection'>{task.description}</p>
                    <div className='lower-section-card'>
                        <h6>{task.start} - {task.finish}</h6>
                        <span className='priority-dropdown'>{task.priority}</span>
                        <span className='category-dropdown'>{task.category}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Taskcard;
