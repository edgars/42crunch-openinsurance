clear
echo '🛡🎢 Reseting Github Actions for accepting any audit score with any score'
echo '✋ Please, remove the file ../../../.github/workflows/main.yml and tweak with it a little bit'
touch ../../../.github/workflows/main.yml
cp ./templates/1-main.yaml ../../../.github/workflows/main.yml
echo '🎉 Now time to see the changes via VS Code and Stage them or use git commands in terminal 🎉'

