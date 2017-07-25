package com.arif.lookify.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.arif.lookify.models.Lookify;
import com.arif.lookify.services.LookifyService;

@Controller
public class LookifyController {
	private LookifyService lookifyService;
	
	public LookifyController(LookifyService lookifyService){
		this.lookifyService = lookifyService;
	}
	
	@RequestMapping("")
	public String index(){
		return "index";
	}
	
	@RequestMapping("/dashboard")
	public String dashboard(Model model){
//		List<Lookify> songs = lookifyService.all();
		model.addAttribute("songs", lookifyService.all());
		return "dashboard";
	}
		
	@RequestMapping("/songs")
	public String createForm(Model model){
		model.addAttribute("song", new Lookify());
		return "new";
	}
	
	@PostMapping("/songs/new")
	public String createSong(@Valid @ModelAttribute("song") Lookify lookify, BindingResult result){
		
		if(result.hasErrors()){
			return "redirect:/dashboard";
		}else{
			lookifyService.create(lookify);
			return "redirect:/dashboard";
		}		
	}
	
	@RequestMapping("/search")
	public String search(){
		return "search";
	}
	
	@RequestMapping("/songs/{id}")
	public String detailSong(@PathVariable("id") long id, Model model){
		Lookify song = lookifyService.getByIndex(id);
		model.addAttribute("song", song);
		return "songs";
	}
	
	@RequestMapping(value="/songs/delete/{id}")
	public String deleteSong(@PathVariable("id") Long id){
		lookifyService.destroy(id);
		return "redirect:/dashboard";
	}
	
	@PostMapping("/search")
	public String search(@RequestParam(value="artist") String search, Model model){
		model.addAttribute("songs",	lookifyService.searchAll(search));
		return "search";
	}
	
	@RequestMapping("/topten")
	public String topTenList(Model model){
		model.addAttribute("songs", lookifyService.topTen());
		return "topten";
	}
	
	
//	@RequestMapping("/songs/{id}")
//	public String songs(@PathVariable("id") long id, Model model){		
//		model.addAttribute("song", lookifyService.findSongById(id));
//		return "songs";
//	}
}
