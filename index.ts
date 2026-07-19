import Proxy, { gunzip, wildcard } from "./lib/proxy";

const createProxy = () => new Proxy();

createProxy.gunzip = gunzip;
createProxy.wildcard = wildcard;

export = createProxy;
