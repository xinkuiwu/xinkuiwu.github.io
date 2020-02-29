// build time:Sat Feb 29 2020 11:09:00 GMT+0800 (GMT+08:00)
function fold(d,e){var i=d[0];if(!i)i="点击显/隐";return'<div><div class="fold_hider"><div class="close hider_title">'+i+'</div></div><div class="fold">\n'+hexo.render.renderSync({text:e,engine:"markdown"})+"\n</div></div>"}hexo.extend.tag.register("fold",fold,{ends:true});
//rebuild by neat 