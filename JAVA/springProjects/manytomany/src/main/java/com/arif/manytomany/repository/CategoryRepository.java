package com.arif.manytomany.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.arif.manytomany.models.Category;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long>{

}
