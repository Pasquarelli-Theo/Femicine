function carrousel() {
  
	var imagesfilms = document.querySelectorAll('.imagesfilms');
    let d = 2000;
    let delta = 1000;

    imagesfilms.forEach(function(img,indice) {
        img.style.zIndex = imagesfilms.length - indice;
    });

    let animfilms = anime.timeline({
        loop: true,
        delay: 0
    });

    animfilms.add({
        targets: imagesfilms,
        translateX: [{value: '500', duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (5*delta)+(4*d); 
                         if (ind == 1) return (4*delta)+(3*d);
                         if (ind == 2) return (3*delta)+(2*d);
                         if (ind == 3) return (2*delta)+d;
                         if (ind == 4) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 6) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            if (ind == 3) return (4*delta)+(3*d);
            if (ind == 4) return (5*delta)+(4*d);
            if (ind == 4) return (6*delta)+(5*d);
            return (7*delta)+(6*d);
        }
    });	
}