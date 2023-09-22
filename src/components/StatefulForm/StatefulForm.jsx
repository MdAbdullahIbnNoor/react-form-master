import { useState } from "react";

const StatefulForm = () => {


    const [name, setName] = useState('AB Noor');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
        }
        else {
            setError('');
            console.log(name);
            console.log(email);
            console.log(password);
        }
    }

    const handleNameChange = e => {
        // console.log(e.target.value);
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        // console.log(e.target.value);
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="Name..." class="input input-bordered input-primary w-full max-w-md mb-5" />
                <input onChange={handleEmailChange} type="email" name="email" placeholder="Email..." class="input input-bordered input-secondary w-full max-w-md mb-5" />
                <input onChange={handlePasswordChange} type="password" name="password" placeholder="Phone..." class="input input-bordered input-accent w-full max-w-md mb-5" />
                <input className="btn btn-success btn-outline w-36 mx-36" type="submit" value="Submit" />
                {
                    error && <div className="alert alert-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>{error}</span>
                  </div>
                }
            </form>

        </div>
    )
}

export default StatefulForm