import React from "react"
export default function Info() {
    return(
        <div>
            <img className="profile-pic" src="./src/Nan-image-formal.jpg"/>
            <h1 className="myname">Nandhini Ravichandran</h1>
            <h2 className="job-title">Frontend Developer</h2>
            <h3>nandhini.website.com</h3>
            <div className="contact">
                <button>Email</button>
                <button>Linkedln</button>
            </div>
        </div>
    )
}