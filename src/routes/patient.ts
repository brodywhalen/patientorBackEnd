import express from 'express';
import patientServices from '../services/diagnosesService';
// import patientData from '../../data/PatientsData';
import toNewPatientType from '../utils';


const patientRouter = express.Router();

patientRouter.get('/', (_req ,res) => {
   //console.log('is the route even getting called?');
    //console.log(getDiagnosesData);
    res.send(patientServices.getPatientNoSSN());
});

patientRouter.post('/', (req,res) =>{
    
    const newPatient = toNewPatientType(req.body); // this is where we need to add type guarding
    patientServices.addPatient(newPatient);
    
    res.send('Saving a diary!');

});

export default patientRouter;