import { Box, Button, Modal, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import DefaultButton from "../mui/Button";

export interface ModalProps {
  open: boolean;
  title: string;
  description: string;
  content: string;
  actions: {
    ok: string;
    cancel: string;
  };
  cancelCallback: () => void;
  okCallback: () => void;
  closeCallback: () => void;
}

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

function ConfirmModal(props: ModalProps) {
  const {
    open,
    title,
    description,
    content,
    cancelCallback,
    okCallback,
    closeCallback,
    actions,
  } = props;

  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onClose = () => {
    closeCallback();
  };

  const onCancel = () => {
    cancelCallback();
  };

  const onOK = () => {
    okCallback();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style }}>
        <Typography variant="h3">{title}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography>{description}</Typography>
          <Box>{content}</Box>
        </Box>

        <Box className="d-flex d-flex-align-end d-flex-justify-end mt-2">
          <Box
            sx={{
              marginRight: "1rem",
            }}
          >
            <DefaultButton onClick={onCancel} variant="outlined" color="error">
              {t(actions.cancel)}
            </DefaultButton>
          </Box>
          <DefaultButton variant="contained" onClick={onOK} type="submit">
            {t(actions.ok)}
          </DefaultButton>
        </Box>
      </Box>
    </Modal>
  );
}
export default ConfirmModal;
