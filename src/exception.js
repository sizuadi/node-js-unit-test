export class MyException extends Error {}

export const callMe = (name) => {
  if (name == "Adi") {
    throw new MyException("ups my exceptions happens");
  } else {
    return "OK";
  }
};
