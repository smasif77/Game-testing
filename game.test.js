const {verifyNeighbours} = require('./game.js');

describe("neighbours", ()=>{

  describe("neighbours", ()=>{
    it("is 1 neighburs, it fails", ()=>{
      const result = verifyNeighbours;
      expect(result).toBe(dead);
    })
    it("is 3 characters, it passes", ()=>{
      const result = verifyNeighbours;
      expect(result).toBe(live);
    })
  })
})