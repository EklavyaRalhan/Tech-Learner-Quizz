function playmath()
{
    window.location.href="math.html";
}
function playscience()
{
    window.location.href="science.html";
}
function playgk()
{
    window.location.href="gk.html";
}
function playgeo()
{
    window.location.href="geo.html";
}
function register()
{
    let text;
    let person = prompt("Please Enter Your Name");
    if (person == "" || person==null)
    {
        text="User Canceled The Prompt Box";
    } else{
        text="Hello " + person + " How Are You Today!";
    }
    document.getElementById("name").innerHTML=text;
}