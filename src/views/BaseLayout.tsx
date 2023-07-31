import { Box } from "@mui/material";
import React from "react";

const BaseLayout = (children: any) => {
  return (
    <Box>
      {/* Your shared header component */}
      <header>Shared Header</header>

      {/* Content of each specific route will be rendered here */}
      {children}

      {/* Your shared footer component */}
      <footer>Shared Footer</footer>
    </Box>
  );
};

export default BaseLayout;
