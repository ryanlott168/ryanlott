$(document).ready(function() {
  $('#contactButton').on('click', function(){
     $('#hiddenForm').show(600);
   })

   $('#closeButton').on('click', function(){
      $('#hiddenForm').hide(600);
    })


    $('.projectsTab').on('click', function(){
       $('.background').hide(600);
       $('.projects').show(600);
     })
     $('.backgroundTab').on('click', function(){
        $('.projects').hide(600);
        $('.background').show(600);
      })

      $('.nightModeButton').on('click', function(){
        $(this).toggleClass('lightModeImage');
         $('body').toggleClass('darkMode');
       })
 });

var ctx = document.getElementById('languages').getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['English', 'Chinese', 'Spanish'],
        datasets: [{
            label: 'percentage towards fluency',
            data: [100, 65, 60],
            borderColor: [
                'rgba(225, 14, 14, 0.6)',
                'rgba(72, 173, 60, 0.6)',
                'rgba(239, 170, 51, 0.81)'
            ],
            hoverBackgroundColor: [
                'rgba(225, 14, 14, 0.6)',
                'rgba(72, 173, 60, 0.6)',
                'rgba(239, 170, 51, 0.81)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      title: {
        display: true,
        text: 'Language Fluency'
      },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
    }
});

var tabs = $('.tabs');
var selector = $('.tabs').find('a').length;
//var selector = $(".tabs").find(".selector");
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();
$(".selector").css({
  "left": activeItem.position.left + "px",
  "width": activeWidth + "px"
});

$(".tabs").on("click","a",function(e){
  e.preventDefault();
  $('.tabs a').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px",
    "width": activeWidth + "px"
  });
});
