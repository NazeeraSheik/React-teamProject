import React from 'react'
import Header from './Header';
import style1 from './style1.css';
import Footer from './Footer.jsx';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
export default function Home() {
    return (
        <div>
          <Header/>
          <br /> <br />
            <div className="App">
           
        <div className="container1">
           
          <div className="site_title">
            <h2>
              <br /> <br /><br/>
              <u> Hosting</u> &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;
              Web Hosting &nbsp;&nbsp;&nbsp;&nbsp; Business Hosting
              &nbsp;&nbsp;&nbsp;&nbsp; Reseller Hosting
            </h2>
       
            <div className="trust">
              <h1 className="web">
              <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trust your site
                to the world’s #1 web host.
              </h1>
              <br />
              <h3 className="best">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                - &nbsp;Industry-leading load times and best-in-class security{" "}
                <br />
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                - &nbsp;99.9% uptime and 30-day money-back guarantee1
                <br />
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                - &nbsp;Free, expert technical support, available 24/7
              </h3>
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;
              <Link to='/Pricing' className="button button2">See Our OnlineStore</Link>
            </div>
            <br /> <br /> <br /> <br />
          </div>
          <br /> <br /> <br /> <br />
          <br /> <br /> <br /> <br />
          <br /> <br /> <br /> <br />
          <br /> <br /> <br /> <br />
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
         
          <br /> <br /> <br /> <br />
          <br /> <br /> <br /> <br />
          <br /> <br />
          <div class="overlay"></div>
          <div className="deal">
            <div className="bgimg">
              <div className="middle">
                <p className="demo"></p>
                <button className="button button1">Check out!</button>
              </div>
              <img
                src="https://www.milesweb.in/blog/wp-content/uploads/2019/04/milesweb-summer-sale-2019.png"
                alt="Deal of the day"
                width="1352"
                height="500"
              />
            </div>
          </div>
          <br />
          <br />
          <br /> <br /> <br /> <br />
          <div className="dom">
            <h1 className="domain">
              <b>
                <mark className="perf">Find a perfect domain </mark>
              </b>
            </h1>
            <img
              src="https://www.saxonsit.com.au/blog/wp-content/uploads/2017/08/choosing-a-domain-name-696x348.png"
              alt="domains"
              width="900px"
              height="300px"
            />
            <div className="search-container">
              <form action="index.html">
                <input
                  className="sub"
                  type="text"
                  placeholder="Search.."
                  name="search"
                />
                <button className="bn" type="submit">
                  SEARCH<i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="host">
            <a href="https://www.websitebuilderexpert.com/building-websites/" />
            <img
              className="big"
              src="https://images.websitebuilderexpert.com/wp-content/uploads/2018/01/25134909/how_to_build_a_website.png"
              alt="web"
              width="350"
              height="500"
            />
            &nbsp;&nbsp;&nbsp;
            <a href="https://www.websitebuilderexpert.com/designing-websites/" />
            <img
              src="https://images.websitebuilderexpert.com/wp-content/uploads/2020/02/21023455/how-to-design-a-website.jpg"
              alt="web"
              width="350"
              height="500"
            />
            &nbsp;&nbsp;&nbsp;
            <a href="https://www.websitebuilderexpert.com/hosting-websites/" />
            <img
              src="https://images.websitebuilderexpert.com/wp-content/uploads/2018/10/How-to-Host-a-Website.png"
              alt="web"
              width="350"
              height="500"
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="feat">
            <div className="div1">
              &nbsp;&nbsp;Easy-to-use control panel:
              <br />
              &nbsp;&nbsp;Includes industry-standard cPanel to install <br />{" "}
              &nbsp;&nbsp;apps, manage backups and security.
            </div>
          </div>
          <br />
          <div className="feat1">
            <div className="div2">
              &nbsp;&nbsp;1-click install of over 150 free apps:
              <br />
              &nbsp; &nbsp;Get access to over 150 free apps to create CMS <br />
              &nbsp;&nbsp;sites forums and blogs through Installatron.
            </div>
          </div>
          <br />
          <div className="feat2">
            <div className="div3">
              &nbsp;&nbsp;24/7 network security:
              <br />
              &nbsp; &nbsp;Get peace of mind, knowing network security and
              <br />
              &nbsp;&nbsp;DDoS protection is monitored around the clock.
            </div>
          </div>
          <br />
          <div className="feat3">
            <div className="div4">
              &nbsp;&nbsp;Resources on-demand:
              <br />
              &nbsp;&nbsp;If you require more power for your site, seamlessly{" "}
              <br />
              &nbsp;&nbsp;increase your CPU/RAM, I/O and storage
            </div>
          </div>
          <br />
          <div className="feat5">
            <div className="div6">
              &nbsp;&nbsp;1-click domain name setup:
              <br />
              &nbsp;&nbsp; Linking your site to your domain name has never
              <br />
              &nbsp;&nbsp;been easier with this registered domain.
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="chat">
            <img
              src="https://www.scnsoft.com/_default_upload_bucket/customer-service-vs-customer-support.png"
              width="650"
              height="400"
            />
            <img
              src="https://blog.gemfind.com/hubfs/live%20chat.gif"
              alt="Smiley face"
              width="650"
              height="400"
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div>
            <p className="money">
              <mark className="day">30 day money-back guarantee </mark>
            </p>
            <p className="happy">
              If you are not happy with our services for whatever reason, we’ll
              refund your payment. No hassle, no risk.
            </p>
            <br />
            <br />
            <p className="btnn">
              <a href="index.html" className="button3" />
              <button className="button button3">Get Started!</button>
            </p>
          </div>
     <Footer/>
        </div>
      </div>
        </div>
    )
}
