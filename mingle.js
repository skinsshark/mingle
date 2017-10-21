function mingle() {
  const app = document.querySelector('#mingling main');
  const app_size = app.getBoundingClientRect();

  const calc_position = () => {
    let window_width = document.documentElement.clientWidth;
    let window_height = document.documentElement.clientHeight;

    //if these exist TODO
    const north = Array.from(document.getElementsByClassName('north'));
    const south = Array.from(document.getElementsByClassName('south'));
    const west = Array.from(document.getElementsByClassName('west'));
    const east = Array.from(document.getElementsByClassName('east'));

    north.forEach(el => {
      el.style.top = app_size.top - window.getComputedStyle(el, null).getPropertyValue('font-size').split('px')[0] / 1.25;

      const percentage = `${((window_width / 2 - el.getBoundingClientRect().width / 2) / window_width) * 100}`;
      el.style.left = `calc(${percentage}%)`;
    });
  }

  calc_position(); //onload
  window.addEventListener('resize', calc_position, true); //implement debouncing
};

window.onload = mingle;
