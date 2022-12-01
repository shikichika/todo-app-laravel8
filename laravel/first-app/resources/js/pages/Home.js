import { Grid } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from '../components/ToDo';
import { useCurrentToDoList, useGetToDoList } from '../hooks/ToDoList';


function Home() {
    const {isLoading} = useGetToDoList();

    const toDoList = useCurrentToDoList();

    
    if (isLoading) return "Loading......";


    return (
        <Grid container spacing={2}>
            {toDoList[0][1].map((toDo) => (
                <Grid item key={toDo.id} xs={3}> 
                <ToDo toDo={toDo}/>
                </Grid>
            ))}

            
        </Grid>
    );


}

export default Home;


