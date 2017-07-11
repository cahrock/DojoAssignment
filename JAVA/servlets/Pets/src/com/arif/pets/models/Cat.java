package com.arif.pets.models;

public class Cat extends Animal {
	public Cat(){};
	
	public Cat(String name, String breed, Double weight){
		this.setName(name);
		this.setBreed(breed);
		this.setWeight(weight);
	}

	@Override
	public String showAffection() {
		return (this.getName() + " mmmm meooouuuu.");
	}
	
	
}
