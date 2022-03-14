 package com.exam.controllers;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.models.Role;
import com.exam.models.User;
import com.exam.models.UserRole;
import com.exam.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
	@Autowired
	private UserService userservice;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
//	create user
	@PostMapping("/")
	public ResponseEntity<User> createUser(@RequestBody User user){
		try {
			
			//encoding password with bCryptpasswordencoder
			user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
			
			user.setProfile("default.png");
			
			Role role=new Role();
			role.setRoleId(2L);
			role.setRoleName("normal");
			UserRole userrole=new UserRole();
			userrole.setRole(role);
			userrole.setUser(user);
			
			Set<UserRole>userroles=new HashSet<>();
			userroles.add(userrole);
			User local=userservice.createUser(user,userroles);
			return ResponseEntity.ok(local);
		}
		catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
//	update user
	@PutMapping("/{authority}")
	public ResponseEntity<User> updateUser(@PathVariable String authority,@RequestBody User user){
		
		try {
			User local=this.userservice.updateUser(user);
			return ResponseEntity.ok(local);
		}
		catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).build();
		}
	}
	
	//getting user
	@GetMapping("/{username}")
	public ResponseEntity<User> getUser(@PathVariable String username){
		try {
			User local=this.userservice.getUser(username);
			return ResponseEntity.ok(local);
		}
		catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	//delete user
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable Long id){
		try {
			userservice.deleteUser(id);
			return ResponseEntity.status(HttpStatus.ACCEPTED).build();
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
}
