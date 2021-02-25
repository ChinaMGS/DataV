# Description: 开发平台 pdfjs 修改日志

### Author：xiaolong

### Date: 2020-08-18 10:06:00

### LastEditors：xiaolong

### LastEditTime: 2020-08-18 10:12:00

### Version：2.2.228

**viewer.html：**

- 1.通过 style=“display: none” 隐藏了页面右上角的打印、下载按钮。

**viewer.js：**

- 1.cMapUrl 对象，替换了 value，原本指向下载的本地 cmaps，现修改为线上的对应版本 cmaps。并且删除了本
  地的 cmaps 文件夹。
- 2.注释了两行代码，从而不能下载打印 eventBus.\_on("print", webViewerPrint);
  eventBus.\_on("download", webViewerDownload);
- 3.注释了两行代码，从而不能通过 ctrl+s 下载文件 PDFViewerApplication.download(); handled = true;
- 4.注释了三行代码，不会报错 Uncaught (in promise) Error: file origin does not match viewer's at
  validateFileURL if (origin !== viewerOrigin && protocol !== 'blob:') { throw new Error('file
  origin does not match viewer\'s'); }

**pdf.worker.js：**

- 1.注释了两行代码，从而可以展示电子签章 data.fieldValue = null;
  \_this3.setFlags(\_util.AnnotationFlag.HIDDEN);
- 2.注释了一行代码，消除警告 (0, \_util.warn)('Unimplemented widget field type "' + fieldType + '",
  ' + 'falling back to base field type.');

**pdf.js：**

- 1.注释了一行代码，消除警告 (0, \_display_utils.deprecated)('RenderTask.then method, use the
  `promise` getter instead.');

**暂存问题：**

- 1.升级到最新版本 pdfjs（例如 2.4.456），注释了隐藏电子签章的代码后，会报错 DOMException: Failed to
  execute 'postMessage' on 'DedicatedWorkerGlobalScope'，且在页面嵌入展示的 pdf 会一直不显示电子签章
