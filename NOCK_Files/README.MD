//create the db file directory 0. md db

//Starts the DB server on port 3000

//run first script to start the backend
1. ./startDBSample

//open new terminal and run a starting client

2. mongo --port 3000

//populate the DB server with sample data

//run these lines on the command line once the carat shows up

    load ('Population.js'); 
    load ('createTestUser.js'); 
    exit

//run this command to start the admin client 

3. mongo --port 3000 -u dbAdmin -p test --authenticationDatabase admin

//open new terminal and run

4. tsc AppServer.ts

5. node AppServer.js
