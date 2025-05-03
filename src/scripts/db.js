import { LowSync } from 'lowdb';
import { JSONFileSync } from 'lowdb/node';

const db = new LowSync(new JSONFileSync("file.json"), {});
db.data = {
    userId: 1,
    username: "user",
    email: "user@gmail.com"
};
db.write();

db.data = {
    userId: 2,
    username: "",
    email: ""
};
db.write();
const newData = [2, "user2", "user2@gmail.com"];
db.update((userData) => ({ userId: userData[0], username: userData[1], email: userData[2] }));

db.get.find({ userId: 2 }).update(newData).write();

db.read();
console.log(db.data);