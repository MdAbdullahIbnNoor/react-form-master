

const ReusableForm = ({formTitle, handleSubmit, submitBtnText = 'Submit', children}) => {


    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }
    
    return (
        <div>
            {children}
            <form onSubmit={handleLocalSubmit} className="flex flex-col justify-center items-center">
                <input type="text" name="name" placeholder="Name..." class="input input-bordered input-primary w-full max-w-md mb-5" />
                <input type="email" name="email" placeholder="Email..." class="input input-bordered input-secondary w-full max-w-md mb-5" />
                <input type="password" name="password" placeholder="password..." class="input input-bordered input-accent w-full max-w-md mb-5" />
                <input className="btn btn-success w-36 mx-36 text-white font-bold" type="submit" value={submitBtnText} />
            </form>
        </div>
    )
}

export default ReusableForm