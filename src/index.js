import React, { Component } from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Box, Grommet } from "grommet";
import {
  Grommet as GrommetIcon,
  Group,
  SettingsOption,
  Servers as ServersIcon
} from "grommet-icons";

import { theme } from "./theme";
import { Sidebar } from "./components";
import { Dashboard, NotFound, Servers, Settings, Users } from "./pages";

const userSession = {
  user: {
    name: "Alan Souza",
    thumbnail: "//s.gravatar.com/avatar/b226da5c619b18b44eb95c30be393953?s=80"
  },
  items: [
    {
      label: "Logout",
      href: "#"
    }
  ]
};

const items = [
  {
    label: "Sandbox",
    Icon: ServersIcon,
    path: "/sandbox"
  },
  {
    label: "Bugs",
    Icon: Group,
    path: "/bugs"
  },
  {
    label: "Routing",
    Icon: SettingsOption,
    path: "/routing"
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <Grommet theme={theme} full>
          <Box direction="row" fill>
            <Sidebar
              appIcon={<GrommetIcon color="brand" />}
              appName="My App"
              items={items}
              userSession={userSession}
            />
            <Box flex>
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/sandbox" component={Servers} />
                <Route path="/bugs" component={Users} />
                <Route path="/routing" component={Settings} />
                <Route component={NotFound} />
              </Switch>
            </Box>
          </Box>
        </Grommet>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
