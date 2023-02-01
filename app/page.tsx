'use client'

import TextField from '@mui/material/TextField';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import graphImage from 'public/graph-snake.svg'
import useTweetStore from './tweetStore';
import { FormEvent } from 'react';

export default function Home() {


  const setUserName = useTweetStore(state => state.setUsername)
  const userName = useTweetStore(state => state.username)

  console.log(userName)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }


  return (
    <div className="h-screen bg-[#120d31] flex flex-col items-center justify-center px-5 gap-10">
      <div className='flex flex-col items-center justify-center text-center gap-3 max-w-[50em]'>
        <h3 className='uppercase tracking-widest text-sm '>smaller text here</h3>
        <h1 className='text-4xl md:text-5xl text-[#e4e2ec] font-semibold' >Lorem ipsum dolor sit amet.</h1>
        <p className='text-[14px] text-[#9b94c6]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reiciendis voluptatum modi ratione repudiandae asperiores, nam accusamus ea amet odit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='flex items-center justify-center gap-2 h-full'>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={e => setUserName(e.target.value)}
            sx={{
              border: '1px solid #274060',
              borderRadius: '10px',
              input: { color: 'white' },
              label: { color: 'white', letterSpacing: '2px' }
            }}
          />
          <div className='bg-[#3d348b] h-full flex items-center justify-center rounded-lg px-4 cursor-pointer'>
            <ArrowForwardIosIcon style={{ color: 'white' }} />
          </div>
        </div>
      </form >

      <Image src={graphImage} alt="graph_img" className='w-full md:w-[90%]' />
    </div >
  );
}
