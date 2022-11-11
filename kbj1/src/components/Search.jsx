import React from "react";

const [search, setSearch] = useState("");
const onChange = (e) => {
        setSearch(e.target.value)
    }
    return (  
        <div>
            <input type="text" value={search} onChange={onChange} />
        </div>
    );


export default Search;