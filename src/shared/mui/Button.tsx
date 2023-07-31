import styled from "@emotion/styled";
import { Button } from "@mui/material";

const DefaultButtonStyled = styled(Button)({
  backgroundColor: "white",
  color: "rgb(37, 37, 37)",
  border: "1px solid  rgb(37, 37, 37)",
  ":hover": {
    background: "rgb(37, 37, 37)",
    color: "white",
  },
  padding: "5px 10px 0px 10px",
});

const DefaultButton = (props: any) => {
  return <DefaultButtonStyled {...props}></DefaultButtonStyled>;
};

export default DefaultButton;
