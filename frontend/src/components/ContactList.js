
import React from 'react';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <h2 className="text-primary">Your Contacts</h2>
      {contacts.map(contact => (
        <div key={contact._id} className="card bg-light">
          <h3 className="text-dark text-left">
            {contact.name}{' '}
            <span
              style={{ float: 'right' }}
              className={'badge ' + (contact.type === 'professional' ? 'badge-success' : 'badge-primary')}
            >
              {contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}
            </span>
          </h3>
          <ul className="list">
            {contact.email && (
              <li>
                <i className="fas fa-envelope-open"></i> {contact.email}
              </li>
            )}
            {contact.phone && (
              <li>
                <i className="fas fa-phone"></i> {contact.phone}
              </li>
            )}
          </ul>
          <button className="btn btn-dark btn-sm" onClick={() => deleteContact(contact._id)}>Edit</button>
          <button className="btn btn-danger btn-sm" onClick={() => deleteContact(contact._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
