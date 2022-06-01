clear
echo '🛡🎢 Reseting Github Actions for accepting any audit score with any score'
cp ./templates/2.fixed_api.txt ../../nodejs-server-server-generated/openapi.yaml
echo '✋ Please, removing the file ../../nodejs-server-server-generated/openapi.yaml'
echo '😱 Git remove and add the new main.yml'
git rm --cached ../../nodejs-server-server-generated/openapi.yaml
git add .

echo '🎉 Now time to see the changes via VS Code and Stage them or use git commit and push in terminal 🎉'

