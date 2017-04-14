/* global window */

export function newRequest() {
  return new window.XMLHttpRequest();
}

export function resolveUrl(origin, link) {
  // https://github.com/tus/tus-node-server/blob/b2f33edfcb9d2552d5ae9d526fedfa2c90694eec/lib/handlers/PostHandler.js#L18
  // 假设 store.path 跟 API 路由一致
  const paths = link.split('/');
  return origin + (origin[origin.length - 1] === '/' ? '' : '/') + paths[paths.length - 1];
}
