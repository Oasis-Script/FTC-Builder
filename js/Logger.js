function Logger() {

  function time() {
    let t1 = new Date().toString().split(' ')
    let t2 = new Date().getMilliseconds()
    return `${t1[4]}:${t2}`
  }
  
  return {
    
    log: function(inp) {
      console.log(time(),'[  LOG  ]',inp);},
    
    error: function(inp) {
      console.log(time(),'[ ERROR ]',inp.name);
      console.log(time(),'[ ERROR ]',inp.message);},
    
    warn: function(inp) {
      console.log(time(),'[  WARN ]',inp);}
    
  }
  
}

export { Logger }