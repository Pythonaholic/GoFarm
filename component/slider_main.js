import React from 'react';
import { useEffect } from 'react';
import $ from 'jquery';
function Slider() {
  useEffect(() => {
    $(document).ready(function () {
      for (var i = 1; i <= $('.slider__slide').length; i++) {
        $('.slider__indicators').append(
          '<div class="slider__indicator" data-slide="' + i + '"></div>'
        );
      }
      setTimeout(function () {
        $('.slider__wrap').addClass('slider__wrap--hacked');
      }, 1000);
    });

    function goToSlide(number) {
      $('.slider__slide').removeClass('slider__slide--active');
      $('.slider__slide[data-slide=' + number + ']').addClass(
        'slider__slide--active'
      );
    }

    $('.slider__next, .go-to-next').on('click', function () {
      var currentSlide = Number($('.slider__slide--active').data('slide'));
      var totalSlides = $('.slider__slide').length;
      currentSlide++;
      if (currentSlide > totalSlides) {
        currentSlide = 1;
      }
      goToSlide(currentSlide);
    });
  }, []);

  return (
    <div className="slider-photos bg-gradient-to-l md:bg-gradient-to-r ...">
      <div className="slider">
        <div className="slider__slide slider__slide--active" data-slide={1}>
          <div className="slider__wrap">
            <div className="slider__back" />
          </div>
          <div className="slider__inner">
            <div className="slider__content">
              <a className="go-to-next">next</a>
            </div>
          </div>
        </div>
        <div className="slider__slide" data-slide={2}>
          <div className="slider__wrap">
            <div className="slider__back" />
          </div>
          <div className="slider__inner">
            <div className="slider__content">
              <a className="go-to-next">next</a>
            </div>
          </div>
        </div>
        <div className="slider__slide" data-slide={3}>
          <div className="slider__wrap">
            <div className="slider__back" />
          </div>
          <div className="slider__inner">
            <div className="slider__content">
              <a className="go-to-next">next</a>
            </div>
          </div>
        </div>
        <div className="slider__indicators" />
      </div>
      <a className="sig" href="" target="_blank">
        GoFarmTeam
      </a>
    </div>
  );
}

export default Slider;
