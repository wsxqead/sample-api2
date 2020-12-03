const Koa = require('koa');
const app = new Koa();
const Person = require('../Person')

// app.use(async ctx => {
//     // Person.query().findById(6).then((a) => {
//     //     console.log(a)
//     // })
//     const person = await Person.query().findById(2);
//     console.log(person.id);
//     console.log(person.name);
//     console.log(person.age);
//   ctx.body = 'Hello World';
// });

app.use(async (ctx, next) => {
    Person.query().findById(12).then((a) => {
        console.log(a)
    })
  ctx.body = 'Hello World';
});

//app.listen(3000);