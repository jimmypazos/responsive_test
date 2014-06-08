/* 
 * Script to load data from XML and
 * builds the iframes for test the Responsive Design.
 * Author : Jose Suarez Cordova
 * email : jsuarez.developer@gmail.com
 * url : http://josesuarezcordova.com
 * Created on : 8 de junio de 2014
 */

$(document).ready(function(){
        var url = "http://josesuarezcordova.com";
        var content="";
        var url="";

        $.ajax({
            type: "POST" ,
            url: "setting.xml" ,
            dataType: "xml" ,
            success: function(xml) {
                var url = $(xml).find('url').text();
                var content="";
                $(xml).find('devices').each(function(){
                    $(this).find("device").each(function(){
                        var id = $(this).find('id').text();
                        var name = $(this).find('name').text();
                        var width = $(this).find('width').text();
                        var height = $(this).find('height').text();

                        content += "<div class='device' id='"+id+"'>"+
                                    "<div>"+name+"</div>"+
                                    "<iframe style='width:"+width+"; height:"+height+"; ' src='"+url+"'></iframe>"+
                                    "</div>";

                    });
                    $("#testcontainer").html(content);
                    setUrlfromXML(url);
                });
            }
        });

        function setUrlfromXML(url){
            this.url = url;
            //alert(this.url)
        }

        function getUrlfromXML(){
            return this.url;
        }

        $("#btnOk").click(function(){
                url = $("#urltest").val();

                $("iframe").attr("src",url);
        })

        $("#restore").click(function(){
            $("iframe").attr("src",getUrlfromXML());
        })
})

