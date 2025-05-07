site = document.createElement('script');
    let resolution = window.innerWidth

    if(resolution >= 576) {
      site.src = 'js/tablet.js';
    } else {
      site.src = 'js/mobile.js';
    }    
    document.getElementsByTagName('head')
    [0].appendChild(site)