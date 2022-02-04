import thisNet from "./findNet";

function showOutline(port: string | number) {
  const standardLog = [
    "  |  Your server is running on:",
    `  |    Local:            http://localhost:${port}`,
    `  |    On Your Network:  http://${thisNet["eth0"]}:${port}`,
  ];

  const length = standardLog[2].length + 3;

  for (let i = 0; i < 7; i++) {
    if (i === 0 || i === 6) {
      const line = `  ${"-".repeat(length - 2)}`;
      console.log(`${i === 0 ? "\n" : ""}${line}${i === 6 ? "\n" : ""}`);
    } else if (i === 1 || i === 5) {
      console.log(`  |${" ".repeat(length - 4)}|`);
    } else if (i === 2) {
      const restLength = length - standardLog[0].length - 1;
      console.log(`${standardLog[0]}${" ".repeat(restLength)}|`);
    } else if (i === 3) {
      const restLength = length - standardLog[1].length - 1;
      console.log(`${standardLog[1]}${" ".repeat(restLength)}|`);
    } else {
      console.log(`${standardLog[2]}  |`);
    }
  }
}

function noShowOutline(port: string | number) {
  const standardLog = [
    "\nYour server is running on:",
    `  Local:            http://localhost:${port}`,
    `  On Your Network:  http://${thisNet["eth0"]}:${port}\n`,
  ];

  for (let i = 0; i < 3; i++) {
    console.log(standardLog[i]);
  }
  return;
}

function lazyNet(port: string | number, outline = false) {
  if (outline) return showOutline(port);
  return noShowOutline(port);
}

export default lazyNet;
