<template>
  <div v-loading="loading">
    <textarea id="eltiptapContent" ref="eltiptapContent" style="display:none;"></textarea>
    <el-tiptap
      :extensions="extensions"
      :content="content"
      @onUpdate="onUpdateEvent"
      placeholder="내용을 입력해주세요"
    />
  </div>
</template>

<script>
import {
  // all extensions
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Link,
  Image,
  Blockquote,
  ListItem,
  BulletList, // use with ListItem
  OrderedList, // use with ListItem
  TodoItem,
  TodoList, // use with TodoItem
  TextAlign,
  Indent,
  HorizontalRule,
  HardBreak,
  History,
  LineHeight,
  Iframe,
  CodeBlock,
  Table, // use with TableHeader, TableCell, TableRow
  TableHeader,
  TableCell,
  TableRow,
  FormatClear,
  TextColor,
  TextHighlight,
  TrailingNode,
  Preview,
  // Print,
  // Fullscreen,
  // CodeView,
  // SelectAll,
} from "element-tiptap";

import Axios from "axios";

// import codemirror from "codemirror";
// import "codemirror/lib/codemirror.css"; // import base style
// import "codemirror/mode/xml/xml.js"; // language
// import "codemirror/addon/selection/active-line.js"; // require active-line.js
// import "codemirror/addon/edit/closetag.js"; // autoCloseTags

const eltiptapContent = document.getElementById("eltiptapContent").innerText;

export default {
  name: "EditorWrap",
  data: () => ({
    extensions: [
      new Doc(),
      new Text(),
      new Paragraph(),
      new Bold({ bubble: true, menubar: false }),
      new Underline({ bubble: true, menubar: false }),
      new Italic({ bubble: true, menubar: false }),
      new Strike({ bubble: true, menubar: false }),
      new TextColor({ bubble: true, menubar: false }),
      new TextHighlight({ bubble: true, menubar: false }),
      new Link({ bubble: true, menubar: false }),
      new FormatClear({ bubble: true, menubar: false }),
      new Heading({ level: 5 }),
      new LineHeight(),
      new TextAlign(),
      new ListItem(),
      new BulletList(),
      new OrderedList(),
      new TodoItem(),
      new TodoList(),
      new Indent(),
      new HardBreak(),
      new HorizontalRule(),
      new TrailingNode(),
      new Blockquote(),
      new Table({
        resizable: true,
      }),
      new TableHeader(),
      new TableRow(),
      new TableCell(),
      new CodeBlock(),
      new Image({
        //urlPattern: ``,
        uploadRequest: function (file) {
          const formData = new FormData();
          formData.append("image", file);
          return new Promise((resolve, reject) => {
            Axios.post(`/editor/uploadImage`, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": document.head.querySelector(
                  'meta[name="csrf-token"]'
                ).content,
              },
            }).then((res) => {
              resolve(res.data.url);
            });
          });
        },
      }),
      new Iframe(),
      new History(),
      new Preview(),
      // new Fullscreen(),
      //   new CodeView({
      //     codemirror,
      //     codemirrorOptions: {
      //       styleActiveLine: true,
      //       autoCloseTags: true,
      //     },
      //   }),
    ],
    content: ``,
    loading: true,
  }),
  mounted() {
    this.content = eltiptapContent;
    this.loading = false;
  },
  methods: {
    onUpdateEvent(output, options) {
      const { getJSON, getHTML } = options;
      document.getElementById("eltiptapContent").innerText = getHTML();
    },
  },
};
</script>
