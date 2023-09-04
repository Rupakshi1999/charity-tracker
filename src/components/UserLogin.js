import React from "react"
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { login } from "../authentication";

function Login(props) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate() // redirects user to another page after login

    function onLoginHandler(data) {
        console.log(data)

        const requestOptions = {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch('http://127.0.0.1:5000/authorization/login', requestOptions)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

            login(data.access_token)
            // navigate programmatically to other pages using navigate
            navigate('/')

        reset()
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Login</h2>
                <form>
                    <div>
                        <label>
                            Username
                        </label>
                        <input type="text" name="username" placeholder="Username"
                            {...register("username", { required: true, maxLength: 25 })}
                        />
                        {errors.username && <p className="invalid-feedback">Username is required</p>}
                        {errors.username?.type === "maxLength" && <p className="invalid-feedback">Length must be less than 25</p>}
                    </div>

                    <div>
                        <label>
                            Password:
                        </label>
                        <input type="password" name="password" placeholder="Password"
                            {...register("password", { required: true, minLength: 6 })}
                        />
                        {errors.password && <p className="invalid-feedback">Password is required</p>}
                        {errors.password?.type === "minLength" && <p className="invalid-feedback">Password must be greater than 6</p>}
                    </div>
                    <button onClick={handleSubmit(onLoginHandler)}>Login</button>
                </form>
                <button onClick={props.togglepop}>Close</button>
            </div>
        </div>
    )
}

export default Login