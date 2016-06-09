function open1(id){


document.getElementById('featured_content').style.display = 'none';
document.getElementById('our_clients_content').style.display = 'none';
document.getElementById('main_services_content').style.display = 'none';



	var block = document.getElementById(id);
	if(block.style.display == 'block'){
		block.style.display = 'none';
	}else{
		block.style.display = 'block';
	}
	
}