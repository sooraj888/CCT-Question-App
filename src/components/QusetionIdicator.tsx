import { Box } from "@mui/material";
import { type } from "os";
import React from "react";
import { Link } from "react-router-dom";
import { answersArrayType } from "../pages/Qusetion";
import questionData from "./../quesionData.json";

type qusetionIdicatorType = {
  answersArray: answersArrayType;
  id: number;
};

export type quesionType = {
  id: number;
  question: string;
  answer: Array<string> | string;
  questionOption: Array<string>;
  option: Array<string>;
};

const QusetionIdicator = ({
  answersArray,
  id,
}: qusetionIdicatorType): JSX.Element => {
  return (
    <Box
      sx={{
        paddingTop: "20px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {questionData.map((quesion: quesionType) => {
        const isAnswered =
          answersArray[quesion.id - 1].length > 0 ? true : false;
        let highlight = false;
        if (Number(id) === quesion.id) {
          highlight = true;
        }
        return (
          <Circle
            key={quesion.id}
            highlight={highlight}
            isAnswered={isAnswered}
            id={quesion.id}
          ></Circle>
        );
      })}
    </Box>
  );
};

export default QusetionIdicator;

type circleType = {
  id: number;
  isAnswered: boolean;
  highlight: boolean;
};

const Circle = ({ id, isAnswered, highlight }: circleType): JSX.Element => {
  return (
    <Link to={`/questions/${id}`}>
      <Box
        sx={{
          bgcolor: isAnswered ? "rgb(236, 111, 61)" : "gray",
          border: highlight ? "3px solid blue " : "",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {id}
      </Box>
    </Link>
  );
};
