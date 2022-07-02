const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const server = require('../src/api');
const { Task } = require('../src/database/models');
const { Task: taskMock }  = require('./mock/models')

chai.use(chaiHttp);
const { expect } = chai;

describe('Rota post /tasks', () => {

        before(() => {
            sinon.stub(Task, 'create')
                .callsFake(taskMock.create);
            sinon.stub(Task, 'findAll')
                .callsFake(taskMock.findAll);
        });
    
        after(() => {
            Task.restore();
            Task.findAll.restore();
        });

        describe('Insere um novo registro', () => {
            let createRequest = {};
            let firstTaskList = [];
            let secondTaskList = [];
            const newTask = {
                "contents": "Arrumar a cama",
                "statusId": 4
            };
    
            before(async () => {
                firstTaskList = await chai
                    .request(server)
                    .get('/tasks')
                    .then(({body}) => body);
                createRequest = await chai
                    .request(server)
                    .post('/tasks')
                    .send(newTask);
                secondTaskList = await chai
                    .request(server)
                    .get('/tasks')
                    .then(({body}) => body);
            });
    
            it('firstTaskList: A primeira requisição GET para a rota deve retornar 3 registros', () => {
                expect(firstTaskList).to.have.length(3);
            });
    
            it('createRequest: A requisição POST para a rota retorna o código de status 201', () => {
                expect(createRequest).to.have.status(201);
            });
    
            it('createRequest: A requisição deve retornar um objeto no corpo da resposta', () => {
                expect(createRequest.body).to.be.a('object');
            });
    
            it('createRequest: O objeto possui a propriedade "message"', () => {
                expect(createRequest.body)
                  .to.have.property('message');
            });
    
            it('createRequest: A propriedade "message" possui o texto "Nova task criada com sucesso"',
              () => {
                expect(createRequest.body.message)
                  .to.be.equal('Nova task criada com sucesso');
              }
            );
    
            it('secondTaskList: A segunda requisição GET para rota deve retornar, por tanto, 4 registros', () => {
                expect(secondTaskList).to.have.length(4);
            });
    
            it('secondTaskList: O registro criado deve corresponder ao enviado na requisição POST', () => {
                expect(secondTaskList[3]).to.contain(newTask);
            })
        });
});