const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];


  
  const refs = {
      body: document.querySelector('body'),
      startBtn: document.querySelector(`[data-action="start"]`),
      stopBtn: document.querySelector(`[data-action="stop"]`)
  }
  
  let intervalId = null;
  
  refs.startBtn.addEventListener('click', startChange);
  refs.stopBtn.addEventListener('click', stopChange);
  
  function startChange() {
      
      intervalId = setInterval(() => {
          const bgColor = selectColor(colors);
          refs.body.style.backgroundColor = bgColor;
        }, 1500)
        
        refs.body.style.backgroundColor = selectColor(colors);
        refs.startBtn.disabled = true;
    }
    
    function stopChange() {
        clearInterval(intervalId);
        refs.startBtn.disabled = false;
    }
    
    
    function selectColor(colorsArray) {
        return colorsArray[randomIntegerFromInterval(0, colorsArray.length - 1)];
    }

    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };