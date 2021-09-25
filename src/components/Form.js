import React, { useState } from 'react'
import Button from './Button'
import ErrorMessage from "./ErrorMessage";
import { useForm } from "react-hook-form";

export default function Form() {
  const [submitted, setSubmitted] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors}
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
      setSubmitted(true);
  }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            className={`form-control ${errors?.firstName ? "error-message" : ""}`}
            placeholder="First Name"
            name="firstName"
            {...register("firstName", {
              required: "First Name cannot be empty",
            })}
          />
          {errors?.firstName && <span className="error-icon"></span>}
          {errors?.firstName && <ErrorMessage message={errors.firstName.message} />}
        </div>

        <div className="form-group">
          <input
            type="text"
            className={`form-control ${errors?.lastName ? "error-message" : ""}`}
            placeholder="Last Name"
            name="lastName"
            {...register("lastName", {
              required: "Last Name cannot be empty",
            })}
          />
          {errors?.lastName && <span className="error-icon"></span>}
          {errors?.lastName && <ErrorMessage message={errors.lastName.message} />}
        </div>

        <div className="form-group">
          <input
            type="text"
            className={`form-control ${errors?.email ? "error-message" : ""}`}
            placeholder="Email Address"
            name="email"
            {...register("email", {
              required: "Email cannot be empty",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Looks like this is not an email",
              },
            })}
          />
          {errors?.email && <span className="error-icon"></span>}
          {errors?.email && <ErrorMessage message={errors.email.message} />}
        </div>

        <div className="form-group">
          <input
            type="password"
            className={`form-control ${errors?.password ? "error-message" : ""}`}
            placeholder="Password"
            name="password"
            {...register("password", {
              required: "Password cannot be empty",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          {errors?.password && <span className="error-icon"></span>}
          {errors?.password && <ErrorMessage message={errors.password.message} />}
        </div>
        {submitted && <p className="success text-dark-red">Thanks for joining us!</p>}
        <Button isGreen className="form-control fs text-white">
          claim your free trial
        </Button>
        <p className="terms fs-xs text-gray-blue">
          By clicking the button, you are agreeing to our{" "}
          <a href="https://github.com/arrizkyhp" target="_blank" className="text-red" rel="noreferrer">
            Terms and Services
          </a>
        </p>
      </form>
    );
}
