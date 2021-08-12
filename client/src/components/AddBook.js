import { graphql, compose } from "react-apollo";
import { getAuthorsQuery, addBookMutation } from "../queries/queries";
import React, { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

function AddBook(props) {
  const { loading, error, data } = useQuery(getAuthorsQuery);

  const [name, setName] = useState();
  const [genere, setGenere] = useState();
  const [authorId, setAuthorId] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(genere);
    console.log(authorId);
    // ???
  };

  //   const { loading, data, error } = props;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Some Error Happen</div>;
  }

  return (
    <form
      id="add-book"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          name="genere"
          onChange={(e) => setGenere(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select name="authorId" onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {data.authors?.map((author) => {
            return (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            );
          })}
        </select>
      </div>
      <input type="submit" className="submitButton"></input>
    </form>
  );
}

export default AddBook;
