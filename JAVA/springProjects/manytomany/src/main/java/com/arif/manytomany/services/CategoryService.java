package com.arif.manytomany.services;

import java.util.List;

import com.arif.manytomany.models.Category;
import com.arif.manytomany.repository.CategoryRepository;

public class CategoryService {
	private CategoryRepository categoryRepo;
	
	public CategoryService(CategoryRepository categoryRepo){
		this.categoryRepo = categoryRepo;
	}
	
	public List<Category> getAll(){
		return (List<Category>) categoryRepo.findAll();
	}
	
	public Category getById(Long id){
		return categoryRepo.findOne(id);
	}
}
