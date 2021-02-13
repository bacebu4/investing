import styled from "styled-components";
import { MyBalance } from "./containers/MyBalance";
import { Statistics } from "./containers/Statistics";
import { Navbar } from "./containers/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FlexBox } from "./components/FlexBox";
import React from "react";
import { Recommendations } from "./containers/Recommendations";
import { FAQ } from "./containers/FAQ";
import { Footer } from "./containers/Footer";

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
            <Route exact path="/faq">
              <FAQ />
            </Route>

            <Route exact path="/recommendations">
              <Recommendations />
            </Route>

            <Route exact path="/">
              <Statistics />
            </Route>
          </Switch>

          <Footer />
        </MainContent>
      </FlexBox>
    </Router>
  );
}

export default App;
