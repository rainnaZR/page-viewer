import request from "~/static/request";
interface Model {
  [key: string]: any;
}

const getPageFrameDataXhr = (data: Model) => request.get('/page/frame', data);

export {
  getPageFrameDataXhr,
}