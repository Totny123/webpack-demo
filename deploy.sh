yarn build &&
git add . &&
git commit -m "update" &&
git push -u origin master &&
git checkout git-page &&
rm -rf *.js *.sh *.html *.css &&
mv dist/* / &&
rm -rf dist &&
git add . &&
git commit -m "update" &&
git push -u origin git-page &&
git checkout - &&