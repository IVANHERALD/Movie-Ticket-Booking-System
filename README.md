# Movie Ticket Booking System (Business On Bot Task)

## Authentication
## Login page
Securely authenticate users with email and password or their Google accounts using Firebase Authentication.
![Login](https://github.com/IVANHERALD/Movie-Ticket-BOB-task/assets/72930008/35e94af5-f25f-48fa-97eb-29015484992c)

## Google Authentication
![SigninwithGoogle](https://github.com/IVANHERALD/Movie-Ticket-BOB-task/assets/72930008/fc23fc87-e276-4fa9-a231-e68784275682)


## Register page
Register users with Firebase Authentication to store their basic details, ensuring a seamless and secure experience.

![Register](https://github.com/IVANHERALD/Movie-Ticket-BOB-task/assets/72930008/93eac5db-c02e-4fec-895b-a99128978553)

## Verify email
Users receive a verification email to confirm their identity, ensuring a secure experience.
Upon successful verification, users can direct to the login page.
![VerifyEmail](https://github.com/IVANHERALD/Movie-Ticket-BOB-task/assets/72930008/7c174630-a650-402e-b286-704895ed3286)



## Home page
Home pages display the details like movie poster, movie name, theatre name, theatre location, and release year of all movies stored in a database. It is categorized by release year. The latest released movies are displayed first.


![Home](https://github.com/IVANHERALD/Movie-Ticket-BOB-task/assets/72930008/85fdd06b-2e7d-405b-87f9-e4a76013b1c7)


## Show Time details page
The Showtime page displays the available time slots for the selected movies along with the theatre name and location.
![ShowTime](https://github.com/IVANHERALD/Movie-Ticket-BOB-task/assets/72930008/ac488a62-d509-4125-81c7-c565013b29fb)


## Seat Selection page
The User can select the number of seats(limited to a max of 10 seats) . Without selecting the number of seats the users can't navigate to the next page.
### Before Seat Selection 
![BeforeSelectingSeats](https://github.com/IVANHERALD/Movie-Ticket-BOB-task/assets/72930008/e35201be-9fbf-42f3-98d0-73143353fea7)

### After Seat Selection 
![AfterSelectigSeats](https://github.com/IVANHERALD/Movie-Ticket-BOB-task/assets/72930008/35bbcb67-65e9-457a-912a-54beb870f8e9)

## Screen Preview
The Users can select the seats according to the row numbers . It is provided in an interactive UI
with the seats facing the screen.

![SeatSelection](https://github.com/IVANHERALD/Movie-Ticket-BOB-task/assets/72930008/efa4a820-e53a-431d-8975-e0cf439963f2)

## Share Contact
After selecting the seats the user should share contact details where the booking confirmation details can be sent. The fields like email and name are auto-filled using the currentUser parameters.
![ShareContact](https://github.com/IVANHERALD/Movie-Ticket-BOB-task/assets/72930008/2324c324-30d3-475a-9cd3-49fb32ff4b48)

## QR Code for movie details
The QRcode is generated for the booking details.

![QrGeneaartion](https://github.com/IVANHERALD/Movie-Ticket-BOB-task/assets/72930008/3c3470d6-67a8-4ff0-9014-43ecf28c47f5)

# FIREBASE CONSOLE SCREENSHOTS
![reads](https://github.com/IVANHERALD/Movie-Ticket-BOB-task/assets/72930008/919b54dc-3737-4b68-a7b1-28769fd27da4)
## The following image shows the collection where the booking details are stored in Firebase.
![retrive_data](https://github.com/IVANHERALD/Movie-Ticket-BOB-task/assets/72930008/4f0fb34a-4d2a-4fff-9072-126ecb085740)

## The following image depicts the collection where the given movie data is stored. 
![storeData](https://github.com/IVANHERALD/Movie-Ticket-BOB-task/assets/72930008/67865387-49bf-4fa2-b08b-554461ab813c)











