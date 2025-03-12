
export default function DailyLunchMenu( { items } ){
    
    const listItems = items.map( (item, index )=>
        <li key={index}>
            <h2>{item.day}</h2>
            <h3>{item.dish}</h3>
            <p>{item.description}</p>
        </li>
    )
    
    return <ul>{listItems}</ul>
}