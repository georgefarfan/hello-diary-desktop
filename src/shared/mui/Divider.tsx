import styled from "@emotion/styled";
import { Box } from "@mui/material";

const DividerStyled = styled(Box)({});

const Divider = () => {
  return (
    <DividerStyled className="divider divider--lg mr-5 ml-5 mt-1 mb-2"></DividerStyled>
  );
};

export default Divider;
