var qoute = [
    {
        qoute: "Do not take life too seriously. You will not get out alive.",
        Auther: "--7mo beka"
    },

    {
        qoute:"It's not what happens to you, but how you react to it that matters.",
        Auther: "--Frank Sinatra"
    },
    {
        qoute: "'Yo 100% of the shots you don't take.'",
        Auther: "--Wayne Gretzy"
    },

]

function getQoutes() {

    var num = Math.floor(Math.random() * qoute.length)
    console.log(num)


    document.getElementById("quote").innerHTML = qoute[num].qoute;
    document.getElementById("auther").innerHTML = qoute[num].Auther;

}