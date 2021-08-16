import React from 'react';
import { SettingsContext } from '../context/auth';
import { FarmsContext } from '../context/farms';
import { useContext } from 'react';

function Main_component() {
  const context = useContext(SettingsContext);
  const farmsListContext = useContext(FarmsContext);

  return (
    <div className="main_component">
      <ul class="diamond__container">
        <li>
          <a title="" class="diamond__item">
            <div class="diamond__content">
              <div class="content__info">
                <p>Relax</p>
              </div>
              <div class="content__overlay"></div>
              <div class="content__image content__image--1"></div>
            </div>
          </a>
        </li>
        <li>
          <a class="diamond__item">
            <div class="diamond__content">
              <div class="content__info">
                <p>swim</p>
              </div>
              <div class="content__overlay"></div>
              <div class="content__image content__image--2"></div>
            </div>
          </a>
        </li>
        <li>
          <a title="" class="diamond__item">
            <div class="diamond__content">
              <div class="content__info">
                <p>private</p>
              </div>
              <div class="content__overlay"></div>
              <div class="content__image content__image--3"></div>
            </div>
          </a>
        </li>
        <li>
          <a title="" class="diamond__item">
            <div class="diamond__content">
              <div class="content__info">
                <p>Camp Fire</p>
              </div>
              <div class="content__overlay"></div>
              <div class="content__image content__image--4"></div>
            </div>
          </a>
        </li>
        <li>
          <a title="" class="diamond__item">
            <div class="diamond__content">
              <div class="content__info">
                <p>explore</p>
              </div>
              <div class="content__overlay"></div>
              <div class="content__image content__image--5"></div>
            </div>
          </a>
        </li>
        <li>
          <a title="" class="diamond__item">
            <div class="diamond__content">
              <div class="content__info">
                <p>BBQ</p>
              </div>
              <div class="content__overlay"></div>
              <div class="content__image content__image--6"></div>
            </div>
          </a>
        </li>
        <li>
          <a title="" class="diamond__item">
            <div class="diamond__content">
              <div class="content__info">
                <p>Wedding</p>
              </div>
              <div class="content__overlay"></div>
              <div class="content__image content__image--7"></div>
            </div>
          </a>
        </li>
        <li>
          <a title="" class="diamond__item">
            <div class="diamond__content">
              <div class="content__info">
                <p>Sunset</p>
              </div>
              <div class="content__overlay"></div>
              <div class="content__image content__image--8"></div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Main_component;
