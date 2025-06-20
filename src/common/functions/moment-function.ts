import * as moment from 'moment-timezone';
export function getCurrentDate () { 

    const EcuadorTimeZone = 'America/Guayaquil';
    const now = moment().tz(EcuadorTimeZone);
    return now.format('YYYY-MM-DD HH:mm:ss');

};