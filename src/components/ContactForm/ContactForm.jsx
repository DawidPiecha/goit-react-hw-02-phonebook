import css from './ContactForm.module.css';

const ContactForm = ({ name, number, onChange, addContact }) => {
  const handleSumbit = event => {
    event.preventDefault();
    addContact();
  };
  return (
    <div className={css.form}>
      <form className={css.form__form} onSubmit={handleSumbit}>
        <label className={css.form__label} htmlFor="name">
          Name
        </label>
        <input
          className={css.form__input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onChange}
          required
        />{' '}
        <label className={css.form__label} htmlFor="number">
          Number
        </label>
        <input
          className={css.form__input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={onChange}
          required
        />
        <button
          className={css.form__button}
          type="submit"
          disabled={!name || !number}
        >
          Add contact
        </button>
      </form>
    </div>
  );
};

export { ContactForm };
