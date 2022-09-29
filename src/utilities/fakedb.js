// use local storage as your db for now
const addToDb = id => {
  const exists = getDb();
  let break_time = {};
  if (!exists) {
    break_time[id] = 1;
  }
  else {
    break_time = JSON.parse(exists);
    if (break_time[id]) {
      const newCount = break_time[id] + 1;
      break_time[id] = newCount;
    }
    else {
      break_time[id] = 1;
    }
  }
  updateDb(break_time);
}

const getDb = () => localStorage.getItem('break_time');
const updateDb = time => {
  localStorage.setItem('break_time', JSON.stringify(time));
}

const removeFromDb = id => {
  const exists = getDb();
  if (!exists) {

  }
  else {
    const break_time = JSON.parse(exists);
    delete break_time[id];
    updateDb(break_time);
  } 
}

const getStoredTime = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
}

const clearTheTime = () => {
  localStorage.removeItem('break_time');
}

export { addToDb, removeFromDb, clearTheTime, getStoredTime }
