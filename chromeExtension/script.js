//only manifest.json with 3 properties will make you an extension
//then we can add properties/features for what we want
//here we are fetching jokes from "https://icanhazdadjoke.com/slack"
//here everything is in an object
//we need to fetch the jokes from the text
//if we validate the json we are getting from the above website using "jsonlint.com", we will get
// {
// 	"attachments": [{
// 		"fallback": "Why do you never see elephants hiding in trees? Because they're so good at it.",
// 		"footer": "<https://icanhazdadjoke.com/j/t4MJRuXDIe|permalink> - <https://icanhazdadjoke.com|icanhazdadjoke.com>",
// 		"text": "Why do you never see elephants hiding in trees? Because they're so good at it."
// 	}],
// 	"response_type": "in_channel",
// 	"username": "icanhazdadjoke"
// }
//we will fetch from attachment->text

fetch('https://icanhazdadjoke.com/slack')
.then(data=>data.json())
.then(jokeData=>{
    const jokeText=jokeData.attachments[0].text; 
    const jokeElement=document.getElementById('jokeElement');

    jokeElement.innerHTML=jokeText;
})

