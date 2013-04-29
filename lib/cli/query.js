var parcel = require('../')
  , Query = require('../query')


exports = module.exports = function query(repospec, qstr, cb) {
  
  parcel.boot(function(err) {
    if (err) { return cb(err); }
    
    var repo = parcel.createRepository(repospec);
    var q = new Query(qstr);
  
    repo.query(q, function(err, pkgs) {
      if (err) { return cb(err); }
      
      for (var i = 0, len = pkgs.length; i < len; ++i) {
        var pkg = pkgs[i];
        if (i > 0) console.log('');
        console.log(pkg.name + '@' + pkg.version);
        console.log('  os: ' + pkg.os || 'unknown');
        console.log('  arch: ' + pkg.arch || 'any');
      }
    });
  });
}