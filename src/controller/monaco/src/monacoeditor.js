import * as monaco from 'monaco-editor';
let conteditor;
let nomcont="";
let value;
let editor;
let div = document.createElement('div');
let contenteditor;
div.name = 'root';
div.id = 'root';
div.style = 'width:100%; height:100%; border:1px solid #ccc;';
document.body.appendChild(div);
contenteditor=document.querySelector("#root");
monaco.editor.create(contenteditor, {
	value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
	language: 'javascript',
	theme: 'vs-dark',
 	minimap: {
		enabled: false
	}
});
