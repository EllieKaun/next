



export function Container(props){

    const {children} = props
    return(
        <div className="m-auto max-w-[1280px] w-full">
            {children}
        </div>
    )
}