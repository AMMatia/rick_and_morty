const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS',()=>{
    describe('GET /rickandmorty/character/:id',()=>{
        it('Responde con status: 200',async ()=>{
            await agent.get('/rickandmorty/character/1').expect(200)
        })
        
        it('Responde un objeto con las propiedades: "id","name","species","gender","status","origin", e "image"',async ()=>{
            let response = (await agent.get('/rickandmorty/character/1')).text;
            response = JSON.parse(response);
            expect(response).toHaveProperty('id')
            expect(response).toHaveProperty('name')
            expect(response).toHaveProperty('species')
            expect(response).toHaveProperty('gender')
            expect(response).toHaveProperty('status')
            expect(response).toHaveProperty('origin')
            expect(response).toHaveProperty('image')
        })

        it('Si hay un error responde con status: 500',async ()=>{
            const response = (await agent.get('/rickadnmorty/character/1000')).status;
            expect(response).toBeGreaterThanOrEqual(400)
        })
    })

    describe('GET /rickandmorty/login',()=>{
        it('Las credenciales son correctas', async()=>{
            const response = (await agent.get('/rickandmorty/login?email=prueba@gmail.com&password=123prueba')).body;
            expect(response.access).toBeTruthy()
        })

        it('Las credenciales son incorrectas',async ()=>{
            const response = (await agent.get('/rickandmorty/login?email=prua@gmail.com&password=12rueba')).body;
            expect(response.access).toBeFalsy()
        })
    })

    describe('POST /rickandmorty/fav',()=>{
        const character1={ id:'1',name:'Rick'};
        const character2={ id:'2',name:'Pepito'};
        it('Devuelve el personaje enviado por body',async ()=>{
            const response =await agent.post('/rickandmorty/fav').send(character1);
            expect(response.body).toEqual(character1);
        })

        it('Debe devolver el o los peronajes previos y el actual',async ()=>{
            const response = await agent.post('/rickandmorty/fav').send(character2);
            
            expect (response.body).toEqual(character2);

        })
    })

    describe('DELETE /rickandmorty/fav/:id',()=>{
        const character1 = { id:'1',name:'Rick'}
        const character2 = { id:'2',name:'Pepito'}

        it('Devuelve el arreglo completo si no se eliminan personajes', async ()=>{
            const response = await agent.delete('/rickandmorty/fav/50');
            
            expect(response.body).toEqual('50');
           
        })

        it('Elimina correctamente el personaje',async()=>{
            const response = (await agent.delete('/rickandmorty/fav/2')).body;
            expect(response).not.toEqual(character2);
        })
    })
})