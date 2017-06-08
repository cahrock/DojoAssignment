function fib() {
  var prev = 0, next = 1,  curr_next= 1;
  function nacci(n) {
    curr_next = prev + next;
    prev = next;
    next = curr_next;
    console.log(next);
  }
  return nacci
}
var fibCounter = fib(4);
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
fibCounter() // should console.log "21"
