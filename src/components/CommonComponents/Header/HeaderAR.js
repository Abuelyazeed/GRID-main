import React from "react"
import headerlogo from "../../../assets/images/header-logo.svg"
import Directory from "../../../utilities/Directory"
import {Link, useLocation, useNavigate} from "react-router-dom"


const HeaderAr = () => {
    const navigate = useNavigate()
    const location = useLocation().pathname

    const handleLanguageChange = (event) => {
        event.preventDefault()

        sessionStorage.setItem("language", Directory.EN)

        if (location === `/${Directory.AR}`) navigate(Directory.EN)
        else navigate(location.replace("/ar/", "/en/"))
    }

    return (
        <nav className="navbar sticky-top navbar-expand-xl bg-black">
            <div className="container center-content">
                <div className="navbar-brand">
                    <img className="brand-logo" src={headerlogo} alt="Header Logo"/>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDarkDropdown">
                    <span className="icon-nav-toggler"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav navbar-nav-scroll">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="src/components/CommonComponents/Header/HeaderAR#" role="button" data-bs-toggle="dropdown"
                               data-bs-auto-close="true">
                                عن جريد <span className="icon-down-arrow"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={Directory.ERROR}><span
                                    className="route">قصتنا</span></Link></li>
                                <li><Link className="dropdown-item" to={Directory.ERROR}><span
                                    className="route">تعاون</span></Link></li>
                                <li><Link className="dropdown-item" to={Directory.ERROR}><span
                                    className="route">ابتكر</span></Link></li>
                                <li><Link className="dropdown-item" to={Directory.ERROR}><span
                                    className="route">تعلم</span></Link></li>
                                <li><Link className="dropdown-item" to={Directory.ERROR}><span
                                    className="route">انمو</span></Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="src/components/CommonComponents/Header/HeaderAR#">التكنولوجيا المالية</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="src/components/CommonComponents/Header/HeaderAR#" role="button" data-bs-toggle="dropdown"
                               data-bs-auto-close="true" aria-expanded="false">
                                شارك معنا <span className="icon-down-arrow"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={Directory.ERROR}><span className="route">الشركات الناشئة</span></Link>
                                </li>
                                <li><Link className="dropdown-item" to={Directory.ERROR}><span
                                    className="route">المستثمرين</span></Link>
                                </li>
                                <li><Link className="dropdown-item" to={Directory.ERROR}><span
                                    className="route">الموجين</span></Link>
                                </li>
                                <li><Link className="dropdown-item" to={Directory.ERROR}><span
                                    className="route">المؤسسات المالية</span></Link></li>
                                <li><Link className="dropdown-item" to={Directory.ERROR}><span className="route">مهتم بالتكنولوجيا المالية</span></Link>
                                </li>
                                <li><Link className="dropdown-item" to={Directory.ERROR}><span
                                    className="route">الطلاب</span></Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="src/components/CommonComponents/Header/HeaderAR#" role="button" data-bs-toggle="dropdown"
                               data-bs-auto-close="true" aria-expanded="false">
                                الخدمات <span className="icon-down-arrow"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={Directory.ERROR}><span className="route">انشر أخبار</span></Link>
                                </li>
                                <li><Link className="dropdown-item" to={Directory.ERROR}><span className="route">انشر مقالات</span></Link>
                                </li>
                                <li><Link className="dropdown-item" to={Directory.ERROR}><span
                                    className="route">اطلب ان  تكون عضوا</span></Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="src/components/CommonComponents/Header/HeaderAR#">تواصل معانا</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="src/components/CommonComponents/Header/HeaderAR#" role="button" data-bs-toggle="dropdown"
                               data-bs-auto-close="true" aria-expanded="false">
                                المزيد <span className="icon-down-arrow"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={Directory.ERROR}><span className="route">قصص نجاح</span></Link>
                                </li>
                                <li><Link className="dropdown-item" to={Directory.ERROR}><span
                                    className="route">معرض الوسائل</span></Link></li>
                                <li><Link className="dropdown-item" to={Directory.ERROR}><span className="route">فوائد جريد</span></Link>
                                </li>
                                <li><Link className="dropdown-item" to={Directory.ERROR}><span
                                    className="route">فوائد العضوية</span></Link></li>
                                <li><Link className="dropdown-item" to={Directory.ERROR}><span className="route">برامج جريد</span></Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="navbar-search-lang">
                        <ul className="navbar-nav">
                            <li className="nav-item search">
                                <a className="nav-link" href="src/components/CommonComponents/Header/HeaderAR#"><span className="icon-search"></span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="src/components/CommonComponents/Header/HeaderAR#" role="button" data-bs-toggle="dropdown"
                                   data-bs-auto-close="true" aria-expanded="false">
                                    عربي <span className="icon-down-arrow"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li onClick={handleLanguageChange}>
                                        <button className="dropdown-item"><span
                                            className="route">الانجليزية</span></button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item disabled"><span
                                            className="route">عربي</span></button>
                                    </li>
                                </ul>
                            </li>

                        </ul>

                        <button type="button" className="btn btn-outline-primary">كن عضو لدينا</button>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default HeaderAr