var rule = {
    title:'天龙影院',
    类型:'影视',
    host:'https://m.82mao.com',
    hostJs:'',
    headers:{'User-Agent':'MOBILE_UA'},
    编码:'utf-8',
    timeout:5000,
    homeUrl:'/',
    url:'/List/fyfilter.html',
    filter_url:'{{fl.cateId}}-{{fl.area}}-{{fl.by}}-{{fl.class}}--{{fl.letter}}---fypage---{{fl.year}}',
    detailUrl:'',
    searchUrl:'/Search/**----------fypage---.html',
    searchable:1,
    quickSearch:0,
    filterable:1,
    class_name:'电影&剧集&综艺&动漫',
    class_url:'17&18&20&48',
    filter_def:{
        17:{cateId:'17'},
        18:{cateId:'18'},
        20:{cateId:'20'},
        48:{cateId:'48'}
    },
    play_parse:true,
    parse_url:'http://cdn.113276.xyz/cs1/?id=',
    lazy:`js:
var kcode = JSON.parse(request(input).match(/var player_.*?=(.*?)</)[1]);
var kurl = kcode.url;
if (/m3u8|mp4/.test(kurl)) {
input = { jx:0, parse:0, url:kurl }
} else {
input = { jx:0, parse:1, url:rule.parse_url+kurl }
}`,
    limit:9,
    double:false,
    推荐:'*',
    一级:'.list-item;h3&&Text;img&&src;span:eq(0)&&Text;a&&href',
    二级:{
        title:'.bread&&Text;.info--label:eq(2)&&Text',
        img:'.pic&&img&&src',
        desc:'.info--label:eq(-2)&&Text;.info--label:eq(-1)&&Text;.info--label:eq(2)&&a:eq(-1)&&Text;.info--label:eq(1)&&Text;.info--label:eq(0)&&Text',
        content:'.detail-intro:eq(-1)&&p&&Text',
        tabs:'li.tab-item',
        tab_text:'font--i:eq(0)&&Text',
        lists:'.series-list:eq(#id)&&a',
        list_text:'body&&Text',
        list_url:'a&&href',
        list_url_prefix:''
    },
    搜索:'*',
    filter:{}
}