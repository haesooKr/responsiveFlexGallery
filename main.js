const panels = document.querySelectorAll('.panel');

function handleClick(){
    console.log('Hello');
    this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click', handleClick));