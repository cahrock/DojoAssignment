package com.arif.manytomany.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.arif.manytomany.models.Category;
import com.arif.manytomany.models.Product;

@Controller
public class HomeController {
	
	@RequestMapping("")
	public String index(){
		return "index";
	}
	
	@RequestMapping("/products/new")
	public String productForm(){
		return "new-product";
	}
	@PostMapping("/products/new")
	public String productCreate(@ModelAttribute("product") Product product, Model model, BindingResult result){
		if(result.hasErrors()){
			return "/";
		}else{
			return "index";
		}
	}
	
	@RequestMapping("/categories/new")
	public String categoryForm(Model model){
		model.addAttribute("category", new Category());
		return "new-category";
	}
	@PostMapping("/categories/new")
	public String categoryCreate(@ModelAttribute("category") Category category, Model model, BindingResult result){
		if(result.hasErrors()){
			return "/";
		}else{
			
			return "new-category";
		}
	}
}
