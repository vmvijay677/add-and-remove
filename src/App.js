import "./index.css";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function App(){
  const INITIAL_TASKS = [
    {
      task: "Wakeup at 6AM",
    },
    {
      task: "Have milk and start workout",
    },
    {
      task: "Have bath and breakfast at 8AM",
    }
  ];
  
  const [taskList, setTaskList] = useState(INITIAL_TASKS);
  const [task, setTask] = useState(" ");
  const styles = {
    marginTop: "8px",
  }
  return(
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Heading />
          </div>
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="add-task-form">
              <TextField style={styles} id="outlined-basic" className="input" label="Enter task" color="primary" variant="outlined" onChange={(event) => setTask(event.target.value)} /> &nbsp; &nbsp;
                <Button style={styles} id="button" variant="contained" className="button" color="success" onClick={() => {
                  const newTask = {
                    task: task,
                  }
                  setTaskList([...taskList, newTask]);
                  //console.log(task);
                }}>Add Task</Button>
            </div>
            <div>
            <Card>
              <CardContent>
                {taskList.map(({task}, index) => <Tasks
                key={index} 
                task={task}
                deleteButton={<IconButton aria-label="delete" color="error" onClick={() => {
                  console.log(index);
                  const copyTaskList = [... taskList];
                  copyTaskList.splice(index, 1);
                  setTaskList(copyTaskList);
                  }}><DeleteIcon/></IconButton>}
                />)}
              </CardContent>
            </Card>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </div>
  );
}

function Tasks({task, deleteButton}){
  return(
    <div className="add-tasks">
      <p><CheckBoxOutlineBlankIcon /> &nbsp;{task} &nbsp; {deleteButton}</p>
    </div>
  );
}

function Heading(){
  return(
    <div>
      <br></br>
      <h1>Daily Tasks Reminder</h1>
      <p className="note">Add your daily tasks here (using Add Task button) and remove (using Delete Icon) the task once you completed.</p>
    </div>
  );
}
