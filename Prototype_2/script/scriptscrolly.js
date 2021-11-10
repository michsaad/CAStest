document.addEventListener('DOMContentLoaded', async function () {
  function changeBallOpacity(opacity) {
    console.log(opacity);
    let ball = document.querySelector('.ball');
    ball.style.opacity = opacity;
  }

  changeBallOpacity (1);

  // instantiate the scrollama
  const scroller = scrollama();

  let numberSteps = document.querySelectorAll('.scroll-step').length;
  console.log(numberSteps);

  // setup the instance, pass callback functions
  scroller
    .setup({
      step: '.scroll-step',
    })
    .onStepEnter((response) => {
      console.log(response)
      let desiredSize = response.element.getAttribute('data-size');

      if (index = [1]) {
        changeBallSize(1);
      }

      // { element, index, direction }
    })
    .onStepExit((response) => {
      //detect if it's the last step
      if (response.index == numberSteps - 1) {
        changeBallSize(100, 100);      
      }
    });
    
});

