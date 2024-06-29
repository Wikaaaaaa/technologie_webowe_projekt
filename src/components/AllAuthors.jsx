export const AllAuthors = ({ authors = [] }) => (
  <table>
    <thead>
      <tr>
        <th>Author's name</th>
        <th>Author's surname</th>
      </tr>
    </thead>
    <tbody>
      {authors.map((author) => (
        <tr key={author.id}>
          <td>{author.name}</td>
          <td>{author.surname}</td>
          <td>
            <button> Delete author</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);