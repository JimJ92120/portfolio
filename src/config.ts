type Config = {
  // tileSize: [number, number];
  maxSceneSize: number;
  frameSize: [number, number];
  typeSpeed: number;
  welcomeMessage: string;
};

export default {
  // tileSize: [50, 50],
  maxSceneSize: 500,
  frameSize: [10, 10],
  typeSpeed: 50,
  welcomeMessage:
    "Hello World!\nWelcome to my Portfolio.\n \nUse buttons or keyboard arrows to visit the town!",
} as Config;
