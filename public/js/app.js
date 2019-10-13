

//font select//
function selectorDig(sl,data){
    data=data.split(",");
    var slWidth=$(sl).css("width");
    $(sl).find(".mdc-text-field").after('<div style="width:'+slWidth+';"  class="slb fadeIn animated"></div>')

    data.forEach(e=>{
        $(".slb").append('<div style="width:'+slWidth+';" class="mdc-button"><span>'+e+'</span></div>')
    })

    $(sl).find(".slb>div").click(function () {
        var value=$(this).find("span").html();
        $(sl).find(".mdc-text-field>.mdc-text-field__input").val(value)
        

        ////ApplySty///
        var selector=$(".slecd")[0].tagName;
        var style=sl.replace(".","");
        applySty (selector,style,value)
       

        $(".slb").addClass("fadeOut");
        setTimeout((e=>{$(".slb").remove()}),500)
    })

    mat()
    outerClick(sl)
}

///regExp///
function applySty (selector,style,value){
    var blgsty=$("#Blgstyle").html();
    var rg=new RegExp(/[^\n]/g)
    blgstyTotal=blgsty.match(rg).join("")
    rr=new RegExp(selector+"{(.*?)}","gi");
    blgstySel=blgstyTotal.match(rr);
    
    if(blgstySel==null){
        fnSty=blgstyTotal+"\n"+selector+"{\n"+style+":"+value+";\n}";
    }else{
        blgstySel=blgstySel.join("")
        blgstyGet=blgstySel.match(new RegExp(style+":(.*?);","gi"));
        if(blgstyGet==null){
            fnSty=blgstyTotal.replace(blgstySel,blgstySel.replace("}",style+":"+value+";\n}"))
        }else{
            
            AddNewSty=blgstySel.replace(blgstyGet,style+":"+value+";");
            console.log(AddNewSty);
            fnSty=blgstyTotal.replace(blgstySel,AddNewSty)
          }
    }

      $("#Blgstyle").html(fnSty)
}


function selectItemClick(sl,data){
    $(document).on("click",sl,function () {
        selectorDig(sl,data)    
    })
    
}

///seledigremve
function outerClick(select){
    $(document).on("click",(e)=>{
        var container = $(select);
        
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
               $(select).find(".slb").remove();
               
            }
        })

}

///dig//
function shadowDig(sl,data){
    
    var btleft=parseInt($(sl).position().left)
    var dlgwid=175/2;
    var btwid=parseInt($(sl).css("width"))/2;
    var dlgleft=(btleft+btwid)-(dlgwid);
    dlgleft=dlgleft.toString()+"px";
    $(sl).find("button").after('<div style="left:'+dlgleft+';"  class="slb slbd fadeIn animated"></div>')
    $(sl).find(".slbd").append(data)

    $("#padding").keyup((e=>{
        var selector=$(".slecd")[0].tagName;
        var style="padding";
        var value= $("#padding").val();
        applySty (selector,style,value)
    }))
      $("#margin").keyup((e=>{
        var selector=$(".slecd")[0].tagName;
        var style="margin";
        var value= $("#margin").val();
        applySty (selector,style,value)
    }))

    mat()
    outerClick(sl)
}


///////justify///////
function jstleft(){
        var selector=$(".slecd")[0].tagName;
        var style="text-align";
        var value= "left";
        applySty (selector,style,value)
}
function jstCent(){
    var selector=$(".slecd")[0].tagName;
    var style="text-align";
    var value= "center";
    applySty (selector,style,value)
}

function jstRight(){
    var selector=$(".slecd")[0].tagName;
    var style="text-align";
    var value= "right";
    applySty (selector,style,value)
}

function jstFull(){
    var selector=$(".slecd")[0].tagName;
    var style="text-align";
    var value= "justify";
    applySty (selector,style,value)
}


    //selItem//
function selItem(){

}

/////////coloror/////////

       $(".color").focusout((e=>{
        var selector=$(".slecd")[0].tagName;
        var style="color";
        applySty (selector,style,$(".color").css("background-color"))
       }));

        $(".background-color").focusout((e=>{
        var selector=$(".slecd")[0].tagName;
        var style="background-color";
        applySty (selector,style,$(".background-color").css("background-color"))
       }));
        
     




/////Start/////
$("body").append('<div class="strDigBack"><div class="strDig">'+
    '<textarea id="blgSData"></textarea>'+
    '<textarea id="blgCont"></textarea>'+
    '<button class="mdc-button mdc-button--raised" id="post">Proceed</button>'+    
    '</div></div>');
var padding;
var margin;
$(document).on("click","#post",(e=>{
    $("#Blgstyle").html($("#blgSData").val())
    $("#Navigation").html($("#blgCont").val())
    $(".strDigBack").remove();

    $("#Navigation").find("*").click(function(e)
        {e.stopPropagation();
        $(".slecd").removeClass("slecd");
        $(this).addClass("slecd");

        var th=$(this);
        var Stdata=[th.css("font-family"),th.css("font-size"),th.css("color"),th.css("background-color"),th.css("padding"),th.css("margin")]
        
        var matTex=".mdc-text-field>.mdc-text-field__input";
        $(".font-family").find(matTex).val(Stdata[0]);
        $(".font-size").find(matTex).val(Stdata[1]);
        $(".color").css("background-color",Stdata[2]);
        $(".background-color").css("background-color",Stdata[3])

        padding=Stdata[4];
        margine=Stdata[5];
        

        })
}))
//mat//
function mat() {
    document.querySelectorAll(".mdc-button").forEach(e=>{mdc.ripple.MDCRipple.attachTo(e)})
    document.querySelectorAll(".mdc-text-field").forEach(e=>{mdc.textField.MDCTextField.attachTo(e)})     
}
mat()
