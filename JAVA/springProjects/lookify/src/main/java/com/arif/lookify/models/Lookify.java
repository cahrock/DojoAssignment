package com.arif.lookify.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="lookifies")
public class Lookify {
	@Id
	@GeneratedValue
	private Long id;
	
	@Column
	@Size(min= 5, message="Min 5 characters")
    private String name;
    
	@Column
	@Size(min=5, message="Min 5 characters")
    private String artist;
	
	@Column
	@Min(1)
	@Max(10)
	private double rating;
	
	@Column
    @DateTimeFormat(pattern = "MM/dd/yyyy HH:mm:ss")
    private Date created_at;
	
    @Column
    @DateTimeFormat(pattern = "MM/dd/yyyy HH:mm:ss")
    private Date updated_at;
    
    @PrePersist
    protected void onCreate(){
            this.created_at = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
            this.updated_at = new Date();
    }
	
	public Lookify(){}
	
	public Lookify(Long id, String name, String artist, double rating, Date created_at, Date updated_at){
		this.id = id;
		this.name = name;
		this.artist = artist;
		this.rating = rating;
		this.created_at = created_at;
        this.updated_at = updated_at;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getArtist() {
		return artist;
	}

	public void setArtist(String artist) {
		this.artist = artist;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public Date getCreated_at() {
		return created_at;
	}

	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}

	public Date getUpdated_at() {
		return updated_at;
	}

	public void setUpdated_at(Date updated_at) {
		this.updated_at = updated_at;
	}
}
