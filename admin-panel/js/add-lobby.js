function submitnewlobby(){var _0x25170b=document['getElementById']('lobbyname')['value'],_0x4c2946=document['getElementById']('entryfee')['value'],_0x4a8670=document['getElementById']('prize')['value'],_0x219bca=document['getElementById']('lobbytype')['value'],_0x343e86=Date['now']();firebase['database']()['ref']('Lobby/'+_0x219bca+'/'+_0x343e86)['update']({'LobbyName':_0x25170b,'Type':_0x219bca,'EntryFee':_0x4c2946,'Prize':_0x4a8670,'TotalPlay':0x0,'Playnow':0x0,'Waiting':'nowaiting','Status':'Public','ID':_0x343e86},goClasslist);}function goClasslist(){var _0x273b94=document['getElementById']('lobbytype')['value'];if(_0x273b94=='Classic')window['location']['href']='/admin-panel/ludo-classic/';else _0x273b94=='Short'&&(window['location']['href']='/admin-panel/ludo-short/');};