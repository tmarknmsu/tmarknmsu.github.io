'use strict';

var notreDamejs= document.getElementsByClassName("notreDame")[0];
var iowajs= document.getElementsByClassName("iowa")[0];
var nmsujs= document.getElementsByClassName("nmsu")[0];
var coloradojs= document.getElementsByClassName("colorado")[0];

const irish = document.querySelector('.ndBtn');
irish.addEventListener('click',function(){
    document.body.classList.add('irish-theme');
        document.body.classList.remove('buffaloes-theme','hawkeyes-theme','aggies-theme');
    const className = document.body.className;
    console.log('current class name: '+ className);
    var coloradojs= document.getElementsByClassName("colorado")[0];
        console.log(coloradojs.style)
            coloradojs.style.display = "none"
    var iowajs= document.getElementsByClassName("iowa")[0];
        console.log(iowajs.style)
        iowajs.style.display = "none"
    var nmsujs= document.getElementsByClassName("nmsu")[0];
        console.log(nmsujs.style)
        nmsujs.style.display = "none"
    var notreDamejs= document.getElementsByClassName("notreDame")[0];
        console.log(notreDamejs.style)
        notreDamejs.style.display = "block"
});
    const hawkeyes = document.querySelector('.iowaBtn');
    hawkeyes.addEventListener('click',function(){
        document.body.classList.add('hawkeyes-theme');
        document.body.classList.remove('buffaloes-theme','irish-theme','aggies-theme');
        const className = document.body.className;
        console.log('current class name: '+ className);
    var coloradojs= document.getElementsByClassName("colorado")[0];
        console.log(coloradojs.style)
            coloradojs.style.display = "none"
    var iowajs= document.getElementsByClassName("iowa")[0];
        console.log(iowajs.style)
        iowajs.style.display = "block"
    var nmsujs= document.getElementsByClassName("nmsu")[0];
        console.log(nmsujs.style)
        nmsujs.style.display = "none"
    var notreDamejs= document.getElementsByClassName("notreDame")[0];
        console.log(notreDamejs.style)
        notreDamejs.style.display = "none"
    });

    const aggies = document.querySelector('.nmsuBtn');
    aggies.addEventListener('click',function(){
        document.body.classList.add('aggies-theme');
        document.body.classList.remove('hawkeyes-theme','irish-theme','buffaloes-theme');
    var coloradojs= document.getElementsByClassName("colorado")[0];
        console.log(coloradojs.style)
            coloradojs.style.display = "none"
    var iowajs= document.getElementsByClassName("iowa")[0];
        console.log(iowajs.style)
        iowajs.style.display = "none"
    var nmsujs= document.getElementsByClassName("nmsu")[0];
        console.log(nmsujs.style)
        nmsujs.style.display = "block"
    var notreDamejs= document.getElementsByClassName("notreDame")[0];
        console.log(notreDamejs.style)
        notreDamejs.style.display = "none"
        

        
    });

    const buffaloes = document.querySelector('.cuBtn');
    buffaloes.addEventListener('click',function(){
        document.body.classList.add('buffaloes-theme');
        document.body.classList.remove('hawkeyes-theme','irish-theme','aggies-theme');
        var coloradojs= document.getElementsByClassName("colorado")[0];
            console.log(coloradojs.style)
                coloradojs.style.display = "block"
        var iowajs= document.getElementsByClassName("iowa")[0];
            console.log(iowajs.style)
            iowajs.style.display = "none"
        var nmsujs= document.getElementsByClassName("nmsu")[0];
            console.log(nmsujs.style)
            nmsujs.style.display = "none"
        var notreDamejs= document.getElementsByClassName("notreDame")[0];
            console.log(notreDamejs.style)
            notreDamejs.style.display = "none"
            
    });

