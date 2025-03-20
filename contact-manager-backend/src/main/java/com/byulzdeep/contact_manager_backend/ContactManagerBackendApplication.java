package com.byulzdeep.contact_manager_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.byulzdeep.contact_manager_backend.model")
public class ContactManagerBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ContactManagerBackendApplication.class, args);
	}

}
