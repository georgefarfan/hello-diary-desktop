import { Box, Typography } from "@mui/material";

interface EmptyMessageProps {
  title?: string;
  msg: string;
}

function EmptyPhrases(props: EmptyMessageProps) {
  const { title, msg } = props;

  return (
    <Box
      sx={{
        border: "1px solid grey",
        borderStyle: "dotted",
      }}
      p={"20px"}
    >
      {title && <Typography variant="h6">{title}</Typography>}

      {msg && <Typography variant="h6">{msg}</Typography>}
    </Box>
  );
}

export default EmptyPhrases;
