package com.arif.dojoandninja.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.arif.dojoandninja.models.Ninja;

@Repository
public interface NinjaRepository extends CrudRepository<Ninja, Long> {
//	Long countByDojo_id();
//	public List<Ninja> findAllOrderByDojoId();
}
