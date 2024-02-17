import { Button, TextField } from "@mui/material";
// import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css"
import { useDispatch, useSelector } from "react-redux";
import { itemAdded, itemEdited, updateValue } from "../Redux/slices/slice";
import { useEffect } from "react";



const MainPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const value = useSelector((state) => state.item.currentVal);
    const edit = useSelector((state) => state.item.edit);

    useEffect(() => {
        if (edit) {
            dispatch(updateValue(edit.name));
        }
    }, [edit, dispatch]);

    const handleChange = e => {
        dispatch(updateValue(e.target.value));
    }



    const handleSubmit = e => {
        if (value) {
            dispatch(itemAdded());

        }
    }
    const handleEdit = e => {
        if (value) {
            dispatch(itemEdited());
            navigate("/itemsPage")
        }
    }
    return (
        <>
            <div className="mainPage">
                <TextField id="outlined-basic" label="item name" variant="outlined" onChange={handleChange} value={value} />
                {edit === "" ? <Button variant="contained" color="success" onClick={handleSubmit}>Add
                </Button> : <Button variant="contained" color="success" onClick={handleEdit}>Edit
                </Button>}


                <Link to="itemsPage">items page</Link>
            </div>
        </>
    );
}

export default MainPage;