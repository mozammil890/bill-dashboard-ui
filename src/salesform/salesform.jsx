import React, { useEffect, useState } from "react";
import { submitApiFormData } from "../apis/saleFormApi";



const SalesForm = () => {

    const [formData , submitFormData] = useState(
        {
            amount:'',
            day:'',
            date:''
        }
    );


    const handleChange = (e) => {
        const {name , value} = e.target;
        submitFormData(prevData => (
            {
                ...prevData,
                [name]: value
            }
        ));

    }

    const handleSubmit = async  (e) => {
        e.preventDefault();
        try{
            const response = await submitApiFormData(formData);
            alert('Form submitted successfully!');
        }catch(error){
            console.log('server response ', error);
        }
        console.log(formData , "This is the formData");
    }
    return(
    <>
        <div>
            <h1>This is the sales form</h1>
            <form  onSubmit={handleSubmit}>
            <div>
                <label>Enter Amout</label>
                <input type = "text" name="amount" value={formData.amount} onChange={handleChange} required/>
            </div>
            <div>
                <label>Enter Day</label>
                <input type = "text" name="day" value={formData.day} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
    </>
    );
}

export default SalesForm;