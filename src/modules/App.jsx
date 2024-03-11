import '../css/App.css';
import picture1 from '../img/maincenter.jpg'
import picture2 from '../img/mainleft.jpg'
import picture3 from '../img/mainleft1.jpg'
import {useEffect} from 'react'
import $ from 'jquery';
import Header from './Header'

function App() {
    useEffect(()=>{
        const getFID = document.getElementsByClassName("first-item");
        const getSID = document.getElementsByClassName("second-item");
        const getTID = document.getElementsByClassName("third-item");

        $(getFID).mouseover(function() { //마우스 오버시 각각의 클래스에 다른 효과 주기
            $(".first-img").css("transform","scale(1.2)");
            $(".first-img").css("zIndex","1");
            $(".first-img").css("transition","all 0.5s");
        });

        $(getFID).mouseout(function() { //마우스 아웃시 원상태로 복구
            $(".first-img").css("transform","scale(1)");
            $(".first-img").css("zIndex","0");
            $(".first-img").css("transition","all 0.5s");
        });

        $(getSID).mouseover(function() { //마우스 오버시 각각의 클래스에 다른 효과 주기
            $(".second-img").css("transform","scale(1.2)");
            $(".second-img").css("zIndex","1");
            $(".second-img").css("transition","all 0.5s");
        });

        $(getSID).mouseout(function() { //마우스 아웃시 원상태로 복구
            $(".second-img").css("transform","scale(1)");
            $(".second-img").css("zIndex","0");
            $(".second-img").css("transition","all 0.5s");
        });

        $(getTID).mouseover(function() { //마우스 오버시 각각의 클래스에 다른 효과 주기
            $(".third-img").css("transform","scale(1.2)");
            $(".third-img").css("zIndex","1");
            $(".third-img").css("transition","all 0.5s");
        });

        $(getTID).mouseout(function() { //마우스 아웃시 원상태로 복구
            $(".third-img").css("transform","scale(1)");
            $(".third-img").css("zIndex","0");
            $(".third-img").css("transition","all 0.5s");
        });

        // Hide Header on on scroll down
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('#back-icon').outerHeight();

        $(window).scroll(function(event){
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
            var st = $(this).scrollTop();
            
            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;
            
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $('header').removeClass('nav-down').addClass('nav-up');
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    $('header').removeClass('nav-up').addClass('nav-down');
                }
            }
            
            lastScrollTop = st;
        } 
    }, []);   
       
  return (
    <section class="items">
        <article class="item">
            <div class="item__imgwrap">
                <div class="first-img item__img" style={{backgroundImage : 'url(' + picture1 + ')'}}></div>
            </div>
            <h2 class="heading heading--item">
                <a class="link link--ersa" href="application.html">
                    <span class="first-item" data-splitting="">App</span>
                </a>
            </h2>
            <div class="item__meta">
                <span class="item__meta-row"><span>By Caroline Balliste</span></span> <span class="item__meta-row"><span>April &mdash; 2023</span></span>
            </div>
        </article>

        <article class="item item--invert">
            <div class="item__imgwrap">
                <div class="second-img item__img" style={{backgroundImage : 'url(' + picture2 + ')'}}></div>
            </div>
            <h2 class="heading heading--item ">
                <a class="link link--ersa" href="game.html">
                    <span class="second-item" data-splitting="">Game</span>
                </a>
            </h2>
            
            <div class="item__meta">
                <span class="item__meta-row"><span>By Andrew Lewis</span></span> <span class="item__meta-row"><span>March &mdash; 2023</span></span>
            </div>
        </article>

        <article class="item">
            <div class="item__imgwrap">
                <div class="third-img item__img" style={{backgroundImage : 'url(' + picture3 + ')'}}></div>
            </div>
            
            <h2 class="heading heading--item">
                <a class="link link--ersa" href="notify.html">
                    <span class="third-item" data-splitting="">Notify</span>
                </a>
            </h2>
            <div class="item__meta">
                <span class="item__meta-row"><span>By Caroline Balliste</span></span> <span class="item__meta-row"><span>April &mdash; 2023</span></span>
            </div>
        </article>
    </section>           
  );
}

export default App;
