//set the env variable to test during the test
process.env.NODE_ENV = "test";

const ParcelsModel = require('../src/models/Courier');
const ParcelsController = require('../src/controllers/Courier')
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
//const uuid = require('uuid');


const should = chai.should();
const expect = chai.expect;

chai.use(require('chai-uuid'));
chai.use(chaiHttp);

	// now it is time to test the GET all the parcels 

	describe('GET /api/v1/Parcels', () => {
		it('should get all the parcels', (done) => {

			chai.request(server)
			.get('/api/v1/Parcels')
			.end((err,res) => {
				res.should.have.status(200);
				res.body.should.be.a('array');
				//res.body.length.should.be.eql(0);
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

      it('should create a new parcel', (done) => {

        const body = {"Name":"Iphone", "Model":"99JJh", "From":"Kigali", "To":"Kigali", "NowAt":"Kigali", "Status":"Delivered", "UserID":4}
        
        chai.request(server)
        .post('/api/v1/parcels')
        .send(body)
        .end((err,res) => {
         
         res.should.have.status(201);
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

    it('should return a parcel based on its ID', (done) =>{
     
     chai.request(server)
     .get('/api/v1/Parcels/e27c3dde-2a57-422f-ada9-f7c267fcc3d0')
     .end((err,res) => {

      res.should.have.status(200);
      res.body.should.be.a('object');
      expect('e27c3dde-2a57-422f-ada9-f7c267fcc3d0').to.be.a.uuid('v4');
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

    it('should Update a parcel based on its ID', (done) =>{
     
     chai.request(server)
     .put('/api/v1/Parcels/e27c3dde-2a57-422f-ada9-f7c267fcc3d0')
     .end((err,res) => {

      res.should.have.status(200);
      res.body.should.be.a('object');
      expect('e27c3dde-2a57-422f-ada9-f7c267fcc3d0').to.be.a.uuid('v4');
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

      it('should Delete a parcel based on its ID', (done) =>{
     
     chai.request(server)
     .delete('/api/v1/Parcels/e27c3dde-2a57-422f-ada9-f7c267fcc3d0')
     .end((err,res) => {

      res.should.have.status(204);
      res.body.should.be.a('object');
      expect('e27c3dde-2a57-422f-ada9-f7c267fcc3d0').to.be.a.uuid('v4');
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

    it('should return a user based on UserID', (done) => {

     
        chai.request(server)
        .get('/api/v1/Users/4')
        .end((err, res)=> {
          res.should.have.status(200);
          done();
            
        });
    });

    });




