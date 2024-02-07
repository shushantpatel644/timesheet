import axios from 'axios';
import React, { useState } from 'react';

const Timesheet = () => {
  const [date, setDate] = useState('');
  const [timeRange, setTimeRange] = useState('');
  const [projectName, setProjectName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await axios.post('http://localhost:3000/timesheet', {
            date,
            timeRange,
            projectName,
            taskDescription
        });
        console.log(response.data);
    }catch(error){
        console.error('Timesheet submision error:',error);
    }
  }

  return (
    <div>
      <h2>Timesheet Submission</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label>Time Range:</label>
          <input type="text" value={timeRange} onChange={(e) => setTimeRange(e.target.value)} />
        </div>
        <div>
          <label>Project Name:</label>
          <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
        </div>
        <div>
          <label>Task Description:</label>
          <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}></textarea>
        </div> <br></br>
        <button type="submit">Submit Timesheet To Manager</button>
      </form>
    </div>
  );
}

export default Timesheet;