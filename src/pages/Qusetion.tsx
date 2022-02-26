import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box, flexbox } from "@mui/system";
import { type } from "os";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  NavigateFunction,
  Params,
  useNavigate,
  useParams,
} from "react-router-dom";

import QusetionIdicator, { quesionType } from "../components/QusetionIdicator";
import quesionData from "./../quesionData.json";

export type answersArrayType = Array<Array<string> | string>;

type arrAnswer5Type = Array<string>;

const Qusetion = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  let id: number = Number(useParams().id);

  if (!id) {
    id = 1;
  }

  const [answersArray, setAnswersArray] = useState<answersArrayType>(
    Array(5).fill([])
  );

  const [arrAnswer5, setArrAnswer5] = useState<arrAnswer5Type>([]);

  const handleOnAnswerSubmission = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    navigate("/result", { state: answersArray });
  };

  useEffect((): void => {
    console.log(answersArray, arrAnswer5);
  }, [answersArray, arrAnswer5]);

  useEffect((): void => {
    setAnswersArray((values: answersArrayType): answersArrayType => {
      const arr: answersArrayType = [...values];
      arr[4] = arrAnswer5;
      return arr;
    });
  }, [arrAnswer5]);

  const handleOnCheckBox = (optionValue: string): void => {
    setAnswersArray((value: any): answersArrayType => {
      let arr = [...value];

      if (!arr[2].includes(optionValue)) {
        arr[2] = [...arr[2], optionValue];
      } else {
        arr[2] = arr[2].filter((item: any) => {
          return item !== optionValue;
        });
      }

      return arr;
    });
  };

  const handleMatchTheFollowing = (item: string): void => {
    console.log(item);
    setArrAnswer5((prev: arrAnswer5Type): arrAnswer5Type => {
      console.log(item);
      const updateArray: arrAnswer5Type = [...prev];
      !updateArray.includes(item) && updateArray.push(item);
      return updateArray;
    });
  };

  if (id > 5 && id < 1) {
    return <div className="headding">id noyt found</div>;
  }
  // !
  return (
    <Box component="form" onSubmit={handleOnAnswerSubmission}>
      <QusetionIdicator answersArray={answersArray} id={id}></QusetionIdicator>

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div className="qusion">
          <h3 style={{ display: "inline-block", paddingRight: "40px" }}>
            {id} )
          </h3>
          <b>{quesionData?.[id - 1].question}</b>
        </div>
      </Box>

      {/* {console.log(quesionData[1].option)} */}
      <div className="headding s">
        {(() => {
          switch (id) {
            case 1:
              return (
                <TextField
                  sx={{ paddingRight: "30px" }}
                  variant="standard"
                  value={answersArray[0]}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setAnswersArray(
                      (values: answersArrayType): answersArrayType => {
                        const arr: answersArrayType = [...values];
                        arr[0] = e.target.value;
                        return arr;
                      }
                    )
                  }
                ></TextField>
              );
            case 2:
              let arr1: Array<string> = quesionData?.[1]?.option;
              return (
                <FormControl>
                  <RadioGroup
                    value={answersArray[1]}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setAnswersArray(
                        (value: answersArrayType): answersArrayType => {
                          const arrUpdate: answersArrayType = [...value];
                          arrUpdate[1] = e.target.value;
                          return arrUpdate;
                        }
                      );
                    }}
                  >
                    {arr1.map((item: string): JSX.Element => {
                      return (
                        <FormControlLabel
                          key={item}
                          label={item}
                          value={item}
                          control={<Radio />}
                        ></FormControlLabel>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              );
            case 3:
              let arr: Array<string> = quesionData?.[2].option;
              return (
                <FormGroup>
                  {arr.map((item: string): JSX.Element => {
                    return (
                      <FormControlLabel
                        key={item}
                        control={<Checkbox />}
                        label={item}
                        onChange={() => handleOnCheckBox(item)}
                        checked={answersArray[2].includes(item)}
                      />
                    );
                  })}
                </FormGroup>
              );
            case 4:
              let arr4: Array<string> = quesionData?.[3].option;
              return (
                <FormControl>
                  <RadioGroup
                    value={answersArray[3]}
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                      setAnswersArray(
                        (value: answersArrayType): answersArrayType => {
                          const arrUpdate: answersArrayType = [...value];
                          arrUpdate[3] = e.target.value;
                          return arrUpdate;
                        }
                      );
                    }}
                  >
                    {arr4.map((item: string): JSX.Element => {
                      return (
                        <FormControlLabel
                          key={item}
                          label={item}
                          value={item}
                          control={<Radio />}
                        ></FormControlLabel>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              );
            case 5:
              let arr5: quesionType = quesionData?.[4];

              return (
                <>
                  <Button onClick={(): void => setArrAnswer5([])}>Retry</Button>

                  {arr5.questionOption.map(
                    (item: string, id: number): JSX.Element => {
                      console.log(item, arrAnswer5?.[id], arr5?.option?.[id]);

                      return (
                        <Box key={id} className="mathTheFollowing">
                          <span>{item}</span>
                          <span>{arrAnswer5?.[id]}</span>
                          <span>
                            <Button
                              disabled={
                                arrAnswer5.includes(arr5?.option?.[id]) && true
                              }
                              onClick={(): void => {
                                handleMatchTheFollowing(arr5?.option?.[id]);
                              }}
                            >
                              {arr5?.option?.[id]}
                            </Button>
                          </span>
                        </Box>
                      );
                    }
                  )}
                </>
              );
          }
        })()}
      </div>

      <Button
        variant="contained"
        sx={{ left: "50px", bottom: "30%", position: "absolute" }}
        disabled={id <= 1}
        onClick={(): void => navigate(`/questions/${id - 1}`)}
      >
        Back
      </Button>
      <Button
        variant="contained"
        sx={{ right: "50px", bottom: "30%", position: "absolute" }}
        disabled={id >= 5}
        onClick={(): void => navigate(`/questions/${Number(id) + 1}`)}
      >
        Next
      </Button>
      <Button
        color="secondary"
        variant="contained"
        sx={{ right: "50%", bottom: "6%", position: "absolute" }}
        type="submit"
        disabled={!(id == 5)}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Qusetion;
