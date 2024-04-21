import boxen from "boxen";

const termWidth = process.stdout.columns;
const termHeight = process.stdout.rows;
const Boxen = (text) => {
  return boxen(text, {
    title: "prompt",
    padding: 1,
    borderStyle: "single",
    borderColor: "blue",
    width: termWidth - 4,
    height: termHeight - 2,
  });
};
export default Boxen;
