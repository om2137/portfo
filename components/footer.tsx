import React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import { styled, Theme } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles'




export default function Footer() {
  

  return (
    <>
    <div className="flex w-full flex-1 flex-col ">
          <div className="flex justify-center items-center rounded-b-lg  py-6 xl:py-8 bg-slate-800 xl:px-20">
            <span className="text-center text-4xl font-semibold text-white">Thank you for visiting my website!</span>
          </div>
      </div>
    </>
  )
}

