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
    if(!description) {
      //Do nothing
    } else {
      resp.description = description;
    }
    if(!name) {
      //Do nothing
    } else {
      f1.name = name;
      if(!value) {
        f1.value = "⠀";
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

function rNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function userRoles(id) {
  //var letters = ["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s"]
  if(!id) return send("Error! You must have a UserID for \`userRoles\`! \`\`\`js\nuserRoles(id)\`\`\`");
  if(id.match(/[a-z]/i) == true) return send("Nope! The UserID does not contain any letters and/or special characters");
  var roles = new Array();
  for (var x = 0; x < ServerRoles.length; x++) {
    if(MemberHasRole(id, ServerRoles[x])) {
      roles.push(ServerRoles[x]);
    } else {
      //Do nothing
    }
  }
  send(roles.slice(1).join("\n"));
}
