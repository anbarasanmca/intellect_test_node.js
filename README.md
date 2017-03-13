Step 1	npm install

Ctrate user URL:

http://localhost:3000/users

JSON format :

{
    "name": "anbu",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "phone": "010-692-6593 x09125",
    "address": {
      "street": "Victor Plains",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771"
    }
}

Select User List :

http://localhost:3000/usersList

JSON Format :

[
  {
    "id": 1,
    "name": "Anbu jayasri",
    "email": "anbu@gmail.com",
    "username": "update",
    "phone": "9629833745",
    "street": "street",
    "city": "chennai",
    "zipcode": "636902"
  },
  {
    "id": 4,
    "name": "Ervin Howell",
    "email": "Shanna@melissa.tv",
    "username": "Antonette",
    "phone": "010-692-6593 x09125",
    "street": "Victor Plains",
    "city": "Wisokyburgh",
    "zipcode": "90566-7771"
  }
 ]
 
 Select particular user:
 
http://localhost:3000/users/{id}/todos

Update Userdetails:
http://localhost:3000/users_update

JSON formate:

{
	"id":"7",
    "name": "vignesh 1",
    "username": "update",
    "email": "anbu@gmail.com",
    "phone": "9629833745",
    "address": {
      "street": "street",
      "city": "chennai",
      "zipcode": "636902"
    }
}

Delete user details:

http://localhost:3000/users_delete/2/todos
