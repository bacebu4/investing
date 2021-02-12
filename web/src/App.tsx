import styled from "styled-components";
import { MyBalance } from "./containers/MyBalance";
import { Statistics } from "./containers/Statistics";
import { Navbar } from "./containers/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FlexBox } from "./components/FlexBox";
import React from "react";
import { Title } from "./components/Title";

const SidebarContent = styled.aside`
  width: 33%;
  overflow: auto;
  padding: 0 64px;
  height: 100vh;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
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
      <FlexBox>
        <SidebarContent>
          <MyBalance />
        </SidebarContent>

        <MainContent>
          <Navbar />

          <Switch>
            <Route path="/faq">
              <Title mt="64px">FAQ</Title>
            </Route>

            <Route path="/">
              <Statistics />
            </Route>
          </Switch>
        </MainContent>
      </FlexBox>
    </Router>
  );
}

export default App;
