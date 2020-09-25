# CS3219 OTOT Assignment Task B
## Name: Triston Pang Erh Syen
## Github Repo for API (Tasks B1-3): https://github.com/tristonpang/restful-web-cs3219
## Github Repo for Frontend SPA (Task B4): https://github.com/tristonpang/restful-web-frontend-cs3219
**Context**  
In order to complete the requirements of Task B, I have built a demonstration web app that is essentially a Contacts list with CRUD functions to add, view, delete and edit contacts (throwback to CS2103's Addressbook!).

## Running the API locally
Running the API locally requires a local running instance of MongoDB. Ensure that you have MongoDB installed (installation instructions can be followed here: https://docs.mongodb.com/manual/administration/install-community/)
1. Start your local instance of MongoDB (if you are on macOS and installed it via brew, you may use `brew services start mongodb-community`)
2. Run `npm install` to install all dependencies
3. Run `npm run start`
4. Connect to `localhost:8080` to access the server. The API is located at `localhost:8080/api`

## Accessing deployed API (Hosted on AWS Lambda)
The serverless deployed version of the API uses Mongo Atlas - a cloud hosted database.
1. Go to https://0uolcs7ym4.execute-api.us-east-1.amazonaws.com/dev/
2. The API is located at https://0uolcs7ym4.execute-api.us-east-1.amazonaws.com/dev/api/

## REST API Methods
*Use Postman to send requests to the API*
* View all contacts - GET request to `/api/contacts`
* Create a new contact - POST request to `/api/contacts`, provide the new contact data in the body
  * Requires `name`, `gender`, `email`, and `phone` - all string types
* View a specific contact - GET request to `api/contacts/:contact_id` (path variable: the contact's ID should replace `:contact_id`)
* Delete a contact - DELETE request to `api/contacts/:contact_id`
* Edit a contact - PUT/PATCH request to `api/contacts/:contact_id`

## Running Tests
1. Ensure the local instance of MongoDB is running, and ensure that there is no local instance of the server running as well
2. Run `npm run test`

### Setting up and running the web app/frontend (Task B4) (https://github.com/tristonpang/restful-web-frontend-cs3219)
1. Run `yarn install` to install all dependencies
2. To run the app locally, run `yarn serve` and then connect to `localhost:8080`
3. Alternatively, you may go to https://cs3219taskbfrontend.herokuapp.com/ to access the deployed web app (deployed on Heroku)
