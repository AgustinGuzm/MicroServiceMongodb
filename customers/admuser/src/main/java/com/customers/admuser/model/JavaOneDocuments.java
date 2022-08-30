package com.customers.admuser.model;

import java.util.Date;

import javax.validation.constraints.Past;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Data;

@Data
@Document(collection = "JavaOne")
public class JavaOneDocuments {
	
	@Id
	@Field("_id")
	@Size(min=2 , message="User Id should have atleast 2 characters")
	private String userid;
	@Size(min=2 , message="Name should have atleast 2 characters")
	private String username;
	@Size(min=2 , message="Last should have atleast 2 characters")
	private String lastname;
	
	@Past
	private Date BirthDate;
	
	private String emailadd;
	private String ccname;
	private String ccnumber;
	private String phnumber;

}
