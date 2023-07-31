import { useDispatch, useSelector } from "react-redux";
import { LoaderState, Phase, setPhases } from "../store/features/phrasesSlice";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useQuery } from "@apollo/client";
import { GET_PHRASES } from "../graphql/phases/queries";
import PhraseItem from "./PhraseItem";
import EmptyPhrases from "./EmptyPhrases";
import { useEffect } from "react";
import Divider from "../shared/mui/Divider";

function PhraseList() {
  const dispatch = useDispatch();
  const phases: Phase[] = useSelector((state: any) => state.phases.phases);
  const loader: LoaderState = useSelector((state: any) => state.phases.loader);
  const { t } = useTranslation();

  const title = t("DASHBOARD.phases.list.empty.title");
  const msg = t("DASHBOARD.phases.list.empty.message");

  const { loading, error, data, refetch } = useQuery(GET_PHRASES);

  useEffect(() => {
    if (data) {
      dispatch(
        setPhases({
          phases: data.phases,
        })
      );
    }
  }, [data]);

  useEffect(() => {
    if (
      loader === LoaderState.INIT ||
      loader === LoaderState.LOADING ||
      loader === LoaderState.RELOAD
    ) {
      refetch();
    }
  }, [loader]);

  return (
    <Box className="d-flex-col">
      <Typography variant="h5">{t("DASHBOARD.phases.list.title")}</Typography>

      <Divider></Divider>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {phases && phases.length > 0 ? (
          phases.map((phase: Phase, index: number) => {
            return (
              <PhraseItem key={index} index={index} data={phase}></PhraseItem>
            );
          })
        ) : (
          <EmptyPhrases title={title} msg={msg}></EmptyPhrases>
        )}
      </Box>
    </Box>
  );
}

export default PhraseList;
