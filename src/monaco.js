// Because 'react-monaco-editor' requires a preprocessor (hello, webpack)
// require this package as a JS global :(
import MonacoEditor from 'react-monaco-editor';
window.MonacoEditor = MonacoEditor;