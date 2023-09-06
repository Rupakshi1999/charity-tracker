import React from 'react'
import { Link, useActionData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from "../authentication";

function AddDonation(props) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [logged] = useAuth()

    function submitDonation(data) {
        console.log(data);

        if (logged) {
            // create a post method after figuring out how to retrive the username and charity id
            // const post_body = {
            //     "username": data.username,
            //     "charity_id": data.charity_id,
            //     "amount": data.amount,
            //     "motivation": data.motivation
            // }
            // const requestOptions = {
            //     method: "POST",
            //     headers: {
            //         // specify the type of data we will be sending (check this is what the application input takes in /docs page)
            //         'content-type': 'application/json'
            //     },
            //     // takes in an js object and makes it a json string
            //     body: JSON.stringify(post_body)
            // }

            // // the reason we need to add the ip path is maybe because apple is using port 5000 so we can't access localhost:5000
            // fetch('http://127.0.0.1:4999/donation/donation', requestOptions)
            //     .then(res => res.json())
            //     .then(data => console.log(data))
            //     .catch(err => console.log(err))

            reset()
        }
        else {
            alert("You must be logged in to enter a donation")
        }
    }
    return (
        <div className="popup">
            <div className="popup-inner">
                <form>
                    <div>
                        <label>Select the Charity you want to donate to</label>
                        <select
                            name="charity_name">
                            <option>BBBS</option>
                        </select>
                        <br></br>
                        <br></br>
                        <label>
                            Enter Amount:
                        </label>
                        <input type="float" name="amount" placeholder="Amount in $"
                            {...register("amount", { required: true, min: 0.01 })}
                        />
                        {errors.amount && <p className="invalid-feedback">Amount is required</p>}
                        {errors.amount?.type === "min" && <p className="invalid-feedback">Amount must be greater than 0</p>}
                    </div>
                    <br></br>
                    <div>
                        <label>
                            Why did you choose to donate to this charity?
                        </label>
                        <input type="text" name="motivation" placeholder="Share your reasons to inspire others to donate [Optional]"
                            {...register("motivation")}
                        />
                    </div>
                    <label>
                        <button className="button-secondary" onClick={handleSubmit(submitDonation)}>Submit</button>
                    </label>
                </form>
                <br></br>
                <button className="button-primary" onClick={props.togglepop}>Close</button>
            </div>
        </div>
    )
}

export default AddDonation