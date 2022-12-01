import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from '@mui/material';
import { useUpdateDetailMutateTask } from '../hooks/Detail';
import { useState } from "react";


function Detail(props) {


    const [timer, setTimer] = useState(null);


    let detail = {
        id: props.detail.id,
        name: props.detail.name,
        is_completed: props.detail.is_completed, 
        to_do_id: props.detail.to_do_id,
    };

    const { updateDetailMutation } = useUpdateDetailMutateTask();
    const eventUpdateDetail = (event) => {
        clearTimeout(timer);

        const newTimer = setTimer(() => {
            let data = {
                ...detail,
                name: event.target.value,
            }
            updateDetailMutation.mutate(data);
        }, 500);
        setTimer(newTimer);
    };

    const eventCheckDetail = (event) => {

        let data = {
            ...detail,
            is_completed: event.target.checked,
        }
        updateDetailMutation.mutate(data);


    };

    return (
        <ListItem
            key={props.detail.id}
            secondaryAction={
                <IconButton edge="end" aria-label="comments">
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        defaultChecked = {props.detail.is_completed}
                        onChange = {eventCheckDetail}
                    />
                </ListItemIcon>
                <TextField
                    variant='standard'
                    margin='dense'
                    defaultValue={props.detail.name}
                    fullWidth
                    onChange={eventUpdateDetail}
                />
            </ListItemButton>
        </ListItem>
    );
}

export default Detail;