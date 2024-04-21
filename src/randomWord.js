import { generate } from "random-words";

const wordString = generate({
    exactly: 10,
    minLength: 3,
    maxLength: 7,
    join: " ",
  });

export default wordString