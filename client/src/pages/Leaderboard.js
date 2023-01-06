import Navbar from "../components/navbar/Navbar";
import '../components/leaderboard/leaderboard.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import list from '../database/leaderboard.json';
import Slider from 'react-slick';

const Leaderboard = () => {

    const listDescending = [...list.leaderboard].sort((a, b) => b.votes - a.votes);
    const first = listDescending[0];
    const second = listDescending[1];
    const third = listDescending[2];

    // console.log(list.leaderboard);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    


    return ( 
        <div className="leaderboard-page">
            <Navbar/>
            <div className="leaderboard-top">
                <h1 className="leaderboard-title">Testimonials Leaderboard</h1>
                <div className="leaderboard-top3">

                    <div className="leaderboard-second">
                        <div className="ldb-second-top">
                            <div className="second-posin"><div>2</div></div>
                            <div className="second-img-cont"><div className="second-img"></div></div>
                            <div className="second-testimonials"><div className="cont"><div>{second.votes}</div></div></div>
                        </div>
                        
                        <div className="ldb-second-bottom">
                            <div className="second-name" style={{fontSize: 27 ,fontWeight: 600}}>{second.name}</div>
                            <div className="second-branch-year" style={{fontSize: 16, fontWeight:400}}>{second.branch}<br/>{second.degree}{second.year}</div>
                        </div>
                    </div>

                    <div className="leaderboard-first">
                        <div className="ldb-first-top">
                            <div className="first-posin"><div>1</div></div>
                            <div className="first-img-cont"><div className="first-img"></div></div>
                            <div className="first-testimonials"><div className="cont"><div>{first.votes}</div></div></div>
                        </div>

                        <div className="ldb-first-bottom">
                            <div className="first-name" style={{fontSize: 30 ,fontWeight: 600}}>{first.name}</div>
                            <div className="first-branch-year" style={{fontSize: 18, fontWeight:400}}>{first.branch}<br/>{first.degree}{first.year}</div>
                        </div>
                    </div>

                    <div className="leaderboard-third">
                        <div className="ldb-third-top">
                            <div className="third-posin"><div>3</div></div>
                            <div className="third-img-cont"><div className="third-img"></div></div>
                            <div className="third-testimonials"><div className="cont"><div>{third.votes}</div></div></div>
                        </div>

                        <div className="ldb-third-bottom">
                            <div className="third-name" style={{fontSize: 23 ,fontWeight: 600}}>{third.name}</div>
                            <div className="third-branch-year" style={{fontSize: 14.5, fontWeight:400}}>{third.branch}<br/>{third.degree}{third.year}</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="leaderboard-bottom">
                <Slider {...settings} >
                    {list.leaderboard.map((item) => {
                        if(item !== first && item !== second && item !== third){
                            return (
                                <div className="leaderboard-carousel-item">
                                    <div className="ldb-item-top">
                                        <div className="item-img-cont"><div className="item-img"></div></div>
                                        <div className="item-testimonials"><div className="cont"><div>{item.votes}</div></div></div>
                                    </div>
                                    <div className="ldb-item-bottom">
                                        <div className="item-name" style={{fontSize: 21 ,fontWeight: 600}}>{item.name}</div>
                                        <div className="item-branch-year" style={{fontSize: 14, fontWeight:400}}>{item.branch}<br/>{item.degree}{item.year}</div>
                                    </div>
                                </div>
                                )
                        }
                    })}
                </Slider>
                
            </div>
        </div>
     );
}
 
export default Leaderboard;