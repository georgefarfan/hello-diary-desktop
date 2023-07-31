import { Box, Typography } from "@mui/material";
import { Phase } from "../store/features/phrasesSlice";
import { useSelector } from "react-redux";
import Divider from "../shared/mui/Divider";
import { useTranslation } from "react-i18next";
import EmptyPhrases from "./EmptyPhrases";
import PhraseEditor from "./PhraseEditor";

function PhraseBox() {
  const phrase: Phase = useSelector((state: any) => state.phases.selected);
  const { t } = useTranslation();
  const msg = t("DASHBOARD.phases.SELECTED.MESSAGE");

  return (
    <Box className="pl-2 pr-2">
      <Typography variant="h5">
        {t("DASHBOARD.phases.SELECTED.TITLE")}
      </Typography>
      <Divider></Divider>
      <Box>
        {phrase.id ? (
          <PhraseEditor phrase={phrase}></PhraseEditor>
        ) : (
          <EmptyPhrases msg={msg}></EmptyPhrases>
        )}
      </Box>
    </Box>
  );
}

export default PhraseBox;
