function change(index){
    //const p = document.getElementById('show');
    const p = document.querySelector('#show')
    console.log('p',p);
    switch (index) {
        case 1:
            p.innerHTML = '<iframe width=100% height=100% src="./Week1/intro.html" />';
            break;
        case 2:        
            p.innerHTML = '<iframe width=100% height=100% src="./Week1/Pokemon.html" />';
            break;
        case 3:
            p.innerHTML = '<iframe width=100% height=100% src="./Week2/MY/MyImageGallery.html" />';
            break;
        case 4:        
            p.innerHTML = '<iframe width=100% height=100% src="./Week2/MY/MyBlog.html" />';
            break;
        case 5:
            p.innerHTML = '<iframe width=100% height=100% src="./Week3/div.html" />';
            break;
        case 6:        
            p.innerHTML = '<iframe width=100% height=100% src="./Week4/Week3/div.html" />';
            break;
        case 7:        
            p.innerHTML = '<iframe width=100% height=100% src="./Week6/index.html" />';
            break;                   
    }
}