package com.customers.admuser.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.customers.admuser.model.JavaOneDocuments;
import com.customers.admuser.service.JavaOneService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class JavaOneController {
	@Autowired
	private JavaOneService service;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseStatus(HttpStatus.OK)
	@PostMapping("/documents/add")
	public String AddDocument(@RequestBody JavaOneDocuments documents) {
		return service.InsertDocument(documents);	
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/documents/findall")
	public List<JavaOneDocuments> ListAllDocuments(){
		
		return service.GetDocuments();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/documents/findbyid/{userId}")
	public Optional<JavaOneDocuments> GetDocumentByUserId(@PathVariable String userId){
		
		return service.getOneDocument(userId);
		
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseStatus(HttpStatus.OK)
	@DeleteMapping("/documents/deletebyid/{userId}")
	public String DeleteDocumentById(@PathVariable String userId) {
		return service.DeleteOneDocumentbyId(userId);
		
	}
}
