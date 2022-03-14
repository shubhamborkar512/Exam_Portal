package com.exam.controllers;

import java.util.Set;

import javax.persistence.Entity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.models.exam.Category;
import com.exam.models.exam.Question;
import com.exam.models.exam.Quiz;
import com.exam.service.QuizServiceImpl;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {

		@Autowired
		private QuizServiceImpl impl;
		
		@PostMapping("/")
		public ResponseEntity<Quiz> add(@RequestBody Quiz quiz){
			try {
				Quiz quiz1=impl.add(quiz);
				return ResponseEntity.ok(quiz1);
			}
			catch(Exception e){
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		}
		
		@GetMapping("/{id}")
		public ResponseEntity<Quiz> get(@PathVariable Long id){
			try {
				Quiz temp=this.impl.get(id);
				return ResponseEntity.ok(temp);
			}
			catch(Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		}
		
		@PutMapping("/update")
		public ResponseEntity<Quiz> update(@RequestBody Quiz quiz){
			try {
				Quiz quiz1=this.impl.upadate(quiz);
				return ResponseEntity.ok(quiz1);
			}
			catch(Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		}
		
		@GetMapping("/category/{cId}")
		public ResponseEntity<Set<Quiz>> getbyCategory(@PathVariable Long cId){
			try {
				Category category=new Category();
				category.setCid(cId);
				Set<Quiz> set=this.impl.findbyCategory(category);
				return ResponseEntity.ok(set);
			}
			catch(Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		}
		
		@GetMapping("/")
		public ResponseEntity<Set<Quiz>> getAll(){
			try {
				Set<Quiz> set=this.impl.getAll();
				return ResponseEntity.ok(set);
			}
			catch(Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		}
		
		@DeleteMapping("/{id}")
		public ResponseEntity<?> delete(@PathVariable Long id){
			try {
				this.impl.delete(id);
				return  ResponseEntity.status(HttpStatus.OK).build();
			}
			catch(Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		}
}
