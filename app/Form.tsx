import type { FC, FormEvent } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { BiChevronRight } from "react-icons/bi";
import styled from "@emotion/styled";

type FormProps = {
  handleSubmit: (e: FormEvent) => Promise<void>;
  username: string;
  setUsername: (name: string) => void;
};

const Form: FC<FormProps> = ({ handleSubmit, username, setUsername }) => {
  //   const StyledTextfield = styled(TextField)`
  //     border: none;
  //     border-color: #1da1f2;
  //     color: #1da1f2;
  //     :placeholder: {
  //       color: #1da1f2;
  //     }
  //   `;
  console.log(username);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center gap-2 h-full">
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-xl text-ourBlue placeholder:text-ourBlue placeholder:tracking-wider border-ourBlue"
          sx={{ borderColor: "1da1f2" }}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-ourBlue hover:bg-[#1da0f2b7] h-full flex items-center justify-center rounded-lg px-4 cursor-pointer"
        >
          <BiChevronRight className="text-white text-3xl" />
        </button>
      </div>
    </form>
  );
};

export default Form;
