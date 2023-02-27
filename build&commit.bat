@echo off

rem 各ツールのビルド------------------------------------
cd C:\app\workspace\git\camJTableTool\front_tool
call npm run build

cd C:\app\workspace\git\csv_converter
call npm run build

cd C:\app\workspace\git\projectTemplate_react
call npm run build

rem ビルドフォルダをikegamiToolに上書き------------------
xcopy /e /y C:\app\workspace\git\camJTableTool\front_tool\build C:\app\workspace\git\ikegamiTool\confirmTableTool

xcopy /e /y C:\app\workspace\git\csv_converter\build C:\app\workspace\git\ikegamiTool\csvConverter

xcopy /e /y C:\app\workspace\git\projectTemplate_react\build C:\app\workspace\git\ikegamiTool\projectTemplate

rem コミット----------------------------------------------
cd C:\app\workspace\git\ikegamiTool
git add .
git commit -m "commit"
git push origin master
