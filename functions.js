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
      return perms[perm1.toUpperCase()];
    } else {
      return send("Sorry, but **" + perm1.toUpperCase() + "** isn't valid yet.");
    }
  }
}
/*========================================================================
UN BITWISE
=========================================*/
function unBitwise(count, type) {
    var type = (typeof type !== 'undefined') ?  type : 0;
    var count = parseInt(count);
    if (count.toString() !== 'NaN') {
        if (String(type) == "0") {
            var perms = [];
            var eq = [];
            if(count >= 0x40000000) {
                count -= 0x40000000;
                eq.push("0x40000000");
                perms.push("MANAGE_EMOJIS");
            }
            if(count >= 0x20000000) {
                count -= 0x20000000;
                eq.push("0x20000000");
                perms.push("MANAGE_WEBHOOKS");
            }
            if(count >= 0x10000000) {
                count -= 0x10000000;
                eq.push("0x10000000");
                perms.push("MANAGE_ROLES");
            }
            if(count >= 0x08000000) {
                count -= 0x08000000;
                eq.push("0x08000000");
                perms.push("MANAGE_ROLES");
            }
            if(count >= 0x04000000) {
                count -= 0x04000000;
                eq.push("0x04000000");
                perms.push("CHANGE_NICKNAME");
            }
            if(count >= 0x02000000) {
                count -= 0x02000000;
                eq.push("0x02000000");
                perms.push("USE_VAD");
            }
            if(count >= 0x01000000) {
                count -= 0x01000000;
                eq.push("0x01000000");
                perms.push("MOVE_MEMBERS");
            }
            if(count >= 0x00800000) {
                count -= 0x00800000;
                eq.push("0x00800000");
                perms.push("DEAFEN_MEMBERS");
            }
            if(count >= 0x00400000) {
                count -= 0x00400000;
                eq.push("0x00400000");
                perms.push("MUTE_MEMBERS");
            }
            if(count >= 0x00200000) {
                count -= 0x00200000;
                eq.push("0x00200000");
                perms.push("SPEAK");
            }
            if(count >= 0x00100000) {
                count -= 0x00100000;
                eq.push("0x00100000");
                perms.push("CONNECT");
            }
            if(count >= 0x00040000) {
                count -= 0x00040000;
                eq.push("0x00040000");
                perms.push("USE_EXTERNAL_EMOJIS");
            }
            if(count >= 0x00020000) {
                count -= 0x00020000;
                eq.push("0x00020000");
                perms.push("MENTION_EVERYONE");
            }
            if(count >= 0x00010000) {
                count -= 0x00010000;
                eq.push("0x00010000");
                perms.push("READ_MESSAGE_HISTORY");
            }
            if(count >= 0x00008000) {
                count -= 0x00008000;
                eq.push("0x00008000");
                perms.push("ATTACH_FILES");
            }
            if(count >= 0x00004000) {
                count -= 0x00004000;
                eq.push("0x00004000");
                perms.push("EMBED_LINKS");
            }
            if(count >= 0x00002000) {
                count -= 0x00002000;
                eq.push("0x00002000");
                perms.push("MANAGE_MESSAGES");
            }
            if(count >= 0x00001000) {
                count -= 0x00001000;
                eq.push("0x00001000");
                perms.push("SEND_TTS_MESSAGES");
            }
            if(count >= 0x00000800) {
                count -= 0x00000800;
                eq.push("0x00000800");
                perms.push("SEND_MESSAGES");
            }
            if(count >= 0x00000400) {
                count -= 0x00000400;
                eq.push("0x00000400");
                perms.push("VIEW_CHANNEL");
            }
            if(count >= 0x00000080) {
                count -= 0x00000080;
                eq.push("0x00000080");
                perms.push("VIEW_AUDIT_LOG");
            }
            if(count >= 0x00000040) {
                count -= 0x00000040;
                eq.push("0x00000040");
                perms.push("ADD_REACTIONS");
            }
            if(count >= 0x00000020) {
                count -= 0x00000020;
                eq.push("0x00000020");
                perms.push("MANAGE_GUILD");
            }
            if(count >= 0x00000010) {
                count -= 0x00000010;
                eq.push("0x00000010");
                perms.push("MANAGE_CHANNELS");
            }
            if(count >= 0x00000008) {
                count -= 0x00000008;
                eq.push("0x00000008");
                perms.push("ADMINISTRATOR");
            }
            if(count >= 0x00000004) {
                count -= 0x00000004;
                eq.push("0x00000004");
                perms.push("BAN_MEMBERS");
            }
            if(count >= 0x00000002) {
                count -= 0x00000002;
                eq.push("0x00000002");
                perms.push("KICK_MEMBERS");
            }
            if(count >= 0x00000001) {
                count -= 0x00000001;
                eq.push("0x00000001");
                perms.push("CREATE_INSTANT_INVITE");
            }
            if (count !== 0) {
                return "Error : Remainder of "+String(count)+"\nCached : `\``\n"+perms.join(", ")+"\n`\``";
            } else {
                return perms.join(", ");
            }
        } else if (String(type) == "1") {
            var perms = [];
            var eq = [];
            if(count >= 0x40000000) {
                count -= 0x40000000;
                eq.push("0x40000000");
                perms.push("MANAGE_EMOJIS");
            }
            if(count >= 0x20000000) {
                count -= 0x20000000;
                eq.push("0x20000000");
                perms.push("MANAGE_WEBHOOKS");
            }
            if(count >= 0x10000000) {
                count -= 0x10000000;
                eq.push("0x10000000");
                perms.push("MANAGE_ROLES");
            }
            if(count >= 0x08000000) {
                count -= 0x08000000;
                eq.push("0x08000000");
                perms.push("MANAGE_ROLES");
            }
            if(count >= 0x04000000) {
                count -= 0x04000000;
                eq.push("0x04000000");
                perms.push("CHANGE_NICKNAME");
            }
            if(count >= 0x02000000) {
                count -= 0x02000000;
                eq.push("0x02000000");
                perms.push("USE_VAD");
            }
            if(count >= 0x01000000) {
                count -= 0x01000000;
                eq.push("0x01000000");
                perms.push("MOVE_MEMBERS");
            }
            if(count >= 0x00800000) {
                count -= 0x00800000;
                eq.push("0x00800000");
                perms.push("DEAFEN_MEMBERS");
            }
            if(count >= 0x00400000) {
                count -= 0x00400000;
                eq.push("0x00400000");
                perms.push("MUTE_MEMBERS");
            }
            if(count >= 0x00200000) {
                count -= 0x00200000;
                eq.push("0x00200000");
                perms.push("SPEAK");
            }
            if(count >= 0x00100000) {
                count -= 0x00100000;
                eq.push("0x00100000");
                perms.push("CONNECT");
            }
            if(count >= 0x00040000) {
                count -= 0x00040000;
                eq.push("0x00040000");
                perms.push("USE_EXTERNAL_EMOJIS");
            }
            if(count >= 0x00020000) {
                count -= 0x00020000;
                eq.push("0x00020000");
                perms.push("MENTION_EVERYONE");
            }
            if(count >= 0x00010000) {
                count -= 0x00010000;
                eq.push("0x00010000");
                perms.push("READ_MESSAGE_HISTORY");
            }
            if(count >= 0x00008000) {
                count -= 0x00008000;
                eq.push("0x00008000");
                perms.push("ATTACH_FILES");
            }
            if(count >= 0x00004000) {
                count -= 0x00004000;
                eq.push("0x00004000");
                perms.push("EMBED_LINKS");
            }
            if(count >= 0x00002000) {
                count -= 0x00002000;
                eq.push("0x00002000");
                perms.push("MANAGE_MESSAGES");
            }
            if(count >= 0x00001000) {
                count -= 0x00001000;
                eq.push("0x00001000");
                perms.push("SEND_TTS_MESSAGES");
            }
            if(count >= 0x00000800) {
                count -= 0x00000800;
                eq.push("0x00000800");
                perms.push("SEND_MESSAGES");
            }
            if(count >= 0x00000400) {
                count -= 0x00000400;
                eq.push("0x00000400");
                perms.push("VIEW_CHANNEL");
            }
            if(count >= 0x00000080) {
                count -= 0x00000080;
                eq.push("0x00000080");
                perms.push("VIEW_AUDIT_LOG");
            }
            if(count >= 0x00000040) {
                count -= 0x00000040;
                eq.push("0x00000040");
                perms.push("ADD_REACTIONS");
            }
            if(count >= 0x00000020) {
                count -= 0x00000020;
                eq.push("0x00000020");
                perms.push("MANAGE_GUILD");
            }
            if(count >= 0x00000010) {
                count -= 0x00000010;
                eq.push("0x00000010");
                perms.push("MANAGE_CHANNELS");
            }
            if(count >= 0x00000008) {
                count -= 0x00000008;
                eq.push("0x00000008");
                perms.push("ADMINISTRATOR");
            }
            if(count >= 0x00000004) {
                count -= 0x00000004;
                eq.push("0x00000004");
                perms.push("BAN_MEMBERS");
            }
            if(count >= 0x00000002) {
                count -= 0x00000002;
                eq.push("0x00000002");
                perms.push("KICK_MEMBERS");
            }
            if(count >= 0x00000001) {
                count -= 0x00000001;
                eq.push("0x00000001");
                perms.push("CREATE_INSTANT_INVITE");
            }
            if (count !== 0) {
                return "Error : Remainder of " + string(count) + "\nCached : `\``\n" + eq.join(" | ") + "\n`\``";
            } else {
                return eq.join(" | ");
            }
        } else {
            return "Error : Not a valid type";
        }
    } else {
        return "Error : " + count + "is not a valid number";
    }
}
/*========================
SERVER CHANNELS (ID, NAME)
=======================*/
function serverChannels(type) {
  if(!type || type.toLowerCase() === "name" || type.toLowerCase() === "names") {
    var channels = new Array();
    for (var x = 0; x < ServerChannels.length; x++) {
      channels.push(ServerChannels[x].Name);
    }
    return channels;
  } else if (type.toLowerCase() === "id" || type.toLowerCase() === "ids") {
    var channels = new Array();
    for (var x = 0; x < ServerChannels.length; x++) {
      channels.push(ServerChannels[x].ID);
    }
    return channels;
  } else {
    return send("Sorry! You can only have `Name` or `ID` for the type to collect!");
  }
}
/*============================
PM USER
============================*/
function pm(user, message) {
  if(!user) return send("Sorry! You must use the user's ID that you want me to PM!");
  if(!message) return send("I can't DM someone and empty message! Pease check the message you want me to DM again!")
  return send("{pm:" + user + "} " + message);
}
/*============
ASS PHOTOS
============*/
function ass() {
  return send("{ass}")
}

/*====================
GETAPI
====================*/
function getAPI(api, grab) {
  if(!api) {
    return send("You must provide a valid link for me to grab the information from!");
  } else {
    if(!grab) {
      return send("You must provide information for me to grab from the API!");
    } else {
      if(api.indexOf("http") === -1 && api.indexOf("www.") === -1) {
        return send("The link must includes `https://` or `http://` as well as include `www.`!");
      } else {
        if(grab.indexOf('["') === -1 || grab.indexOf('"]') === -1) {
          return send("You must follow this format to grab information from the API:\n**[\"Movies\"][\"Genres\"][\"Horror\"]**");
        } else {
          try {
            var obj = GetJSON(api);
            var info = "";
            //for(var x = 0; x < grab.length; x++) {
              info = grab.replace('["', "");
            info = info.replace('["', "");
              info = info.replace(']["', ']');
            info = info.replace(']["', "]");
              info = info.replace(" ", "");
            //}
            info = info.split('"]');
            var getlength = ["Uhoh!", obj[info[0]], obj[info[0]][info[1]], obj[info[0]][info[1]][info[2]], obj[info[0]][info[1]][info[2]][info[3]], obj[info[0]][info[1]][info[2]][info[3]][info[4]]];
            for(var e = 0; e < info.length; e++) {
              if(getlength[e]) {
                var msg = getlength[e];
              }
            }
            return msg;
          } catch (err) {
            return send("**Error!**\n```xl\n" + err + "```");
          }
        }
      }
    }
  }
}





if (!Object.entries)
  Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    
    return resArray;
  };

function leveledWeap(user, weapon) {
    if (!user) {
        throw new ReferenceError("Missing userObj! (Shop Command)");
    }
    if (typeof user !== 'object') {
        throw new TypeError("userObj is not an object! (Shop Command)");
    }
    if (user.toString() !== '[object Object]') {
        throw new TypeError("userObj is wrong type of object! (Shop Command)");
    }
    if (!user.userLevel && user.userLevel !== 0) {
        throw new ReferenceError("userObj is missing user's levels! (Shop Command)");
    }
    if (!user.userMecca && user.userMecca !== 0) {
        throw new ReferenceError("userObj is missing user's mecca! (Shop Command)");
    }
    if (!user.userSouls && user.userSouls !== 0) {
        throw new ReferenceError("userObj is missing user's souls! (Shop Command)");
    }
    //done with user error detecting


    if (!weapon) {
        throw new ReferenceError("Missing weaponObj! (Shop Command)");
    }
    if (typeof weapon !== 'object') {
        throw new TypeError("weaponObj is not an object! (Shop Command)");
    }
    if (weapon.toString() !== '[object Object]') {
        throw new TypeError("weaponObj is wrong type of object! (Shop Command)");
    }
    //done with weapon error detecting


    var weap = Object.entries(weapon);
    var weapObjList = [];
    
    for (i=0; i < weap.length; i++) {
      weapObjList.push(JSON.parse(weap[i][1]));
    }
    
    var weapAvail = []; 
    weapAvail.push('Weapons\n========\n');

    for (i=0; i < weapObjList.length; i++) {
        if (user.userLevel >= weapObjList[i].Level) {
            weapAvail.push(weapObjList[i].Name + " : " + weapObjList[i].DMG + " DMG");
        }
    }
    //done with weapons!

    var weaponsShow = true;

    if (weapAvail.length === 1) {
        weaponsShow = false;
    }

    if (weaponsShow) {
        return weapAvail.join("\n");
    } else {
        return "Nothing is available! Sorry!"
    }
}

function leveledArm(user, armour) {
    if (!user) {
        throw new ReferenceError("Missing userObj! (Shop Command)");
    }
    if (typeof user !== 'object') {
        throw new TypeError("userObj is not an object! (Shop Command)");
    }
    if (user.toString() !== '[object Object]') {
        throw new TypeError("userObj is wrong type of object! (Shop Command)");
    }
    if (!user.userLevel && user.userLevel !== 0) {
        throw new ReferenceError("userObj is missing user's levels! (Shop Command)");
    }
    if (!user.userMecca && user.userMecca !== 0) {
        throw new ReferenceError("userObj is missing user's mecca! (Shop Command)");
    }
    if (!user.userSouls && user.userSouls !== 0) {
        throw new ReferenceError("userObj is missing user's souls! (Shop Command)");
    }
    //done with user error detecting


    if (!armour) {
        throw new ReferenceError("Missing armourObj! (Shop Command)");
    }
    if (typeof armour !== 'object') {
        throw new TypeError("armourObj is not an object! (Shop Command)");
    }
    if (armour.toString() !== '[object Object]') {
        throw new TypeError("armourObj is wrong type of object! (Shop Command)");
    }
    //done with armour error detecting


    var arm = Object.entries(armour);
    var armObjList = [];
    
    for (i=0; i < arm.length; i++) {
      armObjList.push(JSON.parse(arm[i][1]));
    }
    
    var armAvail = [];
    armAvail.push('Armors\n========\n');

    for (i=0; i < armObjList.length; i++) {
        if (user.userLevel >= armObjList[i].Level) {
            armAvail.push(armObjList[i].Name + " : " + armObjList[i].Protection + " Protection");
        }
    }
    //done with armours!

    var armourShow = true;

    if (armAvail.length === 1) {
        armourShow = false;
    }

    if (armourShow) {
        return armAvail.join("\n");
    } else {
        return "Nothing is available! Sorry!"
    }
}

function viewShop(user, weapon, armour) {
  if (!user) {
    throw new ReferenceError("Missing userObj! (Shop Command)");
  }
  
  if (typeof user !== 'object') {
    throw new TypeError("userObj is not an object! (Shop Command)");
  }
  
  if (user.toString() !== '[object Object]') {
    throw new TypeError("userObj is wrong type of object! (Shop Command)");
  }
  
    if (!user.userLevel && user.userLevel !== 0) {
        throw new ReferenceError("userObj is missing user's levels! (Shop Command)");
    }
    if (!user.userMecca && user.userMecca !== 0) {
        throw new ReferenceError("userObj is missing user's mecca! (Shop Command)");
    }
    if (!user.userSouls && user.userSouls !== 0) {
        throw new ReferenceError("userObj is missing user's souls! (Shop Command)");
    }
    //done with user error detecting

    if (!weapon) {
        throw new ReferenceError("Missing weaponObj! (Shop Command)");
    }
    if (typeof weapon !== 'object') {
        throw new TypeError("weaponObj is not an object! (Shop Command)");
    }
    if (weapon.toString() !== '[object Object]') {
        throw new TypeError("weaponObj is wrong type of object! (Shop Command)");
    }
    //done with weapon error detecting

    if (!armour) {
        throw new ReferenceError("Missing armourObj! (Shop Command)");
    }
    if (typeof armour !== 'object') {
        throw new TypeError("armourObj is not an object! (Shop Command)");
    }
    if (armour.toString() !== '[object Object]') {
        throw new TypeError("armourObj is wrong type of object! (Shop Command)");
    }
    //done with armour error detecting

    var weap = Object.entries(weapon);
    var weapObjList = [];
    
    for (i=0; i < weap.length; i++) {
      weapObjList.push(JSON.parse(weap[i][1]));
    }
    
    var weapAvail = []; 
    weapAvail.push('Weapons\n========\n');

    for (i=0; i < weapObjList.length; i++) {
        if (user.userLevel >= weapObjList[i].Level) {
            var weapSouls = true;
            var weapMecca = true;
            if (!weapObjList[i].Souls) {
                weapSouls =  false;
            }
            if (!weapObjList[i].Mecca) {
                weapMecca = false;
            }
            if (weapMecca && weapSouls) {
                if (user.userSouls >= weapObjList[i].Souls && user.userMecca >= weapObjList[i].Mecca) {
                    weapAvail.push(weapObjList[i].Name + " : " + weapObjList[i].DMG + " DMG"+"\n"+"\tCost : `"+weapObjList[i].Souls+"` Souls & `"+weapObjList[i].Mecca+"` Mecca");
                }
            } else if (weapSouls) {
                if (user.userSouls >= weapObjList[i].Souls) {
                    weapAvail.push(weapObjList[i].Name + " : " + weapObjList[i].DMG + " DMG"+"\n"+"\tCost : `"+weapObjList[i].Souls+"` Souls");
                }
            } else if (weapMecca) {
                if (user.userMecca >= weapObjList[i].Mecca) {
                    weapAvail.push(weapObjList[i].Name + " : " + weapObjList[i].DMG + " DMG"+"\n"+"\tCost : `"+weapObjList[i].Mecca+"` Mecca");
                }
            } else {
                weapAvail.push(weapObjList[i].Name + " : " + weapObjList[i].DMG + " DMG"+"\n"+"\tCost : `Error` Nothing listed");
            }
        }
    }
    //done with weapons!

    var arm = Object.entries(armour);
    var armObjList = [];
    
    for (i=0; i < arm.length; i++) {
      armObjList.push(JSON.parse(arm[i][1]));
    }
    
    var armAvail = [];
    armAvail.push('Armors\n========\n');

    for (i=0; i < armObjList.length; i++) {
        if (user.userLevel >= armObjList[i].Level) {
            var armSouls = true;
            var armMecca = true;
            if (!armObjList[i].Souls) {
                armSouls =  false;
            }
            if (!armObjList[i].Mecca) {
                armMecca = false;
            }
            if (armMecca && armSouls) {
                if (user.userSouls >= armObjList[i].Souls && user.userMecca >= armObjList[i].Mecca) {
                    armAvail.push(armObjList[i].Name + " : " + armObjList[i].Protection + " Protection"+"\n"+"\tCost : `"+armObjList[i].Souls+"` Souls & `"+armObjList[i].Mecca+"` Mecca");
                }
            } else if (armSouls) {
                if (user.userSouls >= armObjList[i].Souls) {
                    armAvail.push(armObjList[i].Name + " : " + armObjList[i].Protection + " Protection"+"\n"+"\tCost : `"+armObjList[i].Souls+"` Souls");
                }
            } else if (armMecca) {
                if (user.userMecca >= armObjList[i].Mecca) {
                    armAvail.push(armObjList[i].Name + " : " + armObjList[i].Protection + " Protection"+"\n"+"\tCost : `"+armObjList[i].Mecca+"` Mecca");
                }
            } else {
                armAvail.push(armObjList[i].Name + " : " + armObjList[i].Protection + " Protection"+"\n"+"\tCost : `Error` Nothing listed");
            }
        }
    }


    var weaponsShow = true;
    var armourShow = true;

    if (weapAvail.length === 1) {
        weaponsShow = false;
    }
    if (armAvail.length === 1) {
      armourShow = false;
    }

    if (weaponsShow && armourShow) {
      return weapAvail.join("\n") + "\n\n" + armAvail.join("\n");
    } else if (weaponsShow) {
      return weapAvail.join("\n");
    } else if (armourShow) {
      return armAvail.join("\n");
    } else {
      return "Nothing is available! Sorry!"
    }
}
