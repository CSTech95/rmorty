function Character(props) {
    return (
        <div className="flex text-center text-sky-50 text-xs font-bold whitespace-nowrap">
            <img className="object-scale-down h-24" src={props.image} />
            <div className="text-left p-1.5">
            <h1>{props.name}</h1>
            <h1>{props.location}</h1> 
            </div>
        </div>
    )
}

export default Character
