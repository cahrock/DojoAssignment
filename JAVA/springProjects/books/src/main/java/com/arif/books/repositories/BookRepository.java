package com.arif.books.repositories;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import com.arif.books.models.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {

}
