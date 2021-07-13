function DetailedInfo(props)
{
    let createBox = (item) => {
        let box = [];
        let key = 0;
        for (const rowkey in item) {
            box.push(<p key={key++}>{rowkey}: {item[rowkey]}</p>);
        }
        return box.length > 0 ? box : null;
    }
    return(
        props.item === undefined ? null : <div>{createBox(props.item)}</div>
    )
}

export default DetailedInfo