import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import img from './Images/frntimg.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import SingleQuestion from "./SingleQuestion";
import data from './data';

export default function Body() {
    const [questions, setQuestions] = useState(data);

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);

    return (
        <>
{/* 
            <img src='./images/moneyfinance-1.jpg' alt="Front" height="900px" width="100%" /> */}
            <div className="Intropara">
            <img src="./images/pngchat.png" alt="" />
                <div className="introContent">
                    <h1 className="introHead">Get the best sports related guidence <span className="introHead2" >that is right for you.</span></h1>
                   
                </div>
                
                
            </div>

            <div className="card">
                <div className="leftCard">
                    <h1 data-aos="zoom-in-right" data-aos-duration="800" className="cardhead">What is a Olympics?</h1>
                    <div data-aos="fade-right" data-aos-duration="2000" className="carddesc">
                        
                The Olympics, officially known as the Olympic Games, are an international sporting event held every four years. 
                They bring together athletes from different countries to compete against each other in a variety of sports disciplines. 
                The Olympic Games are governed by the International Olympic Committee (IOC), which is responsible for selecting the host city, 
                establishing the rules and regulations, and overseeing the event.<br/>

                The modern Olympic Games were inspired by the ancient Olympic Games held in Olympia, Greece, from the 8th century BCE to 
                the 4th century CE. The modern Olympics were first revived in 1896 and have been held regularly since then, with some interruptions
                during periods of war.
                    </div>
                </div>
                <div className="rightCard">
                    <img className="rimage" src="./images/olympics.png" alt="" />
                </div>
                
            </div>
            <div className="card ">
                <div className="leftCard">
                    <img className="limage" src="./images/analysis.png" alt="" />
                </div>
                <div className="rightCard">
                    <h1 data-aos="zoom-in-left" data-aos-duration="800" className="cardhead">How Are sports analyzed?</h1>
                    <div data-aos="fade-left" data-aos-duration="2000" className="carddesc">
                    Sports analysis is the process of examining various aspects of a sporting event or competition in order to gain insights and
                     draw conclusions about the performance of individual players, teams, or strategies. It involves studying statistics,
                     observing game footage, and applying analytical techniques to understand the dynamics and outcomes of the sport.
                     <br/>
                     Overall, sports analysis is a multidisciplinary approach that combines statistical analysis, tactical understanding,
                      and observational skills to provide insights into player and team performance, game strategies, and future outcomes.
                      It is used by coaches, managers, broadcasters, and sports enthusiasts to better understand the game and make informed decisions.
                    </div>
                </div>
                
                
            </div>
            <div className="card">
                
                <div className="leftCard">
                    <h1 data-aos="zoom-in-right" data-aos-duration="800" className="cardhead">What is IPL?</h1>
                    <div data-aos="fade-right" data-aos-duration="2000" className="carddesc">
                    IPL stands for the Indian Premier League. It is a professional Twenty20 cricket league in India. The tournament was established by the Board of Control for Cricket in India (BCCI) in 2007 and has since become one of the most popular and financially lucrative cricket leagues in the world.
<br/>
                        The IPL follows a franchise-based model, where teams representing different cities in India compete against each other.
                        Currently, there are eight teams in the league, each owned by different entities, including prominent celebrities,
                        different business groups and different organizations.
                        <br/>
                        The IPL typically takes place annually over a period of about two months, usually between March and May.
                         It features a round-robin group stage followed by playoffs.
                         The top teams from the group stage qualify for the playoffs, which include elimination matches leading to the final.
                    </div>
                </div>
                <div className="rightCard">
                    <img className="rimage" src="./images/ipl-logo.png" alt="" />
                </div>
                
            </div>
            <div className="card">
            <div className="leftCard">
                    <img className="limage" src="./images/data-analysis.jpg" alt="" />
                </div>
                <div className="rightCard">
                    <h1 data-aos="zoom-in-left" data-aos-duration="800" className="cardhead">how is sports analysis helpful?</h1>
                    <div data-aos="fade-left" data-aos-duration="2000" className="carddesc">
                    Sports analysis is highly beneficial in several ways:
                    <br />

Performance Enhancement: Sports analysis helps athletes, teams, and coaches identify strengths and weaknesses, allowing them to focus on areas that need improvement. By studying their performance, players can refine their techniques, develop strategies, and make informed decisions to enhance their overall performance on the field.
<br/>
Strategy Development: Analyzing opponents' performance and game patterns helps teams develop effective strategies. By understanding their opponents' strengths and weaknesses, teams can devise game plans, make tactical adjustments, and exploit vulnerabilities to gain a competitive edge.
<br/>
Injury Prevention and Recovery: Sports analysis can help identify potential injury risks and patterns.
<br />
 By analyzing athletes' movements, workload, and training techniques, experts can suggest modifications to prevent injuries. Additionally,
 analysis of rehabilitation processes and monitoring progress aids in effective recovery and minimizing the chances of re-injury.
                    </div>
                </div>
                
                
            </div>



            {/* <div className="cfull">
                <h1>Types of Banks</h1>
                <div className="line"></div>
            </div>

            <details className="cfull cborder">
                <summary>Retail banks</summary>
               <p className="detailcFull"> Retail banks deal specifically with retail consumers, though some global financial services companies contain both retail and commercial banking divisions. These banks offer services to the general public and are also called personal or general banking institutions. Retail banks provide services such as checking and savings accounts, loan and mortgage services, financing for automobiles, and short-term loans such as overdraft protection. Many larger retail banks may also offer their customers credit card and foreign currency exchange services. Larger retail banks also often cater to high-net-worth individuals with specialty services such as private banking and wealth management. Examples of retail banks include TD Bank and Citibank.</p>
            </details>
            <details className="cfull cborder">
                <summary>Commercial or corporate banks</summary>
                <p className="detailcFull"> Commercial or corporate banks provide specialty services to their business clients, from small business owners to large, corporate entities. Along with day-to-day business banking, these banks also provide their clients with credit services, cash management, commercial real estate services, employer services, and trade finance, among other services. JPMorgan Chase and Bank of America are two popular examples of commercial banks, though both have large retail banking divisions as well.</p>
            </details>
            <details className="cfull cborder">
                <summary>Investment banks</summary>
                <p className="detailcFull"> Investment banks focus on providing corporate clients with complex services and financial transactions such as underwriting and assisting with merger and acquisition (M&A) activity. As such, they are known primarily as financial intermediaries in most of these transactions. Clients commonly range from large corporations, other financial institutions, pension funds, governments, and hedge funds. Morgan Stanley and Goldman Sachs are examples of U.S. investment banks.</p>
            </details>
            <details className="cfull cborder">
                <summary> central banks</summary>
                <p className="detailcFull"> Unlike the banks listed above, central banks are not market-based and don't deal directly with the general public. Instead, they are primarily responsible for currency stability, controlling inflation and monetary policy, and overseeing a country's money supply. They also regulate the capital and reserve requirements of member banks. Some of the world's major central banks include the U.S. Federal Reserve Bank, the European Central Bank, the Bank of England, the Bank of Japan, the Swiss National Bank, and the People’s Bank of China.</p>
            </details> */}

           


          
            <div className="fixbg">
            <div class="section4">
            <h1>Webinars</h1>
            <p>Finco's role in education and capacity building is done using different methodologies.
                 The <br /> webinar method allows the lecture content to be stored and used at any time by our <br /> membership.
                  It also reaches members in remote and poorly connected places.</p>
            <a href="https://youtube.com/" target="_blank"><img src="images/play-yellow.png" alt="" /></a>
        </div>
            </div>
            

            <div className="cfull" >
                <h1>Is Sports consultancy Right for you?</h1><br />
                <h2 >Advantages of spo Trading</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum incidunt libero, ea assumenda harum odit laudantium adipisci eum, maiores saepe laboriosam? Ipsam nemo cumque illum facere distinctio consequatur, velit aliquid.</p><br />
                <h2 >Disadvantages of Sales Trading</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia quae blanditiis atque autem! Officiis quis vitae minus illo tenetur expedita, minima reiciendis nisi velit molestias assumenda aut voluptatibus ducimus?</p><br />
            </div>
            <div className="enquiry">
            <h1>Common Enquiry</h1>
            <div class="line"></div>
                {questions.map((question)=>{
                    return <SingleQuestion key = {question.id} title={question.qn} info = {question.ans}/>
                })}
            </div>
           

        </>


    );
}