import { BsSun, BsFillMoonFill } from 'react-icons/bs'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks'
import { toggleTheme } from '../features/themeSlice';

const IconTheme = () => {
  const { darkTheme } = useAppSelector(state => state );
  const dispatch = useAppDispatch();

  return (
    <Icon onClick={() => dispatch(toggleTheme())}>
      {darkTheme && <BsSun/>}
      {!darkTheme && <BsFillMoonFill/>}
    </Icon>
  )
}

const Icon = styled.div`
  cursor: pointer;

  svg {
    font-size: 18px;
  }
`

export default IconTheme