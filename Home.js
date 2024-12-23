function Search(){

   
    const searchValue = document.getElementById("search").value;
    
    let page = "";
    let no = 0;

    switch(searchValue)
    {
        case"a":
                page = "Page:1";
                break;
        case"b":
                page = "Page:2";
                break;

        case"c":
                page = "Page:3";
                break;
                
        case"d":
                page = "Page:4";
                break;
         case"e":
                page = "Page:5";
                break;
        case"f":
                page = "Page:6";
                break; 
        case"g":
                page = " Page:7";
                break;         
                

        default:
                page = "No page selected.";



    }

                alert(page);



      

}