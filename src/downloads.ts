export namespace Download {
  export type FromDataUrlParams = Readonly<{
    dataUrl: string;
    suggestedFileName: string;
  }>;

  export function fromDataUrl({
    dataUrl,
    suggestedFileName
  }: FromDataUrlParams): void {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = suggestedFileName;
    link.click();
  }

  export type ObjectAsJsonParams = Readonly<{
    sourceObject: unknown;
    suggestedFileName: string;
  }>;

  export function objectAsJson({
    sourceObject,
    suggestedFileName
  }: ObjectAsJsonParams): void {
    const jsonString = JSON.stringify(sourceObject);

    const dataUrl = `data:text/json;charset=utf-8,${encodeURIComponent(
      jsonString
    )}`;

    fromDataUrl({
      dataUrl,
      suggestedFileName
    });
  }
}
