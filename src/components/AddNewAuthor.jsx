export const AddNewAuthor = ({ onAdd }) => (
  <fieldset>
    <form onSubmit={onAdd}>
      <label htmlFor="name">Author's Name</label>
      <input id="name" name="name" />

      <label htmlFor="surname">Author's Surname</label>
      <input id="surname" name="surname" />

      <button>Add new author</button>
    </form>
  </fieldset>
);
