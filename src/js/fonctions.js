function carrousel() {
    var images4 = document.querySelectorAll('.image4');
    let d = 2000;
    let delta = 1000;

    images4.forEach(function(img,indice) {
        img.style.zIndex = images4.length - indice;
    });

    let anim4 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim4.add({
        targets: images4,
        translateX: [{value: '250', duration: d},
                     {value: '-250', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (5*delta)+(4*d);
                         if (ind == 1) return (4*delta)+(3*d);
                         if (ind == 2) return (3*delta)+(2*d);
                         if (ind == 3) return (2*delta)+d;
                         if (ind == 4) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 5) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            if (ind == 3) return (4*delta)+(3*d);
            if (ind == 4) return (5*delta)+(4*d);
            return (6*delta)+(5*d);
        }
    });
	
}