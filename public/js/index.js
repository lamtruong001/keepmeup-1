$(document).ready(function(){
  $('.ui.sidebar').sidebar('setting','closeable',false).sidebar('attach events', '#burger');
      $(".remove").off('click').on('click', function(){
          $('.ui.sidebar') .sidebar('hide');
      });
      $('.ui.dropdown').dropdown();
      $("#burger").on('click', function() {
        console.log("YAY");
      })
      $(".header-search .prompt").on("click", function(){
        alert("not implemented yet, sorry!");
      })
  });
