import { SignUpController } from './signUp'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided ', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'teste@gmail.com',
        password: 'teste123',
        passwordConfirmation: 'teste123'
      }
    }
    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
  })
})