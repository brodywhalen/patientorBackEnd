import express from 'express';
import diagnosesServices from '../services/diagnosesService';


const diagnoseRouter = express.Router();

diagnoseRouter.get('/', (_req ,res) => {
   //console.log('is the route even getting called?');
    //console.log(getDiagnosesData);
    res.json(diagnosesServices.getDiagnosesData());
});

diagnoseRouter.post('/', (_req,res) =>{
    res.send('Saving a diary!');
});

export default diagnoseRouter;