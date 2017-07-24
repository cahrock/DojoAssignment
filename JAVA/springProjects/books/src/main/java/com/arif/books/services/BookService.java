package com.arif.books.services;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;
import com.arif.books.models.Book;
import com.arif.books.repositories.BookRepository;

@Service
public class BookService {
	private BookRepository bookRepository;
	
	public BookService(BookRepository bookRepository){
        this.bookRepository = bookRepository;
    }
	
	DateFormat df = new SimpleDateFormat("MM/DD/YYYY hh:mm:ss");
	Date date = new Date();
	
    // initialize the books variable with values
    private List<Book> books = new ArrayList(Arrays.asList(
//            new Book("Harry Potter and the Sorcerer's Stone", "A boy wizard saving the world", "english", 309)
//            new Book("The Great Gatsby", "The story primarily concerns the young and mysterious millionaire Jay Gatsby", "english", 180),
//            new Book("Moby Dick", "The saga of Captain Ahab", "english", 544),
//            new Book("Don Quixote", "Life of a retired country gentleman", "english", 150),
//            new Book(1001,"The Odyssey", "Ancient Greek epic poem", "english", 475, "12/29/1970 00:00:00" , "12/29/1970 00:00:00")
            ));
    
    public List<Book> allBooks(){
        return (List<Book>) bookRepository.findAll();
    }
    
    public Book findBookById(Long id) {
        return bookRepository.findOne(id);
    }
    
//    public Book findBookByIndex(int index) {
//        if (index < books.size()){
//            return books.get(index);
//        }else{
//            return null;
//        }
//    }

    public void addBook(Book book){
        bookRepository.save(book);
    }
    public void updateBook(Book book) {
        bookRepository.save(book);
    }
//	public void updateBook(int id, Book book) {
//        if (id < books.size()){
//            books.set(id, book);
//        }
//    }

	public void destroyBook(Long id) {
        if (id >=0 && id < bookRepository.count()){
            bookRepository.delete(id);
        }
    }
}
