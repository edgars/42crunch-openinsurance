clear
echo '🛡🎢 Reseting Github Actions for accepting any audit score with any score'
echo '✋ Please, remove the file ../../../.github/workflows/main.yml and tweak with it a little bit'

cp ./templates/1-main.yaml ../../../.github/workflows/main.yml
echo '😱 Git remove and add the new main.yml'
git rm --cached ../../../.github/workflows/main.yml
git add .

cp ./templates/1.oas_with_issues.txt ../../canais-atendimento/nodejs-server-server-generated/api/openapi.yaml
echo '😱 Git remove and add the openapi.yaml'
git rm --cached ../../canais-atendimento/nodejs-server-server-generated/api/openapi.yaml
git add .

