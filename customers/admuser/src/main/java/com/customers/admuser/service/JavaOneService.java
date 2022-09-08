package com.customers.admuser.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.customers.admuser.model.JavaOneDocuments;
import com.customers.admuser.repository.JavaOneRepository;

@Service
public class JavaOneService {

	@Autowired
	private JavaOneRepository repository;

	
	//Adding one document in JavaOne Collection
	public String InsertDocument(JavaOneDocuments jone) {
	 Date date = new Date(); 
		
		jone.setBirthDate(date);
		repository.save(jone);
		//repository.insert(jone);
		return "Document added with Id " + jone.getUserid() ;
	}
	//Getting all Documents from JavaOne collection
	public List<JavaOneDocuments> GetDocuments(){
		return repository.findAll();
	}
	
	//Getting one document by Id from JavaOne collection
	public Optional<JavaOneDocuments> getOneDocument(String userId){
		return repository.findById(userId);
	}
	
	//Deleting a document by Id from JavaOnecollection
	public String DeleteOneDocumentbyId(String userId) {
		repository.deleteById(userId);
		return "Document deleted with Id " +userId;
	}
	
}
