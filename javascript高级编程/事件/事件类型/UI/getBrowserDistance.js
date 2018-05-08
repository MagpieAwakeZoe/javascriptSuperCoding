// 兼容性写法
// 获取窗口滚动条高度
function getClientHeight(){    
    var clientHeight=0;    
    if(document.body.clientHeight&&document.documentElement.clientHeight){    
        var clientHeight=(document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;            
    }else{    
        var clientHeight=(document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;        
    }    
    return clientHeight;    
} 

// 获取文档内容实际高度
function getScrollTop(){    
    var scrollTop=0;    
    if(document.documentElement&&document.documentElement.scrollTop){    
        scrollTop=document.documentElement.scrollTop;    
    }else if(document.body){    
        scrollTop=document.body.scrollTop;    
    }    
    return scrollTop;    
} 