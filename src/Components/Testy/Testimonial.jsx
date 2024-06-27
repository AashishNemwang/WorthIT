import React, {useRef} from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonial = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if (tx >-50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward = ()=>{
    if (tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}

  return (
    <div className='testimonial'>
       <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
       <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
       <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="User-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Birag Acharya</h3>
                            <span>Inaruwa, Nepal</span>
                        </div>
                    </div>
                    <p>I couldn't be happier with the service I received 
                        from WorthIT. Their team transformed our outdated 
                        website into a modern, user-friendly platform that 
                        has significantly increased our customer engagement. 
                        Their expertise in UI/UX design and web development 
                        is truly unmatched. </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="User-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Sujal Rai</h3>
                            <span>Dharan, Nepal</span>
                        </div>
                    </div>
                    <p>Working with WorthIT was a game-changer for our business. 
                        They developed a custom software solution that streamlined 
                        our operations and boosted our productivity. The team's 
                        professionalism and dedication to quality were evident 
                        throughout the entire project. We are extremely satisfied 
                        with the results and look forward to future collaborations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="User-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Arbaz Khan</h3>
                            <span>Inaruwa, Nepal</span>
                        </div>
                    </div>
                    <p>WorthIT exceeded our expectations in every way. Their creative 
                        and technical expertise brought our vision to life with a stunning, 
                        intuitive app that our users love. The project was completed on time 
                        and within budget, and the team's support has been outstanding. WorthIT 
                        truly stands out as a leader in software development.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="User-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Prashant Paudel</h3>
                            <span>Itahari, Nepal</span>
                        </div>
                    </div>
                    <p>Our experience with WorthIT has been exceptional. They delivered a 
                        comprehensive digital solution that not only met our requirements but 
                        also enhanced our overall business strategy. Their attention to detail 
                        and commitment to delivering high-quality work are truly commendable. 
                        WorthIT is a reliable partner that we trust for all our software 
                        development needs.</p>
                </div>
            </li>
        </ul>
       </div>
    </div>
  )
}

export default Testimonial