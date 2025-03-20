package com.byulzdeep.contact_manager_backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.byulzdeep.contact_manager_backend.model.Contact;
import com.byulzdeep.contact_manager_backend.repository.ContactRepository;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = "http://localhost:3000") // Allow React frontend
public class ContactController {

    private final ContactRepository contactRepository;
    
    public ContactController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    // Get all contacts
    @GetMapping
    public ResponseEntity<List<Contact>> getAllContacts() {
        if (contactRepository.count() == 0) {
            insertSampleContacts();
        }
        return ResponseEntity.ok(contactRepository.findAll());
    }

    private void insertSampleContacts() {
        List<Contact> sampleContacts = List.of(
            new Contact(null, "john.doe@example.com", "John Doe", "123-456-7890", "https://randomuser.me/api/portraits/men/1.jpg"),
            new Contact(null, "jane.smith@example.com", "Jane Smith", "987-654-3210", "https://randomuser.me/api/portraits/women/1.jpg"),
            new Contact(null, "michael.lee@example.com", "Michael Lee", "555-123-4567", "https://randomuser.me/api/portraits/men/2.jpg"),
            new Contact(null, "emily.watson@example.com", "Emily Watson", "444-987-6543", "https://randomuser.me/api/portraits/women/2.jpg"),
            new Contact(null, "david.brown@example.com", "David Brown", "333-222-1111", "https://randomuser.me/api/portraits/men/3.jpg")            
        );   
        sampleContacts.forEach((contact) -> contactRepository.save(contact));
    }

    // Add a new contact
    @PostMapping
    public ResponseEntity<Contact> createContact(@RequestBody Contact contact) {
        Contact savedContact = contactRepository.save(contact);
        return ResponseEntity.status(201).body(savedContact);
    }

    // Update contact
    @PutMapping("/{id}")
    public ResponseEntity<Contact> updateContact(@PathVariable Long id, @RequestBody Contact contactDetails) {
        Optional<Contact> optionalContact = contactRepository.findById(id);
        if (optionalContact.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Contact contact = optionalContact.get();
        contact.setName(contactDetails.getName());
        contact.setEmail(contactDetails.getEmail());
        contact.setPhone(contactDetails.getPhone());
        contact.setProfilePictureUrl(contactDetails.getProfilePictureUrl());

        contactRepository.save(contact);
        return ResponseEntity.ok(contact);
    }

    // Delete contact
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteContact(@PathVariable Long id) {
        if (!contactRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        contactRepository.deleteById(id);
        return ResponseEntity.ok("Contact deleted successfully.");
    }
    
}
