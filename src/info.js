export const project = 'Corset';
export const year = new Date().getFullYear();

const CDNURL = version => `https://cdn.corset.dev/${version}/main.js`;
const CDNWASMURL = version => `https://cdn.corset.dev/${version}/main.wasm`;

export const version = '0.3.0';
export const cdnURL = CDNURL(version);
export const cdnWasmURL = CDNWASMURL(version);
export const npmPkg = 'corset';