



const Login = () =>{
    let user

    const handleChange = (event) => {
        user = event.target.value
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(user)
    }
    return (
        <div className="loginContainer">
            <form onSubmit= {handleSubmit}>
                <label htmlFor="user">User Name</label>
                <input onChange={handleChange} type="text"  id="user" name="user" placeholder="User Name"></input>
                <button onSubmit={handleSubmit}>Enter</button>
            </form>
        </div>
    )
}
export default Login