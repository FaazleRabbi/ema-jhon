import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Signin = () => {
    const [logInfo,setLogInfo] = useState({
        email:'',
        password:''
    })
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        setLogInfo(data)
        
    };
    return (
        <form className='m-5' onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='email' className='form-control w-25 ml-5 m-2' name="email" ref={register({ required: true })} />
      {errors.email && <span>This field is required</span>}

      <input placeholder='password' className='form-control ml-5 w-25 m-2' name="password" ref={register({ required: true })} />
      {errors.password && <span>This field is required</span>}

      <input className='form-control ml-5 w-25 m-2 btn-primary' type="submit" />
      <h1>welcome {logInfo.email}</h1>
    </form>
    
    );
};

export default Signin;