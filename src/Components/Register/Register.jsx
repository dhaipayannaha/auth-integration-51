import React from 'react';
import { Link } from 'react-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase.init';

const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
            <h3 className="text-3xl font-bold text-center mt-4">Register now!</h3>
            <div className="card-body">
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="name" className="input" placeholder="Name" name='name'/>
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name='email'/>
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name='password'/>
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>already have an account? please <Link className='text-blue-400 underline' to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;