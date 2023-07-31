import { useForm } from "react-hook-form";
import { Phase, updatePhrase } from "../store/features/phrasesSlice";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import DefaultButton from "../shared/mui/Button";
import { UPDATE_PHRASE } from "../graphql/phases/mutations";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";

export interface PhaseEditorProps {
  phrase: Phase;
}

function PhraseEditor(props: PhaseEditorProps) {
  const { t } = useTranslation();
  const { id, title, description } = props.phrase;
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      title,
      description,
    },
  });
  const [updatePhase, { loading, error }] = useMutation(UPDATE_PHRASE);

  const onSubmit = (values: any) => {
    const variables = {
      id: props.phrase.id,
      title: values.title,
      description: values.description,
    };

    updatePhase({
      variables,
    })
      .then((response) => {
        const data = response.data.createPhase as Phase;
        dispatch(
          updatePhrase({
            phase: {
              id: data?.id,
              title: data.title,
              description: data.description,
            },
          })
        );
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  useEffect(() => {
    setValue("title", title);
    setValue("description", description);
  }, [props.phrase]);

  return (
    <Box
      sx={{
        background: "white",
        border: isDirty ? "5px solid yellow" : "5px solid black",
      }}
      className="pl-2 pr-2 pt-3 pb-1"
    >
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="title"
          {...register("title", {
            required: "Title is required",
          })}
          label={t("PHRASES.EDIT.TITLE.LABEL")}
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
            label={t("PHRASES.EDIT.DESCRIPTION.LABEL")}
            variant="outlined"
            multiline
            rows={4}
            className="w-100"
          ></TextField>
        </Box>

        <Box className="d-flex d-flex-align-end d-flex-justify-end mt-2">
          <DefaultButton variant="contained" type="submit">
            {t("COMMON.EDIT")}
          </DefaultButton>
        </Box>
      </form>
    </Box>
  );
}

export default PhraseEditor;
