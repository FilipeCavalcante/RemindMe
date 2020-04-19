import AsyncStorage from '@react-native-community/async-storage';


export async function save(key: string, data: any, callback?: any) {
    let stored = await retrieve(key);
    if (!stored)
        stored = [];

    await AsyncStorage.setItem(key, JSON.stringify([...stored, data]), callback);
}

export async function retrieve(key: string) {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(data);
}
