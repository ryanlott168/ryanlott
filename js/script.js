$(document).ready(function() {
  $('#contactButton').on('click', function(){
     $('#hiddenForm').toggleClass('hidden',1000, "easeOutSine" );
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
