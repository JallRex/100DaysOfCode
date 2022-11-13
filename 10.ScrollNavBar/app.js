// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels
const navbar = document.getElementById('nav')
const toplink = document.querySelector('.top-link')


// ********** set date (auto updating copyright date in footer by addressing ID "date") ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    // linksContainer.classList.toggle('show-links');   ***Usable but not dynamic!**
    // Dynamic size of navbar (menu)
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    }
    else{
        linksContainer.style.height = 0;
    }
});


// ********** fixed navbar ************

window.addEventListener('scroll',function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    //If you scrolled further than the height of the Navbar then the nav is "fixed"
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav')
    }else{
        navbar.classList.remove('fixed-nav')
    }

    if(scrollHeight > 400){
        toplink.classList.add('show-link')
    }else{
        toplink.classList.remove('show-link')
    }

});

// ********** smooth scroll ************


// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener("click",function(e){
        //Prevent default scroll
        e.preventDefault();
        // navigate to specific spots
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        // calculate the heights! :D 
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");

        let position = element.offsetTop - navHeight;
        
        if (!fixedNav){
            position = position - navHeight;
        }
        if(navHeight > 82){ //fixing small screen navigation with scroll/button
            position = position + containerHeight;
        }

        window.scrollTo({
            left:0,
            top:position,
        });
        //closes the navmenu on scroll
        linksContainer.style.height = 0;
    });
});