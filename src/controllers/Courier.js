import ParcelsModel from '../models/Courier';

const deliveries = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} reflection object 
   */
  create(req, res) {
    if (!req.body.Name && !req.body.Model && !req.body.From && !req.body.To
       && !req.body.NowAt && !req.body.Status && !req.body.UserID) {
      return res.status(400).send({'message': 'All fields are required'})
    }
    const sendy = ParcelsModel.create(req.body);
    return res.status(201).send(sendy);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} reflections array
   */
  getAll(req, res) {
    const all = ParcelsModel.findAll();
    return res.status(200).send(all);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} reflection object
   */
  getOne(req, res) {
    const one = ParcelsModel.findOne(req.params.id);
    if (!one) {
      return res.status(404).send({'message': 'Parcel not found'});
    }
    return res.status(200).send(one);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated reflection
   */
  update(req, res) {
    const update = ParcelsModel.findOne(req.params.id);
    if (!update) {
      return res.status(404).send({'message': 'Parcel not found'});
    }
    const updatedParcel = ParcelsModel.update(req.params.id, req.body)
    return res.status(200).send(updatedParcel);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
  delete(req, res) {
    const deletee = ParcelsModel.findOne(req.params.id);
    if (!deletee) {
      return res.status(404).send({'message': 'Parcel not found'});
    }
    const ref = ParcelsModel.delete(req.params.id);
    return res.status(204).send(ref);
  },
    
  getUser(req, res){
    const user = ParcelsModel.findUser(req.params.UserID);
      if (!user){
          return res.status(404).send({"message": 'User not found'});
      }
      
      return res.status(200).send(user);
}    
    
}

export default deliveries;