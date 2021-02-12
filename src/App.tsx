import styled from "styled-components";
import { MyBalance } from "./containers/MyBalance";
import { Statistics } from "./containers/Statistics";
import { Navbar } from "./containers/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
    <Router>
      <Wrapper>
        <SidebarContent>
          <MyBalance />
        </SidebarContent>

        <MainContent>
          <Navbar />

          <Switch>
            <Route path="/faq">{/* <Faq /> */}</Route>

            <Route path="/">
              <Statistics />
            </Route>
          </Switch>
        </MainContent>
      </Wrapper>
    </Router>
  );
}

export default App;
