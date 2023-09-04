import React from "react"
import { useForm } from 'react-hook-form';

function Login(props) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    function onLoginHandler(data) {
        console.log(data)
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