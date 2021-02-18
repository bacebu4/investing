import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { FlexBox } from "./components/FlexBox";
import { FAQ } from "./containers/FAQ";
import { Footer } from "./containers/Footer";
import { Login } from "./containers/Login";
import { MyBalance } from "./containers/MyBalance";
import { Navbar } from "./containers/Navbar";
import { Recommendations } from "./containers/Recommendations";
import { Register } from "./containers/Register";
import { Statistics } from "./containers/Statistics";

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

const App: React.FC = () => {
  // const [isLogged, setIsLogged] = useState(false);
  const isLogged = true;

  if (isLogged) {
    return (
      <Router>
        <FlexBox direction="column" jc="center" ai="center" h="100vh">
          <Switch>
            <Route exact path="/">
              <Register />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </FlexBox>
      </Router>
    );
  }

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
};

export default App;
