function send(text) {
  return resp = text;
}

function embed(title,description,name,value,inline) {
  var resp = {};
  var fields = new Array();
  var f1 = {};
  if(!title) {
    return "You must at least supply a Title!";
  } else {
    if(title === "BL") {
      //Do Nothing
    } else {
      resp.title = title;
    }
    if(!description || description === "BL) {
      //Do nothing
    } else {
      resp.description = description;
    }
    if(!name || name === "BL") {
      //Do nothing
    } else {
      f1.name = name;
      if(value) {
        f1.value = value;
      } else {
        if(!value && name === "BL" || value && name === "BL") {
          //Do Nothing
        } else {
          f1.value = "⠀";
        }
      }
      if(!inline) {
        f1.inline = false;
      } else {
        if(inline != "true" && inline != "false") {
          return "You can only choose the options `true` and `false` for the **inline**!";
        } else {
          f1.inline = inline;
        }
      }
      fields.push(f1);
      resp.fields = fields;
    }
    return resp;
  }
}

function rNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function userRoles(id) {
  var letters = ["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z"]
  if(!id) return send("Error! You must have a UserID for \`userRoles\`! \`\`\`js\nuserRoles(id)\`\`\`");
  
  var anyLetters = id.split("");
  
  for(var i = 0; i < letters.length; i++) {
    if(letters.hasOwnProperty[anyLetters[i]]) {
      return send("Nope! The **UserID** does not contain any letters and/or special characters");
    } else {
      //Do Nothing
    }
  }
  var myroles = new Array();
  for (var x = 0; x < Server.Roles.length; x++) {
    if(MemberHasRole(id, Server.Roles[x].Name)) {
      myroles.push(Server.Roles[x].Name);
    } else {
      //Do nothing
    }
  }
  return myroles;
}

function string(what) {
  return JSON.stringify(what);
}

function parse(what) {
  return JSON.parse(what);
}

function int(what) {
  return parseInt(what);
}
