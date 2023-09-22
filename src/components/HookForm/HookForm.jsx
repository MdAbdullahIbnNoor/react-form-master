import useInputState from "../../hooks/useInputState"


const HookForm = () => {

    // const [name, handleNameChange] = useInputState('Rojoni hooked');
    const emailState = useInputState('rojoni@sojoni.go')

    const handleSubmit = e => {
        e.preventDefault();
        console.log('form data', emailState.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center space-y-4">
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="Name..." class="input input-bordered input-primary w-full max-w-md mb-5" /> */}
                <input {...emailState} type="email" name="email" placeholder="Email..." class="input input-bordered input-secondary w-full max-w-md mb-5" />
                <input type="password" name="password" placeholder="password..." class="input input-bordered input-accent w-full max-w-md mb-5" />
                <input className="btn btn-success w-36 mx-36" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default HookForm