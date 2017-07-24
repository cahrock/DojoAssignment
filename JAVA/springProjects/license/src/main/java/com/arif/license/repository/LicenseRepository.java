package com.arif.license.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.arif.license.models.License;
import com.arif.license.models.Person;

@Repository
public interface LicenseRepository extends CrudRepository<License, Long> {

	void save(Person person);
//	public Iterable<License.> findAll();
}
