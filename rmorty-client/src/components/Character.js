// {props.image}
// {props.name}
// {props.location}

function Character(props) {
    return (
        <div className="flex text-center text-sky-50 text-xs font-bold whitespace-nowrap">
            <div className="flex text-left p-1.5">
            <img className="object-scale-down h-24" src={props.image} />
            <div className="pl-2 text-ellipsis">
            <h1>{props.name}</h1>
            <h1>{props.location}</h1> 
            {props.species?<h1>{props.species}</h1>:null}
            {props.gender?<h1>{props.gender}</h1>:null}
            </div>
            </div>
        </div>
    )
}

export default Character
