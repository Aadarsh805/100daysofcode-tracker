import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { poppins } from "@/public/assets/fonts/fonts";

export default function Accordian() {
  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <Typography
        className={`font-bold text-2xl mb-6 text-ourBlue text-center ${poppins.className}`}
      >
        Frequently asked questions
      </Typography>

      <Accordion className="w-full py-2 ">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={`${poppins.className}`}>
            Why are u getting username wrong?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={`pl-2 ${poppins.className}`}>
            <li>
              You don't have your phone number linked with your Twitter account.
            </li>
            <li>You have not tweeted recently.</li>
            <li>Our API might be down, retry after sometime.</li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="w-full py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={`${poppins.className}`}>How does it work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={`${poppins.className}`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi cum
            laboriosam porro eius fugiat magnam, ab sint autem! Iusto nobis
            minima facilis asperiores quidem dolorum officia recusandae pariatur
            voluptate doloribus?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="w-full py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={`${poppins.className}`}>Where can I see the source code</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={`${poppins.className}`}>
            It's available right here in our{" "}
            <Link
              target="_blank"
              className={`text-[#7214ff] ${poppins.className}`}
              href="https://github.com/Aadarsh805/TweetSage.ai"
            >
              Github repository
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="w-full  py-2 shadow-bottom">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={`${poppins.className}`}>Can I contribute to the project?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={`${poppins.className}`}>
            Definitely yes, this project is completely open-source and open to
            your valuable contributions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion disabled>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
            </Accordion> */}
    </div>
  );
}
