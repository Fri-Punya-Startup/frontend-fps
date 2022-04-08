const navbar = document.getElementsByClassName('navbar2_header__ngq8R')

if(document.body.scrollTop > 80){
    console.log('scrolled')
    navbar[0].style.backgroundColor = '#fff'
    navbar[0].style.boxShadow = '0px 0px 10px #000'
}

// // console.log(screenTop)