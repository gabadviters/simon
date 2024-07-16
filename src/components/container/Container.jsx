const Container = ({children})=> {
    return(
        <div className="flex justify-center  w-2/3 max-w-[1090px] mx-auto p-6 bg-slate-400 gap-5">
            {children}
        </div>
    )
}

export default Container;