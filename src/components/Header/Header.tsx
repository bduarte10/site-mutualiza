import { Container } from '@mui/material'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import Link from 'next/link'
import { useState } from 'react'
import styles from './header.module.css'

export function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <header>
      <Container>
        <Stack
          sx={{ padding: '1rem 0' }}
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <h1>Logo</h1>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}>
            <Link href="/index">Home</Link>
            <Link href="#">Sobre</Link>
            <Link
              href="#"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>
              Serviços
            </Link>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>

            <Link href="#">Contato</Link>
          </Stack>
        </Stack>
      </Container>
    </header>
  )
}
