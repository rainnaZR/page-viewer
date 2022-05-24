import request from "~/static/request";

const getPageFrameXhr = data => request.get('/page/frame', data);

export {
  getPageFrameXhr,
}