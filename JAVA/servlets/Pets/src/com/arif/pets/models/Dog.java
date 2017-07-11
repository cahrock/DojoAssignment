package com.arif.pets.models;

public class Dog extends Animal {
	public Dog(){};
	
	public Dog(String name, String breed, double weight){
		this.setName(name);
		this.setBreed(breed);
		this.setWeight(weight);		
	}

	@Override
	public String showAffection() {
		if(this.getWeight() >= 30){
			return (this.getName() + " mmmm the weight is so heavy.");
		}else{
			return (this.getName() + " heeee so cute.");
		}
	}
	
	
}
