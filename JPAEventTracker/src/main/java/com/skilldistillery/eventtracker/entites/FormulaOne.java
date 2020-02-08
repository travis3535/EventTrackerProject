package com.skilldistillery.eventtracker.entites;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class FormulaOne {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Integer id;
	
	private String year;
	
	@Column(name ="grandprix")
	private String grandPrix;
	private String driver;
	private String team;
	private Integer laps;
	
	@Column(name ="starting_position")
	private Integer startingPosition;
	private String time;
	private String points;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public String getGrandPrix() {
		return grandPrix;
	}
	public void setGrandPrix(String grandPrix) {
		this.grandPrix = grandPrix;
	}
	public String getDriver() {
		return driver;
	}
	public void setDriver(String driver) {
		this.driver = driver;
	}
	public String getTeam() {
		return team;
	}
	public void setTeam(String team) {
		this.team = team;
	}
	public Integer getLaps() {
		return laps;
	}
	public void setLaps(Integer laps) {
		this.laps = laps;
	}
	public Integer getStartingPosition() {
		return startingPosition;
	}
	public void setStartingPosition(Integer startingPosition) {
		this.startingPosition = startingPosition;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getPoints() {
		return points;
	}
	public void setPoints(String points) {
		this.points = points;
	}
	public FormulaOne() {
		super();
	}
	public FormulaOne(Integer id, String year, String grandPrix, String driver, String team, Integer laps,
			Integer startingPosition, String time, String points) {
		super();
		this.id = id;
		this.year = year;
		this.grandPrix = grandPrix;
		this.driver = driver;
		this.team = team;
		this.laps = laps;
		this.startingPosition = startingPosition;
		this.time = time;
		this.points = points;
	}
	@Override
	public String toString() {
		return "FormulaOne [id=" + id + ", year=" + year + ", grandPrix=" + grandPrix + ", driver=" + driver + ", team="
				+ team + ", laps=" + laps + ", startingPosition=" + startingPosition + ", time=" + time + ", points="
				+ points + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((driver == null) ? 0 : driver.hashCode());
		result = prime * result + ((grandPrix == null) ? 0 : grandPrix.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((laps == null) ? 0 : laps.hashCode());
		result = prime * result + ((points == null) ? 0 : points.hashCode());
		result = prime * result + ((startingPosition == null) ? 0 : startingPosition.hashCode());
		result = prime * result + ((team == null) ? 0 : team.hashCode());
		result = prime * result + ((time == null) ? 0 : time.hashCode());
		result = prime * result + ((year == null) ? 0 : year.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		FormulaOne other = (FormulaOne) obj;
		if (driver == null) {
			if (other.driver != null)
				return false;
		} else if (!driver.equals(other.driver))
			return false;
		if (grandPrix == null) {
			if (other.grandPrix != null)
				return false;
		} else if (!grandPrix.equals(other.grandPrix))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (laps == null) {
			if (other.laps != null)
				return false;
		} else if (!laps.equals(other.laps))
			return false;
		if (points == null) {
			if (other.points != null)
				return false;
		} else if (!points.equals(other.points))
			return false;
		if (startingPosition == null) {
			if (other.startingPosition != null)
				return false;
		} else if (!startingPosition.equals(other.startingPosition))
			return false;
		if (team == null) {
			if (other.team != null)
				return false;
		} else if (!team.equals(other.team))
			return false;
		if (time == null) {
			if (other.time != null)
				return false;
		} else if (!time.equals(other.time))
			return false;
		if (year == null) {
			if (other.year != null)
				return false;
		} else if (!year.equals(other.year))
			return false;
		return true;
	}
	
	
	

}
