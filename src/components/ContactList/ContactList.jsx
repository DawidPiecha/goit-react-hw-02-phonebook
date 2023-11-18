import css from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => (
  <ul className={contacts.length ? css.contactList : css.emptyList}>
    {contacts.map(contact => (
      <li key={contact.id} className={css.contactList__item}>
        {contact.name}: {contact.number}
        <button
          type="button"
          className={css.deleteButton}
          onClick={() => deleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export { ContactList };
