# portfolio

A single-page resume example with [`Vue.js 3`](https://vuejs.org/guide/introduction.html) and [`Vuetify 3 Beta`](https://next.vuetifyjs.com/en/getting-started/installation/).  

View [demo](https://jimj92120.github.io/portfolio/) (Github Pages).


---
## How to use

### Content

To change content, edit fields in `src/data/resume.json` accordingly and update `components` if necessary.  

### Dev icons

`dev-icons` are stored locally (sourced from [devicon.dev](https://devicon.dev/)).  

To add a new icon, download the image file into `public/img/icons/tech/` directory and list it in `src/dev-icon.json` (with its `slug` as key and a `title` with `path` as value).  


---
## Requirements
|              |         |
|--------------|---------|
| `Node.js`    | `^14.0` |
| `npm`        | `^6.0`  |
| `typescript` | `^4.0`  |


---
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```


---
## Deploy

### Github Pages

Update `deploy.sh` based on repository and branch used then run the following:
```bash
npm run deploy
```
