const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const server = require('../src/api');
const { Task } = require('../src/database/models');
const { Task: taskMock }  = require('./mock/models')

chai.use(chaiHttp);
const { expect } = chai;

describe('Rota get /tasks', () => {

        before(() => {
            sinon.stub(Task, 'findAll')
                .callsFake(taskMock.findAll);
        });
    
        after(() => {
            Task.findAll.restore();
        });

        describe('Consulta a lista de tarefas', () => {
            let response;
            before(async () => {
                response = await chai
                    .request(server)
                    .get('/tasks');
            });

        it(
            'A requisição GET para a rota traz uma lista inicial ' +
            'contendo três registros de tarefas',
            () => {
              expect(response.body).to.have.length(3);
            }
        );

        it('Essa requisição deve retornar código de status 200', () => {
            expect(response).to.have.status(200);
        });
    });
});