package com.arif.license.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.arif.license.models.License;
import com.arif.license.repository.LicenseRepository;

@Service
public class LicenseService {
	private LicenseRepository licenseRepo;
	
	public LicenseService(LicenseRepository licenseRepo){
		this.licenseRepo = licenseRepo;
	}
	
	public void createLicense(License license) {
		licenseRepo.save(license);
	}
}
