var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default{
    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

         var data = {
            nome: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '21999999999',
            endereco: {
                cep: '23058260',
                rua: 'Rua Guatapara',
                numero: '14',
                complemento: 'casa 2',
                bairro: 'Cosmos',
                cidade_uf: 'Rio de Janeiro/RJ'
    
            },
            metodo_entrega: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data 
    }
}