const { ref } = require('../../connect');
const Person = require('../../Person');

exports.write = async ctx => {

    const jennifer = await Person.query().insert({
        name: 'Jennifer',
        age: 20
    });
    ctx.body = "Created";

}

exports.list = async ctx => {

    Person.query().findById(1).then((a) => {
        
        console.log(a) 
    })
    
    const people = await Person.query();

    console.log('there are', people.length, 'People in total');
    ctx.body = 'listed';

}

// exports.read = async ctx => {

//     const {id} = ctx.params;

//     const serch_read = await Person.query()
//     .select('id', 'name', 'age')
//     .where('id', '=', id);

//     console.log('The last name of the first middle aged Jennifer is');
//     console.log(serch_read[0].name);

//     if(!serch_read[0].name){
//         ctx.status = 404;
//         ctx.body   = {
//             message: '없습니다.',
//         };
//         return;
//     }
//     ctx.body = post;
// }

exports.remove = async ctx => {

    const {id}  = ctx.params;
    const Deleted = await Person.query().deleteById(id);

    ctx.body = 'Deleted';

}

exports.replace = async ctx => {

    const {id} = ctx.params; 
    const { name, age } = ctx.request.body;
    const updated = await Person.query().findById(id).patch({age: age,name:name});

    ctx.body = 'Updated';
}

exports.list_all = async ctx => {

    const {limit} = ctx.query;
    if(!limit){
        ctx.body = await Person.query();  
    }else{
        ctx.body = await Person.query().select('*').from('persons').limit(limit);
    }
    console.log(limit);

}

// exports.list_limit = async ctx => {
//     //const {personsid} = ctx.params; 
//     const {personsid} = ctx.query;
//     const people = await Person.query().select('*').from('persons').limit(personsid);

//     ctx.body = people;
//     console.log(people);
// }

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

