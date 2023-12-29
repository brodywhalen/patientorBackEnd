"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PatientsData_1 = __importDefault(require("../../data/PatientsData"));
const DiagonosesData_1 = __importDefault(require("../../data/DiagonosesData"));
const getDiagnosesData = () => {
    return DiagonosesData_1.default;
};
const getPatientNoSSN = () => {
    return PatientsData_1.default.map(({ id, name, dateOfBirth, ssn, gender, occupation }) => ({ id, name, dateOfBirth, ssn, gender, occupation }));
};
exports.default = {
    getDiagnosesData,
    getPatientNoSSN
};
// import { DiaryEntry, NonSensitiveDiaryEntry } from '../types';
// const getEntries = (): DiaryEntry[] => {
//     return diaries;
// };
// const addDiary = () => {
//     return null;
// };
// // use Pick<> or Omit<TYPE, BOOLEAN OPERATION>
// const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
//     return diaries.map(({id, date,weather, visibility}) => ({
//         id,
//         date,
//         weather,
//         visibility,
//     }));
// };
// export default {
//     getEntries,
//     addDiary,
//     getNonSensitiveEntries
// };
//
