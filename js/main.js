$(document).ready(function () {

	
	var ctx = $("#skills");

	var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Red"],
        datasets: [{
            
            data: [60,40],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 1)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
		
		display: false,
		legend: {
            display: false
         },
		tooltips: {
            enabled: false
         },
        
    }
});
	
	
	
});
