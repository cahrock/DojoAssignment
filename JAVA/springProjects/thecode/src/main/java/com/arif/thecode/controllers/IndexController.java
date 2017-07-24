package com.arif.thecode.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/")
public class IndexController {
	@RequestMapping("")
    public String index() {
        
        return "index";
    }
	
	@RequestMapping("/process")
    public String process(@RequestParam(value="q") String q, RedirectAttributes attr) {
        String codec = "Bushido";
        if(q.equals(codec)){
        	return "code";
        }else{
        	attr.addFlashAttribute("errors", "A code errror!");
        	return "redirect:/";
        }
        
    }
    
    @RequestMapping("/errors")
    public String errors(RedirectAttributes redirectAttributes){
        redirectAttributes.addFlashAttribute("errors", "A test errror!");
        return "redirect:/";
    }
}
