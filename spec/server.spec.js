import request from 'request';
import ParcelsModel from '../models/Courier';

describe("Server", () =>{

	var server;
	beforeAll(() => {

		server = require("../server");

	});

	afterAll(() => {

        server.close();
	});

  describe('Parcels', () => {
     beforeEach((done) => {
      
       ParcelsModel.remove({}, (err) => {
        done();
       });

     });

     describe("GET /api/v1/Parcels", () => {

        var data = {};
        beforeAll((done) => {
          
          request.get('http://localhost:9000/api/v1/Parcels', (error,res,body) => {

            data.status = res.statusCode;
            data.body = res.body;
            done();

          });
        });

        it('should get all the parcels', (done) => {
          expect(data.status).toBe(200); 
          expect(data.body).toBe('array');
          expect(data.body).length.toBe(0);
          done();
        });



  }); 

  });
});