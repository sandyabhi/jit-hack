import React, { useState } from 'react'

function Home() {

    const [picture, setPicture] = useState('');

    const onChangePicture = e => {
        setPicture(URL.createObjectURL(e.target.files[0]));
    };


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
