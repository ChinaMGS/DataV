// pdfjs 插件配置

const version = '2.2.228'
const pdfjsLib = require('../../../static/pdf/build/pdf.js')
// pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.js`
const CMAP_URL = `https://unpkg.com/pdfjs-dist@${version}/cmaps/`

export { pdfjsLib, CMAP_URL }
