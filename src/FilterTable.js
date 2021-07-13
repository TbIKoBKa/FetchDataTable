import { useState } from 'react'

function FilterTable(props)
{
    const [inputValue, setValue] = useState('');
    return(
        <div className="filter-container">
            <input onChange={(event) => setValue(event.target.value)}></input>
            <button onClick={() => props.onFilter(inputValue)}>Поиск</button>
        </div>
    )
}

export default FilterTable