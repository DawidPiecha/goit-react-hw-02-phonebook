import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={value}
        placeholder="Search contacts..."
        onChange={onChange}
      />
    </label>
  );
};

export { Filter };
