package com.byulzdeep.contact_manager_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.byulzdeep.contact_manager_backend.model.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
}
