pragma solidity ^0.4.4;
contract IScoreStore{
    function GetScore(string name) public returns (int);

}

contract MyGame{
    function ShowScore(string name) public returns (int){
        IScoreStore scoreStore = IScoreStore(0xa550e16830F269949F7cB0De8580857DEF9954ec);
        return scoreStore.GetScore(name);
    }
}