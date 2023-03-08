import { FC, FormEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { BiChevronRight } from "react-icons/bi";
import styled from "@emotion/styled";
import { InputAdornment } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import useTweetStore from "./store/tweetStore";
import { useRouter } from "next/navigation";

type FormProps = {};

const Form: FC<FormProps> = ({}) => {
  const [noUserError, setNoUserError] = useState(false);
  const router = useRouter();

  const { username, setUsername, dataLoadError, setDataLoadError, loading } =
    useTweetStore((state) => ({
      username: state.username,
      setUsername: state.setUsername,
      loading: state.loading,
      dataLoadError: state.dataLoadError,
      setDataLoadError: state.setDataLoadError,
    }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username === "") {
      setNoUserError(true);
    } else {
      setNoUserError(false);
      router.push("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center gap-2 h-[56px] ">
        <TextField
          id="outlined-basic"
          error={noUserError}
          helperText={noUserError && `Username can't be empty bro!`}
          label="Twitter Username"
          variant="outlined"
          value={username}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-xl text-ourBlue placeholder:text-ourBlue placeholder:tracking-wider border-ourBlue"
          sx={{ borderColor: "1da1f2" }}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-ourBlue hover:bg-[#1da0f2b7] flex items-center justify-center rounded-lg px-4 cursor-pointer h-[3.5em]"
        >
          <BiChevronRight className="text-white text-3xl" />
        </button>
      </div>
    </form>
  );
};

export default Form;
