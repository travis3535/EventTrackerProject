package com.skilldistillery.eventtracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entites.FormulaOne;
import com.skilldistillery.eventtracker.repositories.FormulaOneRepository;

@Service
public class FormulaOneServiceImpl implements FormulaOneService {
	
	
	
	@Autowired
	FormulaOneRepository repo;

	@Override
	public List<FormulaOne> listAll() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

}
