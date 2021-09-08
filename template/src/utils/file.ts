interface SaveAsFunction {
  (
    sourceOrContent: string|File|Blob|MediaSource,
    filename: string,
  ): void
  a?: HTMLAnchorElement
}

/**
 *
 * @param {string|File|Blob|MediaSource} sourceOrContent source url or content
 * @param filename
 */
export const saveAs: SaveAsFunction = (
  sourceOrContent,
  filename,
) => {
  if (!saveAs.a) {
    saveAs.a = document.createElement('a');
    saveAs.a.classList.add('download-utils')
    saveAs.a.style.display = 'none';
    document.body.appendChild(saveAs.a);
  }
  const { a } = saveAs;
  a.href = typeof sourceOrContent === 'string' ? sourceOrContent : URL.createObjectURL(sourceOrContent);
  a.download = filename;
  a.click();
  a.href = ''
  a.download = ''
}
