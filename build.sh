rm -rf index.* *.png

mkdir build
git clone https://github.com/JimJ92120/portfolio.git build

npm install --prefix=./build
npm run build --prefix=./build

cp -r ./build/dist/* .

rm -rf ./build
