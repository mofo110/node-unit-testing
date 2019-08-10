const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const server = require('../src/index')

chai.use(chaiHttp);

describe('GET /api/greeting/', function () {

    it('GET /api/greeting/ should return "Hello World!" when no names are passed', async () => {
        const res = await chai.request(server).get('/api/greeting/')
        res.should.have.status(200)
        res.body.content.should.equal('Hello World!')
    })

    it('GET /api/greeting/John should return "Hello John!" when John is passed', async () => {
        const res = await chai.request(server).get('/api/greeting/John')
        res.should.have.status(200)
        res.body.content.should.equal('Hello John!')
    })    

})
