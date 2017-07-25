package com.arif.manytomany.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.arif.manytomany.models.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long>{

}
