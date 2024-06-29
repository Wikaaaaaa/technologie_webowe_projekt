export const AllAuthors = ({ authors = [], onDelete }) => (
  <table className="author-table">
    <thead>
      <tr>
        <th>Author's name</th>
        <th>Author's surname</th>
        <th>Available Actions</th>
      </tr>
    </thead>
    <tbody>
      {authors.map((author) => (
        <tr key={author.id}>
          <td>{author.name}</td>
          <td>{author.surname}</td>
          <td>
            <button onClick={() => onDelete(author.id)}> Delete author</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
