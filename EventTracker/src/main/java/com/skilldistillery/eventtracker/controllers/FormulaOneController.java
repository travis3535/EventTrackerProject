package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@PostMapping("results")
	public FormulaOne addEntry(@RequestBody FormulaOne f1, HttpServletRequest req, HttpServletResponse resp) {
		f1 = svc.addEntry(f1);
		resp.setStatus(201);
		StringBuffer url = req.getRequestURL();
		url.append("/").append(f1.getId());
		String location = url.toString();
		resp.setHeader("Location", location);
		
		
		return f1;
		
	}
	@DeleteMapping("results/{id}")
	public void deleteEntry(@PathVariable("id") Integer id, HttpServletResponse resp) {
		try {
			if (svc.deleteEntry(id)) {
				resp.setStatus(204);	
			} else {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
	}
	
	@PutMapping("results/{id}")
	public FormulaOne updateEntry(@RequestBody FormulaOne f1, @PathVariable("id") Integer id) {
		return svc.updateEntry(f1, id);
		
	}
	
	@GetMapping("results/{id}")
	public FormulaOne EntryById(@PathVariable("id") Integer id, HttpServletResponse resp) {
		FormulaOne f1 = svc.findById(id);
		if (f1 == null) {
			resp.setStatus(204);
		}
		
		return svc.findById(id);
	}

}
