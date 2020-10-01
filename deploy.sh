
rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M master &&
git remote add origin git@github.com:Freddy-Gong/vue3-wheel-websit.git &&
git push -f -u origin master &&
cd .. &&
echo https://freddy-gong.github.io/vue3-wheel-websit/