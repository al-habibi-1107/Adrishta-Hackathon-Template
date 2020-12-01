## Team Number 23 - VoteBank


### Project Overview

In the New Normal (Digital) approach towards everything, there also comes a need to assess every individual's choice and opinion.
Previously this was carried out using traditional voting and discussion sessions, while the discussion has scaled up to virtual meetings
there still seems space for considering public voting systems. Online voting systems could be the key and if the security and the anonymity of the voter are kept intact, online voting can be the best choice.

In this project named "VoteBank", we tried to devise a user-friendly yet secure method to carry out a public voting process.
Assuming (as per the problem statement) we have access to the email IDs of the voters, we can easily map out the valid voters and
also, make sure one can make at most a single vote(as quoted by the Indian Constitution "One Man, One Vote").

### Solution Description

- In this project we made a web app which has several routes (ex. /admin, /voter), only the admin is given the '/admin' route in which he adds the details of the poll, the nominees, and the list of voters(.txt file with every email at a different line).
- The voters can enter the code in the homepage which will lead to poll page
- A Security code is provided to the admin which can be mailed to the voters and the systems start at the time set by the admin.
- Once the voter chooses his candidate and submits the form the server processes the request:
  - checks if the voter is on the voters' list( given by the admin ).
  
  - checks if the user has already voted (by checking against the database for a parameter
   for the mailID , once the voter has voted , his id gets removed from the array. )
  - The value of the vote is also taken and incremented keeping the count of the votes.
- Once the link is on for 45mins(can be extended), the result of the poll is reflected on the admin page.

#### Architecture Diagram

![arc](https://github.com/al-habibi-1107/Adrishta-Hackathon-Template/blob/master/Application%20Code/Images/arch.png)

#### Technical Description

An overview of:
* Technologies Used:-
 - For the front-end : HTML,CSS and ejs
 - For back-end : Node.js,MongoDB,Mongoose,Express

TO RUN :
- Clone the project
- run npm install to install all packages
- open a browser and check https://localhost:3000/admin for admin page
- fill feilds and upload the txt file
- use the link there or https://localhost:3000/polls for the polls section



### Screenshots
Images are in the application code/images 

![0](https://github.com/al-habibi-1107/Adrishta-Hackathon-Template/blob/master/Application%20Code/Images/0.png)
![1](https://github.com/al-habibi-1107/Adrishta-Hackathon-Template/blob/master/Application%20Code/Images/1.png)
![2](https://github.com/al-habibi-1107/Adrishta-Hackathon-Template/blob/master/Application%20Code/Images/2.png)
![3](https://github.com/al-habibi-1107/Adrishta-Hackathon-Template/blob/master/Application%20Code/Images/8.png)
![4](https://github.com/al-habibi-1107/Adrishta-Hackathon-Template/blob/master/Application%20Code/Images/4.png)
![5](https://github.com/al-habibi-1107/Adrishta-Hackathon-Template/blob/master/Application%20Code/Images/5.png)
![6](https://github.com/al-habibi-1107/Adrishta-Hackathon-Template/blob/master/Application%20Code/Images/6.png)
![7](https://github.com/al-habibi-1107/Adrishta-Hackathon-Template/blob/master/Application%20Code/Images/7.png)


### Team Members
List of team member names and email IDs with their contributions.
|Member Name|Email|Contribution|
|-----------|-----|------------|
|Kamil Anwar|kamilanwar2001@gmail.com|Backend|
|Divyansh Singh|divyanshsinghmba@gmail.com|Frontend|
|Aditya|adityapankaj@gmail.com|Frontend and design|

### References
Affix links to the online tools/repositories/blogs etc., which helped you along the development of the project
