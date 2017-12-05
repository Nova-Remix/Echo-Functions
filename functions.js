function send(text) {
  return resp = text;
}

function embed(title,description,name,value,inline) {
  var resp = {};
  var fields = new Array();
  var f1 = {};
  resp.title = title || "";
  resp.description = description || "";
  f1.name = name || "";
  f1.value = value || "";
  f1.inline = inline || false;
  fields.push(f1);
  resp.fields = fields;
  send(resp);
}
