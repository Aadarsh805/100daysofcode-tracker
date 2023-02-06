import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./Search.css";

type SearchBarProps = {
  placeholder: string;
  data: {
    id: number;
    content: string;
    date: string;
  }[];
};

function SearchBar(props: SearchBarProps) {
  const [filterData, setFilterData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event: { target: { value: any } }) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter: any = props.data.filter((value) => {
      return value.content.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };

  const clearInput = () => {
    setFilterData([]);
    setWordEntered("");
  };

  return (
    <div className="flex flex-col items-center justify-center  w-2/3 md:w-1/3 lg:1/5 ">
      <div className="flex">
        <TextField
          variant="outlined"
          placeholder={props.placeholder}
          className="border-r-transparent"
          sx={{
            border: "1px solid #274060",
            // borderRadius: "5px",
            input: { color: "white" },
            label: { color: "gray", letterSpacing: "2px" },
          }}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className=" h-full flex items-center justify-center p-4 cursor-pointer border  border-[#274060] border-l-transparent">
          {filterData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon onClick={clearInput} />
          )}
        </div>
      </div>
      {filterData.length !== 0 && (
        <div className="dataResult h-28 sm:mx-20 md:mx-24 lg:mx-28 p-5 mt-2 bg-[#3d348b] border-none rounded-sm overflow-hidden overflow-y-auto">
          {filterData.slice(0, 15).map((value) => {
            return (
              <p> hello </p>
              {/* <p
                className="font-light hover:bg-[#201c41]"
                key={value.id}
              >
                {value.content}
              </p>*/} 
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
