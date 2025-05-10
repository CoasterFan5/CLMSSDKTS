java -jar builder.jar generate \
-i swagger2.json \
-g typescript-node \
-o dist \
--skip-validate-spec

chmod +x ./dist/git_push.sh
./dist/git_push.sh
