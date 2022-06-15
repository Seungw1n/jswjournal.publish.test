var myURL = new Array(  'https://www.msn.com/ko-kr/news/techandscience/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%EB%8F%84-%EB%8F%85%EC%B0%BD%EC%A0%81-%EB%AF%B8%ED%95%99%EC%9D%84-%EA%B0%80%EC%A7%88-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C/ar-AAKGHF2?ocid=msedgntp',
                        'https://talkingaboutme.tistory.com/entry/Book-Machine-Learning-with-web-optimization?fbclid=IwAR0G0tqSJdQWg6osSbGxK4EHGv0bSo3Ie32D01Vt414R7zNfldjZCxClwKY',
                        'https://www.superb-ai.com/ko-blog/everything-about-computer-vision-data?fbclid=IwAR2hL3Z8TmqGkJrjIcXhLh8hen5HK38Z_vfeGSNKP11njjQlgfvdAqFO6Gs',
                        'https://www.msn.com/ko-kr/news/techandscience/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%EB%8F%84-%EB%8F%85%EC%B0%BD%EC%A0%81-%EB%AF%B8%ED%95%99%EC%9D%84-%EA%B0%80%EC%A7%88-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C/ar-AAKGHF2?ocid=msedgntp',
                        'https://terms.naver.com/entry.naver?docId=6417120&cid=58151&categoryId=58151',
                        'https://m.blog.naver.com/designpress2016/222248943317',
                        'https://m.post.naver.com/viewer/postView.nhn?volumeNo=31535956&memberNo=43744954',
                        'https://m.blog.naver.com/PostView.naver?blogId=businessinsight&logNo=222706916484&proxyReferer=https:%2F%2Fm.naver.com%2F',
                        'http://www.docdocdoc.co.kr/news/articleView.html?idxno=2012896',
                        'https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=tech-plus&logNo=222379020236&proxyReferer=https:%2F%2Fm.naver.com%2F',
                        'https://careerly.co.kr/comments/23670?utm_campaign=user-share',
                        'https://m.post.naver.com/viewer/postView.nhn?volumeNo=30425586&memberNo=6457418&vType=VERTICAL',
                        'https://m.post.naver.com/viewer/postView.nhn?volumeNo=30886188&memberNo=6457418&vType=VERTICAL',
                        'https://m.post.naver.com/viewer/postView.naver?volumeNo=32555568&memberNo=6457418',
                        'https://m.blog.naver.com/jongscokr/222436857058',
                        'https://brunch.co.kr/@bong/194',
                        'https://brunch.co.kr/@thinkaboutlove/347',
                        'https://m.blog.naver.com/designpress2016/222102486464',
                        'https://m.post.naver.com/viewer/postView.nhn?volumeNo=29893290&memberNo=44045763&vType=VERTICAL',
                        'https://brunch.co.kr/@thinkaboutlove/320',
                        'https://m.blog.naver.com/designpress2016/222402189469',
                        'https://m.blog.naver.com/PostView.nhn?blogId=djungle&logNo=222292527702&proxyReferer=https:%2F%2Fm.naver.com%2F',
                        'https://m.blog.naver.com/designpress2016/222262843952',
                        'https://v.kakao.com/v/20210714100205373',
                        'https://v.kakao.com/v/20210613143320444',
                        'https://blog.lgcns.com/2677?fbclid=IwAR29zNv4fPAH21qVXV07X3m0Af_OncLssOX10Bo03Yd7uxwU2syVCRd0KVM',
                        'https://blog.lgcns.com/2830?fbclid=IwAR3JKnnNPYbBFvqbSvpy6ldcEhvSKcZBDVmBNIRQQFOzAWRFhBPI3jT6xNU',
                        'https://m.blog.naver.com/PostView.naver?blogId=tech-plus&logNo=222583917838&proxyReferer=https:%2F%2Fm.naver.com%2F',
                        'https://www.superb-ai.com/ko-blog/everything-about-computer-vision-data?fbclid=IwAR2hL3Z8TmqGkJrjIcXhLh8hen5HK38Z_vfeGSNKP11njjQlgfvdAqFO6Gs',
                        'https://ebadak.news/2022/01/09/2022-questions/',
                        'https://blog.lgcns.com/2806?category=515093&fbclid=IwAR1DO8O5ETxYRdO80CHv1ifVWqJ8AfrC9xEPmaJLcaUjf9nuGC7bp5KbZ8Q',
                        'https://v.kakao.com/v/20210719155047292',
                        'https://brunch.co.kr/@miracle205/158',
                        'https://careerly.co.kr/comments/27639?utm_campaign=user-share',
                        'https://v.kakao.com/v/20210614174702919',
                        'https://n.news.naver.com/article/018/0005130553?cds=news_my',
                        'https://news.mk.co.kr/v2/economy/view.php?year=2021&no=534357',
                        'https://v.kakao.com/v/20210611220941098',
                        'https://v.kakao.com/v/20210511201309818',
                        'https://m.post.naver.com/viewer/postView.naver?volumeNo=31773292&memberNo=49994438&navigationType=push',
                        'https://news.samsung.com/kr/%ec%a0%84-%ec%84%b8%ea%b3%84-%ed%81%ac%eb%a6%ac%ec%97%90%ec%9d%b4%ed%84%b0%eb%93%a4%ec%9d%b4-%eb%a7%90%ed%95%98%eb%8a%94-%ec%82%bc%ec%84%b1-%eb%9d%bc%ec%9d%b4%ed%94%84%ec%8a%a4%ed%83%80?utm_source=nr_facebook&utm_medium=social&fbclid=IwAR2aHutvO9oVje9qZ0QjcGovq0mtf6avIxkrj2V3iqFKbpaXNmF2S3mQHmc',
                        'https://youtube-kr.googleblog.com/2022/02/innovations-for-2022-at-youtube.html?m=1',
                        'https://v.kakao.com/v/20210605110006711',
                        'https://content.v.kakao.com/v/600931e68c31e10ed1c870fe',
                        'https://yozm.wishket.com/magazine/detail/824/?utm_campaign=product&utm_medium=social&utm_source=kakao&utm_term=%7Bquery%7D',
                        'https://news.samsung.com/kr/%eb%8d%94-%eb%82%98%ec%9d%80-%eb%af%b8%eb%9e%98%eb%a5%bc-%ec%9c%84%ed%95%b4-%ec%83%81%ec%83%81%ec%9d%84-%ed%98%84%ec%8b%a4%eb%a1%9c-%eb%a7%8c%eb%93%a0-5%ec%9d%b8%ec%9d%98-%ec%82%bc?utm_source=nr_facebook&utm_medium=social&fbclid=IwAR1QO4CnsewrU95pI29ypHmPvTGkeryTU1GVh7v7a_TijG_NeMeQ1029Lqw',
                        'https://brunch.co.kr/@sacony/21',
                        'https://www.cbinsights.com/research/startup-failure-reasons-top/',
                        'https://content.v.kakao.com/v/60701f638dee770a410dea14',
                        'https://blog.ncsoft.com/ai-framework-ep05-210610/?fbclid=IwAR1UGrCf0yM7fT8YLxvrdEM2jv1wvZqPyjOh2rvpig3NXqFXuEa63Vx5mfc',
                        'https://m.post.naver.com/viewer/postView.naver?volumeNo=32318172&memberNo=2170614&vType=VERTICAL',
                        'https://m.blog.naver.com/designpress2016/222602978055',
                        'https://contents.premium.naver.com/philtech/knowledge/contents/220110222221708Un',

                        'https://gregstoll.dyndns.org/~gregstoll/baseball/stats.html#V.2.8.0.1.0.0',
                        'https://footlab.loplat.com/',
                        'https://www.naverlabs.com/storyDetail/199',
                        'https://www.tableau.com/ko-kr/learn/articles/best-beautiful-data-visualization-examples',
                        'http://www.docuhut.com/category/%ED%86%B5%EC%B0%B0/bioinfomatics/%EC%9B%B9%EB%8B%A4%EC%9D%B4%EB%82%98%EB%AF%B9-%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%8B%9C%EA%B0%81%ED%99%94/',
                        'https://www.nvidia.com/ko-kr/gtc/?ncid=pa-so-face-45008&fbclid=IwAR1kapKWSaoMm8gnF_6UDvXlu8DbOiayNjJI_DiRh_kPnIR7C9Z1uXAxmwU',
                        'https://post.naver.com/viewer/postView.naver?volumeNo=32540577&memberNo=34635212',
                        'https://medium.com/ai-networkkr/ai-%EB%AA%A8%EB%8D%B8-%ED%83%90%ED%97%98%EA%B8%B0-7-%ED%95%9C%EA%B8%80-%EB%B2%84%EC%A0%84%EC%9D%98-gpt-2-f7317e6499f9',
                        'https://teachablemachine.withgoogle.com/',
                        'https://ml-app.yah.ac/',
                        'https://pair.withgoogle.com/',
                        'https://scikit-learn.org/stable/',
                        'https://tonite.dance/',
                        'https://readymag.com/examples/',
                        'https://www.webdesignerdepot.com/',
                        'http://www.gdweb.co.kr/sub/list.asp?Txt_fgbn=7',
                        'https://matthewlein.com/tools/ceaser',
                        'https://css-tricks.com/almanac/properties/f/filter/',
                        'https://caniuse.com/',
                        'https://d3js.org/',
                        'https://www.w3schools.com/',
                        'https://modulabs.co.kr/',
                        'https://www.hackerrank.com/dashboard',
                        'https://www.programiz.com/python-programming/online-compiler/',
                        'https://practiceit.cs.washington.edu/problem/list',
                        'https://www.codercrunch.com/',
                        'https://codingbat.com/java',
                        'https://imaginecup.microsoft.com/ko-kr',
                        'https://www.oasejournal.nl/en/Issues',
                        'https://www.dailyicon.net/2010/10/books-the-geometry-of-pasta/',
                        'http://studioworldwide.net/project/ghostpatrol/',
                        'https://paperpress.kr/',
                        'https://runwayml.com/',
                        'https://brunch.co.kr/@thisdesign/5',
                        'https://brunch.co.kr/@yooldesign/31',
                        'https://brunch.co.kr/@cliche-cliche/73',
                        'https://cargocollective.com/hooroot/11208278',
                        'https://www.i-boss.co.kr/ab-1486505-27639',
                        'https://www.thewordcracker.com/miscellaneous/2020%EB%85%84-%EB%A1%9C%EA%B3%A0-%ED%8A%B8%EB%A0%8C%EB%93%9C-top-10/',
                        'https://www.abocado.kr/brand_news/news_detail?no=142',
                        'https://freelifeyonging.tistory.com/13',
                        'https://brunch.co.kr/@halo0901/14',
                        'https://brunch.co.kr/@blckschrl/40',
                        'https://brunch.co.kr/@ebprux/200',
                        'https://uxdesign.cc/ux-in-2022-no-code-tools-design-waste-the-ux-of-nfts-d09370af4fad'
                        );

function randomlocWidth(widmin, widmax){
    var randWid = Math.floor(Math.random()*(widmax-widmin+1));
    return randWid;
}

function randomlocHeight(heimin, heimax){
    var randHei = Math.floor(Math.random()*(heimax-heimin+1));
    return randHei;
}

/*
var awidth = randomWid(1, window.screen.width);
var aheight = randomHei(1, window.screen.height);

console.log("width=500, height=700, top=" + awidth +", left=" + aheight);
console.log(aheight);
*/

//var new_popup = [];
//var count = 0;

setInterval(function() {
    var indexURL = Math.floor((Math.random() * myURL.length));
    var popupURL = myURL[indexURL];

    //var sizeWidth
    //var sizeHeight
    var locWidth = randomlocWidth(400, window.screen.width - 250);
    var locHeight = randomlocHeight(1, window.screen.height - 350);

    var option = "width=300, height=400, top=" + locHeight +", left=" + locWidth;
    
    //var i = i++;

    //var popupCnt = new_popup.length;
    //var popupname = "popup" + new_popup.length;

    //new_popup[popupCnt] = window.open(popupURL, popupname, option);
    //new_popup[popupCnt].focus();
    new_popup = window.open(popupURL, "_blank", option);
}, 3000);

//setTimeout(new_popup.close(), 2000);

/*
function closeTabClick() {
    for (var i = 0; i >= new_popup.length; i++) {
        if(new_popup[i] && !new_popup[i].closed) {
            var popupname = "popup" + i;
            if(new_popup[i].name == popupname) new_popup.close();
        }
    }
}
*/

function closeTabClick() {
    new_popup.close();
}