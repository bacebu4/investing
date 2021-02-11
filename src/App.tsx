import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const SidebarContent = styled.aside`
  width: 33%;
`;

const MainContent = styled.main`
  flex: 1;
  overflow: auto;
`;

function App() {
  return (
    <Wrapper>
      <SidebarContent>
        <h1>hey</h1>
      </SidebarContent>
      <MainContent>
        <h2>cool here</h2>
        <h2>cool here</h2>
        <h2>cool here</h2>
        <h2>cool here</h2>
        <h2>cool here</h2>
      </MainContent>
    </Wrapper>
  );
}

export default App;
