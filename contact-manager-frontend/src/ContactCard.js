import './App.css';
import React, { useState } from "react";

const ContactCard = ({ contact, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [editedContact, setEditedContact] = useState({
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    profilePictureUrl: contact.profilePictureUrl,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onEdit(contact.id, editedContact);
    setIsEditing(false);
  };

  return (
    <div className="contact-card">
      <img src={contact.profilePictureUrl} alt={contact.name} className="profile-pic" />
      <div className="contact-info">
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={editedContact.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={editedContact.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={editedContact.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="profilePictureUrl"
              placeholder="Profile Picture URL"
              value={editedContact.profilePictureUrl}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <h2>{contact.name}</h2>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
          </>
        )}
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button className="delete-btn" onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete-btn" onClick={() => onDelete(contact.id)}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
