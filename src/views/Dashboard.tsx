import { t } from "i18next";
import { Link } from "react-router-dom";
import DefaultButton from "../shared/mui/Button";
import { Box, Typography } from "@mui/material";
import Divider from "../shared/mui/Divider";

function Dashboard() {
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

      <Box className="mt-2">
        <Typography variant="h4" className="f-bold">
          {t("WELCOME.TITLE")}
        </Typography>
        <Divider></Divider>
        <Box className="pr-2 pl-2">
          <Typography variant="body1">{t("WELCOME.MESSAGE")}</Typography>
          <Divider></Divider>
          <Typography variant="body1">{t("WELCOME.MESSAGE")}</Typography>

          <Divider></Divider>
          <Typography variant="body1">{t("WELCOME.MESSAGE")}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
