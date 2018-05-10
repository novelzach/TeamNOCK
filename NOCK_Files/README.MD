//create the db file directory 0. md db

//Starts the DB server on port 3000

//run first script to start the backend
1. ./startDBSample

//run a starting client
2. mongo --port 3000
//populate the DB server with sample data
//run these lines on the command line once the carat shows up

    load ('Population.js'); 
    load ('createTestUser.js'); 
    exit

//run second script to start the admin client 
3. ./startClientSample.sh

//creating the user and running the user script doesn't 100% work yet.
