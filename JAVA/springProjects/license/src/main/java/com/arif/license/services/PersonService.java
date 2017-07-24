package com.arif.license.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.arif.license.models.Person;
import com.arif.license.repository.PersonRepository;

@Service
public class PersonService {
	
	private PersonRepository personRepo;
	
	public PersonService(PersonRepository personRepoo){		
		this.personRepo = personRepo;
	}
	
	public List<Person> getAll(){
		return (List<Person>) personRepo.findAll();
	}
		
	public void createPerson(Person person){
		personRepo.save(person);
	}
}
