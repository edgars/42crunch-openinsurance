clear
echo '🛡🎢 Reseting Github Actions for accepting any audit score with any score'
touch ../../../.github/workflows/main.yml
cp ./templates/1-main.yaml ../../../.github/workflows/main.yml
echo '🎉 Now time to see the changes via VS Code and Stage them or use git commands in terminal 🎉'

