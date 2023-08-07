import React from 'react'
import optimize from '../../Images/optimize.jpg'
import {AiFillCheckCircle} from 'react-icons/ai'

const Section1optimizer = () => {
  return (
    <div style={{  backgroundColor: '#E3E2F8' }}>
    <div style={{height:'400px', width:'100vw', padding:'100px'}} >
    <div className='row d-flex justify-content-start'>
    <div className='col-7' style={{ marginRight:'0px'}}>
    <h5 style={{color:'blue'}}>OPTIMIZE YOUR TRADE</h5>
    <h1 style={{color:'black',  borderLeft:'2px solid blue' }} className='text-uppercase fw-bolder my-3 px-2 col-12 '> Evolve trading strategies by and optimize future trades</h1>
    <p className='my-3' style={{ color:'black'}}>Machine Learning turns your the risk reward ratio for your trades in your benefit</p>
    </div>
    </div>   
</div>

<div className='row d-flex justify-content-start ' style={{padding:'100px', paddingBottom:'30px'}} >
    <div className='col-7 ' style={{ marginRight:'0px'}}>
    <h5 style={{color:'blue'}}>Trade Optimizing For You</h5>
    <h1 style={{color:'black',  borderLeft:'2px solid blue' }} className='text-uppercase fw-bolder my-3 px-2 col-12 '> Use Machine Learning to support your trading</h1>
    <p className='my-3' style={{ color:'black'}}>The Trade Optimizer is powered by advanced machine learning algorithms that meticulously scrutinize your trading data in relation to market data. It delves into your historical trades, studying entry and exit points, duration, and the results of each trade. By cross-referencing this with comprehensive market data, it uncovers hidden trends and patterns that you might have missed.</p>
    </div>
    </div>
    
   
      <div className='row '  style={{ paddingLeft:'100px', paddingRight:'100px'}}>
        <div  className='col-6'>
        <h3 style={{color:'blue'}}>Trading CoPilot to optimize your trading journey</h3>
          <p style={{color:'black'}}>One of the crucial insights the Trade Optimizer provides is regarding optimal trade closure times. It performs a "what-if" analysis, demonstrating how closing a trade at a different point in time could have yielded better returns. Whether it’s recognizing a pattern where staying in a trade longer could have led to higher profits, or identifying instances where early profit-taking could have minimized losses, Trade Optimizer is there to provide you with informed suggestions.</p>
          <ul>
    <li><AiFillCheckCircle className='mt-3' style={{ color: '#D3C5F3' }} />Moving Averages:SMA, EMA, DEMA, T3, WMA
    </li>
    <li><AiFillCheckCircle className='mt-3' style={{ color: '#D3C5F3' }} />RSI</li>
    <li><AiFillCheckCircle className='mt-3' style={{ color: '#D3C5F3' }} />Bollinger Bands</li>
    <li><AiFillCheckCircle className='mt-3' style={{ color: '#D3C5F3' }} />Parabolic SAR</li>
    <li><AiFillCheckCircle className='mt-3' style={{ color: '#D3C5F3' }} />Average True Range</li>
    <li><AiFillCheckCircle className='mt-3' style={{ color: '#D3C5F3' }} />Aroon Oscillator</li>
    <li><AiFillCheckCircle className='mt-3' style={{ color: '#D3C5F3' }} />Stochastic Oscillator</li>
    <li><AiFillCheckCircle className='mt-3' style={{ color: '#D3C5F3' }} />Median Price</li>
    <li><AiFillCheckCircle className='mt-3' style={{ color: '#D3C5F3' }} />Stochastic Fast</li>
    <li><AiFillCheckCircle className='mt-3' style={{ color: '#D3C5F3' }} />Weighted Close Price</li>
    <li><AiFillCheckCircle className='mt-3' style={{ color: '#D3C5F3' }} />Linear Regression</li>
    <li><AiFillCheckCircle className='mt-3' style={{ color: '#D3C5F3' }} />...and more</li>
  </ul>
        </div>
        <div className='col-6'>
        <img style={{width:'40vw'}} src={optimize} alt="circle"/>





        </div>

      </div>

      <div className='row '  style={{padding:'100px', paddingTop:'30px'}}>
        <div  className='col-6'>
        <h3 style={{color:'blue'}}>Real Time Support With Trading</h3>
          <p style={{color:'black'}}>But the intelligence of AITradingSpy doesn't stop at post-trade analysis. Your CoPilot takes these insights and proactively applies them in real-time, guiding your decision-making in live trading situations. If you've left money on the table in the past, your CoPilot might suggest holding on to a trade a little longer. If your trading history shows a pattern of holding onto losing positions, the CoPilot might advise you to take profits early.</p>
          <ul>
    <li><AiFillCheckCircle className='mt-3' style={{ color: '#D3C5F3' }} />Understand Trading Style and Strategy
    </li>
    <li><AiFillCheckCircle className='mt-3' style={{ color: '#D3C5F3' }} />Trading History combined with indicators</li>
    <li><AiFillCheckCircle className='mt-3' style={{ color: '#D3C5F3' }} />Uniquely personalized for you</li>
    <li><AiFillCheckCircle className='mt-3' style={{ color: '#D3C5F3' }} />An AI CoPilot for your growth as trader</li>
  </ul>
        </div>
        <div className='col-6'>
        <h3 style={{color:'blue'}}>AI Trade Optimizer with advanced Machine Learning</h3>
          <p style={{color:'black'}}>Trade Optimizer is your constant trading companion, delivering valuable insights from your past to inform and improve your future trades. By integrating your personal trading history with comprehensive market data, it offers a learning experience tailored uniquely to you.</p>
          <p style={{color:'black'}}>With AITradingSpy's Trade Optimizer, you're not just learning from your past trades; you're shaping a smarter trading future. Let AITradingSpy be your co-pilot, guiding you towards more profitable trading decisions and a more prosperous trading journey.</p>
        </div>

      </div>

      {/* <div className='d-flex justify-content-center row mx-5' style={{ padding:'100px'}}>
        <h3 style={{ color:'blue'}} className='text-center col-12'>Try using technical indicators in your portfolio</h3>
        <p style={{ color:'black'}} className='text-center col-12'>Using technical indicators can be simple and easy with Pluto</p>
        
        <button type="button" style={{backgroundColor:'transparent ', border:'1px solid blue', width:'200px'}} className="btn my-3 text-center mx-auto rounded-pill">Request Early Access</button>
        </div> */}

</div>
  )
}

export default Section1optimizer