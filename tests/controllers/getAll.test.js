const sinon = require('sinon');
const { expect } = require('chai');
const taskService = require('../../src/services/task');
const taskController = require('../../src/controllers/task');

describe('Chamada do controller listTask', () => {
    describe('quando não existem produtos no BD', () => {
        const request = {};
        const response = {};

        before(() => {
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();

            sinon.stub(taskService, 'getAll').resolves([]);
        });

        after(() => {
            taskService.getAll.restore();
        });

        it('verifica se existe o método "status" passando "200" code', async () => {
            await taskController.getAll(request, response);
            expect(response.status.calledWith(200)).to.be.equal(true);
        });

        it('verifica se existe um json contendo um array', async () => {
            await taskController.getAll(request, response);
            expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
        });
    });

    describe('quando existem produtos no BD', () => {
        const request = {};
        const response = {};

        const taskMock =[
            {
                id: 1,
                contents: 'Tarefa 1',
                statusId: 1
            },
            {
                id: 2,
                contents: 'Tarefa 2',
                statusId: 2
            },
            {
                id: 3,
                contents: 'Tarefa 3',
                statusId: 3
            }]


        before(() => {
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();
            sinon.stub(taskService, 'getAll').resolves(taskMock);
        })

        after(() => {
            taskService.getAll.restore();
        });

        it('é chamado o método "status" passando o código 200', async () => {
          await taskController.getAll(request, response);

          expect(response.status.calledWith(200)).to.be.equal(true);
        });

        it('é chamado o método "json" passando um array', async () => {
          await taskController.getAll(request, response);

          expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
        });
    });
}) 