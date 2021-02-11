import styled from "styled-components";
import { MyBalance } from "./containers/MyBalance";
import { Statistics } from "./containers/Statistics";

const Wrapper = styled.div`
  display: flex;
`;

const SidebarContent = styled.aside`
  width: 33%;
  padding: 0 64px;
`;

const MainContent = styled.main`
  flex: 1;
  overflow: auto;
  padding: 44px 32px 0;
`;

function App() {
  return (
    <Wrapper>
      <SidebarContent>
        <MyBalance />
      </SidebarContent>
      <MainContent>
        <Statistics />
      </MainContent>
    </Wrapper>
  );
}

export default App;
