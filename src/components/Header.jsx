/* eslint-disable jsx-a11y/alt-text */
export default function Content() {

    return (

        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <title>Vegetables</title>
            </head>

            <header className="header">
                <div className="icon-container">
                    <h1 className="header-title">Vegetables</h1>
                    <img src="images/btn_facebook.png" className="facebook" />
                    <img src="images/btn_instagram.png" className="instagram" />
                    <div className="line"></div>
                    <div className="btn_LOGIN_box">LOGIN</div>
                    <div className="btn_JOIN_box">JOIN</div>

                </div>

                <nav className="nav">
                    <ul className="nav-list">
                        <div className="Home"><li className="nav-list-item">
                            <a href="#" className="nav-list-item-link">Home</a>
                        </li>
                        </div>
                        <div className="Aboutus"><li className="nav-list-item">
                            <a href="#" className="nav-list-item-link">About&nbsp;Us</a>
                            {/* <ul className="nav-sublist">
                    <li className="nav-list-item"><a href="#" className="nav-list-item-link">Sub Link 1</a></li>
                    <li className="nav-list-item"><a href="#" className="nav-list-item-link">Sub Link 2</a></li>
                    <li className="nav-list-item"><a href="#" className="nav-list-item-link">Sub Link 3</a></li>
                    <li className="nav-list-item"><a href="#" className="nav-list-item-link">Sub Link 4</a></li>
                    <li className="nav-list-item"><a href="#" className="nav-list-item-link">Sub Link 5</a></li>
                    <li className="nav-list-item"><a href="#" className="nav-list-item-link">Sub Link 6</a></li>
                </ul> */}
                        </li>
                        </div>
                        <div className="Vegetables"><li className="nav-list-item">
                            <a href="#" className="nav-list-item-link">Vegetables</a>
                            {/* <ul>
                        <li><a href="#">Portfolio 1</a></li>
                        <li><a href="#">Portfolio 2</a></li>
                        <li><a href="#">Portfolio 3</a></li>
                    </ul> */}
                        </li>
                        </div>
                        <div className="Online"><li className="nav-list-item">
                            <a href="#" className="nav-list-item-link">Online</a>
                        </li>
                        </div>

                        <div className="Contact"><li className="nav-list-item">
                            <a href="#" className="nav-list-item-link">Contact</a>
                        </li>
                        </div>
                    </ul>
                </nav>
            </header>

        </html>
    );

}