import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { FC, useState } from "react";

interface SearchBarProps {}

export const SearchBar: FC<SearchBarProps> = () => {
  const [name, setName] = useState<string>("");

  const onSubmit = () => {
    console.log(name);
  };

  return (
    <Stack alignItems="center" spacing={2}>
      <TextField
        id="search-box"
        sx={{
          flex: 1,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        placeholder={"Search..."}
        variant="outlined"
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
      />
      <Button variant="text" onClick={onSubmit}>
        Submit
      </Button>
    </Stack>
  );
};
