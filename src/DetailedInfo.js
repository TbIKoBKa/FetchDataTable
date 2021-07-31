function DetailedInfo(props)
{
    let createBox = (item) => {
        let {id, fname, lname, age, city, address, company, phone, email} = item
        let box = [
            <p><strong>ID:</strong> {id}</p>,
            <p><strong>First name:</strong> {fname}</p>,
            <p><strong>Last name:</strong> {lname}</p>,
            <p><strong>Age:</strong> {age}</p>,
            <p><strong>City:</strong> {city}</p>,
            <p><strong>Address:</strong> {address}</p>,
            <p><strong>Company:</strong> {company}</p>,
            <p><strong>Phone number:</strong> {phone}</p>,
            <p><strong>E-mail:</strong> {email}</p>
        ]
        return box.length > 0 ? box : null;
    }

    return(
        props.item === undefined ? null : <div>{createBox(props.item)}</div>
    )
}

export default DetailedInfo