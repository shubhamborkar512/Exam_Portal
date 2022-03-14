package com.exam.service;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.models.exam.Question;
import com.exam.models.exam.Quiz;
import com.exam.repos.QuestionRepository;

@Service
public class QuestionServiceImpl {

	@Autowired
	private QuestionRepository questionRepos;
	
	public Question add(Question question) {
		return questionRepos.save(question);
	}
	
	public Question update(Question question) {
		return questionRepos.save(question);
	}
	
	public Question get(Long id) {
		return questionRepos.findById(id).get();
	}
	
	public Set<Question> getAll(){
		return new HashSet<>(questionRepos.findAll());
	}
	
	//getting questions on the basis of quiz
	
	public Set<Question> getAllByQuiz(Quiz quiz){
		return this.questionRepos.findByQuiz(quiz);
	}
	
	public void delete(Long id) {
		
		this.questionRepos.deleteById(id);
	}
}
