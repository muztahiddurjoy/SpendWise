import openDB from "@/db/open_db";

const checkOrCreateTables = async () => {
    const db = await openDB()
    db.execAsync("CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, amount INTEGER, date TEXT, category TEXT, givenBy TEXT, extraNote TEXT)").then(()=>{
        console.log("Transaction Table Created!")
    }).catch((err)=>{
        console.log(err)
    })
    db.execAsync("CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)").then(()=>{
        console.log("Category Table Created!")
    }).catch((err)=>{
        console.log(err)
    })
    db.execAsync("CREATE TABLE IF NOT EXISTS accounts (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)").then(()=>{
        console.log("Account Table Created!")
    }).catch((err)=>{
        console.log(err)
    })

}

export default checkOrCreateTables