import Router from '@/router';
let Util = {
   link(path) {
      Router.push(path);
   },
   back() {
      Router.back(-1);
   },
   rLink(path) {
      Router.replace(path);
   }
}
export default Util;
