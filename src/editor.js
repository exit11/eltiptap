// Load the full build.
import Vue from "vue";
import ElementUI from "element-ui";
import { ElementTiptapPlugin } from "element-tiptap";
// import ElementUI's styles
import "element-ui/lib/theme-chalk/index.css";
// import this package's styles
import "element-tiptap/lib/index.css";

import EditorWrap from "./Components/EditorWrap";

// use ElementUI's plugin
Vue.use(ElementUI);
// use this package's plugin
Vue.use(ElementTiptapPlugin, {
  lang: "ko", // see i18n
  spellcheck: true, // can be overwritten by editor prop
});
// Now you register `'el-tiptap'` component globally.

/* laravel 데이터 전달 변수 설정 */
// let editorProps = {
//   content: window.ELTIPTAP.content,
// };

export const Editor = new Vue({
  components: {
    "editor-wrap": EditorWrap,
  },
  //   data: () => editorProps,
}).$mount("#eltiptap");
