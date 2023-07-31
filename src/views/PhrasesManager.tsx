import { Box, Modal, TextField } from "@mui/material";
import PhraseBox from "../components/PhraseBox";
import PhraseList from "../components/PhraseList";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { CREATE_PHRASE } from "../graphql/phases/mutations";
import {
  LoaderState,
  Phase,
  addPhase,
  setLoader,
} from "../store/features/phrasesSlice";
import { Link } from "react-router-dom";
import DefaultButton from "../shared/mui/Button";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 4,
  px: 4,
  pb: 3,
  width: 600,
  height: 280,
};

function PhrasesManager() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [createPhase, { loading, error }] = useMutation(CREATE_PHRASE);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (values: any) => {
    const variables = { title: values.title, description: values.description };

    dispatch(
      setLoader({
        loader: LoaderState.LOADING,
      })
    );

    createPhase({
      variables,
    })
      .then((response) => {
        const data = response.data.createPhase as Phase;
        dispatch(
          addPhase({
            phase: {
              id: data.id,
              title: data.title,
              description: data.description,
            },
          })
        );
        handleClose();
        reset();
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

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

        <DefaultButton
          variant="contained"
          color="secondary"
          onClick={handleOpen}
        >
          {t("DASHBOARD.phases.add.label")}
        </DefaultButton>
      </Box>

      <Box className="d-flex mt-3">
        <Box className="w-50">
          <PhraseList></PhraseList>
        </Box>
        <Box className="w-50">
          <PhraseBox></PhraseBox>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style }}>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("title", { required: "Titles is required" })}
              id="title"
              label={t("DASHBOARD.phases.add.form.title")}
              variant="outlined"
              className="w-100 pt-4"
            ></TextField>

            <Box
              sx={{
                marginTop: "2rem",
              }}
            >
              <TextField
                {...register("description", {
                  required: "Description is required",
                })}
                id="description"
                label={t("DASHBOARD.phases.add.form.description")}
                variant="outlined"
                multiline
                rows={4}
                placeholder={"..."}
                className="w-100"
              ></TextField>
            </Box>

            <Box className="d-flex d-flex-align-end d-flex-justify-end mt-2">
              <Box
                sx={{
                  marginRight: "1rem",
                }}
              >
                <DefaultButton
                  onClick={handleClose}
                  variant="outlined"
                  color="error"
                >
                  {t("COMMON.close")}
                </DefaultButton>
              </Box>
              <DefaultButton variant="contained" type="submit">
                {t("COMMON.accept")}
              </DefaultButton>
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}

export default PhrasesManager;
