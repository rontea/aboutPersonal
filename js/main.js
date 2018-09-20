/*
	Graph
*/


var item = $("#skill1");


var mySkillChart = new Chart(item, {
    type: 'doughnut',
    data: data,
   
});

var data = {
    datasets: [{
        data: [10]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        
    ]
};