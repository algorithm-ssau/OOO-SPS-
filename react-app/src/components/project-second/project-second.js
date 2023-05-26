import React from 'react';
import "./project-second.css";



const AppSecondProject = (props) => {
    const { onComponentChange } = props;
    return (
        <div>
            <header className="header2">
                <div className="menu-block2">
                    <div className="container2">
                        <div className="nav2">
                            <a href="# " onClick={() => onComponentChange('AppMain')}><img src="../img/Logo.png" alt="promstroy" className="logo2" /></a>
                            <ul className="menu2">
                                <li><a href="../index.html#about-us2">О компании</a></li>
                                {/* <li><a href="../index.html#services2">Наши услуги</a></li>
                                <li><a href="../index.html#projects2">Техника и установки</a></li> */}
                                <li><a href="../index.html#commut2">Контакты</a></li>
                            </ul>
                            <div className="contacts2">
                                <a href="tel:+79228484852" className="tel2">+7 922 848-48-52</a>
                                <a href="mailto:sps@sps-buz.ru">sps@sps-buz.ru</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container2">
                    <div className="offer2">
                        <img src="../img/photo_2023-03-17_12-13-50.png" alt="main-banner" className="main-banner2" />
                        <div className="offer-text2">
                            <div className="name-project2">
                                <h2>Поставка кальция хлористого жидкого</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div id="about-us2"></div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <section className="about-us2" >
                {/* <button onclick="topFunction()" id="myBtn2" title="Go to top"></button> */}
                <div className="container2">
                    <h2>О деятельности</h2>
                    <ul className="content-about-us2">
                        <li> <img src="../img/item.svg" alt="item" className="item2" />ООО  «СпецПромСтрой»   является  официальным  дистрибьютором  ООО «ЗИРАКС» г. Волгоград, ООО ТД «ГалоПолимер» г. Кирово-Чепецк и  осуществляет поставку кальция хлористого жидкого технического ГОСТ 450-77 на месторождения Заказчика для выполнения работ подрядчиков по  глушению скважин и подрядчиков по КРС. Доставка осуществляется  автомобильным транспортом как Российского, так и Зарубежного производства  от 17м3 до 30м3, а также железнодорожным транспортом (танк-контейнерами).  Генеральным   Заказчиком  является   ООО   «РН-Снабжение»  для  АО «Оренбургнефть». <p></p>
                        </li>
                        <li><img src="../img/item.svg" alt="item" className="item2" />Весь транспорт оснащен: <p></p>
                        </li>
                        <div className="items-details2">
                            <ol>
                                <li>&sdot;  ремнями безопасности;
                                </li>
                                <li>&sdot;  датчиком движения задним ходом (зуммер);
                                </li>
                                <li>&sdot;  бортовыми системами мониторинга типа «Автограф»;
                                </li>
                                <li>&sdot;  видеорегистратором двойного действия;
                                </li>
                                <li>&sdot;  квалифицированным, аттестованным	обслуживающим персоналом;
                                </li>
                            </ol>
                        </div>
                    </ul>
                </div>
            </section>

            <section className="communications2" id="commut2">
                <div className="container2">
                    <h2 className="h2-white-space2">Есть вопросы? Звоните!</h2>
                    <div className="communications-content2">
                        <div className="points2">
                            <div className="point2">
                                <p>
                                    Офис
                                </p>
                                <span>461046, Оренбургская обл.,<br />г. Бузулук, ул. Техническая, дом 9, офис 1</span>
                            </div>
                            <div className="point2">
                                <p>
                                    Исполнительный директор:
                                </p>
                                <span>Богословский Сергей Григорьевич</span>
                            </div>
                            <div className="point2">
                                <p>
                                    Горячая линия ОТ и ПБ:
                                </p>
                                <a href="tel:+79228484852" className="tel2">+7 922 848-48-52</a>
                                <a href="tel:+79370640942" className="tel2 tel-margin-top2">+7 937 064-09-42</a>
                            </div>
                            <div className="point2">
                                <p>
                                    E-mail:
                                </p>
                                <a href="mailto:" className="email2">sps@sps-buz.ru</a>
                            </div>
                        </div>
                        <a rel="noreferrer" href="https://www.google.com/maps/place/%D0%A2%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+9,+1,+%D0%91%D1%83%D0%B7%D1%83%D0%BB%D1%83%D0%BA,+%D0%9E%D1%80%D0%B5%D0%BD%D0%B1%D1%83%D1%80%D0%B3%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+461045/@52.7816355,52.2230384,17.21z/data=!4m5!3m4!1s0x4165018285268f83:0xec37c18a60f773d9!8m2!3d52.7814487!4d52.2245088?hl=ru" className="map2" target="_blank"><img src="../img/map.png" alt="map" /></a>
                    </div>
                </div>
            </section>
            <footer className="footer2">
                <div className="container2">
                    <div className="footer-content2">
                        <img src="../img/Logo.png" alt="logo" className="logo-footer2" />
                        <div className="footer-input2">
                            <a href="tel:+79228484852" className="tel2">+7 922 848-48-52</a>
                            <a href="mailto:" className="email2 email-margin-left2">sps@sps-buz.ru</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default AppSecondProject;