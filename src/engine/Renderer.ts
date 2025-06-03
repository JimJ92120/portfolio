export default class Renderer {
  private $scene: HTMLCanvasElement;
  private $prompt: HTMLElement;
  private context: CanvasRenderingContext2D;
  private tileSize: [number, number];
  private typeSpeed: number;

  constructor(
    $scene: HTMLCanvasElement,
    $prompt: HTMLElement,
    tileSize: [number, number],
    typeSpeed: number
  ) {
    this.$scene = $scene;
    this.$prompt = $prompt;
    this.tileSize = tileSize;
    this.typeSpeed = typeSpeed;

    this.context = this.$scene.getContext("2d")!;
  }

  get width(): number {
    return this.$scene.width;
  }

  get height(): number {
    return this.$scene.height;
  }

  resize(width: number, height: number): void {
    this.$scene.width = width * this.tileSize[0];
    this.$scene.height = height * this.tileSize[1];
  }

  showPrompt(title: string, message: string): void {
    const hasTitle = "" !== title;
    const hasMessage = "" !== message;

    if (!hasTitle && !hasMessage) {
      return;
    }

    this.$prompt.textContent = "";

    if (hasTitle) {
      this.$prompt.textContent = `${title}`;
    }

    if (hasMessage) {
      if (hasTitle) {
        this.$prompt.textContent += ":\n";
      }

      this.type(message.trim(), this.$prompt, this.typeSpeed);
      // this.$prompt.textContent += message;
    }

    this.$prompt.classList.add("prompt--active");
  }
  hidePrompt(): void {
    this.$prompt.classList.remove("prompt--active");
  }

  renderData(data: number[][]): void {
    this.context.clearRect(0, 0, this.width, this.height);

    data.map((row, rowIndex) => {
      row.map((cellValue, columnIndex) => {
        this.renderTile([columnIndex, rowIndex], this.getTileColor(cellValue));
      });
    });
  }
  renderTile(position: [number, number], color: string): void {
    this.context.fillStyle = color;
    this.context.fillRect(
      position[0] * this.tileSize[0],
      position[1] * this.tileSize[1],
      this.tileSize[0],
      this.tileSize[1]
    );
  }
  renderBackground(
    image: HTMLImageElement,
    width: number,
    height: number
  ): void {
    this.context.drawImage(
      image,
      0,
      0,
      width * this.tileSize[0],
      height * this.tileSize[1]
    );
  }
  renderPlayer(image: HTMLImageElement, position: [number, number]): void {
    this.context.drawImage(
      image,
      position[0] * this.tileSize[0],
      position[1] * this.tileSize[1],
      this.tileSize[0],
      this.tileSize[1]
    );
  }

  private getTileColor(cellValue: number): string {
    switch (cellValue) {
      case 0:
        return "green";
      case 2:
        return "blue";
      case 3:
        return "grey";

      default:
        return "black";
    }
  }

  private type(text: string, $element: HTMLElement, speed: number): void {
    const split = text.split("\n");
    let rowOffset = 0;

    split.map((textRow, textRowIndex) => {
      if (0 < textRowIndex) {
        rowOffset += split[textRowIndex - 1].length;
      }

      setTimeout(() => {
        for (let charIndex = 0; charIndex < textRow.length; charIndex++) {
          setTimeout(() => {
            if (0 === charIndex && 0 !== textRowIndex) {
              $element.textContent += "\n";
            }
            $element.textContent += textRow[charIndex];
          }, speed * charIndex);
        }
      }, speed * rowOffset);
    });
  }
}
