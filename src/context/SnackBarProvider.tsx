import { ReactNode, useState } from "react";
import { SnackBarContext } from "./snack-bar.context";

interface Props {
  children?: ReactNode;
}

const MyContextProvider = ({ children, ...props }: Props) => {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [seconds, setSeconds] = useState(3000);

  const values = {
    message,
    open,
    seconds,
  };

  return (
    <SnackBarContext.Provider value={values}>
      {children}
    </SnackBarContext.Provider>
  );
};

export default MyContextProvider;
