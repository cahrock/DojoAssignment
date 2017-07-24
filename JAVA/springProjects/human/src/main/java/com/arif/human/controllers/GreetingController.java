package com.arif.human.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class GreetingController {
    @RequestMapping("")
    public String index(){
    	return "index.jsp";
    }
//    public String index(@RequestParam(value="q", required=false, defaultValue="Human")String searchQuery){
//        return "Hello " + searchQuery + " Welcome to Spring Boot.";
//        // run = http://localhost:8080/?q="Java!"
//        // required=false => http://localhost:8080/?q= => could run without query
//        // defaultValue="Yes we can" if q is empty
//    }
    
    @RequestMapping("/name")
    public String name(@RequestParam(value="name") String searchQuery){
    	return "Hello " + searchQuery;
    }
    @RequestMapping("/hello")
    public String hello(){
        return "Hello world! What route did you use to access me?";
    }
    @RequestMapping("/goodbye")
    public String world(){
        return "Goodbye world!";
    }
}
