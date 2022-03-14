package com.exam.controllers;

import java.util.Set;

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

import com.exam.models.exam.Question;
import com.exam.models.exam.Quiz;
import com.exam.service.QuestionServiceImpl;
import com.exam.service.QuizServiceImpl;


@RestController
@RequestMapping("/question")
@CrossOrigin("*")
public class QuestionController {
	
	@Autowired
	private QuizServiceImpl quizimple;
	
	@Autowired
	private QuestionServiceImpl impl;
	@PostMapping("/")
	public ResponseEntity<Question> add(@RequestBody Question question){
		try {
			System.out.print(question);
			Question question1=impl.add(question);
			return ResponseEntity.ok(question1);
		}
		catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@PutMapping("/")
	public ResponseEntity<Question> update(@RequestBody Question question){
		try {
			Question question1=impl.update(question);
			return ResponseEntity.ok(question1);
		}
		catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable Long id){
		try {
			impl.delete(id);
			return ResponseEntity.ok().build();
		}
		catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Question> get(@PathVariable Long id){
		try {
			Question question=this.impl.get(id);
			if(question==null) {
				throw new Exception();
			}
			return ResponseEntity.ok(question);
		}
		catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	
	@GetMapping("/")
	public ResponseEntity<Set<Question>> getAll(){
		try {
			Set<Question> set=this.impl.getAll();
			return ResponseEntity.ok(set);
		}
		catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	//getting all questions Questions for given quiz
	
	@GetMapping("/quiz/{quizId}")
	public ResponseEntity<Set<Question>> getAllQue(@PathVariable Long quizId){
		try {
			
			Quiz quiz=new Quiz();
			quiz.setQuizId(quizId);
			Set<Question>set=this.impl.getAllByQuiz(quiz);
			return ResponseEntity.ok(set);
		}
		catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
}
