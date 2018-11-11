//set the env variable to test during the test
process.env.NODE_ENV = "test";

const ParcelsModel = require('../src/models/Courier');
const ParcelsController = require('../src/controllers/Courier')
const chai = require('chai');
const chaiHttp = require('chai-Http');
const server = require('../server');


const should = chai.should();
chai.use(chaiHttp);

	// now it is time to test the GET all the parcels 

	describe('GET /api/v1/Parcels', () => {
		it('should get all the parcels', (done) => {

			chai.request(server)
			.get('/api/v1/Parcels')
			.end((err,res) => {
				res.should.have.status(200);
				res.body.should.be.a('array');
				res.body.length.should.be.eql(0);
				done();
			});
		});

	});

	describe('POST /api/v1/parcels', () =>{
      
      it('should not create a new Parcel unless all field is given', (done) => {
         
         chai.request(server)
         .post('/api/v1/parcels')
         .end((err,res) => {
         	res.should.have.status(400);
         	res.body.should.have.property('message').eql('All fields are required');
 
         	done();
         });

      });

      });
    
    describe('GET /api/v1/parcels/:id', () =>{

    it ('should return a message of no parcel found', (done) => {
      chai.request(server)
      .get('/api/v1/Parcels/:id')
      .end((err, res) => {
       res.should.have.status(404);
          res.body.should.have.property('message').eql('Parcel not found');
          done();
      });

    });

     }); 

    describe('PUT /api/v1/parcels/:id', () =>{

    it ('should return a message of no parcel found', (done) => {
      chai.request(server)
      .put('/api/v1/Parcels/:id')
      .end((err, res) => {
       res.should.have.status(404);
          res.body.should.have.property('message').eql('Parcel not found');
          done();
      });

    });

  

     }); 

    describe('DELETE /api/v1/parcels/:id', () =>{

    it ('should return a message of no parcel found', (done) => {
      chai.request(server)
      .delete('/api/v1/Parcels/:id')
      .end((err, res) => {
       res.should.have.status(404);
          res.body.should.have.property('message').eql('Parcel not found');
          done();
      });

    });

     }); 

    describe('GET /api/v1/Users/:UserID', () =>{

    it ('should return a message of no User found', (done) => {
      chai.request(server)
      .get('/api/v1/Users/:UserID')
      .end((err, res) => {
       res.should.have.status(404);
          res.body.should.have.property('message').eql('User not found');
          done();
      });
    });

    });




