# like-it

## INSTALL

1. Clone with `git clone git@github.com:murilomothsin/like-it.git`
2. Install API dependencies `cd like-it/api && npm install`
3. Install Front dependencies `cd like-it/front && npm install`

## RUN

You need to enter into API folder and run `npm start` (It runs with nodemon for `dev`)

After that, enter Front end folder and run `npm start`

## API

### REGISTER USER

POST `http://localhost:3000/users/register`

BODY 
```
{
   "email":"test@email.com",
   "password": "12345"
 }
```

### LOGIN USER

POST `http://localhost:3000/users/login`

BODY 
```
{
   "email":"test@email.com",
   "password": "12345"
 }
```

### LIKE / DISLIKE

POST `http://localhost:3000/like`

BODY 
```
{
   "like": [true | false]
 }
```

### COUNTER

GET `http://localhost:3000/like/count`


### LIST LIKES WITH TIMESTAMP AND USERS ID

GET `http://localhost:3000/like`
