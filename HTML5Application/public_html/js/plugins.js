// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
/*Création de larbre des requirements*/
$('document').ready(function() {
    /*initialisation de l'arbre*/
    var rq_navtree=$("#rq_navtree");
    //binding on move event
    rq_navtree.bind("move_node.jstree",function(event,data){
//        alert(event);
//        alert(data.rslt.o.html());
//        alert(data.rslt.o.attr('id'));
    });
    rq_navtree.jstree({
       "types": {
         "valid_children":["project"],
         "types": {
             "valid_children": ["project"],
                 
             "project": {
                        "icon": {
                            "image" : "img/bootstrap/glyphicons-halflings.png",
                            "position": "-48px -120px"
                         },
                         "valid_children": ["folder","document"]

             },
             "folder": {
                        "icon": {
                            "image" : "img/bootstrap/glyphicons-halflings.png",
                            "position": "-384px -120px"
                         },
                         "valid_children": ["folder","document"]

             },
             "document": {
                        "icon": {
                            "image" : "img/bootstrap/glyphicons-halflings.png",
                            "position": "-24px -24px"
                         },
                         "valid_children": []
             }
         }
       },
       "json_data": {
            "data": [{
                "data" :{
                    "title": "Project"
                },
                "attr": {
                        "id": "project.requirement",
                        "rel":"project"
                },
                
                "children": [
                        {
                            "data" : {
                                "title": "folder1"
                            },
                            "attr": {
                                "id": "folder.1",
                                "rel":"folder"
                            },
                            "children": [
                                    {
                                        "data" : {
                                            "title": "folder2"
                                        },
                                        "attr": {
                                            "id": "folder.2",
                                            "rel":"folder"
                                        },
                                        "children": [
                                                {
                                                    "data" : {
                                                        "title": "folder3"
                                                    },
                                                    "attr": {
                                                        "id": "folder.3",
                                                        "rel":"folder"
                                                    }
                                                },
                                                {
                                                    "data" : {
                                                        "title": "document3"
                                                    },
                                                    "attr": {
                                                        "id": "document.3",
                                                        "rel":"document"
                                                    }
                                                }
                                        ]

                                    },
                                    {
                                        "data" : {
                                            "title": "document2"
                                        },
                                        "attr": {
                                            "id": "document.2",
                                            "rel":"document"
                                        }
                                    }
                            ]

                        },
                        {
                            "data" : {
                                "title": "document"
                            },
                            "attr": {
                                "id": "document.1",
                                "rel":"document"
                            }
                        }
                ]

            }]
        },
        'dnd' : {
            'drop_finish' : function (){
                alert("drop");
            },
            'drag_finish' : function (){
                alert("drag");
            }

        },
        "plugins": ["themes", "json_data", "crrm","types","dnd"]
    });
    
    /*bind sur l'ouverture de noeud*/
//    $("#rq_navtree").bind("open_node.jstree", function (event, data) { 
////        if((data.inst._get_parent(data.rslt.obj)).length) { 
////            data.inst._get_parent(data.rslt.obj).open_node(this, false); 
////        } 
//        alert("toro");
//    }); 
});
// Place any jQuery/helper plugins in here.


/*initialisation de tinymce pour les text area de class richtext*/
(function() {

tinymce.init({
    selector: "textarea.dbd-richtext",
    skin: "lightgray2",
    
    toolbar1: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor",
    plugins: [
         "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
         "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
         "table contextmenu directionality emoticons template paste textcolor"
   ],
   menubar: "tools table format view insert edit",
   statusbar: false
 });
 tinymce.on('AddEditor', function(e) {
     var editor;
    console.log(e.command, e.ui, e.value);
    editor=e.editor;
    editor.on('mceFullScreen',function(e){
        console.log(e.command, e.ui, e.value);
    });
    
});
})();
