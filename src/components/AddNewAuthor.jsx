export const AddNewAuthor = ({ onAdd }) => (
  <fieldset className="fieldset">
    <form onSubmit={onAdd}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" placeholder="Steve" />

      <label htmlFor="surname">Surname</label>
      <input id="surname" name="surname" placeholder="Harris" />

      <button>Add new author</button>
    </form>
  </fieldset>
);
