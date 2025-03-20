import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactCard from "./ContactCard";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showNewContactForm, setShowNewContactForm] = useState(false);
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
    profilePictureUrl: "",
  });

  const fetchContacts = () => {
    setLoading(true);
    axios.get("http://localhost:8080/api/contacts")
      .then(response => {
        setContacts(response.data);
        setError(null);
      })
      .catch(error => {
        console.error("Error fetching contacts", error);
        setError("Under Maintenance.");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/contacts/${id}`)
      .then(() => setContacts(contacts.filter(contact => contact.id !== id)))
      .catch(error => console.error("Error deleting contact", error));
  };

  const handleEdit = (id, updatedContact) => {
    axios.put(`http://localhost:8080/api/contacts/${id}`, updatedContact)
      .then(response => {
        const updatedContacts = contacts.map(contact =>
          contact.id === id ? response.data : contact
        );
        setContacts(updatedContacts);
      })
      .catch(error => console.error("Error updating contact", error));
  };

  const handleAddNew = () => {
    if (!newContact.name.trim() || !newContact.email.trim()) return;
    
    axios.post("http://localhost:8080/api/contacts", newContact)
      .then(response => {
        setContacts([response.data, ...contacts]); // Add new contact at the top
        setNewContact({ name: "", email: "", phone: "", profilePictureUrl: "" });
        setShowNewContactForm(false);
      })
      .catch(error => console.error("Error adding contact", error));
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-page">
        <p>Under Maintenance</p>
        <button onClick={fetchContacts}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="contact-list">
      {/* Button to show add contact form */}
      {!showNewContactForm && (
        <button onClick={() => setShowNewContactForm(true)}>Add Contact</button>
      )}

      {/* New Contact Input Form */}
      {showNewContactForm && (
        <div className="contact-card">
          <div className="contact-info">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newContact.name}
              onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newContact.email}
              onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={newContact.phone}
              onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
            />
            <input
              type="text"
              name="profilePictureUrl"
              placeholder="Profile Picture URL"
              value={newContact.profilePictureUrl}
              onChange={(e) => setNewContact({ ...newContact, profilePictureUrl: e.target.value })}
            />
            <button onClick={handleAddNew}>Save</button>
            <button className="delete-btn" onClick={() => setShowNewContactForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Existing Contacts */}
      {contacts.map(contact => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default App;
