import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMessages, { Message } from '../../../src/Interfaces/IMessages';
import Messages from '../../../src/Domains/Messages';
import User from '../../../src/Domains/User';
import MessageService from '../../../src/Services/MessagesService';

describe('Deveria criar o historico de mensagens de um usuario', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Deveria deveria adicionar o usuario ao historico caso seja seu primeiro acesso', async function () {
    // Arrange
    const newUser: User = new User({
      id: "64b31a366ea2d503878923af",
      name: "teste",
      password: '1234'
    })

    const input: IMessages = {
      user: newUser.getId() as string,
      messages: [{
        author: newUser.getname(),
        text: "teste",
        date: new Date("2023-01-15T22:53:14.578Z")
      }]
    }

    const output: Messages = new Messages(newUser, input.messages)

    sinon.stub(Model, 'create').resolves(output);
    sinon.stub(Model, 'findOneAndUpdate').resolves(output);
    sinon.stub(Model, 'find').resolves([newUser]);
    // Act

    const messageService = new MessageService();

    const response = await messageService.create(input)

    // Assert
    expect(response).to.be.deep.equal(output)
  });
  it('Deveria ser capaz de atualizar as mensagens de um usuario com historico já cadastrado', async function () {
    // Arrange
    const newUser: User = new User({
      id: "64b31a366ea2d503878923af",
      name: "teste",
      password: '1234'
    })

    const input: IMessages = {
      user: newUser.getId() as string,
      messages: [{
        author: newUser.getname(),
        text: "teste",
        date: new Date("2023-01-15T22:53:14.578Z")
      }]
    }

    const output: Messages = new Messages(newUser, input.messages);

    sinon.stub(Model, 'create').resolves(output);
    sinon.stub(Model, 'findOneAndUpdate').resolves(output);
    sinon.stub(Model, 'find').resolves([newUser]);
    // Act
    const messageService = new MessageService();

    const response = await messageService.create(input)
    // Assert
    expect((response as any as Messages).getMessages()).to.be.deep.equal([{
      author: newUser.getname(),
      text: "teste",
      date: new Date("2023-01-15T22:53:14.578Z")
    }])
  });
  it('Deveria lançar um erro caso o usuario não seja um usuario cadastrado', async function () {
    // Arrange
    const newUser: User = new User({
      id: "64b31a3sdaefs66ea2d5f",
      name: "teste",
      password: '1234'
    })

    const input: IMessages = {
      user: newUser.getId() as string,
      messages: [{
        author: newUser.getname(),
        text: "teste",
        date: new Date("2023-01-15T22:53:14.578Z")
      }]
    }

    sinon.stub(Model, 'find').resolves([newUser]);
    // Act
    try {
      const messageService = new MessageService();

      const response = await messageService.create(input)
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal("Cast to ObjectId failed for value \"64b31a3sdaefs66ea2d5f\" (type string) at path \"_id\" for model \"Messages\"")
    }

  });
  it('Deveria lançar um erro se algum campo estiver faltando ou em formato invalido', async function () {
    // Arrange
    const newUser: User = new User({
      id: "64b31a3sdaefs66ea2d5f",
      name: "",
      password: '1234'
    })

    const input: IMessages = {
      user: newUser.getId() as string,
      messages: [{
        author: newUser.getname(),
        text: "teste",
        date: new Date("2023-01-15T22:53:14.578Z")
      }]
    }

    sinon.stub(Model, 'create').resolves({});
    // Act
    try {
      const messageService = new MessageService();

      const response = await messageService.create(input)
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal("Cast to ObjectId failed for value \"64b31a3sdaefs66ea2d5f\" (type string) at path \"_id\" for model \"User\"")
    }
  });
});