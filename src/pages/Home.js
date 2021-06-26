import React, { useState } from 'react'
import axios from "axios"
import "./Home.css"
import { Button } from "@material-ui/core"

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
        <div className="home">
            <div className="home-main">

                <div>
                    <img className="img-main" src={picture} alt="img" />
                </div>

                <div className="img-label" >
                    <label >Select image: </label>
                    <input type="file" name="img" className="upbtn" onChange={onChangePicture} />
                </div>

                <div className="predict">
                    <Button variant="contained" color="primary">
                        Predict
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home
