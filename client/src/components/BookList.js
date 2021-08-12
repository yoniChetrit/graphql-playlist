import { graphql } from "react-apollo";
import { useQuery, useMutation, gql } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Some Error Happen</div>;
  }

  return (
    <div>
      <ul id="book-list">
        {data.books?.map((book) => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default BookList;
