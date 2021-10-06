import { gsDF, DynamicFunction } from "./set.js";

declare global {
  interface Window {
    DynamicFunction: typeof DynamicFunction;
    gsDF: typeof gsDF;
  }
}
window.DynamicFunction = DynamicFunction;
window.gsDF = gsDF;
