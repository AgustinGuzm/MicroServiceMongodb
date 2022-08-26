package com.customers.admuser.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.customers.admuser.model.JavaOneDocuments;

@Repository
public interface JavaOneRepository extends MongoRepository<JavaOneDocuments, String>{

}
