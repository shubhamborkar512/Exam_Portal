package com.exam.service;

import java.util.LinkedHashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.exam.models.exam.Category;
import com.exam.repos.CategoryRepository;

@Service
public class CategoryServiceImpl {
	
	@Autowired
	private CategoryRepository categoryRepos;
	
	public Category add(Category category) throws Exception {
		Category category2=categoryRepos.findByTitle(category.getTitle());
		if(category2==null) {
			return categoryRepos.save(category);
		}
		throw new Exception("Category with this title already exist");
	}
	
	public Category update(Category category) throws Exception {
		Category category2=categoryRepos.findByTitle(category.getTitle());
		if(category2!=null && category2.getTitle().equals(category2.getTitle()) && category2.getCid()!=category.getCid()) {
			throw new Exception("Category with this title already exist");
		}
		return categoryRepos.save(category);
	}
	
	public Set<Category> getAll(){
		Set<Category> set=new LinkedHashSet<>(categoryRepos.findAll());
		return set;
	}
	
	public Category get(Long id) {
		return categoryRepos.findById(id).get();
	}
	
	public void delete(Long id) {
		categoryRepos.deleteById(id);
	}
	
}
