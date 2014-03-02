linkEle = document.getElementsByClassName("UFILikeLink");

scr = document.createElement("script");
scr.type="text/javascript";
scr.innerText = "function getSuperParent(pare){"+
	"url = window.location.href;"+
	'groupsPattern=/.*\\\.facebook\\\.com\\\/groups\\\/.*/g;'+
	'profilePattern = /.*\\\.facebook\\\.com\\\/\\\w+/g;'+
	'postsPattern=/.*\\\.facebook\\\.com\\\/.*\\\/posts.*/g;'+
	"superParent=null;"+
	"if(url.match(groupsPattern)!=null){"+
	"	/*Write code to find the parent in groups*/"+	
	"	superParent=pare.parentElement.parentElement.parentElement.parentElement;"+
	"}else if(url.match(postsPattern)!=null){"+
	"	/*Write code to find the parent in posts*/"+
	"	superParent=pare.parentElement.parentElement.parentElement.parentElement;"+
	"}else if(url.match(profilePattern)!=null){"+
	"	/*Write code to find the parent in news feed*/"+
	"	superParent=pare.parentElement.parentElement.parentElement.parentElement.parentElement;"+
	"}else{"+
		"/*This is already handled*/"+
		"superParent=pare.parentElement.parentElement.parentElement.parentElement;"+
	"}"+
	"return superParent;"+
"}";
document.body.appendChild(scr);

scr = document.createElement("script");
scr.type="text/javascript";
scr.innerText="function S4() {"+
"   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);"+
"	 }"+
"function guid() {"+
"	   return (S4()+S4()+\"-\"+S4()+\"-\"+S4()+\"-\"+S4()+\"-\"+S4()+S4()+S4());"+
"}";
document.body.appendChild(scr);

function getSuperParent(pare){
	url = window.location.href;
	groupsPattern=/.*\.facebook\.com\/groups\/.*/g;
	profilePattern = /.*\.facebook\.com\/\\w+/g;
	postsPattern=/.*\.facebook\.com\/.*\/posts.*/g;
	superParent=null;if(url.match(groupsPattern)!=null){	
		/*Write code to find the parent in groups*/	
		
		superParent=pare.parentElement.parentElement.parentElement.parentElement;
	}else if(url.match(postsPattern)!=null){	
		/*Write code to find the parent in posts*/	
		
		superParent=pare.parentElement.parentElement.parentElement.parentElement;
	}else if(url.match(profilePattern)!=null){	
		/*Write code to find the parent in news feed*/	
		
		superParent=pare.parentElement.parentElement.parentElement.parentElement.parentElement;
	}else{
		/*This is already handled*/
		
		superParent=pare.parentElement.parentElement.parentElement.parentElement;
	}return superParent;
}


scr = document.createElement("script");
scr.type="text/javascript";
scr.innerText = "function tweetFunction(elem){ extractedText=\" \";"+
"console.log(elem.id); p=document.getElementById(elem.id);"+
"pare=p.parentElement;q=getSuperParent(pare);console.log(q.getElementsByClassName(\"userContent\")[0]);"+
"if(q.getElementsByClassName(\"userContent\")[0] != undefined || q.getElementsByClassName(\"userContent\")[0] == \" \" ){ u = q.getElementsByClassName(\"userContent\")[0];console.log(\"Inside userContent\");"+
"extractedText=q.getElementsByClassName(\"userContent\")[0].innerText;"+
"if(u.getElementsByClassName(\"videoThumb\")[0] != undefined)"+
"{console.log(\"video file\");extractedText=extractedText+\" \"+u.getElementsByClassName(\"videoThumb\")[0].href;}"+
"else if(u.getElementsByClassName(\"uiVideoThumb\")[0] != undefined)"+
"{console.log(\"Video thumb linkfound \");videothumbHyperLink = u.getElementsByClassName(\"uiVideoThumb\")[0];extractedText = extractedText+\" \"+videothumbHyperLink.getAttribute('ajaxify');"+
"}"+
"if(u.getElementsByClassName(\"shareLink\")[0] != undefined)"+
"{console.log(\"shared link file\");extractedText=extractedText+\" \"+u.getElementsByClassName(\"shareLink\")[0].href;}"+
"if(u.getElementsByClassName(\"_46-i img\")[0] != undefined)"+
"{console.log(\"image file\");extractedText=extractedText+\" \"+u.getElementsByClassName(\"_46-i img\")[0].src;}"+
"else if(u.getElementsByClassName(\"_5pc0 _2-ha _5dec\")[0] != undefined)"+
"{console.log('updated profile pic found');profilepicHyperLink = u.getElementsByClassName(\"_5pc0 _2-ha _5dec\")[0];extractedText = extractedText+' '+profilepicHyperLink.href;"+
"}"+
"if(u.getElementsByClassName(\"scaledImageFitWidth img\")[0] != undefined)"+
"{console.log(\"only image file\");extractedText=extractedText+\" \"+u.getElementsByClassName(\"scaledImageFitWidth img\")[0].src;}"+
"if(u.getElementsByClassName(\"profilePicChangePhotoLink\")[0] != undefined)"+
"{console.log(\"Profile pic found \");profilePicHyperLink = u.getElementsByClassName(\"profilePicChangePhotoLink\")[0];extractedText = extractedText+\" \"+profilePicHyperLink.getElementsByTagName('img')[0].src;"+
"}"+
"if(u.getElementsByClassName(\"_5rwn\")[0] != undefined)"+
"{console.log(\"POst link found \");postHyperLink = u.getElementsByClassName(\"_5rwn\")[0];extractedText = extractedText+\" \"+postHyperLink.href;"+
"}"+
"if(u.getElementsByClassName(\"coverPhotoChangeUnit\")[0] != undefined)"+
"{console.log(\"cover pic link found \");coverpicHyperLink = u.getElementsByClassName(\"coverPhotoChangeUnit\")[0];extractedText = extractedText+\" \"+coverpicHyperLink.getElementsByTagName('img')[0].src;"+
"}"+
"if(u.getElementsByClassName(\"photo\")[0] != undefined)"+
"{console.log('photo found');photoHyperLink = u.getElementsByClassName(\"photo\")[0];extractedText = extractedText+' '+photoHyperLink.getElementsByTagName('img')[0].src;"+
"}"+
"if(u.getElementsByClassName(\"videoThumb\")[0] != undefined)"+
"{console.log(\"video file\");extractedText=extractedText+\" \"+u.getElementsByClassName(\"videoThumb\")[0].href;}"+
"}"+
"if(q.getElementsByClassName(\"_5ys3\")[0] != undefined || q.getElementsByClassName(\"_5ys3\")[0] == \" \" ){ k = q.getElementsByClassName(\"_5ys3\")[0];"+
"console.log(\"Inside _5ys3 \");if(k.getElementsByClassName(\"videoThumb\")[0] != undefined)"+
"{console.log(\"video file\");extractedText=extractedText+\" \"+k.getElementsByClassName(\"videoThumb\")[0].href;}"+
"else if(k.getElementsByClassName(\"uiVideoThumb\")[0] != undefined)"+
"{console.log(\"Video thumb linkfound \");videothumbHyperLink = k.getElementsByClassName(\"uiVideoThumb\")[0];extractedText = extractedText+\" \"+videothumbHyperLink.getAttribute('ajaxify');"+
"}"+
"if(k.getElementsByClassName(\"shareLink\")[0] != undefined)"+
"{console.log(\"shared link file\");extractedText=extractedText+\" \"+k.getElementsByClassName(\"shareLink\")[0].href;}"+
"if(k.getElementsByClassName(\"_46-i img\")[0] != undefined)"+
"{console.log(\"image file\");extractedText=extractedText+\" \"+k.getElementsByClassName(\"_46-i img\")[0].src;}"+
"else if(k.getElementsByClassName(\"_5pc0 _2-ha _5dec\")[0] != undefined)"+
"{console.log('updated profile pic found');profilepicHyperLink = k.getElementsByClassName(\"_5pc0 _2-ha _5dec\")[0];extractedText = extractedText+' '+profilepicHyperLink.href;"+
"}"+
"if(k.getElementsByClassName(\"profilePicChangePhotoLink\")[0] != undefined)"+
"{console.log(\"Profile pic found \");profilePicHyperLink = k.getElementsByClassName(\"profilePicChangePhotoLink\")[0];extractedText = extractedText+\" \"+profilePicHyperLink.getElementsByTagName('img')[0].src;"+
"}"+
"if(k.getElementsByClassName(\"_5rwn\")[0] != undefined)"+
"{console.log(\"POst link found \");postHyperLink = k.getElementsByClassName(\"_5rwn\")[0];extractedText = extractedText+\" \"+postHyperLink.href;"+
"}"+
"if(k.getElementsByClassName(\"coverPhotoChangeUnit\")[0] != undefined)"+
"{console.log(\"cover pic link found \");coverpicHyperLink = k.getElementsByClassName(\"coverPhotoChangeUnit\")[0];extractedText = extractedText+\" \"+coverpicHyperLink.getElementsByTagName('img')[0].src;"+
"}"+
"if(k.getElementsByClassName(\"photo\")[0] != undefined)"+
"{console.log('photo found');photoHyperLink = k.getElementsByClassName(\"photo\")[0];extractedText = extractedText+' '+photoHyperLink.getElementsByTagName('img')[0].src;"+
"}"+
"if(k.getElementsByClassName(\"scaledImageFitWidth img\")[0] != undefined)"+
"{console.log(\"only image file\");extractedText=extractedText+\" \"+k.getElementsByClassName(\"scaledImageFitWidth img\")[0].src;}"+
"if(k.getElementsByClassName(\"videoThumb\")[0] != undefined)"+
"{console.log(\"video file\");extractedText=extractedText+\" \"+k.getElementsByClassName(\"videoThumb\")[0].href;}"+
"}"+
"finalUrl = \"http://twitter.com/intent/tweet?related=&text=\"+encodeURIComponent(extractedText);"+
"window.open(finalUrl,\"\",\"width=550,height=420,toolbar=0,menubar=0,location=0,status=0,scrollbars=0,resizable=1,left=100,top=100\");}";
document.body.appendChild(scr);

 
d =document.getElementsByClassName("_li")[0];
d.addEventListener("DOMNodeInserted", function (ev) {

	scr = document.createElement("script");
	scr.type="text/javascript";scr.innerText = "linkEle = document.getElementsByClassName(\"UFILikeLink\");"+
    "for(i=0;i<linkEle.length;i++){"+
	"pare = linkEle[i].parentElement.parentElement;"+
	"q=getSuperParent(pare);"+
	"if(typeof q.getElementsByClassName(\"userContent\")[0] == undefined){}"+
	"else if(pare.className == \"UFICommentContentBlock\") {} else if(pare.getElementsByClassName(\"tweet\").length > 0){}"+
	"else{mydiv = document.createElement(\"div\");"+
	"mydiv.id=guid();"+
	"mydiv.className=\"tweet\";"+
	"mydiv.setAttribute(\"onclick\",\"tweetFunction(this)\");"+
	"mydiv.setAttribute(\"style\",\"position:relative;background-color:#F8F8F8;background-image:-webkit-gradient(linear,left top,left bottom,from(#FFF),to(#DEDEDE));background-image:-moz-linear-gradient(top,#FFF,#DEDEDE);background-image:-o-linear-gradient(top,#FFF,#DEDEDE);background-image:-ms-linear-gradient(top,#FFF,#DEDEDE);background-image:linear-gradient(top,#FFF,#DEDEDE);border:#CCC solid 1px;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;color:#333;font-weight:bold;text-shadow:0 1px 0 rgba(255,255,255,.5);-webkit-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;cursor:pointer;height:10px;max-width:98%;overflow:hidden;border-bottom: 1px solid #b3cee1;border-right: 1px solid #b3cee1;padding: 3px 4px 3px 4px;margin: 2px 2px 2px 0;text-decoration: none;font-size: 90%;font-style:italic;font-weight:bold;text-decoration-color: black;line-height: 1.4;white-space: nowrap;display: inline-block;float:right;cursor:pointer;\");"+
	"mydiv.textContent=\"Tweet\";"+
	"pare.appendChild(mydiv);}}";
	 egoColumnDivArray=document.getElementsByClassName("ego_column");
	for(egoColumnDivIndex=0;egoColumnDivIndex<egoColumnDivArray.length;egoColumnDivIndex++)
	{
		egoColumnDiv=egoColumnDivArray[egoColumnDivIndex];
		egoColumnDiv.style.display="none";
		}

	document.head.appendChild(scr);
	},false);
