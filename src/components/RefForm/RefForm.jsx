import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
        // emailRef.current.focus();
        // passwordRef.current.focus();

    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                <input ref={nameRef} type="text" name="name" placeholder="Name..." class="input input-bordered input-primary w-full max-w-md mb-5" />
                <input ref={emailRef} type="email" name="email" placeholder="Email..." class="input input-bordered input-secondary w-full max-w-md mb-5" />
                <input ref={passwordRef} type="password" name="password" placeholder="password..." class="input input-bordered input-accent w-full max-w-md mb-5" />
                <input className="btn btn-success w-36 mx-36" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default RefForm