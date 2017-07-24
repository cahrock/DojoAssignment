package com.arif.dojoandninja.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.arif.dojoandninja.models.Dojo;
import com.arif.dojoandninja.repository.DojoRepository;

@Service
public class DojoService {
	private DojoRepository dojoRepo;
	
	public DojoService(DojoRepository dojoRepo){
		this.dojoRepo = dojoRepo;
	}
	
	public void createDojo(Dojo dojo){
		dojoRepo.save(dojo);
	}
	
	public List<Dojo> getAll(){
		return (List<Dojo>) dojoRepo.findAll();
	}
	
	public Dojo findById(Long id){
		return dojoRepo.findOne(id);
	}

	public void getDojoID() {
		// TODO Auto-generated method stub
		
	}
}
