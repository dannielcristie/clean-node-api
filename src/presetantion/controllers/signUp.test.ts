import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provide', () => {
    const sut = new SignUpController()
    const httpRequest = {
      email: 'any_email@mail.com',
      password: 'anypassword',
      passwordConfirmation: 'anypassword'
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
