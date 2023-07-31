import { Box, Typography } from "@mui/material";
import { t } from "i18next";
import { Link } from "react-router-dom";
import DefaultButton from "../shared/mui/Button";

function Collections() {
  return (
    <Box className="container">
      <Box className="d-flex d-flex-justify-between mt-1">
        <DefaultButton
          component={Link}
          to={"/"}
          variant="contained"
          color="secondary"
        >
          {t("COMMON.BACK")}
        </DefaultButton>
      </Box>

      <Box className="d-flex-col">
        <Typography variant="h4" className="f-bold">
          {t("COLLECTIONS.TITLE")}
        </Typography>

        <Box className="w-100 d-flex-justify-center"></Box>
      </Box>
    </Box>
  );
}

export default Collections;
