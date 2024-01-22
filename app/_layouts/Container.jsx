const Container=({children,titre})=>{
    return(

        <div className="mt-5 pt-6 container">
           
            <div className=" border rounded-md overflow-hidden">
                <div className="bg-slate-300 border-b px-3 py-2">{titre || null}</div>
                <div className="px-3 py-3">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Container