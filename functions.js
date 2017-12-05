function send(text) {
  return resp = text;
}

function embed(title,description,name,value,inline) {
  var resp = {};
  var fields = new Array();
  var f1 = {};
  if(!title) {
    send("You must at least supply a Title!");
    
  } else {
    
    resp.title = title;
    i(!description) {
      //Do nothing
      
    } else {
      
      resp.description = description;
    }
    if(!name) {
      //Do nothing
      
    } else {
      
      f1.name = name;
      if(!value) {
        //Do nothing
        
      } else {
        
        f1.value = value;
      }
      
      if(!inline) {
        f1.inline = false;
        
      } else {
        
        if(inline != "true" && inline != "false") {
          send("You can only choose the options `true` and `false` for the **inline**!");
          
        } else {
          
          f1.inline = inline;
        }
      }
      fields.push(f1);
      resp.fields = fields;
    }
    send(resp);
  }
}
