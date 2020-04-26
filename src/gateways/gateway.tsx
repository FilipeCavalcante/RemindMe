import AsyncStorage from '@react-native-community/async-storage';
import { Guid } from 'guid-typescript'

function setAuditDates(entity: any) {
    if (!entity.hasOwnProperty('createdAt')) {
        entity['createdAt'] = new Date();
    }

    if (!entity.hasOwnProperty('modifiedAt')) {
        entity['modifiedAt'] = new Date();
    } else {
        entity['modifiedAt'] = new Date();
    }
}

async function setKey(entity: any, keyName: string, stored: any) {
    if (!entity.hasOwnProperty('id')) {
        entity['id'] = Guid.create();
    }
    setAuditDates(entity);

    return entity;
}

export async function save(key: string, data: any, callback?: any) {
    let stored = await retrieve(key);
    if (!stored) stored = [];

    let dataToSave = await setKey(data, key, stored);
    console.debug(dataToSave);

    await AsyncStorage.setItem(
        key,
        JSON.stringify([ ...stored, dataToSave ]),
        callback,
    );
}

export async function retrieve(key: string) {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(data || '[]');
}

export function clearStorage() {
    AsyncStorage.clear();
}
