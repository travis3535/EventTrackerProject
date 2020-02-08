package com.skilldistillery.eventtracker.services;

import java.util.List;
import java.util.Optional;

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

	@Override
	public FormulaOne addEntry(FormulaOne f1) {
		f1 = repo.saveAndFlush(f1);
		return f1;
	}

	@Override
	public boolean deleteEntry(Integer id) {
		boolean deleted = false;
		Optional<FormulaOne> f1 = repo.findById(id);
		if (f1 != null) {
			repo.deleteById(id);
			deleted = true;
		}
		return deleted;
	}

	@Override
	public FormulaOne updateEntry(FormulaOne f1, Integer id) {
		Optional<FormulaOne> optF1 = repo.findById(id);
		if (optF1.isPresent()) {
			f1.setId(id);
			repo.saveAndFlush(f1);
		}
		return f1;
	}

	@Override
	public FormulaOne findById(Integer id) {
		FormulaOne f1 = null;
		Optional<FormulaOne> findF1 = repo.findById(id);
		if (findF1.isPresent()) {
			f1 = findF1.get();
		}
		
		return f1;
	}

}
