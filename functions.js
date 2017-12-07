function send(text) {
  if(!text) return resp = "I can't send an empty message! Please examine the **send()** function carefully.";
  return resp = text;
}

function embed(title,description,name,value,inline) {
  var resp = {};
  var fields = new Array();
  var f1 = {};
  
  if(!title) {
    return send("I can't send an empty Embed!");
  } else {
    if(title === "BL") {
      //resp.title = "⠀";
    } else {
      resp.title = title;
    }
  }
    
  if(!description) {
    //Do nothing
  } else {
    if(description === "BL") {
      //resp.description = "⠀";
    } else {
      resp.description = description;
    }
  }
      
  if(!name) {
    //Do Nothing
  } else {
    if(name === "BL") {
      f1.name = "⠀";
    } else {
      f1.name = name;
    }
  }
      
  if(!value && name === "BL") {
    f1.value = "⠀";
  } else {
    if(value && name === "BL") {
      f1.value = value;
    } else {
      if(!value && !name) {
        //Do Nothing
      } else {
        f1.value = "⠀";
      }
    }
  }
  
  if(!inline) {
    f1.inline = false;
  } else {
    if(inline != "true" && inline != "false") {
      return send("You can only choose the options `true` and `false` for the **inline**!");
    } else {
      f1.inline = inline;
    }
  }
  
  try {
    fields.push(f1);
    resp.fields = fields;
  } catch (error) {
    send(error);
  }
  return resp;
}

function rNum(min, max) {
  if(!min || !max) return send("You need to set up a **minimum** number and a **maximum** number");
  return Math.floor(Math.random() * (max - min) + min);
}

function userRoles(id) {
  var letters = ["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z"]
  if(!id) return send("Error! You must have a UserID for \`userRoles\`! \`\`\`js\nuserRoles(id)\`\`\`");
  
  var anyLetters = id.split("");
  
  for(var i = 0; i < letters.length; i++) {
    if(letters.indexOf(anyLetters[i]) > -1) {
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
  if(!what) return send("I can't **string()** something that's not there!");
  return JSON.stringify(what);
}

function parse(what) {
  if(!what) return send("I can't **parse()** something that's not there!");
  return JSON.parse(what);
}

function int(what) {
  if(!what) return send("I can't **int()** something that's not there!");
  return parseInt(what);
}
