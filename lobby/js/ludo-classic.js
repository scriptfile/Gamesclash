function usercheck(){localforage['getItem']('userlogindata')['then'](_0x4bfc87=>{if(_0x4bfc87==!![]){}else window['location']['href']='/login';;});};localforage['getItem']('Avatar')['then'](_0x389a24=>{document['getElementById']('Avatar')['src']='/avatar/'+_0x389a24;}),localforage['getItem']('Wincash')['then'](_0x2df052=>{var _0x588c5e=_0x2df052;addDiposit(_0x588c5e);});function addDiposit(_0x3c27be){localforage['getItem']('DepositCash')['then'](_0xfb9315=>{document['getElementById']('wincash')['innerHTML']=+_0x3c27be+_0xfb9315;});}function getentry(_0x4183d6){const _0x5a77e7=firebase['database']()['ref']('Lobby/Classic/'+_0x4183d6);_0x5a77e7['once']('value')['then'](_0x44915d=>{var _0x545a8e=_0x44915d['val']()['EntryFee'],_0xf9115e=_0x44915d['val']()['Prize'];localforage['setItem']('EntryID',_0x4183d6),localforage['setItem']('TicketPrize',_0xf9115e),localforage['setItem']('GameTypes','Classic'),CheckDepositCash(_0x545a8e,_0xf9115e,_0x4183d6);}),localforage['getItem']('UserID')['then'](_0x37dcd8=>{firebase['database']()['ref']('User/'+_0x37dcd8+'/Joystick')['update']({'Dice':0x1,'Stake':'OFF','StakeMiss':0x0,'Token1':0x1,'Token2':0x1,'Token3':0x0,'Token4':0x0,'TokenRun':0x2,'TokenWin':0x0});});};function CheckDepositCash(_0x4ba6fb,_0x5c1c64,_0x357f84){localforage['getItem']('UserID')['then'](_0x181c6e=>{const _0x4accc6=firebase['database']()['ref']('User/'+_0x181c6e);_0x4accc6['once']('value')['then'](_0xc9137c=>{_0xc9137c['val']()['DEPOSITCASH']>_0x4ba6fb||_0xc9137c['val']()['DEPOSITCASH']==_0x4ba6fb?_0x4accc6['update']({'DEPOSITCASH':_0xc9137c['val']()['DEPOSITCASH']-_0x4ba6fb,'EntryFee':_0x4ba6fb,'TicketPrize':_0x5c1c64,'Ticket':'Yes','RoomID':_0x357f84,'LastGame':0x0},ticketComplite)['then'](()=>{console['log']('Cash\x20updated');}):CheckWinCash(_0x4ba6fb,_0x5c1c64,_0x181c6e,_0x357f84);});});}function CheckWinCash(_0x5dcdf2,_0x5ea8df,_0xfd4642,_0x5a38e8){const _0x366af7=firebase['database']()['ref']('User/'+_0xfd4642);_0x366af7['once']('value')['then'](_0x4a7bac=>{_0x4a7bac['val']()['WINNINGSCASH']>_0x5dcdf2||_0x4a7bac['val']()['DEPOSITCASH']==_0x5dcdf2?_0x366af7['update']({'WINNINGSCASH':_0x4a7bac['val']()['WINNINGSCASH']-_0x5dcdf2,'EntryFee':_0x5dcdf2,'TicketPrize':_0x5ea8df,'Ticket':'Yes','RoomID':_0x5a38e8,'LastGame':0x0},ticketComplite)['then'](()=>{console['log']('Cash\x20updated');}):doalertnoAmunt();});}function doalertnoAmunt(){$('.Alert-noAmunt')['show'](),setTimeout(function(){$('.Alert-noAmunt')['hide']();},0x7d0);};function ticketComplite(){var _0x849127=document['createElement']('div');_0x849127['setAttribute']('class','leftContainer'),_0x849127['innerHTML']=document['getElementById']('Findplayers')['innerHTML'];var _0x59503c=document['getElementById']('root');_0x59503c['removeChild'](_0x59503c['firstElementChild']),_0x59503c['appendChild'](_0x849127),localforage['getItem']('EntryID')['then'](_0x3adf47=>{window['history']['pushState']('find-player','Game\x20Play','/find-player?game=Classic_ludo&entryid='+_0x3adf47);});var _0x2318af=document['getElementById']('gameWindow');if(_0x2318af['requestFullscreen'])_0x2318af['requestFullscreen']();else{if(_0x2318af['webkitRequestFullscreen'])_0x2318af['webkitRequestFullscreen']();else _0x2318af['msRequestFullscreen']&&_0x2318af['msRequestFullscreen']();}}(function(){var _0x5a9de2=angular['module']('Ludoclassic',['firebase']);_0x5a9de2['controller']('Ludoclassiccontollers',['$scope','$firebaseArray','$interval',function(_0x4c413b,_0x3e8ae1,_0xf1355b){_0x4c413b['sortType']='Entryfee',_0x4c413b['sortReverse']=![],_0x4c413b['searchType']='',_0x4c413b['searchStatus']='Public',_0x4c413b['showData']=function(){_0x4c413b['itemPerPage']=0xa,_0x4c413b['currentPage']=0x0;var _0xe0950e=firebase['database']()['ref']()['child']('Lobby/Classic');_0x4c413b['pages']=_0x3e8ae1(_0xe0950e),_0x4c413b['range']=function(){var _0x3fb31a=0x4,_0xf10dcd=[],_0x33ae46;_0x33ae46=_0x4c413b['currentPage'];_0x33ae46>_0x4c413b['pageCount']()-_0x3fb31a&&(_0x33ae46=_0x4c413b['pageCount']()-_0x3fb31a+0x1);for(var _0x68d82b=_0x33ae46;_0x68d82b<_0x33ae46+_0x3fb31a;_0x68d82b++){_0xf10dcd['push'](_0x68d82b);}return _0xf10dcd;},_0x4c413b['prevPage']=function(){_0x4c413b['currentPage']>0x0&&_0x4c413b['currentPage']--;},_0x4c413b['DisablePrevPage']=function(){return _0x4c413b['currentPage']===0x0?'disabled':'';},_0x4c413b['pageCount']=function(){return Math['ceil'](_0x4c413b['pages']['length']/_0x4c413b['itemsPerPage'])-0x1;},_0x4c413b['nextPage']=function(){_0x4c413b['currentPage']<_0x4c413b['pageCount']()&&_0x4c413b['currentPage']++;},_0x4c413b['DisableNextPage']=function(){return _0x4c413b['currentPage']===_0x4c413b['pageCount']()?'disabled':'';},_0x4c413b['setPage']=function(_0x4f1fb5){_0x4c413b['currentPage']=_0x4f1fb5;};};}]),angular['module']('Ludoclassic')['filter']('pagination',function(){return function(_0x4831f4,_0x13f17d){return _0x13f17d=parseInt(_0x13f17d,0xa),_0x4831f4['slice'](_0x13f17d);};});}());var firstDiv=document['getElementById']('Ludoclassic');angular['element'](document)['ready'](function(){angular['bootstrap'](firstDiv,['Ludoclassic']);});var sidebar=document['getElementById']('sidenev'),sideover=document['getElementById']('sidenevover');function opensidenev(){sidebar['classList']['add']('sideNav-open'),sideover['classList']['add']('sideNav-overlay');};window['onclick']=function(_0x5eaa46){_0x5eaa46['target']==sideover&&(sidebar['classList']['remove']('sideNav-open'),sideover['classList']['remove']('sideNav-overlay'));};function rulesopen(){window['location']['href']='/rules/ludo_classic/';};$('#lobbydetector')['bind']('DOMSubtreeModified',function(){let _0x69b3f=document['getElementById']('lobbydetector')['innerHTML'];const _0x4a6b85=_0x69b3f['split']('playing')['length'];_0x4a6b85<0x2?(document['getElementById']('gamemainteance')['style']['display']='block',document['getElementById']('Ludoclassic')['style']['display']='none'):(document['getElementById']('gamemainteance')['style']['display']='none',document['getElementById']('Ludoclassic')['style']['display']='block');});