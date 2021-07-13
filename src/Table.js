function Table(props)
{
    return(
        <table>
            <thead>
                <tr>
                    <th onClick = {() => props.toSort('id')}>ID{props.sortCol === 'id' ? (props.sortType === 'asc' ? <span className="sortMark">&uarr;</span> : <span className="sortMark">&darr;</span>) : null}</th>
                    <th onClick = {() => props.toSort('fname')}>First Name {props.sortCol === 'fname' ? (props.sortType === 'asc' ? <span className="sortMark">&uarr;</span> : <span className="sortMark">&darr;</span>) : null}</th>
                    <th onClick = {() => props.toSort('lname')}>Last Name {props.sortCol === 'lname' ? (props.sortType === 'asc' ? <span className="sortMark">&uarr;</span> : <span className="sortMark">&darr;</span>) : null}</th>
                    <th onClick = {() => props.toSort('tel')}>Phone {props.sortCol === 'tel' ? (props.sortType === 'asc' ? <span className="sortMark">&uarr;</span> : <span className="sortMark">&darr;</span>) : null}</th>
                    <th onClick = {() => props.toSort('city')}>City {props.sortCol === 'city' ? (props.sortType === 'asc' ? <span className="sortMark">&uarr;</span> : <span className="sortMark">&darr;</span>) : null}</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(item =>
                {
                    return (
                        <tr key={item.id} onClick={() => props.toDetail(item)}>
                            <td>{item.id}</td>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>
                            <td>{item.tel}</td>
                            <td>{item.city}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table