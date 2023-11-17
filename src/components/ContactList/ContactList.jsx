import css from './ContactList.module.css';

const ContactList = ({ contacts }) => (
  <ul className={contacts.length ? css.contactList : css.emptyList}>
    {contacts.map(contact => (
      <li key={contact.id} className={css.contactList__item}>
        <p>
          {' '}
          {contact.name} {contact.number}
        </p>
      </li>
    ))}
  </ul>
);

export { ContactList };
