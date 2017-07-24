package com.arif.grouplanguage.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.arif.grouplanguage.models.Language;
import com.arif.grouplanguage.services.LanguageService;

@Controller
@RequestMapping("/language")
public class LanguageController {
	private LanguageService languageService;
	
	public LanguageController(LanguageService languageService){
		this.languageService = languageService;
	}
	
	@RequestMapping("")
	public String language(Model model){
		List<Language> languages = languageService.allLanguages();
		model.addAttribute("language", new Language());
		model.addAttribute("languages", languageService.allLanguages());
		return "language";
	}
	
	@PostMapping("")
	public String createLanguage(@Valid @ModelAttribute("language") Language language, BindingResult result){
		if(result.hasErrors()){
			return "language";
		}else{
			//Add language
			languageService.create(language);
			return "redirect:/language";
		}		
	}
		
	@RequestMapping("/edit/{id}")
	public String editLanguage(@PathVariable("id") int id, Model model){
		Language language = languageService.getByIndex(id);
		if(language != null){
//			System.out.println(language);
			model.addAttribute("language", language);
			return "editLanguage";
		}else{
            return "redirect:/language";
        }
		
	}
	@PostMapping("/edit/{id}")
	public String updateLanguage(@PathVariable("id") int id, @Valid @ModelAttribute("language") Language language, BindingResult result){
		if(result.hasErrors()){
			return "redirect:/language/edit/{id}";
		}else{
			languageService.update(id, language);
			return "redirect:/language";
		}
	}
	@RequestMapping(value="/delete/{id}")
	public String deleteLanguage(@PathVariable("id") int id){
		languageService.delete(id);
		return "redirect:/language";
	}
	@RequestMapping("/detail/{id}")
	public String detailLanguage(@PathVariable("id") int id, Model model){
		Language language = languageService.getByIndex(id);
		model.addAttribute("language", language);
		return "detailLanguage";
	}
}
