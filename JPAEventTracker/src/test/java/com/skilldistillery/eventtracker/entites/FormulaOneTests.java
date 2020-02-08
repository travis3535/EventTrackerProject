package com.skilldistillery.eventtracker.entites;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class FormulaOneTests {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private FormulaOne f1;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("EventPU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		f1 = em.find(FormulaOne.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		emf.close();
	}

	@Test
	void test() {
		assertEquals("Valtteri Bottas", f1.getDriver());
		assertEquals("Australian Grand Prix", f1.getGrandPrix());
		assertEquals(58, f1.getLaps());
		assertEquals("26", f1.getPoints());
		assertEquals(2, f1.getStartingPosition());
		assertEquals("Mercedes", f1.getTeam());
		assertEquals("2019", f1.getYear());
		assertEquals("1:25:27.325", f1.getTime());
	}

}
