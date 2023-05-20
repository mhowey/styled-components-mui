import { styled } from "@mui/system";
import { Box } from "@mui/material";

const ResponsiveBox = styled(Box)({
  backgroundColor: "white",
  border: "1px solid purple",
  flexWrap: "wrap",
  display: "flex",
  flex: "1 1 200px",
  padding: "15px",
  fontFamily: "Roboto",
});

export default ResponsiveBox;
