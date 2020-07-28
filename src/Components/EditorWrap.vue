<template>
  <div>
    <textarea id="eltiptapContent" ref="eltiptapContent" style="display:none;">
      <h2 style="text-align: center">Welcome To Element Tiptap Editor Demo</h2><p>🔥 <strong>Element Tiptap Editor </strong>🔥is a WYSIWYG rich-text editor using  <a href="https://github.com/scrumpy/tiptap" rel="noopener noreferrer nofollow">tiptap</a> and <a href="https://github.com/ElemeFE/element" rel="noopener noreferrer nofollow">element-ui</a> for Vue.js <img src="https://i.ibb.co/nbRN3S2/undraw-upload-87y9.png" alt="" title="" height="200" data-display="right"> that\'s easy to use, friendly to developers, fully extensible and clean in design.</p><p></p><p style="text-align: right">👉Click on the image to get started image features 👉</p><p></p><p>You can switch to <strong>Code View </strong>💻 mode and toggle <strong>Fullscreen</strong> 📺 in this demo.</p><p></p><p><strong>Got questions or need help or feature request?</strong></p><p>🚀 <strong>welcome to submit an <a href="https://github.com/Leecason/element-tiptap/issues" rel="noopener noreferrer nofollow">issue</a></strong> 😊</p><p>I\'m continuously working to add in new features.</p><p></p><blockquote><p>This demo is simple, switch tab for more features.</p><p>All demos source code: <a href="https://github.com/Leecason/element-tiptap/blob/master/examples/views/Index.vue" rel="noopener noreferrer nofollow">source code 🔗</a></p></blockquote>
    </textarea>
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
  // Preview,
  // Print,
  // Fullscreen,
  // CodeView,
  // SelectAll,
} from "element-tiptap";

// import codemirror from "codemirror";
// import "codemirror/lib/codemirror.css"; // import base style
// import "codemirror/mode/xml/xml.js"; // language
// import "codemirror/addon/selection/active-line.js"; // require active-line.js
// import "codemirror/addon/edit/closetag.js"; // autoCloseTags

export default {
  name: "EditorWrap",
  //props: ["content"],
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
      new Image(),
      new Iframe(),
      new History(),
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
  }),
  mounted() {
    this.content = this.$refs.eltiptapContent.innerText;
    console.log(this.$refs.eltiptapContent);
  },
  methods: {
    onUpdateEvent(output, options) {
      const { getJSON, getHTML } = options;
      this.$refs.eltiptapContent.innerText = getHTML();
    },
  },
};
</script>
