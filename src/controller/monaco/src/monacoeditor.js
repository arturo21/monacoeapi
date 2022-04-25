import * as monaco from 'monaco-editor';
let conteditor;
let nomcont="";
let value;
let editor;
let div = genrl.getCreate('div');
div.name = 'root';
div.id = 'root';
div.style = 'width:800px; height:600px; border:1px solid #ccc;';
g("body").append(div);

// Since packaging is done by you, you need
// to instruct the editor how you named the
// bundles that contain the web workers.
self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
		if (label === 'json') {
			return './json.worker.bundle.js';
		}
		if (label === 'css' || label === 'scss' || label === 'less') {
			return './css.worker.bundle.js';
		}
		if (label === 'html' || label === 'handlebars' || label === 'razor') {
			return './html.worker.bundle.js';
		}
		if (label === 'typescript' || label === 'javascript') {
			return './ts.worker.bundle.js';
		}
		return './editor.worker.bundle.js';
	}
};

editor=monaco.editor.create(div, {
	value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
	language: "javascript",
    minimap: {
        enabled: false
    }
});
