require('dotenv').config()
const express= require('express');
const app=express();


const githubData={
    "login": "MuhammadHammadEjaz70",
    "id": 90749048,
    "node_id": "MDQ6VXNlcjkwNzQ5MDQ4",
    "avatar_url": "https://avatars.githubusercontent.com/u/90749048?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/MuhammadHammadEjaz70",
    "html_url": "https://github.com/MuhammadHammadEjaz70",
    "followers_url": "https://api.github.com/users/MuhammadHammadEjaz70/followers",
    "following_url": "https://api.github.com/users/MuhammadHammadEjaz70/following{/other_user}",
    "gists_url": "https://api.github.com/users/MuhammadHammadEjaz70/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/MuhammadHammadEjaz70/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/MuhammadHammadEjaz70/subscriptions",
    "organizations_url": "https://api.github.com/users/MuhammadHammadEjaz70/orgs",
    "repos_url": "https://api.github.com/users/MuhammadHammadEjaz70/repos",
    "events_url": "https://api.github.com/users/MuhammadHammadEjaz70/events{/privacy}",
    "received_events_url": "https://api.github.com/users/MuhammadHammadEjaz70/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Muhammad Hammad Ejaz",
    "company": null,
    "blog": "",
    "location": "Lahore",
    "email": null,
    "hireable": true,
    "bio": "Software Engineer |\r\nFull Stack Web Developer MERN Stack |  \r\nCOMSATS University Islamabad, Lahore Campus.",
    "twitter_username": null,
    "public_repos": 18,
    "public_gists": 0,
    "followers": 1,
    "following": 2,
    "created_at": "2021-09-15T06:15:05Z",
    "updated_at": "2024-08-07T17:48:07Z"
  }
app.get('/', (req,res)=>{
    res.send("Hammad Gujjar is the best")
})

app.get('/hammad',(req,res)=>{
    res.send("Yeahhh Hammmad is best")
})

app.get('/login',(req, res)=>{
    res.send("<h1>Please Login </h1>" )
})

app.get("/github", (req,res)=>{
res.json(githubData)
})

app.listen(process.env.PORT,()=>{
    console.log(`Backend is running on port ${process.env.PORT}`)
})