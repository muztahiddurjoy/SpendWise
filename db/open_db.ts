import * as SQLite from 'expo-sqlite';


const openDB = async () => {
    const db = await SQLite.openDatabaseAsync('spend_wise.db');
    return db
}

export default openDB