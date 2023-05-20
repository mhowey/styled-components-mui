import { Stack, Box } from "@mui/material";
import Wrapper from "./components/Wrapper.styled";
import ResponsiveBox from "./components/ResponsiveBox.styled";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const loremIpsum =
  "Lorem ipsum dolor sit amet consequitor. Ipsum dolor sit amet. ";

function App() {
  return (
    <Stack className="App">
      <Wrapper>
        <h2>Styled Components Playground</h2>
        <Wrapper direction="row" gap="5px">
          <ResponsiveBox>
            ONE {loremIpsum + loremIpsum + loremIpsum}
          </ResponsiveBox>
          <ResponsiveBox>
            TWO {loremIpsum + loremIpsum + loremIpsum}
          </ResponsiveBox>
          <ResponsiveBox>
            THREE {loremIpsum + loremIpsum + loremIpsum + loremIpsum}
          </ResponsiveBox>
          <ResponsiveBox>
            FOUR {loremIpsum + loremIpsum + loremIpsum}
          </ResponsiveBox>
        </Wrapper>
      </Wrapper>
    </Stack>
  );
}

export default App;
