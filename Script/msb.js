#!name=马士兵-语言编程学习
#!desc=解锁全课程
#!openurl= https://apps.apple.com/app/id1576154151
#!icon=https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/45/e4/91/45e4916a-697d-cf4f-a6e5-167a3b538ca4/AppIcon-1x_U007emarketing-0-7-0-85-220.png/512x512bb.png

[Script]
http-response https:\/\/gateway\.mashibing\.com\/edu-course\/(coursePackage\/app\/1|app\/systemCourse|courseWeb) script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/msb.js, requires-body=true, timeout=60, tag=msb

[MITM]
hostname = gateway.mashibing.com