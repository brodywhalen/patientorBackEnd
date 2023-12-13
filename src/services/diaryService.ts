import diaries from '../../data/diariesdata';
import { DiaryEntry, NonSensitiveDiaryEntry } from '../types';

const getEntries = (): DiaryEntry[] => {
    return diaries;
};
const addDiary = () => {
    return null;
};
// use Pick<> or Omit<TYPE, BOOLEAN OPERATION>
const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
    return diaries.map(({id, date,weather, visibility}) => ({
        id,
        date,
        weather,
        visibility,
    }));
};

export default {
    getEntries,
    addDiary,
    getNonSensitiveEntries
};

//