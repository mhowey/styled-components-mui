import { styled } from "@mui/system";
import { Stack } from "@mui/material";

const Wrapper = styled(Stack)({
  backgroundColor: "lightblue",
  border: "1px solid white",
  flexWrap: "wrap",
  display: "flex",
  flex: "1 1 200px",
  padding: "15px",
  maxWidth: "1200px",
});

export default Wrapper;
