package com.exam.repos;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.models.exam.Category;
import com.exam.models.exam.Quiz;

public interface QuizRepository extends JpaRepository<Quiz,Long>{
	public Set<Quiz> findByCategory(Category category);
}
