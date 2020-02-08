package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entites.FormulaOne;



public interface FormulaOneService {

	List<FormulaOne> listAll();
	
	FormulaOne addEntry(FormulaOne f1);
	boolean deleteEntry(Integer id);
	FormulaOne updateEntry(FormulaOne f1, Integer id);
	
	
}
