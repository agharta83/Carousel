var app = {
  init: function() {
    // répéter toutes les 5 secondes :
    // on change d'image
    app.interval = setInterval(app.changeImage, 5000);
  },

  changeImage: function() {
    // identification des éléments à modifier

    // quelle est l'image active ?
    var $current = $('.active');
    // quelle sera l'image suivante ?
    // next récupère l'élément qui suit l'image de classe "active"
    var $next = $current.next();
    // cas où l'image active est la dernière
    if($next.length === 0) {
      // la prochaine active sera la première image du carousel
      $next = $('#carousel img').first();
    }

    // la modification du DOM
    // on masque l'image active avec fadeOut
    $current.removeClass('active').fadeOut({
      // et quand l'image active est masquée,
      // on montre la suivante
      duration: 200,
      complete: function () {
        $next.fadeIn({
          duration: 1000,
          //  qui devient active
          complete: function() {
            $next.addClass('active');
          }
        });
      }

    });

  }
};

$(app.init);
