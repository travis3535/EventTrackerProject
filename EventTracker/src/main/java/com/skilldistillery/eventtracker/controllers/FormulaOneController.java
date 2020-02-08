package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entites.FormulaOne;
import com.skilldistillery.eventtracker.services.FormulaOneService;

@RestController
@RequestMapping("api")
public class FormulaOneController {
	
	
	@Autowired
	private FormulaOneService svc;
	
	
	@RequestMapping(path = "ping", method = RequestMethod.GET)
	public String ping() {
	  return "pong";
	}
	
	@GetMapping("results")
	public List<FormulaOne> listAllResults() {
		return svc.listAll();
	}

}
