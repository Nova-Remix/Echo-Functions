function send(text) {
  return resp = text;
}

function embed(title,description) {
  var resp = {};
  var fields = new Array();
  resp.title = title;
  resp.description = description;
  resp.fields = fields;
  return send(embed(title,description));
}
