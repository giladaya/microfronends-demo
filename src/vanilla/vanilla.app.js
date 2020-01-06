const HTML_ID = 'vanilla';

export const bootstrap = (props) => {
  console.log('vanilla app bootstrap');
  return Promise.resolve()
  .then(() => {
    // init css
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.innerText = `
    #vanilla h1 {
      color: orange;
    }
    `
    head.appendChild(style);
  });
}

export function mount(props) {
  return Promise
    .resolve()
    .then(() => {
      // Do framework UI rendering here
      console.log('vanilla app mount');
      const domEl = document.getElementById(HTML_ID);
      domEl.innerHTML = `<h1>Vanilla App</h1>`
    });
}

export function unmount(props) {
  return Promise
    .resolve()
    .then(() => {
      // Do framework UI rendering here
      console.log('vanilla app unmount');
      const domEl = document.getElementById(HTML_ID);
      domEl.innerHTML = "";
    });
}