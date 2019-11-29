# initapp project

Basic Web Application using Node Express and MySql database.

### Installation

Download and install Node.js 

https://nodejs.org/en/

Navigate to the directory of the project in your terminal and run the following command:
```bash
npm install
```

Download and install MySQL Community Server (for Mac users)

https://dev.mysql.com/downloads/mysql/

Download and install MySQL Community Server Using Installer (for Windows users)

https://dev.mysql.com/downloads/installer/

Local instance will be running automatically after installation

### Usage

-To build the database, navigate to the directory of the project and import the .sql file into the server by running the following command from your terminal:
```bash
mysql -uusername -p webapp < db.sql
```
Then enter your password

-To start the application, navigate to the directory of the project in your terminal and run the following command:
```bash
node app.js
```
Access webpage by going to localhost:8080 on a web browser

### Data

Sample data is inserted into the database automatically. 

Calculate the GPA of any of the following users by typing in their name in the search box:

-John Doe
-Cam Smit
-Jane Se
-Tam Tom
-Fran May
-Sofia Ab
-Mark Lowen
