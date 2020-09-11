
console.log(decodeURIComponent(window.location.search));
let arr = decodeURIComponent(window.location.search);
let s_str = str.substr(1);
const arr = s_str.split('=')[1];

$.get('../json/' + arr + '.json' , function(res){
    
        var string = '';
        string = '';
        res.forEach(function(item){
            string +=
            `
            <div class="product-content">
                    <a href="#" class="lins-pro">
                        <img src="../../dist/img/${item.img}.jpeg" alt="">
                        <div class="brandBox">
                            <img src="../../dist/img/china.png" alt="">
                            <span>悦诗风吟</span>
                        </div>
                        <div class="info">
                            <span title="悦诗风吟绿茶精萃平衡柔肤露（保质2021.4.30）" class="product-info">${item.goodName}</span>
                            <div class="price">
                                <div class="num">¥
                                ${item.price}</div>
                                <span class="discount"><span>40%</span> <b>&#8595</b></span></div>
                            <div class="rate-box">
                                <div class="van-rate">
                                    <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item" style="width: 20px;"><path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path></svg>
                                    <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item" style="width: 20px;"><path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path></svg>
                                    <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item" style="width: 20px;"><path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path></svg>
                                    <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item" style="width: 20px;"><path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path></svg>
                                    <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item" style="width: 20px;"><path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path></svg>
                                </div>
                                <span class="review-num">9</span>
                            </div>
                        </div>
                    </a>
                </div>
                
            `
        })
      $(".product-list-cont").html(string);
})