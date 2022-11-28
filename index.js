window.onload = function () { 
	var request = new XMLHttpRequest();
	request.onreadystatechange = function () { 
		if (this.readyState == 4 && this.status == 200) {
			data_chart_line_1 = JSON.parse(this.responseText).data_charts.map((item) => parseInt(item, 10));
			data_chart_line_2 = JSON.parse(this.responseText).data_charts2.map((item) => parseInt(item, 10));
			const labels = [' ', ' ', ' ',' ',' ',' ',' ',' '];
	
	 const data_3 = {
        labels: labels,
        datasets: [{
            backgroundColor: '#5caee1',
            borderColor: '#5caee1',
            data: data_chart_line_1,
            tension: 0.6,
                
        },{
				backgroundColor: '#cdd945',
				borderColor: '#cdd945',
				data: data_chart_line_2,
				 tension: 0.6,
			}]
    };
    const config_3 = {
        type: 'line',
        responsive: true,
        data: data_3,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                y: {
                    max: 40,
                    min: 0,
                    grace: '5%',
				}, x: {
    						grid: {
     							 display: false
    							}
							  }
            },
            

        },
             
    };
	
    const myChart_3 = new Chart(
        document.getElementById('myChart_3'),
        config_3
	)
		}
	}
	request.open("GET", "data.json", true);
	request.send();


    var data = {
		datasets: [
			{
				data: [32,68],
				cutout: 80,
				responsive: true,
				backgroundColor: [
					"#eaf2f9",
					"#5caee1",
                            
				],
				hoverBackgroundColor: [
					"#eaf2f9",
					"#5caee1",
                            
				]
			}]
    };
    var data_2 = {
		datasets: [
			{
				data: [61,39],
				cutout: 80,
				responsive: true,
				backgroundColor: [
					"#eaf2f9",
					"#cdd945",
                            
				],
				hoverBackgroundColor: [
					"#eaf2f9",
					"#cdd945",
                            
				]
			}]
	};
	const config = {
		type: 'doughnut',
		data: data,
		options: {
			
			
			plugins: {
				legend: {
					display: false,
				},
				title: {
					display: false,
					
				}
			}
		},
    };
    const config2 = {
		type: 'doughnut',
		data: data_2,
		options: {
			
			
			plugins: {
				legend: {
					display: false,
				},
				title: {
					display: false,
					
				}
			}
		},
	};
		const myChart = new Chart(
		document.getElementById('doughnut_1'),
            config)
    const myChart2 = new Chart(
		document.getElementById('doughnut_2'),
		config2)
	
	
	
	 
	


	var app = {
	settings: {
		container: $('.calendar'),
		calendar: $('.front'),
		days: $('.weeks span'),
		form: $('.back'),
		input: $('.back input'),
		buttons: $('.back button')
	},

	init: function() {
		instance = this;
		settings = this.settings;
		this.bindUIActions();
	},

	swap: function(currentSide, desiredSide) {
		settings.container.toggleClass('flip');

    currentSide.fadeOut(900);
    currentSide.hide();
    desiredSide.show();

	},

	bindUIActions: function() {
		settings.days.on('click', function(){
			instance.swap(settings.calendar, settings.form);
			settings.input.focus();
		});

		settings.buttons.on('click', function(){
			instance.swap(settings.form, settings.calendar);
		});
	}
}

app.init();
}