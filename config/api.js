/**
 * Created by sioxa on 2016/12/25 0025.
 */
function Api(){
	return {
	rank_songs: function(id){
		return {
	    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg',
	    params: {
	    	g_tk: 5381,
	        uin: 0,
	        format: 'json',
	        inCharset: 'utf-8',
	        outCharset: 'utf-8',
	        notice: 0,
	        platform: 'h5',
	        needNewCode: 1,
	        tpl: 3,
	        page: 'detail',
	        type: 'top',
	        topid: id,
	        _: new Date().getTime()
		},
		jsonp: 'jsonpCallback'
		}
	},
  rank_list: function(){
  	return {
  		rl: 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg',
	    params: {
	        format: 'jsonp',
	        g_tk: 5381,
	        uin: 0,
	        inCharset: 'utf-8',
	        outCharset: 'utf-8',
	        notice: 0,
	        platform: 'h5',
	        needNewCode: 1,
	        _: new Date().getTime()
	    },
	    jsonp: 'jsonpCallback'
	}
  },
  album: function(id){
  	return {
    	url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg',
	    params: {
	        albummid: id,
	        g_tk: 5381,
	        loginUin: 0,
	        hostUin: 0,
	        format: 'jsonp',
	        inCharset: 'utf8',
	        outCharset: 'utf-8',
	        notice: 0,
	        platform: 'yqq',
	        needNewCode: 0
	    },
	    jsonp: 'jsonpCallback'
	}
  },
  singer_info: function(id){
  	return {
	    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg',
	    params: {
	        order: 'listen',
	        begin: 0,
	        num: 8,
	        singermid: id,
	        g_tk: 5381,
	        uin: 0,
	        format: 'jsonp',
	        inCharset: 'utf-8',
	        outCharset: 'utf-8',
	        notice: 0,
	        platform: 'h5page',
	        needNewCode: 1,
	        from: 'h5',
	        _: new Date().getTime()
	    },
	    jsonp: 'jsonpCallback'
	}
  },
  search: function(key){
  	return {
  		url: 'https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg',
	    params: {
	        is_xml: 0,
	        format: 'jsonp',
	        key: key,
	        g_tk: 5381,
	        loginUin: 0,
	        hostUin: 0,
	        inCharset: 'utf8',
	        outCharset: 'utf-8',
	        notice: 0,
	        platform: 'yqq',
	        needNewCode: 0
	    },
	    jsonp: 'jsonpCallback'
	}
  },
  hotkey: function(){
  	return {
  		url: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',
	    params: {
	        g_tk: 5381,
	        loginUin: 0,
	        hostUin: 0,
	        format: 'jsonp',
	        inCharset: 'utf8',
	        outCharset: 'utf-8',
	        notice: 0,
	        platform: 'yqq',
	        needNewCode: 0
	    },
	    jsonp: 'jsonpCallback'
	}
  },
  home_page_data: function(){
  	return {
  		url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
	    params: {
	        g_tk: 5381,
	        uin: 0,
	        format: 'jsonp',
	        inCharset: 'utf-8',
	        outCharset: 'utf-8',
	        notice: 0,
	        platform: 'h5',
	        needNewCode: 1,
	        _: new Date().getTime()
	    },
	    jsonp: 'jsonpCallback'
	}
  },
  lyric: function(id){
  	return {
  		url: 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg',
	    params: {
	        nobase64:1,
	        musicid:id,
	        songtype:0
	    },
	    jsonp:'callback'
	}
  },
  cd: function(id){
  	return {
  		url:'http://localhost/index/get',
	    params: {
	        method: 'get',
	        url: 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg',
	        param: "{type:1,json:1,utf8:1,onlysong:0,disstid:" + id + ",format:'jsonp',g_tk:1953711265,loginUin:2880161622,hostUin:0,format:'jsonp',inCharset:'utf8',outCharset:'utf-8',notice:0,platform:'yqq',needNewCode:0}",
	        header: "{referer: 'https://c.y.qq.com/',host: 'c.y.qq.com'}"
	        // g_tk:5381,
	        // uin:0,
	        // format:'jsonp',
	        // inCharset:'utf-8',
	        // outCharset:'utf-8',
	        // notice:0,
	        // platform:'h5',
	        // needNewCode:1,
	        // new_format:1,
	        // pic:500,
	        // disstid:id,
	        // type:1,
	        // json:1,
	        // utf8:1,
	        // onlysong:0,
	        // nosign:1,
	        // _:new Date().getTime()
	    },
	    jsonp: 'jsonpCallback'
	}
  },
	first_page_data: function(){
	  	return {
	  		url:"https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg",
		    params: {
		        format:'jsonp',
		        tpl:'v12',
		        page:'other',
		        rnd:0,
		        g_tk:new Date().getTime(),
		        loginUin:0,
		        hostUin:0,
		        inCharset:'utf8',
		        outCharset:'GB2312',
		        notice:0,
		        platform:'yqq',
		        needNewCode:0
		    },
		    jsonp: 'jsonpCallback'
		}
  }
 }
}
