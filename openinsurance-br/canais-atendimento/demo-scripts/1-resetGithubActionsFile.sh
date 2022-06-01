clear
echo 'Reseting Github Actions for accepting any audit score with any score'
cp ./templates/1-main.yaml ../../../.github/workflows/main.yaml
cd ../../..
pwd
git add .
git commit 'reseting the demo for accepting any audit score'
git push
pwd
