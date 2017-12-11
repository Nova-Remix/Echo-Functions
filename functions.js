/*=====================
SEND
=====================*/









function send(text) {
  if(!text) return resp = "I can't send an empty message! Please examine the **send()** function carefully.";
  return resp = text;
}









/*========================================================
EMBED
========================================================*/









function embed(title, description, name, value, color) {
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
        f1.value = value;
      }
    }
  }
  
  if(!color) {
    //Do Nothing
  } else {
    if(color.indexOf("#") < 0) {
      return send("The color must be a Hex Code! **#rrggbb**");
    } else {
      if(color.length > 7 || color.length < 7) {
        return send("Incorrect Color Format! **#rrggbb**");
      } else {
        resp.color = HTML2Int(color);
      }
    }
  }
  
  try {
    if(f1.name) {
      fields.push(f1);
      resp.fields = fields;
    }
  } catch (error) {
    send(error);
  }
  return resp;
}









/*=========================
RANDOM NUMBER
=========================*/









function rNum(min, max) {
  if(!min || !max) return send("You need to set up a **minimum** number and a **maximum** number");
  return Math.floor(Math.random() * (max - min) + min);
}









/*========================
USER ROLES
========================*/









function userRoles(id) {
  var letters = ["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z"];
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









/*=======================
STRING
=======================*/









function string(what) {
  if(!what) return send("I can't **string()** something that's not there!");
  return JSON.stringify(what);
}









/*======================
PARSE
======================*/









function parse(what) {
  if(!what) return send("I can't **parse()** something that's not there!");
  return JSON.parse(what);
}









/*====================
PARSEINT
====================*/









function int(what) {
  if(!what) return send("I can't **int()** something that's not there!");
  return parseInt(what);
}









/*==============================
SEARCH ARRAYS
==============================*/









function searchArray(arr, target) {
  if (!arr) {
    return send("Where tf is your damn variable?");
  }
  else if (!target) {
    return send("`Error`\n```js\nCannot find 'target' of undefined. You idiot, you need to specify your shit next time.```");
  }
  else if (Array.isArray(arr)) {
    if (arr.lastIndexOf(target) !== -1) {
      return 'true';
    } else {
      return 'false';
    }
  } else {
    send("This is not an array!");
  }
}









/*========================================================================
MAKE ARRAYS
========================================================================*/









function makeArray(use1,use2,use3,use4,use5,use6,use7,use8,use9,use10) {
  //Check USE1
  if(!use1) {
    return send("You have tried to create an empty array! Not good!");
  } else {
    var arr = new Array;
    arr.push(use1);
  }
  //Check USE2
  if(!use2) {
    return arr;
  } else {
    arr.push(use2);
  }
  //Check USE3
  if(!use3) {
    return arr;
  } else {
    arr.push(use3);
  }
  //Check USE4
  if(!use4) {
    return arr;
  } else {
    arr.push(use4);
  }
  //Check USE5
  if(!use5) {
    return arr;
  } else {
    arr.push(use5);
  }
  //Check USE6
  if(!use6) {
    return arr;
  } else {
    arr.push(use6);
  }
    //Check USE7
  if(!use7) {
    return arr;
  } else {
    arr.push(use7);
  }
    //Check USE8
  if(!use8) {
    return arr;
  } else {
    arr.push(use8);
  }
    //Check USE9
  if(!use9) {
    return arr;
  } else {
    arr.push(use9);
  }
    //Check USE10
  if(!use10) {
    return arr;
  } else {
    arr.push(use10);
    return arr;
  }
}









/*========================================================================
MAKE BITWISE
========================================================================*/









function makeBitwise(perm1) {
  if(!perm1) {
    send("You need to add in the permission name to grab the bitwise number of!");
  } else {
    var perms = {
      "CREATE_INSTANT_INVITE":"0x00000001",
      "KICK_MEMBERS":"0x00000002",
      "BAN_MEMBERS":"0x00000004",
      "ADMINISTRATOR":"0x00000008",
      "MANAGE_CHANNELS":"0x00000010",
      "MANAGE_GUILD":"0x00000020",
      "ADD_REACTIONS":"0x00000040",
      "VIEW_AUDIT_LOG":"0x00000080",
      "VIEW_CHANNEL":"0x00000400",
      "SEND_MESSAGES":"0x00000800",
      "SEND_TTS_MESSAGES":"0x00001000",
      "MANAGE_MESSAGES":"0x00002000",
      "EMBED_LINKS":"0x00004000",
      "ATTACH_FILES":"0x00008000",
      "READ_MESSAGE_HISTORY":"0x00010000",
      "MENTION_EVERYONE":"0x00020000",
      "USE_EXTERNAL_EMOJIS":"0x00040000",
      "CONNECT":"0x00100000",
      "SPEAK":"0x00200000",
      "MUTE_MEMBERS":"0x00400000",
      "DEAFEN_MEMBERS":"0x00800000",
      "MOVE_MEMBERS":"0x01000000",
      "USE_VAD":"0x02000000",
      "CHANGE_NICKNAME":"0x04000000",
      "MANAGE_NICKNAMES":"0x08000000",
      "MANAGE_ROLES":"0x10000000",
      "MANAGE_WEBHOOKS":"0x20000000",
      "MANAGE_EMOJIS":"0x40000000"
    }
    
    if(perm1.indexOf(" ") > -1) {
      perm1 = perm1.replace(/ /g, "_");
    }
    
    if(perms[perm1.toUpperCase()]) {
      return send(perms[perm1.toUpperCase()]);
    } else {
      return send("Sorry, but **" + perm1 + "** isn't valid yet.");
    }
  }
}









/*========================================================================
UN BITWISE
========================================================================*/









function unBitwise(perm1, perm2, perm3) {
      var perms = {
      "0x00000001":"CREATE_INSTANT_INVITE",
      "0x00000002":"KICK_MEMBERS",
      "0x00000004":"BAN_MEMBERS",
      "0x00000008":"ADMINISTRATOR",
      "0x00000010":"MANAGE_CHANNELS",
      "0x00000020":"MANAGE_GUILD",
      "0x00000040":"ADD_REACTIONS",
      "0x00000080":"VIEW_AUDIT_LOG",
      "0x00000400":"VIEW_CHANNEL",
      "0x00000800":"SEND_MESSAGES",
      "0x00001000":"SEND_TTS_MESSAGES",
      "0x00002000":"MANAGE_MESSAGES",
      "0x00004000":"EMBED_LINKS",
      "0x00008000":"ATTACH_FILES",
      "0x00010000":"READ_MESSAGE_HISTORY",
      "0x00020000":"MENTION_EVERYONE",
      "0x00040000":"USE_EXTERNAL_EMOJIS",
      "0x00100000":"CONNECT",
      "0x00200000":"SPEAK",
      "0x00400000":"MUTE_MEMBERS",
      "0x00800000":"DEAFEN_MEMBERS",
      "0x01000000":"MOVE_MEMBERS",
      "0x02000000":"USE_VAD",
      "0x04000000":"CHANGE_NICKNAME",
      "0x08000000":"MANAGE_NICKNAMES",
      "0x10000000":"MANAGE_ROLES",
      "0x20000000":"MANAGE_WEBHOOKS",
      "0x40000000":"MANAGE_EMOJIS"
    }
      
  if(!perm1) {
    send("You need to add in the permission name to grab the bitwise number of!");
  } else {
    if(perms[perm1]) {
      var x = perms[perm1];
    } else {
      return send("Sorry, but **" + perm1 + "** isn't valid yet.");
    }
  }
  
  if(!perm2) {
    send(x);
  } else {
    if(perms[perm2]) {
      x = x + ", " + perms[perm2];
    } else {
      return send("Sorry, but **" + perm2 + "** isn't valid yet.");
    }
  }
  
  if(!perm3) {
    send(x);
  } else {
    if(perms[perm3]) {
      x = x + ", " + perms[perm3];
      send(x);
    } else {
      return send("Sorry, but **" + perm3 + "** isn't valid yet.");
    }
  }
}









/*=============================
FIND COSINE
=============================*/
function findCos(adj, hypo) {
  if(!adj) return send("You're missing the **Adjacent Side Length** and the **Hypotenuse!**\n**findCos(adjacent, hypotenuse)**");
  if(!hypo) return sens("You're missing the **Hypotenuse**!");
  if(parse(adj) >= parse(hypo)) return ("The Hypotenuse must be greater than the Adjacent Length.");
  var solvefor = parse(adj) / parse(hypo);
  if(string(solvefor).indexOf(".") > -1) {
    if(string(solvefor).split(".")[1].length > 2) {
      var usesplit = string(solvefor).split(".")[1];
      var solvelength = parse(usesplit.length) - 2;
      var answer = string(solvefor).split(".")[0] + "." + usesplit.slice(0, -solvelength);
    } else {
      var answer = solvefor;
    }
  } else {
    var answer = solvefor;
  }
  send("Cosine is **" + answer + "**");
}
