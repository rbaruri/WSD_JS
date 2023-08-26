function getExtension(filename) {
    var parts = filename.split('.');
  

    return parts[parts.length - 1];
  }
  

  var filename = "code.md";
  var extension = getExtension(filename);
  console.log(extension);
  