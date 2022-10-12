const isValidJSON = obj => {
    try {
      JSON.parse(obj);
      return true;
    } catch (e) {
      return false;
    }
  };
  console.log(isValidJSON('{"name":"van ha","age":20}'));
  console.log(isValidJSON('{"name":"clara",age:"18"}'));
  console.log(isValidJSON(null));