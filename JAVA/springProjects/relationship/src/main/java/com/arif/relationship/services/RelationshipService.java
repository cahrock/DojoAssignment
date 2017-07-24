package com.arif.relationship.services;

import org.aspectj.asm.internal.Relationship;
import org.springframework.stereotype.Service;

import com.arif.relationship.repository.RelationshipRepository;

@Service
public class RelationshipService {
	RelationshipRepository relationshipRepo;
	
	public RelationshipService(RelationshipRepository relationshipRepo){
		this.relationshipRepo = relationshipRepo;
	}
	
	public void create(Relationship relationship){
		relationshipRepo.save(relationship);
	}
}
