var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={

 'article-one':{
    title:'Article One! Aditi Mehta',
    heading:'Article One',
    date:'June 23 2017',
    content:`<p>
              THIS IS PARA CONTENT.THIS IS PARA CONTENT.THIS IS PARA CONTENT.THIS IS PARA CONTENT.
            </p>
            <p>
                THIS IS PARA CONTENT.THIS IS PARA CONTENT.THIS IS PARA CONTENT.THIS IS PARA CONTENT.
            </p>
            <p>
                THIS IS PARA CONTENT.THIS IS PARA CONTENT.THIS IS PARA CONTENT.THIS IS PARA CONTENT.
            </p>`
},
'article-two':{ 
    title:'Article Two! Aditi Mehta',
    heading:'Article Two',
    date:'June 23 2017',
    content:`<p>
              THIS IS PARA CONTENT.THIS IS PARA CONTENT.THIS IS PARA CONTENT.THIS IS PARA CONTENT.
            </p>
            `},
'article-three':{
    title:'Article Three! Aditi Mehta',
    heading:'Article Three',
    date:'June 23 2017',
    content:`<p>
              THIS IS PARA CONTENT.THIS IS PARA CONTENT.THIS IS PARA CONTENT.THIS IS PARA CONTENT.
            </p>
            `
}
};
function createTemplate(data){
var title=data.title;
var heading=data.heading;
var content=data.content;
var date=data.date;

var htmlTemplate=`
<html>
<head>
    <title>
        ${title}
        </title>
        <meta name="viewport" content="width=device-width, intial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">HOME</a>
        </div>
        <hr/>
        <h3>
                ${heading}
        </h3>
        <div>
                ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
        </body>            
</html>
`;
return htmlTemplate;
}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

/*app.get('/article-two',function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
*/
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
