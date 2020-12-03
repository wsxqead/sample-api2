//const { post } = require(".");
const { ref } = require('../../connect');
const Person = require('../../Person');
//const knex   = require('../../knex')
//const Knex = require('../../connect');

let postId = 1; 
const posts = [{
    id: 1,
    title: '제목',
    body: '내용',
}];

exports.write = async ctx => {
    const jennifer = await Person.query().insert({
        name: 'Jennifer',
        age: 23
    });

    // const {title, body} = ctx.request.body;
    // postId += 1;
    // const post = {id:postId, title, body};
    // posts.push(post);
    ctx.body = jennifer;
    
}

exports.list = async ctx => {
    //ctx.body = Knex.select('id', 'name', 'age').from('persons');
    
    Person.query().findById(1).then((a) => {
        ctx.body = a;
        console.log(a) //console.log(a); console.log(a)
    })
    
    const people = await Person.query();

    console.log(people[0] instanceof Person); // --> true
    console.log('there are', people.length, 'People in total');

    //ctx.body = 'Hello World';

    // Person.query().findById(1).then((a) => {
    //     ctx.body = a; //console.log(a);
    // })

}

exports.read = async ctx => {
    const {id} = ctx.params;

    const serch_read = await Person.query()
    .select('id', 'name', 'age')
    .where('id', '=', id);

    console.log('The last name of the first middle aged Jennifer is');
    console.log(serch_read[0].name);
    //const post = posts.find(p => p.id.toString() === id);
    if(!serch_read[0].name){
        ctx.status = 404;
        ctx.body   = {
            message: '없습니다.',
        };
        return;
    }
    ctx.body = post;
}

exports.remove = ctx => {
    const {id}  = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if(index === -1){
        ctx.status = 404;
        ctx.body   = {
            message: '없습니다.',
        };
        return;
    }
    posts.splice(index, 1);
    ctx.status = 204;
}

exports.replace = async ctx => {
    const {id} = ctx.params; 
    const updated = await Person.query().findById(id).patch({age: 30});
    // const index = posts.findIndex(p => p.id.toString() === id);
    // if(index === -1){
    //     ctx.status === 404;
    //     ctx.body   = {
    //         message: '없습니다.',
    //     };
    //     return;
    // }
    // posts[index] = {
    //     id, ...ctx.request.body, 
    // };

    // ctx.body = posts[index];
}

exports.update = async ctx => {
    const {id} = ctx.params;
    const updated = await Person.query().findById(id).patch({age: 30});

    // const index = posts.findIndex(p => p.id.toString() === id);

    // if(index === -1){
    //     ctx.status === 404;
    //     ctx.body   = {
    //         message: '없습니다.',
    //     };
    //     return;
    // }

    // posts[index] = {
    //     ...posts[index],
    //     ...ctx.request.body,
    // };

    // ctx.body = posts[index];
}

exports.json = async ctx => {

    console.log(ctx.request.body);

    const { name, age } = ctx.request.body;
    const jen = new Person({ name, age });

    try {
        await Person.query().insert({
            name: name,
            age: age
        });
    } catch(e) {

        return ctx.throw(500, e);
    }

    ctx.body = jen;

}