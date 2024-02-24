import { getDatabase, ref, set, update } from "firebase/database";
import { FirebaseDB as db } from "../../../config/firebase/firebase.js";

function writeUserData(name, birthday, userId = 'default') {
  update(ref(db, 'users', ), {
    [userId]: {
      full_name: name,
      date_of_birth: birthday
    }
  });
}

export { writeUserData };
