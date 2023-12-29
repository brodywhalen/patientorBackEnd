import express from 'express';
import patientServices from '../services/diagnosesService';


const patientRouter = express.Router();

patientRouter.get('/', (_req ,res) => {
   //console.log('is the route even getting called?');
    //console.log(getDiagnosesData);
    res.send(patientServices.getPatientNoSSN());
});

patientRouter.post('/', (_req,res) =>{
    res.send('Saving a diary!');
});

export default patientRouter;