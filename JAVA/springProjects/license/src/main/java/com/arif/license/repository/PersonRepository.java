package com.arif.license.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.arif.license.models.Person;

@Repository
public interface PersonRepository extends CrudRepository<Person, Long> {

}
