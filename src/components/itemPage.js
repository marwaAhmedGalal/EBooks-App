
import React, { useState } from "react";
import "./style.css"
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from "react-redux";
import { edit, itemEdited, itemRemoved, updateValue } from "../Redux/slices/slice";
import { Link, useNavigate } from "react-router-dom";

const ItemsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const items = useSelector((state) => state.item.items);
    const handleDeleteItem = (id) => {
        dispatch(itemRemoved(id));
    };
    const handleEditItem = (val) => {
        dispatch(edit(val))
        navigate("/")
    };
    return (

        <>
            <div className="itemsPage">

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {items.map((value) => (
                        <ListItem
                            key={value.id}
                            disableGutters
                            secondaryAction={
                                <>
                                    <IconButton edge="end" aria-label="delete" onClick={() => { handleDeleteItem(value.id) }}>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="edit" onClick={() => { handleEditItem(value) }}>
                                        <EditIcon />
                                    </IconButton>
                                </>
                            }
                        >
                            <ListItemText primary={` ${value.name}`} />
                        </ListItem>
                    ))}
                </List>
                <Link to="/" onClick={() => dispatch(edit(""))}>set item</Link>
            </div>
        </>
    );
}

export default ItemsPage;