$( document ).ready( function() {
      $( '.korean' ).animate( {
        opacity: '1'
      }, Delay, function() {
        $( '.english' ).animate( {
          opacity: '1'
        }, Delay, function() {
          $( '.gotomap' ).animate( {
            opacity: '1'
          }, Delay );
        });
      });
    });