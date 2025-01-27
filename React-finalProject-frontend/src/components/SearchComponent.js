import * as styled from "./Events/styled";
import {InputAdornment, TextField} from "@mui/material";
import {Search} from "@mui/icons-material";
import React from "react";

const searchTypes = ["City", "Country", "Category"]

function SearchComponent({setSearchBy,searchBy,searchTerm,setSearchTerm}) {

    return <styled.SearchWrapper>
        <styled.SearchLinkWrapper>
            {searchTypes.map((cat,idx) => (
                <styled.SearchSpan key = {idx} onClick={() => setSearchBy(cat?.toLowerCase())}>{cat}</styled.SearchSpan>))}

        </styled.SearchLinkWrapper>
        <div>
            <TextField
                fullWidth
                id="outlined-required"
                label= {searchBy === "" ? "Search" : `Search By ${searchBy}`}
                defaultValue={searchTerm}
                value = {searchTerm}
                size="small"
                InputProps={{
                    startAdornment: <InputAdornment position="start">  <Search/></InputAdornment>,
                }}
                onChange={(event) => {
                    setSearchTerm(event.target.value)
                }}
            />

        </div>
    </styled.SearchWrapper>;
}

export default SearchComponent