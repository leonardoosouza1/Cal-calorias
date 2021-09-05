import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import Pages from "./components/mainpages/Pages";
import NavBar from "./components/headers/NavBar";

const client = new ApolloClient({
  uri: "http://192.168.1.101:4000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar />
        <Pages />
      </Router>
    </ApolloProvider>
  );
}

export default App;
