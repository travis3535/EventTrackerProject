## Event Tracker Project

#### Week 12-14 Homework Project for Skill Distillery

### Overview
This is a Formula One Database. The vision for this project is to develop a database
for Formula One results and stats. Currently the project is set up to return results
for first place driver of each race from 2019.

Results currently displays:
* Year of Race
* Grand Prix Location
* Winning Driver
* Team / Constructor
* Number of Laps Complete
* Drivers Starting Position
* Total Time of Race
* Points Received from Win


### REST API Endpoints

| Return Type     | Route                 | Functionality            |
|-----------------|-----------------------|--------------------------|
| `List<FormualOne>` |`GET api/results`| Gets list of all results   |
| `FormulaOne`       |`POST api/results`| Creates a new Formula One entry |
| `void`          |`DELETE api/results/{id}`| Deletes an entry by id|
| `FormulaOne`    |`PUT api/results/{id}` | Update entry by id|
| `FormulaOne`    |`GET api/results/{id}` | Gets entry by id|


### Technologies Used
* Java
* SQL / MySQL
* C.R.U.D.
* Spring Tool Suite
* Spring Boot
* Postman
* REST
* JPA
* JUnit

### Lessons Learned
* This project will be further build upon in future homework assignments.

* I gained a lot for this project and the set up. I feel I have a decent grasp on
  mySQL and setting up a database.

* Taking you time and making sure the correct annotations in each class and interface that
  need them. This can create major hang ups and the resulting fix is a simple annotation.
  
* Luckily I didn't run into any snags on the set up of the project, as we have had much
  practice over the set up in the past few days.
