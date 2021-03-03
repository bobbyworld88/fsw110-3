var x = document.getElementById('box');
x.addEventListener('mouseover', mouseOverFunction);
x.addEventListener('mousedown', mouseDownFunction);
x.addEventListener('mouseleave', mouseLeaveOverFunction);
x.addEventListener('dblclick', mouseDoubleClickFunction);
x.addEventListener('wheel', mouseScrollFunction)

function mouseScrollFunction(x){
  document.getElementById('box').style.backgroundColor = 'orange';
  

}

function mouseDoubleClickFunction(x){
  document.getElementById('box').style.backgroundColor = 'green';
  console.log(x)

}


function mouseLeaveOverFunction(x){
  
  document.getElementById('box').style.backgroundColor = 'yellow';
}

function mouseDownFunction(x){
  document.getElementById('box').style.backgroundColor = 'red'; 
  
}

function mouseOverFunction(x){
  document.getElementById('box').style.backgroundColor = 'blue';
  
}

const log = document.getElementById('box');

document.addEventListener('keypress', logKey);


function logKey(x) {
  switch (x.keyCode) {
    case 114:
      console.log(`the letter pressed was ${x.code}`)
      log.textContent += ` ${x.code}`;
      log.style.backgroundColor = 'red'
      break;

      case 98:
      console.log(`the letter pressed was ${x.code}`)
      log.textContent += ` ${x.code}`;
      log.style.backgroundColor = 'blue'
      break;

      case 121:
      console.log(`the letter pressed was ${x.code}`)
      log.textContent += ` ${x.code}`;
      log.style.backgroundColor = 'yellow'
      break;

      case 103:
      console.log(`the letter pressed was ${x.code}`)
      log.textContent += ` ${x.code}`;
      log.style.backgroundColor = 'green'
      break;

      case 111:
      console.log(`the letter pressed was ${x.code}`)
      log.textContent += ` ${x.code}`;
      log.style.backgroundColor = 'orange'
      break;

  }
  log.textContent += ` ${x.code}`;
  console.log(x.code, x.keyCode);
}