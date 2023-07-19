import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IUser from '../../../src/Interfaces/IUser';
import UserService from '../../../src/Services/UserSevice';
import User from '../../../src/Domains/User';

describe('Deveria criar um usuario', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Deveria criar um usuario com sucesso', async function () {
    // Arrange
    const userInput: IUser = {
      name: 'Usuario Test',
      password: '12345',
    };

    const userOutput: User = new User(
      {
        id: '63319d80feb9f483ee823ac5',
        name: 'Usuario Test',
        password: '12345',
      }
    );

    sinon.stub(Model, 'create').resolves(userOutput);
    // Act

    const service = new UserService();
    const result = await service.create(userInput);
    
    // Assert
    expect(result).to.be.deep.equal(userOutput);
  });
  it('Deveria lançar uma exceção quando algum dado não é o esperado', async function () {
    // Arrange
    const userInput: IUser = {
      name: 'Usuario Test',
      password: '',
    };

    sinon.stub(Model, 'create').resolves({});
    // Act
    try {
      const service = new UserService();
      await service.create(userInput);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal('Some fields are missing');
    }
  });
});