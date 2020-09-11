let str = decodeURIComponent(window.location.search);
let arr = str.substr(6,5);
var id = str.substr(12,3);

$.get('../json/' + arr + '.json',function(res){
    console.log(res);
        var string = '';
    
    res.forEach(function(item){
         
        if(item.id  == id){
            var img = item.img.split(',');
            string += 
        `
        <div class="slide">
            <button disabled="disabled" class="btn-prev">
                <img src="../../dist/img/up.png" alt="">
            </button>
            <div class="pro-list">
                <img id="img_1" src="../../dist/img/${img[1]}" alt="">
                <img id="img_2"  src="../../dist/img/${img[2]}" alt="">
                <img id="img_3"  src="../../dist/img/${img[3]}" alt="">
                <img id="img_4"  src="../../dist/img/${img[4]}" alt="">
            </div>
            <button disabled="disabled" class="btn-prev">
                <img src="../../dist/img/down.png" alt="">
            </button>

        </div>
        <div class="pro-big">
            <div class="pic_big" id="pic_big"></div>
            
            <div class="share">
                <span>分享</span>
                <img data-v-53187009="" src="https://ws.izenecdn.com/st/wapsite/img/copy-link.053a097a.svg" alt="">
                <img data-v-53187009="" src="https://ws.izenecdn.com/st/wapsite/img/Facebook.c2b2389e.svg" alt="">
                <div class="wish">
                    <div class="wish-title">愿望单</div>
                    <div class="heart"></div>
                </div>
            </div>
        </div>
        <div class="pro-information">
            <a class="link" href="#">肌肤之钥</a>
            <p class="product-name">${item.goodName}</p>
            <div class="pro-price">
                <div class="money">
                    <span >￥  
                    ${item.price}</span>
                </div>
                <div class="sale-price">¥ 303.16</div>
                <div class="price-count">
                    <span>5%</span> 
                    <b>&#8595</b>
                </div>
            </div>
            <div class="product-text">
                <span>价格已包含税费，无需另付税费</span>
            </div>
            <div class="product-option">
                <div class="product-label">
                    <div class="label">
                        款式</div>
                    <div class="select">
                        <span>滋润型/长管 </span>
                        <div class="list">
                            <img src="../../dist/img/down.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="product-label">
                    <div class="label">
                        净含量</div>
                    <div class="select">
                        <span>36 ml </span>
                        <div class="list">
                            <img src="../../dist/img/down.png" alt="">
                        </div>
                    </div>
                    

                </div>
                <div class="product-ship">
                    <div class="option-sel">
                       <span>送达</span> 
                    </div>
                    <div class="option-selector">
                        <div class="ware-radio"></div>
                        <div class="ware-price">免运费</div>
                        <div class="ware-day">3 - 5 天 配送自 中国</div>
                        <div class="ware-question">?</div>
                    </div>
                </div>
                
            </div>
            <div class="option-quantity">
                <div class="quantity">数量</div>
                <div class="cart-calculator">
                    <button class="price-min"> </button>
                    <input type="number" class="price-input" placeholder="1">
                    <button class="price-min price-max"></button>
                </div>
            </div>
            <div class="product-label">
                <div class="option-select">总价</div>
                <div class="product-total">
                    ¥
                    ${item.price}
                </div>
            </div>
            <div class="btnBox">
                <button class="join"><span>加入购物车</span></button>
                <button class="buy"><span>立即购买</span></button>
            </div>
        </div>
    
        `

        }

        
    

        

        
    })
    $(".pro-outer").html(string);
})

