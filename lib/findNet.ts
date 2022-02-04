import { networkInterfaces } from "os";

interface IThisNet {
  [key: string]: string;
}

const thisNet: IThisNet = {};

const nets = networkInterfaces();

function findLocal() {
  for (const [key, value] of Object.entries(nets)) {
    for (const item of value) {
      if (item.family === "IPv4" && !item.internal) {
        thisNet[key] = item.address;
      }
    }
  }
}

findLocal();

export default thisNet;
