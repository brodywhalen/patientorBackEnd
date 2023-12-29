"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diagnosesService_1 = __importDefault(require("../services/diagnosesService"));
const patientRouter = express_1.default.Router();
patientRouter.get('/', (_req, res) => {
    //console.log('is the route even getting called?');
    //console.log(getDiagnosesData);
    res.json(diagnosesService_1.default.getPatientNoSSN());
});
patientRouter.post('/', (_req, res) => {
    res.send('Saving a diary!');
});
exports.default = patientRouter;
