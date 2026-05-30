const Register = () => {
    return (
        <div className="h-[80vh] w-[35vw] bg-zinc-950 flex flex-col items-center justify-center gap-5">
            <h1 className="text-5xl font-bold text-zinc-100">
                Get Started!
            </h1>
            <form action="" className="w-full flex flex-col items-center justify-center gap-2">
                <input
                    className="focus:ring-0 outline-0 border border-zinc-50 h-10 w-[70%] placeholder:text-zinc-400 placeholder:font-light caret-zinc-100 text-zinc-50 tracking-wide font-light bg-zinc-800 px-4 rounded-xl"
                    type="text"
                    placeholder="username"
                />
            </form>
        </div>
    )
}

export default Register