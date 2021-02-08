import React, {useState} from "react";

function NewForm({handleNewListing}){

    const [descriptionInput, setDescriptionInput] = useState("")
    const [imageInput, setImageInput] = useState("")
    const [locationInput, setLocationInput] = useState("")

    function handleSubmit(e){
        e.preventDefault()

        const newListing = {
            description: descriptionInput,
            image: imageInput,
            location: locationInput
        }

        fetch('http://localhost:6001/listings', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newListing),
        })
        .then(response => response.json())
        .then(data => {
            handleNewListing(data);
        })

    }


    return (
        <form onSubmit={handleSubmit}>New Listing
            <p></p>
            <label>Description</label>
            <input value={descriptionInput} onChange={e=>setDescriptionInput(e.target.value)} type="text"/>
            <label>Image</label>
            <input value={imageInput} onChange={e=>setImageInput(e.target.value)} type="text"/>
            <label>Location</label>
            <input value={locationInput} onChange={e=>setLocationInput(e.target.value)} type="text"/>
            <button type="submit">Upload</button>
        </form>
    )

}

export default NewForm;