function verifyNeighbours(input){
    if(input == "live"){
        return true;
    } else if(input.dead > 5){
      return false;
    } else {
      return neighbours;
    }
  }
  
  module.exports = {verifyNeighbours}