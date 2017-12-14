var elements = document.getElementsByClassName("project-person-task-dscrpt");
    console.log(elements.length);

    for (var i = 0; i < elements.length; i++) {
    	elements[i].addEventListener('mouseover', function(e){
		var ele = this.getElementsByClassName('inner');
			ele[0].style.display = 'block';

		});

		elements[i].addEventListener('mouseout', function(e){
		var ele = this.getElementsByClassName('inner');
		ele[0].style.display = 'none';
		});
    }