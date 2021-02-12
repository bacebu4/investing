import styled from "styled-components";
import { MyBalance } from "./containers/MyBalance";
import { Statistics } from "./containers/Statistics";
import { Navbar } from "./containers/Navbar";

const Wrapper = styled.div`
  display: flex;
`;

const SidebarContent = styled.aside`
  width: 33%;
  overflow: auto;
  padding: 0 64px;
  height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  overflow: auto;
  padding: 44px 0 0 0;
  height: 95vh;
`;

function App() {
  return (
    <Wrapper>
      <SidebarContent>
        <MyBalance />
      </SidebarContent>

      <MainContent>
        <Navbar />

        <Statistics />
      </MainContent>
    </Wrapper>
  );
}

export default App;
