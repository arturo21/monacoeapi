devart=(function(global,factory){
	let conteditor;
	let nomcont="";
	let value;
	let editorInt;
	let editorGlobal;
	function getEditor(editor){
		if(typeof editor !== 'string'){
			editorInt=editor;
			return editor;
		}
	}
	function setEvent(event){
		if(options.language!=''){
			language=options.language;
		}
		else{
			language="javascript";
			genrl.warn("Debe establecer un language para el editor");
		}
		if(options.value!=''){
			internvalue=options.value;
		}
		else{
			internvalue="";
			genrl.warn("Debe establecer un contenedor para el editor");
		}
		return editor;
	}
  	return{
  		run:function(editor){
			if(typeof editor !== 'string'){
				editorGlobal=getEditor(editor);
			}
  		},
  		event:function(options){

  		},
	}
}(window));
module.exports=devart;
