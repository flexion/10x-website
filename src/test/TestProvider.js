import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import defaultStore from "app";

library.add(far, fas);

export default ({ children, store: passedStore, route = ["/"], index = 0 }) => {
  const store = passedStore ? passedStore : defaultStore;
  return (
    <Provider store={store}>
      <Router initialEntries={route} initialIndex={index}>
        {children}
      </Router>
    </Provider>
  );
};
