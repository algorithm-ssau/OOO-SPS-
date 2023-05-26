import React from 'react';
import "./project-first.css";
import CalculatorFirst from '../calculator-first/calculator-first';
import CalculatorSecond from '../calculator-second/calculator-second';
import SliderCarusel from '../slider/slider';


const AppFirstProject = (props) => {
    const { onComponentChange } = props;
    return (
        <div>
            <header className="header">
                <div className="menu-block">
                    <div className="container">
                        <div className="nav">
                            <a href="# " onClick={() => onComponentChange('AppMain')}><img src="../img/Logo.png" alt="promstroy" className="logo" /></a>
                            <ul className="menu">
                                <li><a href="../index.html#about-us">О компании</a></li>
                                <li><a href="../index.html#services">Наши услуги</a></li>
                                <li><a href="../index.html#projects">Техника и установки</a></li>
                                <li><a href="../index.html#commut">Контакты</a></li>
                            </ul>
                            <div className="contacts">
                                <a href="tel:+79228484852" className="tel">+7 922 848-48-52</a>
                                <a href="mailto:sps@sps-buz.ru">sps@sps-buz.ru</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="offer">
                        <img src="../img/Rectangle 19_.png" alt="main-banner" className="main-banner" />
                        <div className="offer-text">
                            <div className="name-project">
                                <h2>Освоение скважин методом компрессирования</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div id="about-us"></div>
            <br/>
            <br/>
            <section className="about-us" >
                {/* <button onclick="topFunction()" id="myBtn" title="Go to top"></button> */}
                <div className="container">
                    <h2>О деятельности</h2>
                    <div className="content-about-us">
                        <p>Генеральными   Заказчиками   ООО  «СпецПромСтрой»   являются   ПАО «Газпромнефть-Оренбург», ООО «Газпромнефть Заполярье», «Газпром  Бурение», «Урал – Дизайн - ПНП», РМНТК-ТС, «СпецТрансГрупп» и др. Для  освоения  скважин методом компрессирования на объектах заказчика ООО «СпецПромСтрой» применяет высокопроизводительные двух-насосные установки  типа УГНС 8/20, ГУ 7,4/20 с применением жидкого азота с возможностью снижения в эксплуатационной колонне до 3000м, регистрацией параметров работы компрессора и системой управления, с возможностью регулирования работы компрессора.
                        </p>
                        <img src="../img/about-activities.png" alt="" className="img-about-us" />
                    </div>
                </div>
            </section>
            <div id="projects"></div>
            <SliderCarusel/>

            <section className="calculator"  id="services">
                <div className="container" >
                    <h2  className="name-calculators name-calculators-white-space">Производительность установки<br />УГНС 8/20, ГУ 7,4/20</h2>
                    <div className="calculators">
                        <CalculatorFirst/>
                        <CalculatorSecond/>
                    </div>
                </div>
            </section>

            <section className="communications" id="commut">
                <div className="container">
                    <h2 className="name-calculators-white-space">Есть вопросы? Звоните!</h2>
                    <div className="communications-content">
                        <div className="points">
                            <div className="point">
                                <p>
                                    Офис
                                </p>
                                <span>461046, Оренбургская обл.,<br />г. Бузулук, ул. Техническая, дом 9, офис 1</span>
                            </div>
                            <div className="point">
                                <p>
                                    Исполнительный директор:
                                </p>
                                <span>Богословский Сергей Григорьевич</span>
                            </div>
                            <div className="point">
                                <p>
                                    Горячая линия ОТ и ПБ:
                                </p>
                                <a href="tel:+79228484852" className="tel">+7 922 848-48-52</a>
                                <a href="tel:+79370640942" className="tel tel-margin-top">+7 937 064-09-42</a>
                            </div>
                            <div className="point">
                                <p>
                                    E-mail:
                                </p>
                                <a href="mailto:" className="email">sps@sps-buz.ru</a>
                            </div>
                        </div>
                        <a href="https://www.google.com/maps/place/%D0%A2%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+9,+1,+%D0%91%D1%83%D0%B7%D1%83%D0%BB%D1%83%D0%BA,+%D0%9E%D1%80%D0%B5%D0%BD%D0%B1%D1%83%D1%80%D0%B3%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+461045/@52.7816355,52.2230384,17.21z/data=!4m5!3m4!1s0x4165018285268f83:0xec37c18a60f773d9!8m2!3d52.7814487!4d52.2245088?hl=ru" className="map" target="_blank" rel="noreferrer"><img src="../img/map.png" alt="map" /></a>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <img src="../img/Logo.png" alt="logo" className="logo-footer" />
                        <div className="footer-input">
                            <a href="tel:+79228484852" className="tel">+7 922 848-48-52</a>
                            <a href="mailto:" className="email email-margin-left">sps@sps-buz.ru</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
};


export default AppFirstProject;