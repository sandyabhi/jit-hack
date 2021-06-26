import React, { useState } from 'react'
import axios from "axios"
import "./Home.css"

function Home() {

    const [picture, setPicture] = useState('');

    const onChangePicture = e => {
        setPicture(URL.createObjectURL(e.target.files[0]));
    };

    const submitData = () => {
        const fd = new FormData();
        fd.append('image', picture)
        //url = backend or ML url (ex: localhst: 4000, https://ML.netlify.com)
        axios.post("url", fd, {
            onUploadProgress: progressEvent => {
                console.log("upload progress" + (progressEvent.loaded / progressEvent.total) * 100 + "%")
            }
        })
            .then(res => {
                console.log(res);
            })
    }


    return (
        <div style={{ padding: 30 }}>

            <img src={picture} alt="img" />

            <div style={{ padding: 30 }}>
                <label for="img">Select image:</label>
                <input type="file" name="img" onChange={onChangePicture} />
            </div>

            <div style={{ padding: 30 }}>
                <button type="submit">Predict</button>
            </div>

        </div>
    )
}

export default Home
