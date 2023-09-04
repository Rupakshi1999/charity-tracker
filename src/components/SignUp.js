import React from 'react'
import { Link, useActionData } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function SignUp() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    function submitSignUp(data) {
        console.log(data);
        reset()
    }
    return (
        <div className="sign-up">
            <form>
                <div>
                    <label>
                        Email:
                    </label>
                    <input type="text" name="email" placeholder="Email"
                        {...register("email", { required: true, maxLength: 80 })}
                    />
                    {errors.email && <p className="invalid-feedback">Email is required</p>}
                    {errors.email?.type === "maxLength" && <p className="invalid-feedback">Length must be less than 80</p>}
                </div>
                <br></br>
                <div>
                    <label>
                        User name:
                    </label>
                    <input type="text" name="username" placeholder="User name"
                        {...register("username", { required: true, maxLength: 25 })}
                    />
                    {errors.username && <p className="invalid-feedback">Username is required</p>}
                    {errors.username?.type === "maxLength" && <p className="invalid-feedback">Length must be less than 25</p>}
                </div>
                <br></br>
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
                <br></br>
                <div>
                    <label>
                        Confirm:
                    </label>
                    <input type="password" name="confirmPassword" placeholder="Confirm Password"
                        {...register("confirmPassword", { required: true, minLength: 6 })}
                    />
                    {errors.confirmPassword && <p className="invalid-feedback">Re-entering the passport is required</p>}
                    {errors.confirmPassword?.type === "minLength" && <p className="invalid-feedback">Confirm password must be greater than 6</p>}
                </div>
                <br></br>
                <label>
                    <button className="button-primary" onClick={handleSubmit(submitSignUp)}>Sign Up</button>
                </label>
            </form>

        </div>
    )
}

export default SignUp