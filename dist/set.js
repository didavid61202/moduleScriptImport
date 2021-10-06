export class DynamicFunction {
    dynamicRequest(tPageName, idName, tFieldName) {
        console.log(`requesting ${tPageName},${idName},${tFieldName}`);
    }
    static staticDynamicRequest(tPageName, idName, tFieldName) {
        console.log(`requesting ${tPageName},${idName},${tFieldName}`);
    }
}
export const gsDF = new DynamicFunction();
