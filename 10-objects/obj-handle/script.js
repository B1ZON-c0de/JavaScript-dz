function handleObject(obj, key, action) {
  if (action === 'get') return obj[key];

  if (action === 'add') {
    obj[key] = '';
    return obj;
  } else if (action === 'delete') {
    delete obj[key];
    return obj;
  }
  return obj;
}

const student = {
  name: 'Maxim',
  programmingLanguage: 'JavaScript',
  lastName: 'Roman',
};

const result = handleObject(student, 'programmingLanguage', 'add');
console.log('result', result); // { name: 'Maxim' }
