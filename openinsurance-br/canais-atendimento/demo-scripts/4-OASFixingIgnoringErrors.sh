clear
echo '🛡🎢 Reseting Github Actions - Fixed OAS 90+ in VS Code but Stopping in Security Gates'
cp ./templates/4.done_api.txt ../../canais-atendimento/nodejs-server-server-generated/api/openapi.yaml
echo '✋ Please, removing the file ../../nodejs-server-server-generated/openapi.yaml'
echo '😱 Git remove and add the openapi.yaml'
git rm --cached ../../canais-atendimento/nodejs-server-server-generated/api/openapi.yaml
git add .

echo '🎉 Now time to see the changes via VS Code and Stage them or use git commit and push in terminal 🎉'

