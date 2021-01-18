const data = [
    {
        text:"1.Which code correctly describes a row in an HTML table?",
        buttons: [
            {buttont: "<tr><td>Name</td><td>Last name</td><td>Telephone number></td></tr>", buttonid: true},
            {buttont: "<td><tr>Name</tr><tr>Last name</tr><tr>Telephone number></tr></td>", buttonid: false},
            {buttont: "<td><tr>Name</tr><tr>Last name</tr><tr>Telephone number></tr></td>", buttonid: false},
            {buttont: "<row><cell>Name</cell><cell>Last name</cell><cell>Telephone number></cell></row>", buttonid: false}
        ]
    },
    {
        text:"2.what is HTML?",
        buttons: [
            {buttont: "A programming language for creating website interactivity", buttonid: false},
            {buttont: "Language that describes the design of the website", buttonid: false},
            {buttont: "Language describing the structure of the website", buttonid: true},
            {buttont: "Lebron James", buttonid: false}
        ]
    },
    {
        text:"3.Which HTML version is currently in use?",
        buttons: [
            {buttont: "2", buttonid: false},
            {buttont: "5", buttonid: true},
            {buttont: "7", buttonid: false},
            {buttont: "8.3", buttonid: false}
        ]
    },
    {
        text:"4.Which HTML semantic element would you choose to describe the news on the site?",
        buttons: [
            {buttont: "<news>", buttonid: false},
            {buttont: "<section>", buttonid: false},
            {buttont: "<main>", buttonid: false},
            {buttont: "<article>", buttonid: true}
        ]
    },
    {
        text:"5.What HTML element describes a block of a webpage?",
        buttons: [
            {buttont: "<span>", buttonid: false},
            {buttont: "<p>", buttonid: false},
            {buttont: "<h2>", buttonid: false},
            {buttont: "<div>", buttonid: true}
        ]
    },
    {
        text:"6.Why are CSS called cascading styles?",
        buttons: [
            {buttont: "The code is written in stages", buttonid: false},
            {buttont: "The steps determine which rule is more important and will apply it to the item", buttonid: true},
            {buttont: "With CSS enabled, you can use! Important", buttonid: false},
            {buttont: "There is no right answer", buttonid: false}
        ]
    },
    {
        text:"7.What is the default display value of an HTML a element?",
        buttons: [ //nete raso arba inline arba block default yra
            {buttont: "inline", buttonid: true},
            {buttont: "block", buttonid: true},
            {buttont: "inline-block", buttonid: false},
            {buttont: "table", buttonid: false}
        ]
    },
    {
        text:"8.Which selector is correct for applying style to pdf files only?",
        buttons: [ //no clue katras teisingas :| gal reikes pridet kad nera teisingu atsakymu *shrug*
            {buttont: "a[href >='.pdf']", buttonid: false},
            {buttont: "a[href $='.pdf']", buttonid: false},
            {buttont: "a[href only ='.pdf']", buttonid: false},
            {buttont: "a[href='.pdf']", buttonid: false} 
        ]
    },
    {       //translation might be a little bit off
        text:"9.What unit of CSS is used to fit an HTML block to the width of the screen?",
        buttons: [ 
            {buttont: "px", buttonid: false},
            {buttont: "em", buttonid: false},
            {buttont: "%", buttonid: true},
            {buttont: "jeff", buttonid: false}
        ]
    },
    {
        text:"10.Which class must be assigned to an HTML block in order for it to occupy 5 columns in the Bootstrap grid, omitting one column?",
        buttons: [ //not sure but i think last one is correct... arba pries paskutintas
            {buttont: ".columns-5-offset-1", buttonid: false},
            {buttont: ".col-sm5-1", buttonid: false},
            {buttont: ".col-sm-5 .col-offset-1", buttonid: false},
            {buttont: ".col-sm-5 .col-sm-offset-1", buttonid: true}
        ]
    },
    {
        text:"11.How to assign url described in the nav block list to a variable whose name is url?",
        buttons: [ //noriu cancer gaut *blehg* as nezinau katras correct not professional ;((
            {buttont: "var url = document.querySelector('nav url');", buttonid: false},
            {buttont: "var url = document.querySelector('nav li a');", buttonid: false},
            {buttont: "var url = .getByElements('nav li a');", buttonid: false},
            {buttont: "const url = querySelector('nav li a');", buttonid: true}
        ]
    },
    {
        text:"12.Which of the variables are arrays?",
        buttons: [ //man rods nera teisingu tai tiesiog istrink kazkuri ir palik "there is no right answer" arba atvirksciai
            {buttont: "var paragraphs = document.querySelector('p');", buttonid: false},
            {buttont: "var texts = document.getByElements('p');", buttonid: false},
            {buttont: "var advices = document.querySelectorAll('p');", buttonid: false},
            {buttont: "var paragraphs = document.intoArray('p);", buttonid: false},
            {buttont: "There is no right answer", buttonid: true}
        ]
    },
    {
        text:"13.How do I change the background color of a variable in the header to which the HTML element header is assigned using JavaScript?",
        buttons: [
            {buttont: "header.style.background-color = 'tomato';", buttonid: false},
            {buttont: "header.style.backgroundColor = 'tomato';", buttonid: true},
            {buttont: "header.css.background-color= 'tomato';", buttonid: false},
            {buttont: "There is no right answer", buttonid: false}
        ]
    },
    {       //pls find correct answer cus i cant be bothered with this sorriukas :P xd
        text:"14.How to create a new li element in an existing ul element that has a class preferences?",
        buttons: [ //BLET nu naxui tas javascript i swear to god php god programming language hehe wordpress ez 
            {buttont: "var list = document.querySelector('ul.preferences'); var listItem = document.createElement('li'); list.appendChild(listItem);", buttonid: false},
            {buttont: "var list = document.querySelector('ul .preferences'); var listItem = document.createElement('li'); list.appendChild(listItem)", buttonid: false},
            {buttont: "var list = document.querySelector('ul.preferences'); var listItem = document.createElement('li'); list.append(listItem)", buttonid: false},
            {buttont: "There is no right answer", buttonid: true}
        ]
    },
    {
        text:"15.What is a preprocessor?",
        buttons: [ //pretty sure its correct
            {buttont: "New CSS dialect", buttonid: false},
            {buttont: "CSS 5 version", buttonid: false},
            {buttont: "A scripting language that extends CSS and allows you to compile code into standard CSS code", buttonid: false},
            {buttont: "A scripting language that extends CSS and allows you to compile code into standard HTML and CSS code", buttonid: true}
        ]
    },
]

export default data;