package com.arif.logandreg.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.arif.logandreg.models.User;
import com.arif.logandreg.services.UserService;

@Controller
public class HomeController {
	private UserService userService;
    
    public HomeController(UserService userService) {
        this.userService = userService;
    }
    
    @RequestMapping("")
	public String home(@Valid @ModelAttribute("user") User user){
		return "index";
	}
	
	@RequestMapping("/registration")
    public String registerForm(@Valid @ModelAttribute("user") User user) {
        return "registerPage";
    }
    
    @PostMapping("/registration")
    public String registration(@Valid @ModelAttribute("user") User user, BindingResult result, Model model, HttpSession session) {
        if (result.hasErrors()) {
            return "/";
        }
        userService.saveUser(user);
        return "redirect:/dashboard";
    }
    
//    @RequestMapping("/login")
//    public String login() {
//        return "/";
//    }
	
}
