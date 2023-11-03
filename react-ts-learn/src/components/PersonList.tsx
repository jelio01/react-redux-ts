import { Name } from "../types/Person.types"

type PersonListProps = {
    names : Name[]
}

const PersonList = (props : PersonListProps) => {
    return ( 
        <div>
            {
                props.names.map(name => {

                    return (
                        <h2 key={name.first}>{name.first} {name.last}</h2>
                    )
                })
            }
        </div>
     );
}
 
export default PersonList;