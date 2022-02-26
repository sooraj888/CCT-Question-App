import { ClassNameMap, makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const useStyle = makeStyles({
  root: { marginBottom: "30px" },
});
const NavBar = (): JSX.Element => {
  const classes: ClassNameMap = useStyle();
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Typography>Question And Answer App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
