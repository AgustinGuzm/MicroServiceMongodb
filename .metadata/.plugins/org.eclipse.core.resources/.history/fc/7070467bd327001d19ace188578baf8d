package com.customers.admuser.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.customers.admuser.model.JavaOneDocuments;
import com.customers.admuser.service.JavaOneService;

@Controller
public class JavaOneController {
	@Autowired
	private JavaOneService service;
	
	@PostMapping("/documents/add")
	public String AddDocument(@RequestBody JavaOneDocuments documents) {
		int x=0;
		x+=1;
		return service.InsertDocument(documents);	
		
	}
	
	@GetMapping("/documents/findall")
	public List<JavaOneDocuments> ListAllDocuments(){
		return service.GetDocuments();
	}
	
	@GetMapping("/documents/findbyid/{userId}")
	public Optional<JavaOneDocuments> GetDocumentByUserId(@PathVariable String userId){
		
		return service.getOneDocument(userId);
		
	}
	
	@DeleteMapping("/documents/deletebyid/{userId}")
	public String DeleteDocumentById(@PathVariable String userId) {
		return service.DeleteOneDocumentbyId(userId);
		
	}
}
