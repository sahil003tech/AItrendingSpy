import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { BsArrowRightShort } from 'react-icons/bs'


const Section1Stratergy = () => {
  return (
    <div className='' style={{ backgroundColor: '#E3E2F8' }}>
      <div className='col-sm-9 col-11  mx-auto'>
      <div className='pb-5 mx-3' style={{  paddingTop:'100px' }} >
        <div className='row col-12 d-flex justify-content-center '>
          <div className='col-xxl-6 px-0' style={{ marginRight: '0px' }}>
            <h6 className='px-3' style={{ color: '#BD10E0' }}>STUDIO TO BUILD AND EXECUTE</h6>
            <h1 style={{ color: 'black', borderLeft: '2px solid #BD10E0' }} className=' display-4 fw-bolder my-3 px-2 col-9 '>Strategist Studio automate your trading strategies</h1>
            <p className='my-3 px-3' style={{ color: 'black', fontWeight: '100' }}>Designed with the expert trader in mind, Strategist Studio enables you to automate your well-honed trading strategies using our sophisticated tools and skilled team of developers.</p>
          </div>
          <div className='col-xxl-6  d-flex justify-content-xxl-end justify-content-center my-3' style={{ marginRight: '0px' }}>
            <img style={{ width: '100%', maxWidth:'500px' }}  src="https://cdn.builder.io/api/v1/image/assets%2Fccc0df0d3e6f4b5e827d356845fdfc11%2Fb2c9116bc0f146b287419a7c4055c17e" alt="circle" />
          </div>
        </div>
      </div>

      <div className='row mx-1' style={{ marginTop:'50px'  }}>
        <h1 id='strath' style={{ color: 'black', borderLeft: '2px solid #BD10E0' }} className='px-2'>Trading Strategy Made Simple</h1>
        <p style={{ color: 'black' }} className='col-sm-8 col-11 my-3'>Strategist Studio is an intuitive interface where you can precisely define your trading strategy. Our cutting-edge system translates these parameters into an automated algorithm, creating a customized AI model that mirrors your trading style, be it focused on day-trading, swing-trading, or long-term investing.</p>
      </div>
      <div className='row px-3' style={{ }}>
        <div className='col-xxl-6 col-sm-9 col-11 my-5'>
          <h3 className='mb-4' style={{ color: '#BD10E0' }}>Expert Support To Help Build Your Trading Strategies</h3>
          <p style={{ color: 'black' }}>With the help of our expert developers, you can fine-tune your algorithm, ensuring that it operates with the accuracy and efficiency you expect. We support you every step of the way, ensuring that the transition from manual strategy to automated precision is seamless and hassle-free.</p>
          <ul >
          <p className='   break-words text-start mb-0 ' style={{ color:'black' }}><AiFillCheckCircle className='me-2 mb-1'  style={{ color: '#D3C5F3' }} />Turn knowledge and experience into trading strategy</p>
          <p className='   break-words text-start mb-0 ' style={{ color:'black' }}><AiFillCheckCircle className='me-2 mb-1'  style={{ color: '#D3C5F3' }} />Get support from AITradingSpy team to develop it</p>
          <p className='   break-words text-start mb-0 ' style={{ color:'black' }}><AiFillCheckCircle className='me-2 mb-1'  style={{ color: '#D3C5F3' }} />Support from experienced traders and developers</p>
          <p className='   break-words text-start mb-0 ' style={{ color:'black' }}><AiFillCheckCircle className='me-2 mb-1'  style={{ color: '#D3C5F3' }} />Monetize your knowledge</p>
          </ul>
        </div>
        <div className='col-xxl-6 col-sm-9 col-11 my-5'>
          <h3 className='mb-4' style={{ color: '#BD10E0' }}>Generate Income From Your Trading Strategies</h3>
          <p style={{ color: 'black' }}>But the benefits of Strategist Studio don’t end with automation. It’s also a platform for passive income generation. With your consent, we give other traders on AITradingSpy the opportunity to subscribe to your automated strategy on a monthly basis. You set the subscription fee, providing a new income stream for you, and a wealth of strategic options for them.</p>
          <p style={{ color: 'black' }}>In this way, AITradingSpy serves as a bridge, linking experienced traders with those eager to benefit from their expertise. It’s a win-win situation: novice traders can access and learn from tried-and-true strategies, while experienced traders generate additional income from their expertise.</p>
        </div>

      </div>

      <div className='d-flex justify-content-center row mx-5 py-5' style={{  }}>
        <h3 style={{ color: '#BD10E0' }} className='text-center col-12'>Get started with Strategist Studio now</h3>
        <button type="button" style={{ backgroundColor: '#E9E8F9 ', boxShadow: '2px 2px lightgrey', width: '200px' }} className="btn my-3 text-center mx-auto rounded-pill">Request Early Access<BsArrowRightShort /></button>
      </div>
      </div>
    </div>
  )
}

export default Section1Stratergy