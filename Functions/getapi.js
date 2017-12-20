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
            var info = grab.replace('["', "");
            info = info.replace(']["', ']');
            info = info.replace(" ", "");
            info = info.split('"]');
            var getlength = ["Uhoh!", obj[info[0]], obj[info[0]][info[1]], obj[info[0]][info[1]][info[2]], obj[info[0]][info[1]][info[2]][info[3]], obj[info[0]][info[1]][info[2]][info[3]][info[4]]];
            for(var e = 0; e < info.length; e++) {
              if(getlength[e]) {
                var msg = getlength[e];
              }
            }
            send(msg);
          } catch (err) {
            return send("Error!\n```xl\n" + err + "```");
          }
        }
      }
    }
  }
}
