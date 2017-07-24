package com.arif.grouplanguage.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.arif.grouplanguage.models.Language;

@Service
public class LanguageService {
	 private ArrayList<Language> languages = new ArrayList(Arrays.asList(
	            new Language("Java", "Jason Bourne", 1.8),
	            new Language("Python", "Guido Van Rossum", 3.6),
	            new Language("Javascript", "Brenda", 1.9)
	            ));
//	private ArrayList<Language> languages;
	
	public ArrayList<Language> allLanguages(){
		return languages;
	}
	
	public Language getByIndex(int id){
		if(id >= 0 && id < languages.size()){
			return languages.get(id);
		}else {
			return null;
		}
	}
	public void create(Language language){
		languages.add(language);
	}
	public void delete(int id){
		if(id >= 0 && id < languages.size()){
			languages.remove(id);
		}		
	}
	
	public void update(int id, Language language){
		if(id >= 0 && id < languages.size()){
			languages.set(id, language);
		}
	}
}
