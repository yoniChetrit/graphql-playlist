import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <h1>Ninja's Readind List</h1>
        <BookList />
        <AddBook />
      </ApolloProvider>
    </div>
  );
}

export default App;
