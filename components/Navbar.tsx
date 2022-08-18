import React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import { Paper, styled, SvgIcon, Theme } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles'


export const useStyles = makeStyles((theme: Theme) => ({
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "#24a83a",
      color: "white",
    }
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const StyledMenuItem = styled(MenuItem)(
    ` 
      &:hover, &.Mui-focusVisible {
        background-color: #63da77
      }`
  );
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="flex w-full flex-1 flex-col justify-top">
          <nav className="flex items-center justify-between rounded-b-lg border-b border-green-500 flex-between py-6 xl:py-8 bg-slate-800 xl:px-20">

            <div className="flex flex-col items-right flex-shrink-0 text-white mr-6 ml-10">
              <a className=" inline-block rounded  text-white text-6xl font-bluureg">Om Raut</a>
              {/* <span className='absolute inset-x-28 inset-y-8 text-lg text-green-400 font-bluureg pl-10'>Developer</span> */}
            </div>

            <div className='hidden md:flex '>

              <div className="w-full block flex- md:flex lg:items-center hidden lg:w-auto " id='menu'>
                <div className="text-sm font-bluureg lg:flex-">

                  <a className="inline-block text-2xl px-2 py-1 mr-2 rounded text-white mt-4 lg:inline-block lg:mt-0 "
                      href="#Projects"
                  >
                    Projects
                  </a>
                  
                  <a className="inline-block text-2xl px-2 py-1 mr-2 rounded text-white mt-4 lg:inline-block lg:mt-0 "
                    href='#Skills'
                  >
                    Skills
                  </a>

                  <a className="inline-block text-2xl px-2 py-1 mr-2 rounded text-white mt-4 lg:inline-block lg:mt-0 "
                    href='#Experience'
                  >
                    Experience
                  </a>

                  <a className="inline-block text-2xl px-2 py-1 mr-2 rounded text-white mt-4 lg:inline-block lg:mt-0 "
                      href="#Blog"
                  >
                    Blog
                  </a>

                </div>
                <div>
                  <a className="inline-block text-2xl font-bluureg px-2 py-1 mr-2 rounded text-white mt-4 lg:inline-block lg:mt-0 ">Resume</a>
                </div>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="!capitalize flex items-center px-3 py-2 border rounded text-green-300 border-green-300 hover:text-white hover:border-white"
              >
                <svg className="fill-current h-5 w-6 " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
              </button>
              
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  className={classes.menu}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <StyledMenuItem onClick={handleClose} >
                    <a href='#Projects'>Projects</a>
                  </StyledMenuItem>
                  <StyledMenuItem onClick={handleClose}>Experience</StyledMenuItem>
                  <StyledMenuItem onClick={handleClose}>
                  <a href='#blog'>Blog</a>
                  </StyledMenuItem>
                  <StyledMenuItem onClick={handleClose}>Resume</StyledMenuItem>
                </Menu>
              
              
            </div>
            
          </nav>
      </div>
  )
}


// import Button from '@mui/material/Button'
// import Menu from '@mui/material/Menu'
// import MenuItem from '@mui/material/MenuItem'
// import { useState } from 'react'

// export default function BasicMenu() {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
//   const open = Boolean(anchorEl)

//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget)
//   }

//   const handleClose = () => {
//     setAnchorEl(null)
//   }

//   return (
//     <div className="md:!hidden">
//       <Button
//         id="basic-button"
//         aria-controls={open ? 'basic-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//         className="!capitalize !text-white"
//       >
//         Browse
//       </Button>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         className="menu"
//         MenuListProps={{
//           'aria-labelledby': 'basic-button',
//         }}
//       >
//         <MenuItem onClick={handleClose}>Home</MenuItem>
//         <MenuItem onClick={handleClose}>TV Shows</MenuItem>
//         <MenuItem onClick={handleClose}>Movies</MenuItem>
//         <MenuItem onClick={handleClose}>New & Popular</MenuItem>
//         <MenuItem onClick={handleClose}>My List</MenuItem>
//       </Menu>
//     </div>
//   )
// }