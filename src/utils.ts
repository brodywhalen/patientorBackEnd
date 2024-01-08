import {newPatientType, Gender } from "./types";

const toNewPatientType = (object:unknown): newPatientType => {
    if(!object || typeof object !== 'object'){
        throw new Error('incorrect or missing data');
    }
    if('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object){
        
        const newEntry: newPatientType = {
            name: parseName(object.name),
            dateOfBirth: parseDOB(object.dateOfBirth),
            ssn:  parseSSN(object.ssn),
            gender: parseGender(object.gender),
            occupation: parseOccupation(object.occupation)      
        };
        return newEntry;
    

    }
    throw new Error('incorrect data: some fields are missing');

};

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};
const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
  };

const parseDOB = (DOB:unknown) => {
 if(!DOB || !isString(DOB) || !isDate(DOB)){
    throw new Error('incorrect or missing DOB content');
    }
    return DOB;
};
const parseName = (name: unknown) => {
    if(!name || !isString(name)){
        throw new Error('incorrect or missing name content');
    }
    return name;
};
const parseSSN = (SSN: unknown) => {
    if(!SSN || !isString(SSN)){
        throw new Error('incorrect or missing SSN content');
    }
    return SSN;
};
const parseGender = (gender: unknown) => {
    if(!gender || !isString(gender) || !isGender(gender)){
        throw new Error('incorrect or missing gender content');
    }
    return gender;
};
const isGender = (param: string):param is Gender => {
    return Object.values(Gender).map(v => v.toString()).includes(param);
}; 
const parseOccupation = (occupation: unknown) => {
    if(!occupation || !isString(occupation)){
        throw new Error('incorrect or missing Occupation content');
    }
    return occupation;
};
export default toNewPatientType;