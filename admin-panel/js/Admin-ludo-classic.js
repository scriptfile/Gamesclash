function changeStatus(_0x7b8f7d){var _0x441f85=document['getElementById'](_0x7b8f7d)['innerHTML'];const _0x4d6482=firebase['database']()['ref']('Lobby/Classic/'+_0x7b8f7d);_0x4d6482['once']('value')['then'](_0x2b4496=>{var _0x4335cf=_0x2b4496['val']()['Status'];_0x4335cf=='Public'&&_0x4d6482['update']({'Status':'Draft'}),_0x4335cf=='Draft'&&_0x4d6482['update']({'Status':'Public'});});};function dolodidTransaction(){(function(){var _0x21e121=angular['module']('Lobby',['firebase']);_0x21e121['controller']('Lobbycontollers',['$scope','$firebaseArray','$interval',function(_0x107ed7,_0x4c2bb8,_0x47e9d1){_0x107ed7['sortType']='Entryfee',_0x107ed7['sortReverse']=![],_0x107ed7['searchType']='',_0x107ed7['searchStatus']='',_0x107ed7['showData']=function(){_0x107ed7['itemPerPage']=0xa,_0x107ed7['currentPage']=0x0;var _0x5e7175=firebase['database']()['ref']()['child']('Lobby/Classic');_0x107ed7['pages']=_0x4c2bb8(_0x5e7175),_0x107ed7['range']=function(){var _0x118807=0x4,_0x583a5d=[],_0x2b0fd2;_0x2b0fd2=_0x107ed7['currentPage'];_0x2b0fd2>_0x107ed7['pageCount']()-_0x118807&&(_0x2b0fd2=_0x107ed7['pageCount']()-_0x118807+0x1);for(var _0xd52ef2=_0x2b0fd2;_0xd52ef2<_0x2b0fd2+_0x118807;_0xd52ef2++){_0x583a5d['push'](_0xd52ef2);}return _0x583a5d;},_0x107ed7['prevPage']=function(){_0x107ed7['currentPage']>0x0&&_0x107ed7['currentPage']--;},_0x107ed7['DisablePrevPage']=function(){return _0x107ed7['currentPage']===0x0?'disabled':'';},_0x107ed7['pageCount']=function(){return Math['ceil'](_0x107ed7['pages']['length']/_0x107ed7['itemsPerPage'])-0x1;},_0x107ed7['nextPage']=function(){_0x107ed7['currentPage']<_0x107ed7['pageCount']()&&_0x107ed7['currentPage']++;},_0x107ed7['DisableNextPage']=function(){return _0x107ed7['currentPage']===_0x107ed7['pageCount']()?'disabled':'';},_0x107ed7['setPage']=function(_0x54a160){_0x107ed7['currentPage']=_0x54a160;};};}]),angular['module']('Lobby')['filter']('pagination',function(){return function(_0xe8e2f2,_0x4c36c5){return _0x4c36c5=parseInt(_0x4c36c5,0xa),_0xe8e2f2['slice'](_0x4c36c5);};});}());var _0x426ac3=document['getElementById']('Lobby');angular['element'](document)['ready'](function(){angular['bootstrap'](_0x426ac3,['Lobby']);});}