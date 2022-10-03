'use strict';
const switcher = document.querySelector('.ndBtn');
switcher.addEventListener('click',function(){
    document.body.classList.toggle('irish-theme');
    const className = document.body.className;
    console.log('current class name: '+ className);
});
    // const switcher = document.querySelector('#iowaBtn');
    // switcher.addEventListener('click',function(){
    //     document.body.classList.toggle('hawkeyes-theme');
    //     const className = document.body.className;
    //     console.log('current class name: '+ className);
    // });

    // const switcher = document.querySelector('#nmsuBtn');
    // switcher.addEventListener('click',function(){
    //     document.body.classList.toggle('aggies-theme');
    //     const className = document.body.className;
    //     if(className == "aggies-theme")

    //     console.log('current class name: '+ className);
    // });

    // const switcher = document.querySelector('#cuBtn');
    // switcher.addEventListener('click',function(){
    //     document.body.classList.toggle('buffaloes-theme');

    //     const className = document.body.className;
    //     if(className == "buffaloes-theme")

    //     console.log('current class name: '+ className);
    // });

