function usercheck(){localforage['getItem']('userlogindata')['then'](_0x10ce1d=>{if(_0x10ce1d==!![]){}else window['location']['href']='/login';;});};localforage['getItem']('Avatar')['then'](_0x2fc951=>{document['getElementById']('Avatar')['src']='/avatar/'+_0x2fc951;}),localforage['getItem']('Wincash')['then'](_0x490dbc=>{var _0x5026e3=_0x490dbc;addDiposit(_0x5026e3);});function addDiposit(_0x404fef){localforage['getItem']('DepositCash')['then'](_0x20fa74=>{document['getElementById']('wincash')['innerHTML']=Math['floor'](+_0x404fef+_0x20fa74);});};$('#Transaction')['bind']('DOMSubtreeModified',function(){let _0x53dc95=document['getElementById']('Transaction')['innerHTML'];const _0x4a6128=_0x53dc95['split']('Cash')['length'];_0x4a6128<0x2?(document['getElementById']('notranslationbanner')['style']['display']='block',document['getElementById']('translationlist')['style']['display']='none'):(document['getElementById']('notranslationbanner')['style']['display']='none',document['getElementById']('translationlist')['style']['display']='block');}),localforage['getItem']('UserID')['then'](_0x206b76=>{doTransactionlod(_0x206b76);});function doTransactionlod(_0x35eeba){(function(){var _0xff3d46=angular['module']('Transaction',['firebase']);_0xff3d46['controller']('Transactioncontollers',['$scope','$firebaseArray','$interval',function(_0x2d1d23,_0x4bcdf3,_0xa55b95){_0x2d1d23['sortType']='Ms',_0x2d1d23['sortReverse']=![],_0x2d1d23['searchUserId']=_0x35eeba,_0x2d1d23['showData']=function(){_0x2d1d23['itemPerPage']=0xa,_0x2d1d23['currentPage']=0x0;var _0xf2dd69=firebase['database']()['ref']()['child']('Transaction');_0x2d1d23['pages']=_0x4bcdf3(_0xf2dd69),_0x2d1d23['range']=function(){var _0x28f800=0x4,_0x4dc4ce=[],_0x241067;_0x241067=_0x2d1d23['currentPage'];_0x241067>_0x2d1d23['pageCount']()-_0x28f800&&(_0x241067=_0x2d1d23['pageCount']()-_0x28f800+0x1);for(var _0xe80cd6=_0x241067;_0xe80cd6<_0x241067+_0x28f800;_0xe80cd6++){_0x4dc4ce['push'](_0xe80cd6);}return _0x4dc4ce;},_0x2d1d23['prevPage']=function(){_0x2d1d23['currentPage']>0x0&&_0x2d1d23['currentPage']--;},_0x2d1d23['DisablePrevPage']=function(){return _0x2d1d23['currentPage']===0x0?'disabled':'';},_0x2d1d23['pageCount']=function(){return Math['ceil'](_0x2d1d23['pages']['length']/_0x2d1d23['itemsPerPage'])-0x1;},_0x2d1d23['nextPage']=function(){_0x2d1d23['currentPage']<_0x2d1d23['pageCount']()&&_0x2d1d23['currentPage']++;},_0x2d1d23['DisableNextPage']=function(){return _0x2d1d23['currentPage']===_0x2d1d23['pageCount']()?'disabled':'';},_0x2d1d23['setPage']=function(_0xda2c2b){_0x2d1d23['currentPage']=_0xda2c2b;};};}]),angular['module']('Transaction')['filter']('pagination',function(){return function(_0x187f0e,_0x33ad8a){return _0x33ad8a=parseInt(_0x33ad8a,0xa),_0x187f0e['slice'](_0x33ad8a);};});}());var _0x5ad6b5=document['getElementById']('Transaction');angular['element'](document)['ready'](function(){angular['bootstrap'](_0x5ad6b5,['Transaction']);});};var sidebar=document['getElementById']('sidenev'),sideover=document['getElementById']('sidenevover');function opensidenev(){sidebar['classList']['add']('sideNav-open'),sideover['classList']['add']('sideNav-overlay');};window['onclick']=function(_0x2285fe){_0x2285fe['target']==sideover&&(sidebar['classList']['remove']('sideNav-open'),sideover['classList']['remove']('sideNav-overlay'));};