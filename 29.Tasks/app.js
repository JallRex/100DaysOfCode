//Cool stuff
//https://code.mu/en/javascript/book/practice/checklist/final-code/


let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
		let li = document.createElement('li');
		
		let task = document.createElement('span');
		task.classList.add('task');
		task.textContent = this.value;
		task.addEventListener('dblclick', function() {
			let text = this.textContent;
			this.textContent = '';
			
			let edit = document.createElement('input');
			edit.value = text;
			this.appendChild(edit);
			
			let self = this;
			edit.addEventListener('keypress', function(event) {
				if (event.key == 'Enter') {
					self.textContent = this.value;
				}
			});
		});
		li.appendChild(task);
		
		let remove = document.createElement('span');
		remove.textContent = 'remove';
		remove.classList.add('remove');
		remove.addEventListener('click', function() {
			this.parentElement.remove();
		});
		li.appendChild(remove);
		
		let mark = document.createElement('span');
		mark.textContent = 'done';
		mark.classList.add('mark');
		mark.addEventListener('click', function() {
			this.parentElement.classList.add('done');
		});
		li.appendChild(mark);
		
		list.appendChild(li);
		
		this.value = '';
	}
});