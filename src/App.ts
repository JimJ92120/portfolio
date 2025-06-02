export default class App {
  $container: HTMLElement;

  constructor($container: HTMLElement) {
    this.$container = $container;
  }

  render() {
    this.$container.innerHTML = `
    <h1>Portfolio</h1>

    <canvas class="scene"></canvas>

    <div class="controls">
      <div class="controls__direction">
        <button>&#11164;</button>
        <button>&#11165;</button>
        <button>&#11166;</button>
        <button>&#11167;</button>
      </div>
      <div class="controls__select">
        <button>A</button>
        <button>B</button>
      </div>
    </div>
  `;
  }
}
