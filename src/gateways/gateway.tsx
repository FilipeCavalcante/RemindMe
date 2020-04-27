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

function setKey(entity: any, keyName: string) {
    if (!entity.hasOwnProperty('id')) {
        const newId = Guid.create();
        entity['id'] = newId.hasOwnProperty('value') ? newId['value'] : newId;
    }
    setAuditDates(entity);

    return entity;
}

export async function saveMultiple(key: string, data: any[], callback?: any) {
    let stored = await retrieve(key);
    if (!stored) stored = [];

    if (data.length > 0) {
        data.forEach((item) => {
            item = setKey(item, key);
        });

        await AsyncStorage.setItem(
            key,
            JSON.stringify([ ...stored, ...data ]),
            callback
        );
    }
}

export async function save(key: string, data: any, callback?: any) {
    let stored = await retrieve(key);
    if (!stored) stored = [];

    let dataToSave = setKey(data, key);
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
