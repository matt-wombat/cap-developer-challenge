const cds = require('@sap/cds')

/* 
//
// This is the old style of implementing the custom event logic
//

module.exports = function (){
  // The next line replaces the default CREATE out-of-the-box logic
  this.on ( 'CREATE' , 'Holes', (req,next)=>{
    if (req.data.score == 1) {
      req.data.result = 'hole in one';
    } else {
      let deviation = req.data.score - req.data.par;
      switch(deviation) {
        case -3:
            req.data.result = 'albatross';
            break;
        case -2:
            req.data.result = 'eagle';
            break;
        case -1:
            req.data.result = 'birdie';
            break;
        case 0:
            req.data.result = 'par';
            break;
        case 1:
            req.data.result = 'bogey';
            break;
        case 2:
            req.data.result = 'double bogey';
            break;
        case 3:
            req.data.result = 'triple bogey';
            break;
      }
    }
    return next(); // This is to hand over to following processes
  })
}
*/


class CatalogService extends cds.ApplicationService { 
  init(){
  // The next line replaces the default CREATE out-of-the-box logic
    this.on ( 'CREATE' , 'Holes', (req,next)=>{
      if (req.data.score == 1) {
        req.data.result = 'hole in one';
      } else {
        let deviation = req.data.score - req.data.par;
        switch(deviation) {
          case -3:
              req.data.result = 'albatross';
              break;
          case -2:
              req.data.result = 'eagle';
              break;
          case -1:
              req.data.result = 'birdie';
              break;
          case 0:
              req.data.result = 'par';
              break;
          case 1:
              req.data.result = 'bogey';
              break;
          case 2:
              req.data.result = 'double bogey';
              break;
          case 3:
              req.data.result = 'triple bogey';
              break;
        }
      }
      return next(); // This is to hand over to following processes
    })
    return super.init();
  }
}

module.exports = CatalogService;

