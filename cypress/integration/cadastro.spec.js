import signupfactory from "../factories/SignupFactory"
import SignupPage from "../pages/SignupPage"
import signup from "../pages/SignupPage"

describe('Cadastro', ()=>{

    // beforeEach(function(){
    //     cy.fixture('deliver').then((e)=> {
    //         this.deliver = e
    //     })
    // })

    it('Usuario deve se tornar um entregador', function() {

        var entregador = signupfactory.deliver() 
        signup.go()
        signup.fillForm(entregador)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContatShouldBe(expectedMessage)

    }) 

    it('CPF incorreto', function() {

        var entregador = signupfactory.deliver()
        entregador.cpf = '000000141aa'
        signup.go()
        signup.fillForm(entregador)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    }) 

    it('email incorreto', function() {

        var entregador = signupfactory.deliver()
        entregador.email = 'user.com.br'
        signup.go()
        signup.fillForm(entregador)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })

    context('Campo Obrigatório', function(){
        const messeges = [
            {filed:'nome', output: 'É necessário informar o nome'},
            {filed:'cpf', output: 'É necessário informar o CPF'},
            {filed:'email', output: 'É necessário informar o email'},
            {filed:'cep', output: 'É necessário informar o CEP'},
            {filed:'numero', output: 'É necessário informar o número do endereço'},
            {filed:'método de entrega', output: 'Selecione o método de entrega'},
            {filed:'cnh', output: 'Adicione uma foto da sua CNH'}
        ]

        before(function(){
            signup.go()
            signup.submit()
        })

        messeges.forEach(function(msg){
            it(`${msg.field} is require`, function(){
                SignupPage.alertMessageShouldBe(msg.output)
            })
        })
    })
})
