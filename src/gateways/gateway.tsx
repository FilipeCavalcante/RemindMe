import AsyncStorage from '@react-native-community/async-storage';


function setAuditiDates(entity: any) {
    if (!entity.hasOwnProperty('createdAt')) {
        entity["createdAt"] = new Date();
    }

    if (!entity.hasOwnProperty('modifiedAt')) {
        entity["modifiedAt"] = new Date();
    } else {
        entity["modifiedAt"] = new Date();
    }
}

async function setKey(entity: any, keyName: string, stored: any) {
    if (!entity.hasOwnProperty("key")) {

        const keys = stored.length === 0 ? [0] : stored.map((item: any) => item["key"] || 0);
        entity["key"] = keys.sort().reverse()[0] + 1;
    }

    setAuditiDates(entity);

    return entity;
}

export async function save(key: string, data: any, callback?: any) {
    let stored = await retrieve(key);
    if (!stored)
        stored = [];

    let dataToSave = await setKey(data, key, stored);
    console.debug(dataToSave)
    
    await AsyncStorage.setItem(key, JSON.stringify([...stored, dataToSave]), callback);
}

export async function retrieve(key: string) {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(data);
}

export function clearStorage() {
    AsyncStorage.clear();
}
