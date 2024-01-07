import patientData from '../../data/PatientsData';
import diagnosesData from '../../data/DiagonosesData';
import { DiagnosesType, PatientsType } from '../types';
import {v1 as uuid} from 'uuid';


const getDiagnosesData = ():DiagnosesType[] => {

    return diagnosesData;
};

const getPatientNoSSN = (): Omit<PatientsType, 'ssn'>[] => {

    return patientData.map(({id, name, dateOfBirth, gender, occupation}) => ({id, name, dateOfBirth, gender, occupation}));
};

const addPatient = (entry: Omit<PatientsType, 'id'>) => {
    const newId = uuid();
    const newPatient = {
        id: newId,
        ...entry
    };
    patientData.push(newPatient);
    return newPatient;
};

export default {
    getDiagnosesData,
    getPatientNoSSN,
    addPatient
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