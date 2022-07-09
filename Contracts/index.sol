//SPDX-License-Identifier: MIT
pragma solidity >=0.8.15;
 
contract tweets{
    address public owner ; 
    uint256 private counter;

    constructor(){
        counter =0;
        owner = msg.sender; // msg varibale is something we get with every interaction

    }

    struct tweet {
        address tweeter;
        uint256 id;
        string tweettext;
        string tweetImg;
    }

    event tweetCreated (
        address tweeter,
        uint256 id,
        string tweettext,
        string tweetImg
    
    );


    mapping (uint256 => tweet) tweets;

    function addTweet(
        string memory tweettext,
        string memory tweetImg ) public payable {
        require(msg.value==(1 ether) ,"this transaction will require 1 ether please continue");
        tweet storage newTweet = tweets[counter];
        newTweet.tweettext=tweettext;
        newTweet.tweetImg=tweetImg;
        newTweet.tweeter=msg.sender;
        newTweet.id=counter;

        emit tweetCreated(
            msg.sender,
            counter,
            tweettext,
            tweetImg
        );
        counter++;
// to send the ether to the owner of the smart contract.
        payable(owner).transfer(msg.value);
        }

        function getTweets(uint256 id) public view returns (string memory , string memory ,address)
        {
            require (id<counter,"tweet no found");
            tweet storage t = tweets[id];
            return (t.tweettext,t.tweetImg,t.tweeter);
        }
}
