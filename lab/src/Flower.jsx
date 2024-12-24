import React from 'react';
import './Flower.css';

const Flower = () => {
  return (
    <div className='fullGroup'>
      <div className='boxGroup'>
        <div className='boxFace face1'></div>
        <div className='boxFace face1 in1'></div>
        <div className='boxFace face2 in2'></div>
        <div className='boxFace face2'></div>
        <div className='boxFace face3'></div>
        <div className='boxFace face3 in3'></div>
        <div className='boxFace face4'></div>
        <div className='boxFace face4 in4'></div>
        <div className='boxFace face5'></div>
        <div className='boxFace face5 in5'></div>
        <div className='treeGroup'>
          <div className='topStarGroup'>
            <div className='topStarCorner' style={{"--angle":"0deg"}}></div>
            <div className='topStarCorner' style={{"--angle":"70deg"}}></div>
            <div className='topStarCorner' style={{"--angle":"140deg"}}></div>
            <div className='topStarCorner' style={{"--angle":"220deg"}}></div>
            <div className='topStarCorner' style={{"--angle":"290deg"}}></div>
          </div>
          <div className='trunk'></div>
          <div className='leaveGroup' style={{"--up":"1"}}>
            <div className='leave' style={{"--scale":"1"}}></div>
          </div>
          <div className='leaveGroup' style={{"--up":"2"}}>
            <div className='leave' style={{"--scale":"0.85"}}></div>
          </div>
          <div className='leaveGroup' style={{"--up":"3"}}>
            <div className='leave' style={{"--scale":"0.7"}}></div>
          </div>
          <div className='ballGroup'>
            <div className='ball ball1'></div>
            <div className='ball ball2'></div>
            <div className='ball ball3'></div>
            <div className='ball ball4'></div>
            <div className='ball ball5'></div>
            <div className='ball ball6'></div>
            <div className='ball ball7'></div>
          </div>
        </div>
      </div>
      <div className='starGroup'>
        <div className='star star1'></div>
        <div className='star star2'></div>
        <div className='star star3'></div>
        <div className='star star4'></div>
        <div className='star star5'></div>
        <div className='star star6'></div>
        <div className='star star7'></div>
      </div>
      <div className='text text1'> Hover Me </div>
      <div className='text text2'> Merry Christmas! </div>
      <div className='text text3'> I love you Bum bum ❤️ </div>
    </div>
  );
};

export default Flower;
