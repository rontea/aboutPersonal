$(document).ready(function () {
	
/* Cover letter */
	
	$('.l-item-middle-bottom').click(function (){
		
		$('.pop-wrap').toggleClass('show');
		
	});
	
	$('.popout-close').click(function (){
		
		$('.pop-wrap').toggleClass('show');
		
	});
	
	
var ctx = $('#skills');	

 var option = { 
        
        legend: { 
            display: false, 
            position: 'left', 
         }, 
        tooltips: { 
            enabled: false 
         }, 
        maintainAspectRatio: true,
	 
	 	scales: {
			xAxes: [{
				
				gridLines: {
					
					display: false,
				}
			}],
			
			yAxes: [{
			
				gridLines: {
					display: false,	
				}
			
			}],
		},
	 	
    }; 	
	
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: 'My Skills',
            data: [0, 20, 40, 60, 80, 100],
			
			
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: option,
});
	ctx.canvas.parentNode.style.height = '128px';
});
