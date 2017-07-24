package com.arif.license.controllers;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.arif.license.models.License;
import com.arif.license.models.Person;
import com.arif.license.services.LicenseService;
import com.arif.license.services.PersonService;

@Controller
public class LicenseController {
	private LicenseService licenseService;
	private PersonService personService;
	
	public LicenseController(LicenseService licenseService, PersonService personService){
		this.licenseService = licenseService;
		this.personService = personService;
	}
	@RequestMapping("")
	public String index(){
		return "index";
	}
	
//	@InitBinder
//    public void initBinder(WebDataBinder binder) {
//        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
//
//        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
//    }
	
	@PostMapping("/persons/new")
	public String createPerson(@Valid @ModelAttribute("person") Person person, BindingResult result){
		if(result.hasErrors()){
			return "redirect:/persons/new";
		}else{
			personService.createPerson(person);
			return "redirect:/";
		}		
	}
	
	@RequestMapping("/persons/new")
	public String showPerson(Model model){
		model.addAttribute("person", new Person());
		return "new-person";
	}
	
	@RequestMapping("/license/new")
	public String licenseForm(){
		
		return "new-license";
	}
	
//	@RequestMapping("/license/new")
//	public String licenseForm(Model model){
//		List<Person> person = personService.getAll();
//		model.addAttribute("person", personService.getAll());
//		model.addAttribute("license", person);
//		return "new-license";
//	}
//	@PostMapping("/license/new")
//	public String createLicense(@Valid @ModelAttribute("license") License license, BindingResult result){
//		if(result.hasErrors()){
//			return "redirect:/license/new";
//		}else{
//			licenseService.createLicense(license);
//			return "redirect:/detail";
//		}		
//	}
	
	
}
