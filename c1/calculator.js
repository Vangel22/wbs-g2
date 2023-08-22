// mnozenje, delenje, sobiranje, odzimanje

//operacija, parametar 1, parametar 2
function calculator(operacija, param1, param2) {
  let res = 0;
  switch (operacija) {
    case "sobiranje":
      //   res = param1 + param2;
      //   break;
      return param1 + param2;
    case "odzemanje":
      return param1 - param2;
    case "mnozenje":
      return param1 * param2;
    case "delenje":
      return param1 / param2;
    default:
      return "Not recognized operation";
  }
  //   return res;
}

console.log(calculator("mnozenje", 2, 2));
