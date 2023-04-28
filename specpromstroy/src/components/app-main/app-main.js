import React from 'react';
import "./app-main.css";

const AppMainPage = (props) => {
    const { onComponentChange } = props;
    return (
        <div>
            <header className="header1">
                <div className="menu-block1">
                    <div className="container1">
                        <div className="nav1">
                            <a href="# " onClick={() => onComponentChange('AppMain')}><img src="img/Logo.png" alt="promstroy" className="logo1"/></a>
                            <ul className="menu1">
                                <li><a href="#about-us1">О компании</a></li>
                                <li><a href="#services1">Наши услуги</a></li>
                                <li><a href="#projects1">Техника и установки</a></li>
                                <li><a href="#commut1">Контакты</a></li>
                            </ul>
                            <div className="contacts1">
                                <a href="tel:+79228484852" className="tel1">+7 922 848-48-52</a>
                                <a href="mailto:sps@sps-buz.ru">sps@sps-buz.ru</a>
                            </div>
                            <a href="#about-us" className="menu-btn1">
                                <img src="img/burger.svg" alt="Menu"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container1">
                    <div className="offer1">
                        <img src="img/main.png" alt="main-banner" className="main-banner1"/>
                            <div className="offer-text1">
                                <h1>Компания</h1>
                                <p>ООО “Спецпромстрой” выполняет работы в области добычи нефти и природного газа, осуществляет доставку жидкого азота на месторождения. Активное развитие ресурсной базы, использование самых современных технологий обеспечивают гарантию качества и выполнение работ
                                    в кротчайшие сроки</p>
                                <a href="#about-us" className="btn1">Узнать больше</a></div>
                    </div>
                </div>
            </header>
            <div id="about-us1"></div>
            <div className="about-us1" >
                <button onclick="topFunction()" id="myBtn1" title="Go to top"></button>
                <div className="container1">
                    <h2>О нас</h2>
                    <ul className="content-about-us1">
                        <li> <img src="img/item.svg" alt="item" className="item1"/>Общество с ограниченной ответственностью «СпецПромСтрой», именуемое в дальнейшем «Общество» создано на основании Гражданского Кодекса Российской Федерации;<p></p>
                        </li>
                        <li><img src="img/item.svg" alt="item" className="item1"/>Полное	фирменное	наименование:	Общество	с	ограниченной ответственностью «СпецПромСтрой»;<p></p>
                        </li>
                        <li><img src="img/item.svg" alt="item" className="item1"/>Сокращенное фирменное наименование: ООО «СпецПромСтрой»;<p></p>
                        </li>
                        <li><img src="img/item.svg" alt="item" className="item1"/>На сегодняшний день, на предприятии успешно трудятся 63 человека, из  которых : 35%- имеют высшее образование, 30%- среднее  профессиональное, 19%- начальное профессиональное.<p></p>
                        </li>
                    </ul>
                </div>
            </div>
            
    <div id="services1"></div>
    <section className="services1" >
        <section className="container1">
                <h2>Спектр оказываемых услуг</h2>
                <div className="services-content1">
                    <ul className="services-items1">
                        <li><img src="img/item.svg" alt="item" className="rec-item1"/>
                            <p>Выполнение работ по освоению скважин методом компрессирования газификационными установками типа ГУ 7.4/20  сприменением жидкого азота</p></li>
                        <li><img src="img/item.svg" alt="item" className="rec-item1"/>
                            <p>Опрессовка фонтанной и устьевой арматуры, испытание промысловых имагистральных трубопроводов</p></li>
                        <li><img src="img/item.svg" alt="item" className="rec-item1"/>
                            <p>Пенокислотная обработка скважин с применением кислотного агргата СИН-32 </p></li>
                        <li><img src="img/item.svg" alt="item" className="rec-item1"/>
                            <p>Предоставление услуг в области добычи нефти и природного газа</p></li>
                        <li><img src="img/item.svg" alt="item" className="rec-item1"/>
                            <p>Поставка жидкого азота</p></li>
                    </ul>
                </div>
        </section>
    </section>
    <div id="projects1"></div>
            <br/>
            <section className="projects1" >
                <div className="container1">
                    <div className="name-projects1">
                        <h2>Технические ресурсы компании</h2>
                    </div>
                    <div className="content-project1">
                        <div className="cards1">
                            <a className="card1" onClick={() => onComponentChange('ProjectFirst')} href="# ">
                                <img src="img/Rectangle 19.png" alt="1"/>
                                    <div className="content-card1 content-card-section1"><h3>Освоение скважин методом компрессирования</h3>
                                        <p>Генеральными   Заказчиками   ООО  «СпецПромСтрой»   являются   ПАО «Газпромнефть-Оренбург», ООО «Газпромнефть Заполярье», «Газпром  Бурение», «Урал – Дизайн - ПНП», РМНТК-ТС, «СпецТрансГрупп» и др...</p></div>
                            </a>
                            <a className="card1" onClick={() => onComponentChange('ProjectSecond')} href="# ">
                                <img src="img/photo_2023-03-17_12-13-50 1.png" alt="2"/>
                                    <div className="content-card1"><h3>Поставка кальция хлористого жидкого </h3>
                                        <p>ООО  «СпецПромСтрой»   является  официальным  дистрибьютором  ООО «ЗИРАКС» г. Волгоград, ООО ТД «ГалоПолимер» г. Кирово-Чепецк и  осуществляет поставку кальция хлористого жидкого технического...</p></div>
                            </a>
                        </div>
                    </div>
                </div>
    </section>
    <section className="communications1" id="commut1">
        <div className="container1">
            <h2>Контакты</h2>
            <div className="communications-content1">
                <div className="points1">
                    <div className="point1">
                        <p>
                            Офис
                        </p>
                        <span>461046, Оренбургская обл.,<br/>г. Бузулук, ул. Техническая, дом 9, офис 1</span>
                    </div>
                    <div className="point1">
                        <p>
                            Исполнительный директор:
                        </p>
                        <span>Богословский Сергей Григорьевич</span>
                    </div>
                    <div className="point1">
                        <p>
                            Горячая линия ОТ и ПБ:
                        </p>
                        <a href="tel:+79228484852" className="tel1">+7 922 848-48-52</a>
                        <a href="tel:+79370640942" className="tel1 tel-margin-top1">+7 937 064-09-42</a>
                    </div>
                    <div className="point1">
                        <p>
                            E-mail:
                        </p>
                        <a href="mailto:" className="email1">sps@sps-buz.ru</a>
                    </div>
                </div>
                <a href="https://www.google.com/maps/place/%D0%A2%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+9,+1,+%D0%91%D1%83%D0%B7%D1%83%D0%BB%D1%83%D0%BA,+%D0%9E%D1%80%D0%B5%D0%BD%D0%B1%D1%83%D1%80%D0%B3%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+461045/@52.7816355,52.2230384,17.21z/data=!4m5!3m4!1s0x4165018285268f83:0xec37c18a60f773d9!8m2!3d52.7814487!4d52.2245088?hl=ru" className="map1" target="_blank" rel="noreferrer"><img src="img/map.png" alt="map"/></a>
            </div>
        </div>
    </section>
    <footer className="footer1">
        <div className="container1">
            <div className="footer-content1">
                <img src="img/Logo.png" alt="logo" className="logo-footer1"/>
                <div className="footer-input1">
                    <a href="tel:+79228484852" className="tel1">+7 922 848-48-52</a>
                <a href="mailto:" className="email1 email-margin-left1">sps@sps-buz.ru</a>
                </div>
            </div>
        </div>
    </footer>
</div >
    )
}

export default AppMainPage;