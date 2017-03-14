/**
 * Created by basti on 09/03/2017.
 */

$(document).ready(function () {
    // Recup Api
    var url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=e082a5c50ed38ae74299db1d0eb822fe';
    $.getJSON(url , function(val) {
    console.log(val);
    var i;
    var dataMovies = val.results;
    console.log(dataMovies);
       for (i = 0; i < 7; ++i) {
           var imgBase = " https://image.tmdb.org/t/p/w500";
           var imgBack = dataMovies[i].backdrop_path;
           /*url de l'img*/
           var imgGlobal = imgBase + imgBack;
           /* vote , Math Round*/
           var vote = dataMovies[i].vote_average;
           var roundVote = Math.round(vote);
           console.log(roundVote);
           /* Description + limit 160 car*/
           var overviews = dataMovies[i].overview;
           var o = overviews.slice(0,160);
           var overview = o + '...';
           var title = dataMovies[i].title;
           $('.coverflow-list').append(
               '<li>'+
                   '<span>'+
                        '<img src="' + imgGlobal +'" />'+
                        '<h2 class="title">' + title +'<h2/>'+
                        '<p class="overview">' + overview +'<p/>'+
                        '<div class="stars"><div/>'+
                   '</span>'+
               '</li>'
            );
       }
        for (i = 0; i < roundVote; ++i) {
           /* Gen étoile*/
            $('.stars').append(
                    '<img class="starResiz" src="img/star.png" />'
            );
        }
    });
    'use strict';
    var c = document.querySelectorAll('span');
    document.getElementById('left').addEventListener('click', shift);
    document.getElementById('right').addEventListener('click', shift_r);
    function shift(e) {
        var list = document.querySelector('ul');
        var first = list.querySelector('li:nth-child(1)');
        var clone = first.cloneNode(true);
        window.setTimeout(function(e) {
            first.parentNode.removeChild(first);
            list.appendChild(clone);
            clone.addEventListener('click', shift);
        }, 410);
    }
    function shift_r(e) {
        var list = document.querySelector('ul');
        var last = list.querySelector('li:nth-child(7)');
        var clone = last.cloneNode(true);
        window.setTimeout(function(e) {
            last.parentNode.removeChild(last);
            list.prepend(clone);
        }, 410);
    }
});
