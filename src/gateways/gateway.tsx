import AsyncStorage from '@react-native-community/async-storage';
import { Guid } from 'guid-typescript'


const endpointApi = 'https://5eb317e7974fee0016ecd297.mockapi.io/';
const headerRequest = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

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

    // if (data.length > 0) {
    //     data.forEach((item) => {
    //         item = setKey(item, key);

    //     });

    data.forEach(item => save(key, item));

}

export async function save(key: string, data: any, callback?: any) {
    let stored = await retrieve(key);
    if (!stored) stored = [];

    let dataToSave = setKey(data, key);

    await fetch(`${endpointApi}\\${key}`, {
        method: 'POST',
        headers: headerRequest,
        body: JSON.stringify(dataToSave),
    })
}

export async function retrieveBy(key: string, itemId: string | any) {
    const response = await fetch(`${endpointApi}\\${key}\\${itemId}`);
    return await response.json();
}

export async function retrieve(key: string) {
    const response = await fetch(`${endpointApi}\\${key}`);
    return await response.json();

}

export async function remove(key: string, itemId: string | any, callBack?: any) {
    await fetch(`${endpointApi}\\${key}\\${itemId}`, {
        method: 'DELETE',
        headers: headerRequest
    })
}

export async function udpate(key: string, itemId: string | any, data: any, callback?: any) {
    await fetch(`${endpointApi}\\${key}\\${itemId}`, {
        method: 'PUT',
        headers: headerRequest,
        body: JSON.stringify(data)
    });
}
