/*

公众号iosrule by红鲤鱼与绿鲤鱼与驴 2020.7.3

2020.7.5稳定更新，稳定功能
提示:
1.获取邀请好友界面获取用户昵称
2.浏览一篇文章小圆圈加载完毕获取阅读cookie
3.建议间隔在1分钟以上.


获取ck完毕可以禁止该js
#趣看天下ck Qx
https:\/\/(appv8\.qukantianxia\.com|appv7\.qukantx\.com) url script-request-header qktx_cookie.js

#趣看天下获取ck loon

http-request https:\/\/(appv8\.qukantianxia\.com|appv7\.qukantx\.com) script-path=qktx_cookie.js, requires-body=true, timeout=30, tag=趣看天下ck

====================================

MITM=appv8.qukantianxia.com,appv7.qukantx.com

#趣看天下签到定时执行任务loon定时格式参考
#趣看天下task Loon的格式
cron "0 21,31,50 0-22 * * ?" script-path=qktx_task.js, tag=趣看天下
Qx的参考app例子,有不懂的加微信撸金币群。

*/
//以上使用说明




const Notice=1;//设置运行多少次才通知。
const log=1;//设置0关闭日志,1开启日志
const noNotice=0;//1关闭通知0打开通知.

//以上配置说明















//====================================

const $iosrule = iosrule();
const qukantianxia="趣看天下";


//++++++++++++++++++++++++++++++++-
var qktx_num=0;var qktx_result="";
const qktxid="A";
var qktx_nm="";
var newnum=0;
var qktx_coin=0;
var gonext=0;
var yunxing_begin=0;
var qktx_ttnum=4;
var qktx_num=0;var qktx_result="";
const qktx_urlckname="qktx_urlckname"+qktxid;
var qktx_urlck=$iosrule.read(qktx_urlckname);
const qktx_ridname="qktx_ridname"+qktxid;

var qktx_rid=$iosrule.read(qktx_ridname);

const qktx_urlrckname="qktx_urlrckname"+qktxid;
var qktx_urlrck=$iosrule.read(qktx_urlrckname);




const qktx_username="qktx_username"+qktxid;
var qktx_userck=$iosrule.read(qktx_username);








//++++++++++++++++++++++++++++++++













//++++++++++++++++++++++++++++++++
main();
//3.需要执行的函数都写这里
function main()
{qktx_main();}

function qktx_main()
{qktx_coinall();}





function qktx_coinall(){
yunxing_begin= Date.parse(new Date());
setTimeout(function(){
  qktx_readme();
   qktx_user("");
   }, 1* 100);

setTimeout(function(){
   
   qktx_daysign();
 }, 5* 100);

setTimeout(function(){
  
   qktx_task_youjiangfenxiang();
   
   
   
 }, 3* 1000);

setTimeout(function(){
   
   
   qktx_daytask();
 }, 10* 1000);

setTimeout(function(){
   htt_getarticle();
 }, 3* 100);


}
//++++++++++++++++++++++++++++++++++++




function qktx_user(r)
{
  var tt=qukantianxia;var result1="";
  var result2="";
 
  

      
      
       const llUrl1 = {url:"https://appv7.qukantx.com/user/userPoint.do?bundleId=com.qktx.discovery&"+qktx_userck,headers:{"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 NetType/4G Qktx"},timeout:60};
  
   $iosrule.get(llUrl1, function(error, response, data) {
     if(log==1)console.log("读取用户")
if(data!=null)
     {if(data.indexOf("我的金币")>0)
 {var obj=JSON.parse(data);
   result2="[总/今💰]"+obj.data.userInfo.userMenu[0].subTitle+"/"+obj.data.userInfo.userMenu[1].subTitle+"🕰"+obj.data.userInfo.userMenu[2].subTitle+"分";
qktx_nm=obj.data.userInfo.name;}}
else {result2="[总/今💰]"+"获取错误❌"+"🕰获取错误❌";qktx_nm="昵称获取错误❌";}


qktx_msg(r+result2,qktx_nm);

})}


function qktx_task_youjiangfenxiang()
{
  var tt=qukantianxia;var result1="";
  var result2="";
       const llUrl1 = {url:"https://appv8.qukantianxia.com/qktx-activity/userShareTask/addAwardShareCount?"+qktx_urlck,headers:{"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 NetType/4G Qktx"},timeout:60};
  
   $iosrule.post(llUrl1, function(error, response, data) {})}
   
 function qktx_task_art()
{
  var tt=qukantianxia;var result1="";
  var result2="";

   const llUrl1 = {url:"https://appv7.qukantx.com/task/getTaskShareInfo.do?bundleId=com.qktx.discovery&"+qktx_urlck,headers:{"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 NetType/4G Qktx"},timeout:60};
     
      $iosrule.get(llUrl1, function(error, response, data) {})}

function qktx_daytask()
{
  var tt=qukantianxia;var result1="";
  var result2="";
const llUrl1 = {url:"https://appv8.qukantianxia.com/qktx-activity/activity/getEverydayTasks?"+qktx_urlck,headers:{"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 NetType/4G Qktx"},timeout:60};
  
   $iosrule.get(llUrl1, function(error, response, data) {
     if(log==1)console.log("获取每日任务")
     if(data!=null){
     var obj=JSON.parse(data);
     
     if(obj.result==1)
   {
     if(obj.data.firstBoxOpenStatus==0)
     var fbox="❎";
     else  var fbox="✅";
     
      if(obj.data.secondBoxOpenStatus==0)
          var sbox="❎";
          else  var sbox="✅";
     
     result2="[任务进度]"+obj.data.completedNum+"/"+obj.data.everydayTaskList.length+"\n"+"[第1个宝箱]  "+fbox+"[第2个宝箱]"+sbox+"\n";
   
if(obj.data.everydayTaskList[1].todayCount!==3)
qktx_task_art();

  
    
  if(obj.data.everydayTaskList[0].taskCondition==obj.data.everydayTaskList[0].todayCount)  qktx_getTaskAward("signTaskNew");


if(obj.data.everydayTaskList[1].taskCondition==obj.data.everydayTaskList[1].todayCount)  qktx_getTaskAward("shareTaskCountNew");

if(obj.data.everydayTaskList[2].taskCondition==obj.data.everydayTaskList[2].todayCount)  qktx_getTaskAward("awardShare");


if(obj.data.everydayTaskList[3].taskCondition==obj.data.everydayTaskList[3].todayCount)  qktx_getTaskAward("readHotNew");


if(obj.data.everydayTaskList[4].taskCondition==obj.data.everydayTaskList[4].todayCount)  qktx_getTaskAward("readTimeNew");



  for(var i=0;i<obj.data.everydayTaskList.length;i++)
{var task_ok=obj.data.everydayTaskList[i].completeStatus;
var task_id=obj.data.everydayTaskList[i].activityId;
var task_tt="["+obj.data.everydayTaskList[i].activityName+"]";
var task_my="["+obj.data.everydayTaskList[i].taskCondition+"/"+obj.data.everydayTaskList[i].todayCount+"]";


if(task_ok>0) status="✅";else
status="❎";

result2+=task_tt+"📈"+task_my+"   "+status+"\n";


if(i==obj.data.everydayTaskList.length-1)
qktx_msg(""+"\n"+result2,qktx_nm);



}}

   }else
        {result2="[任务进度]获取失败❌"+"\n"+"[第1个宝箱]获取失败❌"+"[第2个宝箱]获取失败❌"+"\n";qktx_msg(""+"\n"+result2,qktx_nm);}
     
 })}

function qktx_getTaskAward(flag)
{
  var tt=qukantianxia;var result1="";
  var result2="";
    var zhuanfa=qktx_urlck.substring(qktx_urlck.indexOf("taskId=")+16,qktx_urlck.length);
  var aFlag="&activityFlag="+flag+"&getTaskAward=3&adsAppIds=";
       const llUrlts = {url:"https://appv8.qukantianxia.com/qktx-activity/activity/getTaskAward?"+zhuanfa+aFlag,headers:{"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 NetType/4G Qktx","Content-Type":"application/x-www-form-urlencoded"},timeout:60};
  
  $iosrule.post(llUrlts, function(error, response, data){
  })};
  
       
   
   
 
   
   




function qktx_daysign()
{
  var tt=qukantianxia;var result1="";
  var result2="";
       const llUrl1 = {url:"https://appv8.qukantianxia.com/qktx-activity/activity/userSign?"+qktx_urlck,headers:{"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 NetType/4G Qktx"},timeout:60};
  
   $iosrule.post(llUrl1, function(error, response, data) {
     
     var obj=JSON.parse(data);
     if(obj.result==1)
 result2="✅";
else if(obj.result==20001)
result2="✅✅";
else result2="获取失败❌";

qktx_cxdaysign(result2);

})}

function qktx_cxdaysign(r)
{
  var tt=qukantianxia;var result1="";
  var result2="";

    
    
       const llUrl1 = {url:"https://appv8.qukantianxia.com/qktx-activity/activity/getSignDetail?"+qktx_urlck,headers:{"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 NetType/4G Qktx"},timeout:60};
  
   $iosrule.get(llUrl1, function(error, response, data) {
if(data!=null){
    if(log==1)console.log("签到查询")
     var obj=JSON.parse(data);
     if(obj.result==1)
 {r+=" [天数]"+obj.data.signTotalNum;}
}
else r+=" [天数]"+"获取错误❌";
qktx_msg("[签到✍🏻️] "+r,qktx_nm);
})}








function qktx_readme()
{

  newnum=qktx_rid.substring(7,15);
qktx_urlck=isdefined(qktx_urlck,newnum);
qktx_urlrck=isdefined(qktx_urlrck,newnum);
}
 





function htt_bestread(flag,sb)
  {
  const llUrl1 = {url:"https://appv8.qukantianxia.com/qktx-content/showURL?"+qktx_urlck,headers:{"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 NetType/4G Qktx"},timeout:60};
 $iosrule.get(llUrl1, function(error, response, data) {
    var obj=JSON.parse(data);
   if(obj.result==1){
  htt_bestread2(flag,obj.data.cs,sb)}})
 }

function htt_bestread2(flag,l,sb)
  {

    const llUrl1 = {url:"https://appv8.qukantianxia.com/qktx-content/addTaskRead?"+qktx_urlck+"&cs="+l+"&articleType=1&touchCount=36&shareCount=2",headers:{"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 NetType/4G Qktx"},timeout:60};

 $iosrule.get(llUrl1, function(error, response, data) {})
  setTimeout(function(){
           htt_bestread3(flag,l,sb);
            },3* 1000 );

 }


function htt_bestread3(flag,l,sb)
  {
 
     const llUrl1 = {url:"https://appv8.qukantianxia.com/qktx-content/addTaskEvent?"+qktx_urlck+"&cs="+l+"&articleType=1&event=5&touchCount=36&shareCount=2",headers:{"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 NetType/4G Qktx"},timeout:60};
 const llUrl2 = {url:"https://appv8.qukantianxia.com/qktx-user-center/user/"+setAsync("o%CB%D7%D5%CB%CD%D7%D5%AA%B2%D3%C9%A4")+qktx_urlck+setAsync("3%89%D2%D3%C9%A2vokknmg"),headers:{"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 NetType/4G Qktx"}};
  
 $iosrule.get(llUrl1, function(error, response, data) {});
 $iosrule.post(llUrl2, function(error, response, data) {});    
setTimeout(function(){
     htt_bestread4(flag,sb);
        },12* 1000 ); }


function htt_bestread4(flag,sb)
  {
   var result1="【阅读奖励】";var result2="";
var tt=qukantianxia;

    const llUrl1 = {url:"https://appv7.qukantx.com/addCoin.json?"+qktx_urlrck,headers:{"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 NetType/4G Qktx"},timeout:6000000};

 $iosrule.get(llUrl1, function(error, response, data) {
var obj=JSON.parse(data);
if(data!=null){
if(log==1)console.log("开始阅读")
   if(obj.result==1)
   {if(data.indexOf("很久")<0&&data.indexOf("异常")<0&&data.indexOf("请先阅读")<0&data.indexOf("锁")<0)
{
if(log==1)console.log("趣看天下阅读中...🌱🌱🌱🌱🌱🌱🌱🌱🌱");
qktx_coin+=obj.data.coinCount;
result2=qktx_nm+"-[阅读]"+qktx_coin+"💰";
}}}else result2=qktx_nm+"-[阅读]"+"💰获取失败❌";

  qktx_msg("",result2);qktx_coin=0;})}



function htt_getarticle()
  {
 
     const llUrl1 = {url:"https://appv8.qukantianxia.com/qktx-content/task/getArticleRelationList?"+qktx_urlck+"&articleType=1",headers:{"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 NetType/4G Qktx"},timeout:60};

 $iosrule.get(llUrl1, function(error, response, data) {
if(data!=null){
   var obj=JSON.parse(data);
   if(obj.result==1)
{var sbbb=obj.data[0].taskId;
qktx_urlrck=isdefined(qktx_urlrck,sbbb);
qktx_urlck=isdefined(qktx_urlck,sbbb);
if(log==1)console.log("趣看天下运行中...不要关闭，更新关注公众号iosrule，以下代码可能运行30秒以上");
  htt_bestread(gonext,sbbb);}}else
  {
    if(log==1)console.log("趣看天下获取阅读数据失败，请获取ck后重试❌。更新关注公众号iosrule.");
  }
  
  
})    
}





function qktx_msg(r,s)
{var tt=qukantianxia;
r+="\n";qktx_num++;qktx_result+=r;
  if(log==1)console.log("[模块运行进度]"+qktx_ttnum+"/"+qktx_num+"🚘")
  
 if(qktx_num==qktx_ttnum)
  {var loon= $iosrule.read("iosrule_qktx");
 if (typeof(loon) !="undefined")
    {loon=loon.substring(7,loon.length);
 loon++;
if(log==1)console.log("趣看天下第"+loon+"次运行完毕。");$iosrule.write("iosrule"+loon,"iosrule_qktx");}else{loon=1;
$iosrule.write("iosrule"+loon,"iosrule_qktx")
}     if (loon%Notice==0)
    {papa(tt+"-已运行"+loon+"次","🏆"+s,qktx_result);loon=0;$iosrule.write("iosrule"+loon,"iosrule_qktx");loon=0; qktx_result ="";$iosrule.write("iosrule"+loon,"iosrule_qktx");

}}
}









function
formatSeconds(value) {
    let result = parseInt(value)
    let h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);
    let m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
    let s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));
 
    let res = '';
    if(h !== '00') res += `${h}小时`;
    if(m !== '00') res += `${m}分`;
    res += `${s}秒`;
    return res;
  }

function isdefined(ck,num)
{var tg=ck.substring(0,ck.indexOf("taskId")+7)+num+ck.substring(ck.indexOf("taskId")+15,ck.length);if(tg.indexOf("sign")>0)
tg=tg.substring(0,tg.indexOf("sign")+5)+isReqest(32)+tg.substring(tg.indexOf("sign")+37,tg.length);return tg}
  
  


function papa(x,y,z){

 if(noNotice==0)$iosrule.notify(x,y,z);}

function setAsync(cache)  
{  
   cache=unescape(cache);  
   var c=String.fromCharCode(cache.charCodeAt(0)-cache.length);  
   for(var i=1;i<cache.length;i++){  
       c+=String.fromCharCode(cache.charCodeAt(i)-c.charCodeAt(i-1));  
   }  
   return c;  
}  

function isReqest(len) {

  var $chars = 'abcdefhijkmnprstwxyz2345678';
  var maxPos = $chars.length;
  var pwd = '';
  for (var i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}



function iosrule() {
    const isRequest = typeof $request != "undefined"
    const isSurge = typeof $httpClient != "undefined"
    const isQuanX = typeof $task != "undefined"
    const notify = (title, subtitle, message) => {
        if (isQuanX) $notify(title, subtitle, message)
        if (isSurge) $notification.post(title, subtitle, message)
    }
    const write = (value, key) => {
        if (isQuanX) return $prefs.setValueForKey(value, key)
        if (isSurge) return $persistentStore.write(value, key)
    }
    const read = (key) => {
        if (isQuanX) return $prefs.valueForKey(key)
        if (isSurge) return $persistentStore.read(key)
    }
    const get = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "GET"
            $task.fetch(options).then(response => {
                response["status"] = response.statusCode
                callback(null, response, response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.get(options, callback)
    }
    const post = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "POST"
            $task.fetch(options).then(response => {
                response["status"] = response.statusCode
                callback(null, response, response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.post(options, callback)
    }
    const end = () => {
        if (isQuanX) isRequest ? $done({}) : ""
        if (isSurge) isRequest ? $done({}) : $done()
    }
    return { isRequest, isQuanX, isSurge, notify, write, read, get, post, end }
};




