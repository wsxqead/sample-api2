const Koa    = require("koa");
const Router = require("koa-router");
const app    = new Koa();
const router = new Router();
// const Person = require('./Person');
const bodyParser = require('koa-body-parser');
const api = require('./api');

router.use('/api', api.routes());

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('Listening to port 4000');
})


/*
router.get('/', async ctx => {

    ctx.body = `<h1>Root page</h1>
  
                <br>
  
                <p>Todolist - Root page</p>`;

});

router.get('/login', async ctx => {

    ctx.body = `<h1>Login page</h1>
  
                <br>
  
                <p>Todolist - Login page</p>`;
    
});
  
  
router.get('/about', async ctx => {
    
    ctx.body = `<h1>About page</h1>
  
                <br>
  
                <p>Todolist - About page</p>`;
  
});
  

router.get('/todolist', async ctx => {
  
    ctx.body = `<h1>Todolist page</h1>
  
                <br>
  
                <p>Todolist - Todolist page</p>`;
  
  
});
  
  
router.get('/register', async ctx => {
  
    ctx.body = `<h1>Register page</h1>
  
                <br>
  
                <p>Todolist - Register page</p>`;
  
});  

router.get('/persons', async ctx => {
  
    ctx.body = `<h1>Persons page</h1>
  
                <br>
  
                <p>Todolist - Persons page</p>`;
  
});  

router.get('/persons/:id', async ctx => {
    
    Person.query().findById(ctx.params.id).then((a) => {
        console.log(a);
    })

    ctx.body = `<h1>Persons page</h1>
  
                <br>
  
                <p>Todolist - Persons page</p>`;
  
}); 

// const posts = [
//     {
//         name: 'Jennifer',
//         age: 25,
//     },
// ];

router.post('/post_insert', async ctx => {
    // const {name, age} = ctx.request.name;
    // const post = {name,age};
    // posts.push(post);
    // ctx.body = post;
    const posts = [

        {
    
            id: 1,
    
            title: '제목',
    
            body: '내용',
    
        },
    
    ];
    
    const { title, body } = ctx.request.body;

    postId += 1;    // 기존 postId 값에 1을 더합니다.

    const post = { id: postId, title, body };

    posts.push(post);

    ctx.body = post;
});

app.use(router.routes());

app.use(router.allowedMethods());

app.on('error', error => {

    console.error(error);

});
  
app.listen(3000);

*/

// const Koa = require('koa');
// const app = new Koa();
// // const knex = require('./knex')
// const Person = require('./Person')

// app.use(async ctx => {
//     Person.query().findById(3).then((a) => {
//         console.log(a)
//     })
//   ctx.body = 'Hello World';
// });

//app.listen(3000);