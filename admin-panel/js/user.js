function reply_click(_0x1e24fc){var _0x438225=_0x1e24fc;localStorage['setItem']('UserID',_0x438225);var _0x47db1d='stock'+_0x438225;document['getElementById'](_0x47db1d)['style']['display']='block';};function postUpdates(){var _0x116f55=localStorage['getItem']('UserID'),_0x135941='Position'+_0x116f55,_0x371e61='Userstutas'+_0x116f55,_0x202182=document['getElementById'](_0x135941)['value'],_0x42eedc=document['getElementById'](_0x371e61)['value'];firebase['database']()['ref']('User/'+_0x116f55)['update']({'Position':_0x202182,'Status':_0x42eedc});var _0x191d6c='stock'+_0x116f55;document['getElementById'](_0x191d6c)['style']['display']='none';};function dolodidTransaction(){(function(){var _0xa6efb4=angular['module']('UserList',['firebase']);_0xa6efb4['controller']('UserListcontollers',['$scope','$firebaseArray','$interval',function(_0xc67590,_0x34bf41,_0x43dc5f){_0xc67590['sortType']='',_0xc67590['sortReverse']=![],_0xc67590['searchType']='',_0xc67590['searchStatus']='',_0xc67590['showData']=function(){_0xc67590['itemPerPage']=0xa,_0xc67590['currentPage']=0x0;var _0x4b7929=firebase['database']()['ref']()['child']('User');_0xc67590['pages']=_0x34bf41(_0x4b7929),_0xc67590['range']=function(){var _0x3b5a14=0x4,_0x1d8233=[],_0x138ab6;_0x138ab6=_0xc67590['currentPage'];_0x138ab6>_0xc67590['pageCount']()-_0x3b5a14&&(_0x138ab6=_0xc67590['pageCount']()-_0x3b5a14+0x1);for(var _0x457327=_0x138ab6;_0x457327<_0x138ab6+_0x3b5a14;_0x457327++){_0x1d8233['push'](_0x457327);}return _0x1d8233;},_0xc67590['prevPage']=function(){_0xc67590['currentPage']>0x0&&_0xc67590['currentPage']--;},_0xc67590['DisablePrevPage']=function(){return _0xc67590['currentPage']===0x0?'disabled':'';},_0xc67590['pageCount']=function(){return Math['ceil'](_0xc67590['pages']['length']/_0xc67590['itemsPerPage'])-0x1;},_0xc67590['nextPage']=function(){_0xc67590['currentPage']<_0xc67590['pageCount']()&&_0xc67590['currentPage']++;},_0xc67590['DisableNextPage']=function(){return _0xc67590['currentPage']===_0xc67590['pageCount']()?'disabled':'';},_0xc67590['setPage']=function(_0x8fd609){_0xc67590['currentPage']=_0x8fd609;};};}]),angular['module']('UserList')['filter']('pagination',function(){return function(_0xc872ae,_0x2b1cd6){return _0x2b1cd6=parseInt(_0x2b1cd6,0xa),_0xc872ae['slice'](_0x2b1cd6);};});}());var _0x5e7a0b=document['getElementById']('UserList');angular['element'](document)['ready'](function(){angular['bootstrap'](_0x5e7a0b,['UserList']);});};