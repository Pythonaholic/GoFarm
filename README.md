# GoFarm

## Team members

1. Abdalrahman Samara (team leader).

2. Ahmed Zatar.

3. Hamza Qahoush.

4. Obada Jaber.

5. Doa'a Obeidat.

## Description

A website that let the users search for farms all over Jordan and if the users wants to register a farm, he can provide us with the farm's specific details and we will publish it in our website.


## Wireframes

[WireFrames](https://www.figma.com/file/2J1jSdIXGaVIw5tYdZQks3/Untitled?node-id=0%3A1)


## User Stories

1. As a user, I want to singup in the web app, and have my own account.

2. As a user,  I want to see beautiful graphics.

3. As an admin, I want to have access to all API data.

4. As a user, I want to add my farm, and see it in the farm search.

5. As a user, I want to share my experience for any farm.

## Software Requirements

[Software Requirements Document](./requirements.md)

## Domain Modeling

when the user enters the web page, he starts by logging into our website with the username and password. this will generate an access token for the user, this will git the user's data from the first table (Users table), and will grant him the ability to add his own farms in the (My Farms table), and at last, it will give him the ability to check the available farms inside the (All Farms) table.

![Domain Modeling](/assets/DM.png)

the image above shows the flow of the backend side

for the front end, if the user is not signed in, he will have access to the home page, and the search page, to search for farms, but the non-registered user can't add his own farm, if the user is signed in, he will be able to access the form to add his own farm.

## Database Schema Diagram

![0](/assets/Capture.PNG)




