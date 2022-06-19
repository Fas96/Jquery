# Jquery Fancy Tree
___

Jquery FancyTree is a Javascript tree view/tree grid plugin to display JSON objects in a folder structure
representing parent and child entities in a form of folders(file structure).

![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/jquery-fancytree.png) 

<br>
An example of data that can be present in this form can be show as<br>

```json
[
	{"title": "Books", "expanded": true, "folder": true, "children": [
		{"title": "Art of War", "type": "book", "author": "Sun Tzu", "year": -500, "qty": 21, "price": 5.95},
		{"title": "The Hobbit", "type": "book", "author": "J.R.R. Tolkien", "year": 1937, "qty": 32, "price": 8.97},
		{"title": "The Little Prince", "type": "book", "author": "Antoine de Saint-Exupery", "year": 1943, "qty": 2946, "price": 6.82},
		{"title": "Don Quixote", "type": "book", "author": "Miguel de Cervantes", "year": 1615, "qty": 932, "price": 15.99}
	]},
	{"title": "Music", "folder": true, "children": [
		{"title": "Nevermind", "type": "music", "author": "Nirvana", "year": 1991, "qty": 916, "price": 15.95},
		{"title": "Autobahn", "type": "music", "author": "Kraftwerk", "year": 1974, "qty": 2261, "price": 23.98},
		{"title": "Kind of Blue", "type": "music", "author": "Miles Davis", "year": 1959, "qty": 9735, "price": 21.90},
		{"title": "Back in Black", "type": "music", "author": "AC/DC", "year": 1980, "qty": 3895, "price": 17.99},
		{"title": "The Dark Side of the Moon", "type": "music", "author": "Pink Floyd", "year": 1973, "qty": 263, "price": 17.99},
		{"title": "Sgt. Pepper's Lonely Hearts Club Band", "type": "music", "author": "The Beatles", "year": 1967, "qty": 521, "price": 13.98}
	]}
]
```
<br>
So we need to show this data to a user in a form of folder hierarchy.

![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/jquery-fancytree-example.png) 
<br>
The Jquery Fancy tree  project can be found on [github](https://github.com/mar10/fancytree/) <br> 
Quick start examples with node js or ES6 cna be used for personal models.
<br>
<br>
Below is an example how to implement a simple fancy tree with the plugins.
<hr>
To make This is simple to follow i would use a simple one page html to show how it works.

In the head of our html page we want to include few javascript and css styling for the project

## Javascript Files
1. The jquery library
2. fancytree-all-deps- This helps us to select dept of files from the folder level.
3. contextMenu.min.js- Allows us to use the context menu on items.Context menu allows events to be applied to the current item(mouse over item).<br> I have added it from cdn and local folder.
4. fancytree.dnd.js- This allows us to apply the drag and drop events on element(folder or file).
5. fancytree.edit.js- allows us to directly edit a file name or folder name.
6. fancytree.childcounter.js- Allows us to display the number of items count on the folder level when closed.
7. skin-win8/ui.fancytree.css- Allows us to apply specific css theme to the view.(Other css) files allows us to use the css styling related for our tree.
In this case we are using the skin-themeroller theme.

```html

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.fancytree/2.27.0/jquery.fancytree-all-deps.js"></script>
<script type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery-contextmenu/2.9.2/jquery.contextMenu.min.js"></script>

<script src="../js/vendor/jquery.fancytree.contextMenu.js"></script>
<script src="../js/vendor/jquery.fancytree.dnd.js"></script>
<script src="../js/vendor/jquery.fancytree.edit.js"></script>
<script src="../js/vendor/jquery.fancytree.childcounter.js"></script>

<link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/jquery.fancytree/2.38.1/skin-themeroller/ui.fancytree.min.css"
      integrity="sha512-LtulT9+xwtALkeFjtiojm4zOrWyDR+qivwmAKI8DSMdtJnJP/cXlV2TfwbiGe3m4nHoWy2Jbgg+I7BKHqqo2Jg=="
      crossorigin="anonymous" referrerpolicy="no-referrer"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-contextmenu/2.9.2/jquery.contextMenu.css"
      integrity="sha512-EF5k2tHv4ShZB7zESroCVlbLaZq2n8t1i8mr32tgX0cyoHc3GfxuP7IoT8w/pD+vyoq7ye//qkFEqQao7Ofrag=="
      crossorigin="anonymous" referrerpolicy="no-referrer"/>

```

Custom css can be applied .In this case i used some basic css styles.
```css 
        div[class='title']{
            font-size: 30px;
            margin-bottom: 30px;
            text-align: center;
            padding: 10px;

        }
       div[class='title-underline']{
                     margin-left: 400px;
                     margin-right: 400px;
                     text-align: center;
                     border-bottom: 1px solid #2aabd2;
                    margin-bottom: 20px;

       }
        #title-undefined{
            visibility: hidden;
        }

        .tree-item-input{
            border-radius: 8px;
            padding: 8px;
            text-align: center;
        }
        .fancytree-container {
            outline: none;
        }
        /* Fancytree extension 'table' */
        table.fancytree-ext-table {
            width: 100%;
        }
        /* Fancytree extension 'columnview' */
        table.fancytree-ext-columnview {
            border-collapse: collapse;
            width: 100%;
        }
        table.fancytree-ext-columnview tbody tr[0] {
            height: 200px;
        }
        thead th{
            text-align: center;
            margin-bottom: 40px;
        }

        #selected-action{
            margin-top: 100px;
            text-align: center;
            border: 2px solid lightseagreen;
            margin-left: 500px;
            margin-right: 500px;
            font-size: 30px;
        }
```
<br>
The main body of our html would contain some ids that needs to referenced when the page is ready.In order to create our view we are using tables.
Simple div could be used if table view is not needed.
<br>
A very simple layout of how we want our data to be presented is shown below. Observer how we added input field to the table data element on the tr.

```html
   <td>
            <input type="input" class="tree-item-input" onChange="updateNodeCurrentValue(this, 'data_field');" name="data_field" required>
</td>
```
<br>

The javascript function  onChange="updateNodeCurrentValue(this, 'data_field'); used can be used to update our values on user input.
updateNodeCurrentValue- is just what i choose to call my function on the  onChange event of the input field.
<br>

```html


<div class="title">Jquery Fancy Tree</div>
<div class="title-underline"></div>

<table id="treetable">
    <colgroup>
        <col width="8%"></col>
        <col width="8%"></col>
        <col width="8%"></col>
        <col width="8%"></col>
        <col width="8%"></col>
        <col width="8%"></col>
        <col width="8%"></col>
    </colgroup>
    <thead>
    <tr>
        <th></th>
        <th>Key</th> <th>Folder</th> <th style="text-align: start">Title</th> <th style="text-align: start">Type</th> <th style="text-align: start">Author</th> <th>Year</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td></td>
        <td></td>
        <td>
            <input type="input" class="tree-item-input" onChange="updateNode(this, 'data_field');" name="data_field" required>
        </td>
        <td>
        <input type="input" class="tree-item-input" onChange="updateNodeCurrentValue(this, 'data_field');" name="data_field" required></td>
        <td>
            <input type="input" class="tree-item-input" onChange="updateNodeCurrentValue(this, 'data_field');" name="data_field" required>
        </td>
        <td>
            <input type="input" class="tree-item-input" onChange="updateNodeCurrentValue(this, 'data_field');" name="data_field" required>
        </td>
        <td>
            <input type="input" class="tree-item-input" onChange="updateNodeCurrentValue(this, 'data_field');" name="data_field" required>
        </td>

     </tr>
    </tbody>

</table>
 <div id="selected-action"></div>

```
We can add our javascript code to render the fancy tree view when  the dom is ready with the code below.

```javascript
 $(function(){
        $("#treetable").fancytree();})
```

There are several configuration that  can be applied to a fancy three.It includes the data source, how the view should be rendered and which plugins to use.

```javascript
$("#treetable").fancytree({
    activeVisible: true, // Make sure, active nodes are visible (expanded)
    aria: true, // Enable WAI-ARIA support
    autoActivate: true, // Automatically activate a node when it is focused using keyboard
    autoCollapse: false, // Automatically collapse all siblings, when a node is expanded
    autoScroll: false, // Automatically scroll nodes into visible area
    clickFolderMode: 4, // 1:activate, 2:expand, 3:activate and expand, 4:activate (dblclick expands)
    checkbox: false, // Show check boxes
    checkboxAutoHide: undefined, // Display check boxes on hover only
    debugLevel: 4, // 0:quiet, 1:errors, 2:warnings, 3:infos, 4:debug
    disabled: false, // Disable control
    focusOnSelect: false, // Set focus when node is checked by a mouse click
    escapeTitles: false, // Escape `node.title` content for display
    generateIds: false, // Generate id attributes like <span id='fancytree-id-KEY'>
    idPrefix: "ft_", // Used to generate node idÂ´s like <span id='fancytree-id-<key>'>
    icon: true, // Display node icons
    keyboard: true, // Support keyboard navigation
    keyPathSeparator: "/", // Used by node.getKeyPath() and tree.loadKeyPath()
    minExpandLevel: 1, // 1: root node is not collapsible
    quicksearch: false, // Navigate to next node by typing the first letters
    rtl: false, // Enable RTL (right-to-left) mode
    selectMode: 2, // 1:single, 2:multi, 3:multi-hier
    tabindex: "0", // Whole tree behaves as one single control
    titlesTabbable: false, // Node titles can receive keyboard focus
    tooltip: false // Use title as tooltip (also a callback could be specified)
});
```

In our situations we would use our own custom configurations for our tree with some plugins.
NB: The above configuration is really import to have better fancy tree
<hr>
Our  custom configuration includes

 
## Explanation

```javascript
extensions: ["table",  "themeroller","edit",  "gridnav","contextMenu","childcounter"]
```
specifies the plugins we want to use in this fancy tree.

### checkbox & selectMode childcounter
* checkbox-   if we need a checkbox at the start of each folder level.
* selectMode- indicates if a selected folder would select its children. Default would not select folder children.
* childcounter- Gives a configurations to indicate how many files are in a parent folder.

```javascript
 checkbox: true,
        selectMode: 3,
        childcounter: {
            deep: true,
            hideZeros: true,
            hideExpanded: true
        },
```


### context menu
The context menu gives a menu to perform action when right key clicked when mouse is on item.
so in our case we would see edit,cut,copy, etc as configured.

![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/jquery-fancytree-contextMenu.png) <br>
```javascript
contextMenu: {
            menu: {
                "edit": { "name": "Edit", "icon": "edit" },
                "cut": { "name": "Cut", "icon": "cut" },
                "copy": { "name": "Copy", "icon": "copy" },
                "paste": { "name": "Paste", "icon": "paste" },
                "delete": { "name": "Delete", "icon": "delete", "disabled": true },
                "sep1": "---------",
                "quit": { "name": "Quit", "icon": "quit" },
                "sep2": "---------",
                "fold1": {
                    "name": "Sub group",
                    "items": {
                        "fold1-key1": { "name": "Foo bar" },
                        "fold2": {
                            "name": "Sub group 2",
                            "items": {
                                "fold2-key1": { "name": "alpha" },
                                "fold2-key2": { "name": "bravo" },
                                "fold2-key3": { "name": "charlie" }
                            }
                        },
                        "fold1-key3": { "name": "delta" }
                    }
                },
                "fold1a": {
                    "name": "Other group",
                    "items": {
                        "fold1a-key1": { "name": "echo" },
                        "fold1a-key2": { "name": "foxtrot" },
                        "fold1a-key3": { "name": "golf" }
                    }
                }
            },
            actions: function(node, action, options) {
                $("#selected-action")
                    .text("Selected action '" + action + "' on node " + node + ".");
            }
        }

```

## Edit
A configuration to allow user to edit a title.
```javascript

  edit: {
            triggerStart: ["f2", "shift+click", "dblclick"],
            close: function(event, data) {
                if (data.save && data.isNew) {
                    // Quick-enter: add new nodes until we hit [enter] on an empty title
                    $("#tree").trigger("nodeCommand", {
                        cmd: "addSibling",
                    });
                }
            },
        }
```

### themeroller & source &activate
* themeroller- In our example we used the themeroller
* source- defines our data source.JSON items and children to form the files.
Observe how the folder indicator is true for our folder level. childrens forms the files.And these are json objects we want to keep in folder.
```javascript
"title": "Music", "folder": true, "children":[{"title": "Back in Black", "type": "music", "author": "AC/DC", "year": 1980, "qty": 3895, "price": 17.99},{}]
```
* activate - used to get which element is active.Which element is clicked.
```javascript
 themeroller: {
            addClass: "",
            selectedClass: "ui-state-active"},
        source: {
            url: "https://cdn.rawgit.com/mar10/fancytree/72e03685/demo/ajax-tree-products.json"
        },
        activate: function(event, data) {
        } 
```

### lazyLoad
NB: This allows us to create a view for deeper content items that are not shown.Notice the ui size might be small to show all data.
So lazyLoad configuration allows us to see detail of all other data from our source. If NO EXTRA detail exist no configuration  is needed.
In simple form this could be used as paging for our next data sets <br>
![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/jquery-fancytree-lazyload.png) <br>
```javascript
  lazyLoad: function(event, data) {
            data.result = { url: "https://cdn.rawgit.com/mar10/fancytree/72e03685/demo/ajax-tree-products.json"}
        }
```
### renderColumns

This renders our data in the columns.For td and the input fields. Notice if a field has input element then we need to find the input element and 
set the value and the id for that input element.
node.getIndexHier() is used to get the index from our json data.<br>
We can set several css properties for our elements at this point. If our table row had select or some specific tags we can find those tags and set 
values and tags for those elements.


```javascript
   renderColumns: function(event, data) {
            var node = data.node,
                $tdList = $(node.tr).find(">td");

            $tdList.eq(1).css("text-align","center");
            $tdList.eq(1).text(node.key);

            $tdList.eq(2).css("text-align","center");
            $tdList.eq(2).text(!!node.folder);


            $tdList.eq(3).find("input").attr("value",node.title);
            $tdList.eq(3).find("input").attr("id","title-"+node.getIndexHier());

            if(!!node.folder!=true) {
                $tdList.eq(3).find("input").attr("value", node.type);
                $tdList.eq(3).find("input").attr("id", "type-" + node.getIndexHier());
            }else{
                $tdList.eq("title-"+node.getIndexHier()).css("visibility","hidden")
            }
            // $tdList.eq(3).text(node.title);
            $tdList.eq(3).find("input").attr("value",node.author);
            $tdList.eq(3).find("input").attr("id","author-"+node.getIndexHier());

            $tdList.eq(4).find("input").attr("value",node.type);
            $tdList.eq(4).find("input").attr("id","title-"+node.key);

            $tdList.eq(5).find("input").attr("value",node.data.author);
            $tdList.eq(5).find("input").attr("id","title-"+node.data.author);

            $tdList.eq(6).find("input").attr("value",node.data.year);
            $tdList.eq(6).find("input").attr("id","title-"+node.data.year);

            $tdList.eq(6).css("text-align","center");

        }
    })
```

## Key events on Files or Folder Levels
We can set nodeCommands on the row items. and what to do when and event occurs.
Also we can set key events. The keydown event allows us to use basic keys to perform copy and paste or delete.
ctl+shift+n would allow as to add a node as specified.
![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/jquery-fancytree-newNode.png) <br>
```javascript
on("nodeCommand", function(event, data){

        var refNode, moveMode,
            tree = $(this).fancytree("getTree"),
            node = tree.getActiveNode();

        switch( data.cmd ) {
            case "moveUp":
                refNode = node.getPrevSibling();
                if( refNode ) {
                    node.moveTo(refNode, "before");
                    node.setActive();
                }
                break;
            case "moveDown":
                refNode = node.getNextSibling();
                if( refNode ) {
                    node.moveTo(refNode, "after");
                    node.setActive();
                }
                break;
            case "indent":
                refNode = node.getPrevSibling();
                if( refNode ) {
                    node.moveTo(refNode, "child");
                    refNode.setExpanded();
                    node.setActive();
                }
                break;
            case "outdent":
                if( !node.isTopLevel() ) {
                    node.moveTo(node.getParent(), "after");
                    node.setActive();
                }
                break;
            case "rename":
                node.editStart();
                break;
            case "remove":
                refNode = node.getNextSibling() || node.getPrevSibling() || node.getParent();
                node.remove();
                if( refNode ) {
                    refNode.setActive();
                }
                break;
            case "addChild":
                node.editCreateNode("child", "");
                break;
            case "addSibling":
                node.editCreateNode("after", "");
                break;
            case "cut":
                CLIPBOARD = {mode: data.cmd, data: node};
                break;
            case "copy":
                CLIPBOARD = {
                    mode: data.cmd,
                    data: node.toDict(function(n){
                        delete n.key;
                    })
                };
                break;
            case "clear":
                CLIPBOARD = null;
                break;
            case "paste":
                if( CLIPBOARD.mode === "cut" ) {
                    // refNode = node.getPrevSibling();
                    CLIPBOARD.data.moveTo(node, "child");
                    CLIPBOARD.data.setActive();
                } else if( CLIPBOARD.mode === "copy" ) {
                    node.addChildren(CLIPBOARD.data).setActive();
                }
                break;
            default:
                alert("Unhandled command: " + data.cmd);
                return;
        }

        // }).on("click dblclick", function(e){
        //console.log( e, $.ui.fancytree.eventToString(e) );

    }).on("keydown", function(e){
        var cmd = null;

        // console.log(e.type, $.ui.fancytree.eventToString(e));
        switch( $.ui.fancytree.eventToString(e) ) {
            case "ctrl+shift+n":
            case "meta+shift+n": // mac: cmd+shift+n
                cmd = "addChild";
                break;
            case "ctrl+c":
            case "meta+c": // mac
                cmd = "copy";
                break;
            case "ctrl+v":
            case "meta+v": // mac
                cmd = "paste";
                break;
            case "ctrl+x":
            case "meta+x": // mac
                cmd = "cut";
                break;
            case "ctrl+n":
            case "meta+n": // mac
                cmd = "addSibling";
                break;
            case "del":
            case "meta+backspace": // mac
                cmd = "remove";
                break;
            // case "f2":// already triggered by ext-edit pluging
            //cmd = "rename";
            //break;
            case "ctrl+up":
                cmd = "moveUp";
                break;
            case "ctrl+down":
                cmd = "moveDown";
                break;
            case "ctrl+right":
            case "ctrl+shift+right": // mac
                cmd = "indent";
                break;
            case "ctrl+left":
            case "ctrl+shift+left": // mac
                cmd = "outdent";
        }
```
<br>
## Full javaScript Source
Observe the tags and the sequence of implementation. The github reference would be of much help for personal implementation<br>

![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/jquery-fancytree-fullUI.png) <br>
```javascript


$(function(){
    $("#treetable").fancytree({
        extensions: ["table",  "themeroller","edit",  "gridnav","contextMenu","childcounter"],
        checkbox: true,
        selectMode: 3,
        childcounter: {
            deep: true,
            hideZeros: true,
            hideExpanded: true
        },

        contextMenu: {
            menu: {
                "edit": { "name": "Edit", "icon": "edit" },
                "cut": { "name": "Cut", "icon": "cut" },
                "copy": { "name": "Copy", "icon": "copy" },
                "paste": { "name": "Paste", "icon": "paste" },
                "delete": { "name": "Delete", "icon": "delete", "disabled": true },
                "sep1": "---------",
                "quit": { "name": "Quit", "icon": "quit" },
                "sep2": "---------",
                "fold1": {
                    "name": "Sub group",
                    "items": {
                        "fold1-key1": { "name": "Foo bar" },
                        "fold2": {
                            "name": "Sub group 2",
                            "items": {
                                "fold2-key1": { "name": "alpha" },
                                "fold2-key2": { "name": "bravo" },
                                "fold2-key3": { "name": "charlie" }
                            }
                        },
                        "fold1-key3": { "name": "delta" }
                    }
                },
                "fold1a": {
                    "name": "Other group",
                    "items": {
                        "fold1a-key1": { "name": "echo" },
                        "fold1a-key2": { "name": "foxtrot" },
                        "fold1a-key3": { "name": "golf" }
                    }
                }
            },
            actions: function(node, action, options) {
                $("#selected-action")
                    .text("Selected action '" + action + "' on node " + node + ".");
            }
        },  
        edit: {
            triggerStart: ["f2", "shift+click", "dblclick"],
            close: function(event, data) {
                if (data.save && data.isNew) {
                    // Quick-enter: add new nodes until we hit [enter] on an empty title
                    $("#tree").trigger("nodeCommand", {
                        cmd: "addSibling",
                    });
                }
            },
        },
        themeroller: {
            addClass: "",
            selectedClass: "ui-state-active"},
        source: {
            url: "https://cdn.rawgit.com/mar10/fancytree/72e03685/demo/ajax-tree-products.json"
        },
        activate: function(event, data) {
        },
        lazyLoad: function(event, data) {
            data.result = { url: "https://cdn.rawgit.com/mar10/fancytree/72e03685/demo/ajax-tree-products.json"}
        },
        renderColumns: function(event, data) {
            var node = data.node,
                $tdList = $(node.tr).find(">td");

            $tdList.eq(1).css("text-align","center");
            $tdList.eq(1).text(node.key);

            $tdList.eq(2).css("text-align","center");
            $tdList.eq(2).text(!!node.folder);


            $tdList.eq(3).find("input").attr("value",node.title);
            $tdList.eq(3).find("input").attr("id","title-"+node.getIndexHier());

            if(!!node.folder!=true) {
                $tdList.eq(3).find("input").attr("value", node.type);
                $tdList.eq(3).find("input").attr("id", "type-" + node.getIndexHier());
            }else{
                $tdList.eq("title-"+node.getIndexHier()).css("visibility","hidden")
            }
            // $tdList.eq(3).text(node.title);
            $tdList.eq(3).find("input").attr("value",node.author);
            $tdList.eq(3).find("input").attr("id","author-"+node.getIndexHier());

            $tdList.eq(4).find("input").attr("value",node.type);
            $tdList.eq(4).find("input").attr("id","title-"+node.key);

            $tdList.eq(5).find("input").attr("value",node.data.author);
            $tdList.eq(5).find("input").attr("id","title-"+node.data.author);

            $tdList.eq(6).find("input").attr("value",node.data.year);
            $tdList.eq(6).find("input").attr("id","title-"+node.data.year);

            $tdList.eq(6).css("text-align","center");

        }
    }).on("nodeCommand", function(event, data){

        var refNode, moveMode,
            tree = $(this).fancytree("getTree"),
            node = tree.getActiveNode();

        switch( data.cmd ) {
            case "moveUp":
                refNode = node.getPrevSibling();
                if( refNode ) {
                    node.moveTo(refNode, "before");
                    node.setActive();
                }
                break;
            case "moveDown":
                refNode = node.getNextSibling();
                if( refNode ) {
                    node.moveTo(refNode, "after");
                    node.setActive();
                }
                break;
            case "indent":
                refNode = node.getPrevSibling();
                if( refNode ) {
                    node.moveTo(refNode, "child");
                    refNode.setExpanded();
                    node.setActive();
                }
                break;
            case "outdent":
                if( !node.isTopLevel() ) {
                    node.moveTo(node.getParent(), "after");
                    node.setActive();
                }
                break;
            case "rename":
                node.editStart();
                break;
            case "remove":
                refNode = node.getNextSibling() || node.getPrevSibling() || node.getParent();
                node.remove();
                if( refNode ) {
                    refNode.setActive();
                }
                break;
            case "addChild":
                node.editCreateNode("child", "");
                break;
            case "addSibling":
                node.editCreateNode("after", "");
                break;
            case "cut":
                CLIPBOARD = {mode: data.cmd, data: node};
                break;
            case "copy":
                CLIPBOARD = {
                    mode: data.cmd,
                    data: node.toDict(function(n){
                        delete n.key;
                    })
                };
                break;
            case "clear":
                CLIPBOARD = null;
                break;
            case "paste":
                if( CLIPBOARD.mode === "cut" ) {
                    // refNode = node.getPrevSibling();
                    CLIPBOARD.data.moveTo(node, "child");
                    CLIPBOARD.data.setActive();
                } else if( CLIPBOARD.mode === "copy" ) {
                    node.addChildren(CLIPBOARD.data).setActive();
                }
                break;
            default:
                alert("Unhandled command: " + data.cmd);
                return;
        }

        // }).on("click dblclick", function(e){
        //console.log( e, $.ui.fancytree.eventToString(e) );

    }).on("keydown", function(e){
        var cmd = null;

        // console.log(e.type, $.ui.fancytree.eventToString(e));
        switch( $.ui.fancytree.eventToString(e) ) {
            case "ctrl+shift+n":
            case "meta+shift+n": // mac: cmd+shift+n
                cmd = "addChild";
                break;
            case "ctrl+c":
            case "meta+c": // mac
                cmd = "copy";
                break;
            case "ctrl+v":
            case "meta+v": // mac
                cmd = "paste";
                break;
            case "ctrl+x":
            case "meta+x": // mac
                cmd = "cut";
                break;
            case "ctrl+n":
            case "meta+n": // mac
                cmd = "addSibling";
                break;
            case "del":
            case "meta+backspace": // mac
                cmd = "remove";
                break;
            // case "f2":// already triggered by ext-edit pluging
            //cmd = "rename";
            //break;
            case "ctrl+up":
                cmd = "moveUp";
                break;
            case "ctrl+down":
                cmd = "moveDown";
                break;
            case "ctrl+right":
            case "ctrl+shift+right": // mac
                cmd = "indent";
                break;
            case "ctrl+left":
            case "ctrl+shift+left": // mac
                cmd = "outdent";
        }
        if( cmd ){
            $(this).trigger("nodeCommand", {cmd: cmd});
            // e.preventDefault();
            // e.stopPropagation();
            return false;
        }
    });
 
```
