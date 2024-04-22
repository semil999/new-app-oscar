import React from 'react'
import { useForm } from 'react-hook-form';

const FormValidationHook = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors , 'errors')
    
      const onSubmit = (data) => {
        console.log(data);
      };
  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
            <label>Email</label>
            <input
                type="text"
                name="email"
                {...register("email", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                })}
            />
            {errors.email && errors.email.type === "required" && (
                <p className="text-danger">Email is required.</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
                <p className="text-danger">Email is not valid.</p>
            )}
            </div>
            <div className="form-control">
            <label>Password</label>
            <input
                type="password"
                name="password"
                {...register("password", {
                required: true,
                minLength: 6
                })}
            />
            {errors.password && errors.password.type === "required" && (
                <p className="text-danger">Password is required.</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
                <p className="text-danger">
                Password should be at-least 6 characters.
                </p>
            )}
            </div>
            <div className="form-control">
            <label></label>
            <button type="submit">Login</button>
            </div>
        </form>
        </div>
    </>
  )
}

export default FormValidationHook
