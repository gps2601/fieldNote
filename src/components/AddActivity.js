import React, { useState } from "react";

const AddActivity = ({storeActivity}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const saveActivity = () => {
        console.log('inside save activity');
        storeActivity({title: title, description: description})
    };

    return (
        <div className="AddActivity">
            <h2>Activity title</h2>
            <input value={title} onChange={(event) => setTitle(event.target.value)}/>
            <h2>Activity description</h2>
            <textarea onChange={(event) => setDescription(event.target.value)}>
            </textarea>
            <button onClick={saveActivity}>Save activity</button>
        </div>
    );
};

export default AddActivity;