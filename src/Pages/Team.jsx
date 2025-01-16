import React from 'react'
import Profile from '../Components/Profile'

const Team = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-white text-4xl font-bold text-center tracking-widest'>Our Team</h1>
        <h2 className='text-white text-lg font-semibold text-center tracking-widest'>Core Team</h2>
        <div className="profiles grid grid-cols-2 gap-12 p-4 sm:grid-cols-3"> 
            <Profile name="Himani Bhattarai" position="Chairman" source="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/1fe78b11-cc7a-46d9-b5b8-92761b072ce3/width=1200/1fe78b11-cc7a-46d9-b5b8-92761b072ce3.jpeg"/>
            <Profile name="Krishna Thapa" position="Vice Chairman" source="https://i.pinimg.com/736x/45/f1/98/45f198fd70f65b6ceb4f9b50cb571433.jpg"/>
            <Profile name="Himani Bhattarai" position="Chairman" source="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/1fe78b11-cc7a-46d9-b5b8-92761b072ce3/width=1200/1fe78b11-cc7a-46d9-b5b8-92761b072ce3.jpeg"/>
            <Profile name="Krishna Thapa" position="Vice Chairman" source="https://i.pinimg.com/736x/45/f1/98/45f198fd70f65b6ceb4f9b50cb571433.jpg"/>
            <Profile name="Himani Bhattarai" position="Chairman" source="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/1fe78b11-cc7a-46d9-b5b8-92761b072ce3/width=1200/1fe78b11-cc7a-46d9-b5b8-92761b072ce3.jpeg"/>
            <Profile name="Krishna Thapa" position="Vice Chairman" source="https://i.pinimg.com/736x/45/f1/98/45f198fd70f65b6ceb4f9b50cb571433.jpg"/>
        </div>
        <h1 className='text-white text-center text-xl font-semibold sm:text-2xl'>Organizing Comittee</h1>
        <div className="organizing-comittee grid grid-cols-2 gap-12 p-4 sm:grid-cols-4">
            <Profile name="Himani Bhattarai" position="Chairman" source="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/1fe78b11-cc7a-46d9-b5b8-92761b072ce3/width=1200/1fe78b11-cc7a-46d9-b5b8-92761b072ce3.jpeg"/>
            <Profile name="Krishna Thapa" position="Vice Chairman" source="https://i.pinimg.com/736x/45/f1/98/45f198fd70f65b6ceb4f9b50cb571433.jpg"/>
            <Profile name="Himani Bhattarai" position="Chairman" source="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/1fe78b11-cc7a-46d9-b5b8-92761b072ce3/width=1200/1fe78b11-cc7a-46d9-b5b8-92761b072ce3.jpeg"/>
            <Profile name="Krishna Thapa" position="Vice Chairman" source="https://i.pinimg.com/736x/45/f1/98/45f198fd70f65b6ceb4f9b50cb571433.jpg"/>
        </div>
    </div>
  )
}

export default Team