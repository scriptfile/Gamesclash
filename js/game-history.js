function usercheck(){localforage['getItem']('userlogindata')['then'](_0x2f9461=>{if(_0x2f9461==!![]){}else window['location']['href']='/login';;});};localforage['getItem']('Avatar')['then'](_0x2a2b5c=>{document['getElementById']('Avatar')['src']='/avatar/'+_0x2a2b5c;}),localforage['getItem']('Wincash')['then'](_0x2adce5=>{var _0x54607a=_0x2adce5;addDiposit(_0x54607a);});function addDiposit(_0x35a26c){localforage['getItem']('DepositCash')['then'](_0x4b0ca7=>{document['getElementById']('wincash')['innerHTML']=Math['floor'](+_0x35a26c+_0x4b0ca7);});};$('#Games')['bind']('DOMSubtreeModified',function(){let _0x1a39df=document['getElementById']('Games')['innerHTML'];const _0x30c7c7=_0x1a39df['split']('against')['length'];_0x30c7c7<0x2?(document['getElementById']('nogamelationbanner')['style']['display']='block',document['getElementById']('gamehistorylist')['style']['display']='none'):(document['getElementById']('nogamelationbanner')['style']['display']='none',document['getElementById']('gamehistorylist')['style']['display']='block');}),localforage['getItem']('UserID')['then'](_0x45b04c=>{doGameslod(_0x45b04c);});function doGameslod(_0x249c66){(function(){var _0x2649c8=angular['module']('Games',['firebase']);_0x2649c8['controller']('Gamescontollers',['$scope','$firebaseArray','$interval',function(_0x35d761,_0x3dfb94,_0x172718){_0x35d761['sortType']='Ms',_0x35d761['sortReverse']=![],_0x35d761['searchUserId']=_0x249c66,_0x35d761['showData']=function(){_0x35d761['itemPerPage']=0xa,_0x35d761['currentPage']=0x0;var _0x2aea74=firebase['database']()['ref']()['child']('Game-History');_0x35d761['pages']=_0x3dfb94(_0x2aea74),_0x35d761['range']=function(){var _0x3a46ad=0x4,_0x431a52=[],_0x2a4ab6;_0x2a4ab6=_0x35d761['currentPage'];_0x2a4ab6>_0x35d761['pageCount']()-_0x3a46ad&&(_0x2a4ab6=_0x35d761['pageCount']()-_0x3a46ad+0x1);for(var _0x40dd77=_0x2a4ab6;_0x40dd77<_0x2a4ab6+_0x3a46ad;_0x40dd77++){_0x431a52['push'](_0x40dd77);}return _0x431a52;},_0x35d761['prevPage']=function(){_0x35d761['currentPage']>0x0&&_0x35d761['currentPage']--;},_0x35d761['DisablePrevPage']=function(){return _0x35d761['currentPage']===0x0?'disabled':'';},_0x35d761['pageCount']=function(){return Math['ceil'](_0x35d761['pages']['length']/_0x35d761['itemsPerPage'])-0x1;},_0x35d761['nextPage']=function(){_0x35d761['currentPage']<_0x35d761['pageCount']()&&_0x35d761['currentPage']++;},_0x35d761['DisableNextPage']=function(){return _0x35d761['currentPage']===_0x35d761['pageCount']()?'disabled':'';},_0x35d761['setPage']=function(_0x26079d){_0x35d761['currentPage']=_0x26079d;};};}]),angular['module']('Games')['filter']('pagination',function(){return function(_0x428190,_0x14a0b4){return _0x14a0b4=parseInt(_0x14a0b4,0xa),_0x428190['slice'](_0x14a0b4);};});}());var _0x223e81=document['getElementById']('Games');angular['element'](document)['ready'](function(){angular['bootstrap'](_0x223e81,['Games']);});};var sidebar=document['getElementById']('sidenev'),sideover=document['getElementById']('sidenevover');function opensidenev(){sidebar['classList']['add']('sideNav-open'),sideover['classList']['add']('sideNav-overlay');};window['onclick']=function(_0xce6250){_0xce6250['target']==sideover&&(sidebar['classList']['remove']('sideNav-open'),sideover['classList']['remove']('sideNav-overlay'));};