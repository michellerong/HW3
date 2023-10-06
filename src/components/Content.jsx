/* eslint-disable jsx-a11y/alt-text */
// import '../public/css/style.css';

export default function Content({Main_pic , Vegetable}) {

    return (

        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <title>Vegetables</title>
            </head>
            <body>

            </body>


            <article className="main-area">
                <img src={Main_pic[0].main_pic} className="img_main_pumpkin" />
                <div className="content-area">
                     <div className="vegetableside">
                        
                        <div className="vegetabletitle">Vegetables</div>
                       
                        
                        <div className="picture-container" >
                            {Vegetable.map(vegetable =>(
                            <img src={vegetable.vegetable_img} className="img_vegetables_pepper"key={vegetable.id} alt={vegetable.vegetable_title}/>
                            
                            ))}
                        </div>
                    
                    </div>
                    <div className="contactside">
                        <div className="contacttitle">Contact</div>
                        <div className="contactbg">
                            <div className="contactcontent">
                            {Main_pic[0].content}
                                <br /></div>
                            <div className="hr">
                                <hr />
                            </div>
                            <div className="email">
                                E-mail : Vegetables@aaabbccc.com<br />
                                PHONE : +886-123-456-789
                            </div>
                        </div>
                    </div>
                </div>

            </article>


        </html>
    );
}