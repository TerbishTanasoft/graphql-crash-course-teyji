import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GridBackground from "./components/ui/GridBackground.jsx";
// apollo client
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  // TODO => Production дээрх uri-г шинэчлэх
  uri:
    import.meta.env.VITE_NODE_ENV === "development"
      ? "http://localhost:4000/graphql"
      : "/graphql", // Манай GraphQL серверийн URL.
  cache: new InMemoryCache(), // Apollo Client нь query response татаж авсны дараа кэш хийхэд ашигладаг.
  credentials: "include", //Энэ нь Apollo Client-д хүсэлт болгоны хамт сервер рүү күүки илгээхийг хэлдэг.
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GridBackground>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </GridBackground>
    </BrowserRouter>
  </React.StrictMode>
);
