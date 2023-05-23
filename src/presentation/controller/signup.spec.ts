/*
 * TODO:
    - Definição do Service Under Test
    - Criar variável pra lidar com o valor da request e response

 * FIXME:
    - No próximo teste a função vai quebrar e ai entra a magia do TDD
*/

import { SignUpController } from './signup'

describe('Signup Controller', () => {
  test('should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_mail@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
