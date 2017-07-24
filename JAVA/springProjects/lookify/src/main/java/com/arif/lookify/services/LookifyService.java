package com.arif.lookify.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.arif.lookify.models.Lookify;
import com.arif.lookify.repositories.LookifyRepository;

@Service
public class LookifyService {
//		
//	private ArrayList<Lookify> songs = new ArrayList();
	
	private LookifyRepository lookifyRepository;
	
	public LookifyService(LookifyRepository lookifyRepository){
		this.lookifyRepository = lookifyRepository;
	}
	
	public ArrayList<Lookify> all(){
        return (ArrayList<Lookify>) lookifyRepository.findAll();
    }
	
	public Lookify findSongById(long id){
		return lookifyRepository.findOne(id);
	}
	
	public void create(Lookify lookify){
		lookifyRepository.save(lookify);
	}
	
	public void update(Lookify lookify){
		lookifyRepository.save(lookify);
	}
	
	public void destroy(Long id) {
        if (id >= 0 && id < lookifyRepository.count()){
        	lookifyRepository.delete(id);
        }
    }

	public Lookify getByIndex(long id) {
		return lookifyRepository.findOne(id);
	}
	
	public ArrayList<Lookify> searchAll(String search){
		return (ArrayList<Lookify>) lookifyRepository.findByArtistContaining(search);
	}
	
	public List<Lookify> topTen(){
		return (List<Lookify>) lookifyRepository.findTop10ByOrderByRatingDesc();
	}
}
