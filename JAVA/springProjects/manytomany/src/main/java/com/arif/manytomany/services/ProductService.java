package com.arif.manytomany.services;

import java.util.List;

import com.arif.manytomany.models.Product;
import com.arif.manytomany.repository.ProductRepository;

public class ProductService {
	private ProductRepository productRepo;
	
	public ProductService(ProductRepository productRepo){
		this.productRepo = productRepo;
	}
	
	public List<Product> getAll(){
		return (List<Product>) productRepo.findAll();
	}
	
	public Product getById(Long id){
		return productRepo.findOne(id);
	}
}
