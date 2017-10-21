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

    //calc n/s e/w separately TODO
    north.forEach(el => {
      el.style.top = app_size.top - window.getComputedStyle(el, null).getPropertyValue('font-size').split('px')[0] / 1.25;

      if (!el.classList.contains('east') || !el.classList.contains('west')) {
        const percentage = `${((window_width / 2 - el.getBoundingClientRect().width / 2) / window_width) * 100}`;
        el.style.left = `calc(${percentage}%)`;
      }
    });

    //this needs refactoring wow

    east.forEach(el => {
      const percentage = `${((app_size.right - el.getBoundingClientRect().width) / window_width) * 100}`;
      console.log(percentage)
      el.style.left = `calc(${percentage}%)`;
    });

    west.forEach(el => {
      const percentage = `${((app_size.left - el.getBoundingClientRect().width) / window_width) * 100}`;
      console.log(percentage)
      el.style.left = `calc(${percentage}%)`;
    });

    south.forEach(el => {
      el.style.bottom = window_height - app_size.bottom - window.getComputedStyle(el, null).getPropertyValue('font-size').split('px')[0] / 1.5;

      if (!el.classList.contains('east') || !el.classList.contains('west')) {
        const percentage = `${((window_width / 2 - el.getBoundingClientRect().width / 2) / window_width) * 100}`;
        el.style.left = `calc(${percentage}%)`;
      }
    });
  }

  calc_position(); //onload
};

window.onload = mingle;
window.addEventListener('resize', mingle, true);
