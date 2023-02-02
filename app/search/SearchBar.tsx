import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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
  return (
    <div className="bg-red-600">
      <div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "45ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            placeholder={props.placeholder}
          />
        </Box>
      </div>
      <div className="tweets-result mt-2 w-32 h-24">
        {props.data.map((value, key) => {
          return (
            <p
              className="data-item font-bold"
              key={value.id}
            >
              {value.content}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default SearchBar;
