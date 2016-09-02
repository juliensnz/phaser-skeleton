(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app': 'app',
  };
  var packages = {
    'app':    { main: 'main.js',  defaultExtension: 'js' },
    'phaser': { defaultExtension: 'js' },
  };
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
