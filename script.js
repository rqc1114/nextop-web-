var heading = document.querySelector('#heading');
var sw=0;
heading.onclick = function()
{
    if(sw==0)
    {
        heading.style.color = "red";
        sw=1;
    }
    else
    {
        heading.style.color = "black";
        sw=0;
    }
    
}