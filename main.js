menu_list_array = ["Veg Margherita Pizza", "Veg supreme pizza", "panner tikka pizza", "Chicken Tandoori pizza","Deluexe veggie pizza" ];

function getmenu(){
var htmldata = "";
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata = "";
 <img id="img_1" src="Screenshot 2021-09-29 at 2.36.35 PM.png"> 
 </img>
var item=document.getElementById("add_item").value;
       menu_list_array.sort();
        htmldata="";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
