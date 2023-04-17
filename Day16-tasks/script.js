console.log('script.js is working.');

let timer = document.getElementById('timer');

const countDown = (num, cb = () => {}) => {
    console.log(num);
    timer.innerHTML = num;
    setTimeout(() => {
        cb(num);
    }, 1000);
    
  
}

countDown(10, function(num) {
    num--;
    countDown(num, function(num) {
        num--;
        countDown(num, function(num){
            num--
            countDown(num, function(num){
                num--
                countDown(num, function(num){
                    num--
                    countDown(num, function(num){
                        num--
                        countDown(num, function(num){
                            num--
                            countDown(num, function(num){
                                num--
                                countDown(num, function(num){
                                    num--
                                    countDown(num, function(num){
                                        num--
                                        timer.innerHTML = 'Happy Independance Day!';
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})


