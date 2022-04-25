devart=(function(global,factory){
	let conteditor;
	let nomcont="";
	let value;
	let editor;
	function getEditor(options){
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
  		run:function(options){

  		}
	}
}(window));
module.exports=devart;
