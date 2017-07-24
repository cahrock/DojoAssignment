package com.arif.relationship.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RelationshipController {
	
	@RequestMapping("")
	public String index(){
		return "index";
	}
	
	@RequestMapping("/persons/new")
	public String personNew(){
		return "person-new";
	}
	
	@RequestMapping("/license/new")
	public String licenseNew(){
		return "license-new";
	}
}
