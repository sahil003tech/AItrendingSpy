import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

const Section1Stratergy = () => {
  return (
    <div style={{ backgroundColor: "#E3E2F8" }}>
      <div style={{ height: "600px", width: "100vw", padding: "100px" }}>
        <div className="row d-flex justify-content-center">
          <div className="col-5 " style={{ marginRight: "0px" }}>
            <h5 style={{ color: "blue" }}>STUDIO TO BUILD AND EXECUTE</h5>
            <h1
              style={{ color: "black", borderLeft: "2px solid blue" }}
              className="text-uppercase fw-bolder my-3 px-2 col-9 "
            >
              Strategist Studio automate your trading strategies
            </h1>
            <p className="my-3" style={{ color: "black" }}>
              Designed with the expert trader in mind, Strategist Studio enables
              you to automate your well-honed trading strategies using our
              sophisticated tools and skilled team of developers.
            </p>
          </div>
          <div
            className="col-5 d-flex justify-content-end"
            style={{ width: "50vw", marginRight: "0px" }}
          >
            <img
              style={{ width: "30vw" }}
              src="https://cdn.builder.io/api/v1/image/assets%2Fccc0df0d3e6f4b5e827d356845fdfc11%2Fb2c9116bc0f146b287419a7c4055c17e"
              alt="circle"
            />
          </div>
        </div>
        {/* <div className='row col-lg-10 col-12 my-5'>
        <div className='col-lg-6 col-12'>
<img src="https://cdn.builder.io/api/v1/image/assets%2Fccc0df0d3e6f4b5e827d356845fdfc11%2Fb2c9116bc0f146b287419a7c4055c17e" style={{ width:'100%', height:'100%'}} alt="loading"/>
        </div>
        <div className='col-lg-6 col-12'>
        <h1 className=' col-12 d-flex justify-content-center justify-content-lg-start container text-center text-lg-start mt-4 mb-4' style={{ color: '#FFFFFF' }}> </h1>    
    <h1 className='fw-bolder col-12 d-flex justify-content-center justify-content-lg-start container text-center text-lg-start  mb-4' style={{ color: '#FFFFFF' }}>Share your AI chatbot</h1>
    <p className=' col-12 d-flex justify-content-center justify-content-lg-start container text-center text-lg-start  mb-4' style={{ color: '#FFFFFF' }}>One-click to share with friends, embed on your website, or create a chat bubble</p>
        </div>
    

        </div> */}
      </div>

      <div className="row " style={{ padding: "100px" }}>
        <h3 style={{ color: "black", borderLeft: "2px solid blue" }}>
          Trading Strategy Made Simple
        </h3>
        <p style={{ color: "black" }} className="col-8 my-3">
          Strategist Studio is an intuitive interface where you can precisely
          define your trading strategy. Our cutting-edge system translates these
          parameters into an automated algorithm, creating a customized AI model
          that mirrors your trading style, be it focused on day-trading,
          swing-trading, or long-term investing.
        </p>
      </div>
      <div
        className="row "
        style={{ paddingLeft: "100px", paddingRight: "100px" }}
      >
        <div className="col-6">
          <h3 style={{ color: "blue" }}>
            Expert Support To Help Build Your Trading Strategies
          </h3>
          <p style={{ color: "black" }}>
            With the help of our expert developers, you can fine-tune your
            algorithm, ensuring that it operates with the accuracy and
            efficiency you expect. We support you every step of the way,
            ensuring that the transition from manual strategy to automated
            precision is seamless and hassle-free.
          </p>
          <ul>
            <li style={{ color: "black" }}>
              <AiFillCheckCircle
                className="mt-3"
                style={{ color: "#D3C5F3" }}
              />
              Turn knowledge and experience into trading strategy
            </li>
            <li style={{ color: "black" }}>
              <AiFillCheckCircle
                className="mt-3"
                style={{ color: "#D3C5F3" }}
              />
              Get support from AITradingSpy team to develop it
            </li>
            <li style={{ color: "black" }}>
              <AiFillCheckCircle
                className="mt-3"
                style={{ color: "#D3C5F3" }}
              />
              Support from experienced traders and developers
            </li>
            <li style={{ color: "black" }}>
              <AiFillCheckCircle
                className="mt-3"
                style={{ color: "#D3C5F3" }}
              />
              Monetize your knowledge
            </li>
          </ul>
        </div>
        <div className="col-6">
          <h3 style={{ color: "blue" }}>
            Generate Income From Your Trading Strategies
          </h3>
          <p style={{ color: "black" }}>
            But the benefits of Strategist Studio don’t end with automation.
            It’s also a platform for passive income generation. With your
            consent, we give other traders on AITradingSpy the opportunity to
            subscribe to your automated strategy on a monthly basis. You set the
            subscription fee, providing a new income stream for you, and a
            wealth of strategic options for them.
          </p>
          <p style={{ color: "black" }}>
            In this way, AITradingSpy serves as a bridge, linking experienced
            traders with those eager to benefit from their expertise. It’s a
            win-win situation: novice traders can access and learn from
            tried-and-true strategies, while experienced traders generate
            additional income from their expertise.
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center row mx-5 py-5" style={{}}>
        <h3 style={{ color: "#BD10E0" }} className="text-center col-12">
          Get started with Strategist Studio now
        </h3>
        <button
          type="button"
          style={{
            backgroundColor: "#E9E8F9 ",
            boxShadow: "2px 2px lightgrey",
            width: "200px",
          }}
          className="btn my-3 text-center mx-auto rounded-pill"
        >
          Request Early Access
          <BsArrowRightShort />
        </button>
      </div>
    </div>
  );
};

export default Section1Stratergy;
