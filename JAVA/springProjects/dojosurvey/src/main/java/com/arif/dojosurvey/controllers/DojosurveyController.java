package com.arif.dojosurvey.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class DojosurveyController {
	@RequestMapping("")
	public String index(){
		return "index.jsp";
	}
}
