export class DynamicFunction {
  public dynamicRequest(tPageName: string, idName: string, tFieldName: string) {
    console.log(`requesting ${tPageName},${idName},${tFieldName}`);
  }

  static staticDynamicRequest(
    tPageName: string,
    idName: string,
    tFieldName: string
  ) {
    console.log(`requesting ${tPageName},${idName},${tFieldName}`);
  }
}

export const gsDF = new DynamicFunction();
