import { Card, CardContent, CardHeader, List, TextField } from "@mui/material";
import React, { useState } from "react";
import { useUpdateToDoMutateTask } from "../hooks/ToDo";
import Detail from "./Detail";



function ToDo(props) {

    const [timer, setTimer] = useState(null);

    let toDo = {
        id: props.toDo.id,
        title: props.toDo.title,
    };

    const { updateToDoMutation } = useUpdateToDoMutateTask();
    const eventUpdateTodo = (event) => {
        //タイマーをリセットする
        clearTimeout(timer);

        const newTimer = setTimer(() => {
            let data = {
                ...toDo,
                title: event.target.value,
            };
            updateToDoMutation.mutate(data);
        }, 1000);

        setTimer(newTimer);

    };

    return (
        <Card>
            <TextField
                variant="standard"
                margin="dense"
                defaultValue={props.toDo.title}
                fullWidth
                onChange={eventUpdateTodo}
            />

            <CardContent>
                <List>
                    {props.toDo.detail.map((detail) => {
                        return <Detail key={detail.id} detail={detail} />;
                    })}
                </List>
            </CardContent>
        </Card>

    );
}

export default ToDo;
