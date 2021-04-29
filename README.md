## [Heroku Link](https://tt-33-anywhere-fitness.herokuapp.com/) 🚴‍♀🏃‍♂️
<br>

## **Endpoints**

<br>

### /api/classes

| REST Method |   Endpoint    | Description                                                                          |
| :---------: | :-----------: | :--------:                                                                           |
| **POST**    | auth/register | Register a new user. Username and password required                                  |
| **POST**    | auth/login    | Login as an existing user. Requires credentials from registration and grants a token |

### /api/classes
| REST Method |      Endpoint      | Description                          |
| :---------: | :----------------: | :----------------------------------- |
|   **GET**   |     api/classes    | view all classes                     |
|   **GET**   |   api/classes/:id  | get a class by id                    |
|  **POST**   |     api/classes/   | add new class                        |
|   **PUT**   |   api/classes/:id  | update class by id                   |
| **DELETE**  |   api/classes/:id  | deleteclass by id                    |

<br>

### CLASSES TABLE SCHEMA

| class_id | class_type | class_image | start_time | duration | start_time | intensity_level | location | num_of_attendees | max_class_size | user_id  |
| :-----:  | :------:   | :------:    | :---------:| :------- | :--------- | :-------------- | :-------:|:---------------: | :------------: | :------  |
|automatic | required   | required    | required   | required | required   | required        | required | required         | required       | automatic|

<br>

### /api/users
| REST Method |      Endpoint      | Description                          |
| :---------: | :----------------: | :----------------------------------- |
|   **GET**   |     api/users      | view all users                       |
|   **GET**   |   api/users/:id    | get a user by id                     |
|  **POST**   |     api/users/     | add new user                         |
|   **PUT**   |   api/users/:id    | update user by id                    |
| **DELETE**  |   api/users/:id    | delete user by id                    |

### USERS TABLE SCHEMA

| user_id  | created_at | username    | password   | auth_code | user_type  | 
| :-----:  | :------:   | :------:    | :---------:| :-------  | :--------- | 
|automatic | automatic  | required    | required   | optional  | automatic  | 
 

## 🚨 More on forking this repo soon!




