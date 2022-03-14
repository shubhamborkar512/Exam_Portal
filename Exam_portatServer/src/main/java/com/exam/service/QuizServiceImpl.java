package com.exam.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.exam.models.exam.Category;
import com.exam.models.exam.Question;
import com.exam.models.exam.Quiz;
import com.exam.repos.QuizRepository;

@Service
public class QuizServiceImpl {
	
	@Autowired
	private QuizRepository quizRepos;
	
	public Quiz add(Quiz quiz) {
		return quizRepos.save(quiz);
	}
	
	public Quiz upadate(Quiz quiz) {
		return quizRepos.save(quiz);
	}
	
	public Quiz get(Long id) {
		return quizRepos.findById(id).get();
	}
	
	public Set<Quiz> getAll(){
		return new HashSet<>(quizRepos.findAll());
	}
	
	public void delete(Long id) {
		quizRepos.deleteById(id);
	}
	
	public Set<Quiz> findbyCategory(Category category){
		return this.quizRepos.findByCategory(category);
	}
	
	
}
