let Index=0;
var Images=[
    {source: "wash.webp",caption:"WASHINGTON"},
    {source: "swit.avif",caption:"SWITZERLAND"},
    {source: "vietnam.jpg",caption:"VIETNAM"},
    {source: "disney.jpg",caption:"DISNEY LAND"},
    {source: "mal.webp",caption:"MALDIVES"}
];
function display()
{
    document.getElementById("editid").src=Images[Index].source;
    document.getElementById("headid").innerHTML=Images[Index].caption;
}
function prev()
{
    Index--;
    if(Index<0)
        Index=Images.length-1;
    display();
}
function next()
{
    Index++;
    display();
    if(Index>=Images.length-1)
        Index=0;
    
}