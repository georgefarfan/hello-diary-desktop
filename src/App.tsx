import "./App.scss";
import { Link } from "react-router-dom";
import { t } from "i18next";
import DefaultButton from "./shared/mui/Button";
import { Box } from "@mui/material";

function App() {
  return (
    <Box className="container">
      <Box className="d-flex d-flex-justify-center mt-1">
        <DefaultButton
          component={Link}
          to={"/dashboard"}
          variant="contained"
          color="secondary"
        >
          {t("LAYOUT.SECTIONS.DASHBOARD.TITLE")}
        </DefaultButton>

        <Box className="mr-1 ml-1">
          <DefaultButton
            component={Link}
            to={"/phases"}
            variant="contained"
            color="secondary"
          >
            {t("LAYOUT.SECTIONS.PHASES.TITLE")}
          </DefaultButton>
        </Box>

        <DefaultButton
          component={Link}
          to={"/collections"}
          variant="contained"
          color="secondary"
        >
          {t("LAYOUT.SECTIONS.COLLECTIONS.TITLE")}
        </DefaultButton>
      </Box>
    </Box>
  );
}

export default App;
