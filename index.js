const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const arr = [{content: "post 1: js is awesome"}, {content: "post 2: cool code"}, {content: "Example post 3"}]

app.get('/', (req, res)=>{
    res.render('home',{name: 'John'});
})

app.get('/posts', (req, res)=>{
    // res.sendFile('template.html',{root: __dirname});
    res.render('post', {posts: arr});
})

app.listen(8000, ()=>{
    console.log("server listening on 8000");
})