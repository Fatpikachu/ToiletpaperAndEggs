import React, { Component } from 'react';
import ToiletPaper from './ToiletPaper';
import Egg from './Egg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPooStorm, faBars} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

import {
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  WeiboShareButton,
  WeiboIcon,
} from "react-share";

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      tpResult: 0,
      eggResult: 0,
    };
  }
  calcTp = (rolls,
    visits,
    wipesPerTrip,
    sheetsPerWipe,
    sheetsPerRoll,
    household,
    quaratine) => {
      let dayUsage = visits * (wipesPerTrip * sheetsPerWipe) * household
      this.setState({tpResult: Math.floor((rolls * sheetsPerRoll)/dayUsage)});
  }

  calcEggs = (eggs, consume, chickens, laidPerDay) => {
      if((chickens*laidPerDay) >= consume){
        this.setState({eggResult: 'Infinite'});
      } else { 
      eggs = Math.floor(eggs/(consume - (chickens * laidPerDay)))
      this.setState({eggResult: eggs});
      }
  }

  render(){
    let {tpResult, eggResult} = this.state;
    return (
    <React.Fragment>
      <div className='app-container'>
        <div className='title-container'>
          <header>
            <div className='logo'><FontAwesomeIcon icon={faPooStorm}/>&nbsp;&nbsp;FatPikachu</div>
            <nav className='left-nav'>
              <ul className='nav-links'>
                <li><a href='#'>Random</a></li>
                <li><a href='#'>Text</a></li>
                <li><a href='#'>Looks</a></li>
                <li><a href='#'>Cool</a></li>
              </ul>
            <a className='menu'><FontAwesomeIcon icon={faBars}/></a>
            </nav>
          </header>
          <div className='title'>
            How much toilet paper and eggs to survive quarantine?
            <br/><p className='sub-title'>Lets calculate it</p>
          </div>
        </div>
        <div className='tp-result'><div className='result'>{tpResult}</div> days of toilet paper</div>
        <div className='egg-result'><div className='result'>{eggResult}</div>days of eggs</div>
        <ToiletPaper calculateTp={this.calcTp} />
        <Egg calculateEggs={this.calcEggs}/>
        <div className='social-media-container'> 
          <div>Share with friends: </div>
          <div className='social-media'>
            <div className='share fb-share'>
              <FacebookShareButton
              quote={`I will surive ${tpResult} days of toilet paper and 
                      ${eggResult} days of eggs! How about you?`}
              url={"http://how-much-tp-eggs.surge.sh/"}>
                <FacebookIcon
                  size={"3rem"}
                  round={'true'}
                />
              </FacebookShareButton>
            </div>

            <div className='share email-share'>
              <EmailShareButton
              quote={`I will surive ${tpResult} days of toilet paper and 
                      ${eggResult} days of eggs! How about you?`}
              url={"http://how-much-tp-eggs.surge.sh/"}>
                <EmailIcon
                  size={"3rem"}
                  round={'true'}
                />
              </EmailShareButton>
            </div>

            <div className='share twitter-share'>
              <TwitterShareButton
              quote={`I will surive ${tpResult} days of toilet paper and 
                      ${eggResult} days of eggs! How about you?`}
              url={"http://how-much-tp-eggs.surge.sh/"}>
                <TwitterIcon
                  size={"3rem"}
                  round={'true'}
                />
              </TwitterShareButton>
            </div>

            <div className='share line-share'>
              <LineShareButton
              quote={`I will surive ${tpResult} days of toilet paper and 
                      ${eggResult} days of eggs! How about you?`}
              url={"http://how-much-tp-eggs.surge.sh/"}>
                <LineIcon
                  size={"3rem"}
                  round={'true'}
                />
              </LineShareButton>
            </div>

            <div className='share linkedin-share'>
              <LinkedinShareButton
              quote={`I will surive ${tpResult} days of toilet paper and 
                      ${eggResult} days of eggs! How about you?`}
              url={"http://how-much-tp-eggs.surge.sh/"}>
                <LinkedinIcon
                  size={"3rem"}
                  round={'true'}
                />
              </LinkedinShareButton>
            </div>

            <div className='share reddit-share'>
              <RedditShareButton
              quote={`I will surive ${tpResult} days of toilet paper and 
                      ${eggResult} days of eggs! How about you?`}
              url={"http://how-much-tp-eggs.surge.sh/"}>
                <RedditIcon
                  size={"3rem"}
                  round={'true'}
                />
              </RedditShareButton>
            </div>
             
            <div className='share whatsapp-share'>
              <WhatsappShareButton
              quote={`I will surive ${tpResult} days of toilet paper and 
                      ${eggResult} days of eggs! How about you?`}
              url={"http://how-much-tp-eggs.surge.sh/"}>
                <WhatsappIcon
                  size={"3rem"}
                  round={'true'}
                />
              </WhatsappShareButton>
            </div>

            <div className='share weibo-share'>
              <WeiboShareButton
              quote={`I will surive ${tpResult} days of toilet paper and 
                      ${eggResult} days of eggs! How about you?`}
              url={"http://how-much-tp-eggs.surge.sh/"}>
                <WeiboIcon
                  size={"3rem"}
                  round={'true'}
                />
              </WeiboShareButton>
            </div>
          </div>
        </div>
        <div className='footer'>
          <a href='https://www.cdc.gov/coronavirus/2019-ncov/index.html'
            target='_blank'>Learn more about COVID-19 from the CDC</a>
            <hr/>
            <p>&copy; 2020 FatPikachu. &nbsp;
              <a className='privacy-policy' href="https://www.privacypolicies.com/privacy/view/844b623acee015748cc7a0703be387f4"
              target="_blank">
                Privacy Policy
              </a>
              &nbsp; All rights reserved. </p>
        </div>
      </div>
    </React.Fragment>
    );
  }
}

export default App;
