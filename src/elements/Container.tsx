import styled from 'styled-components';

type BoxProps = {
  children: React.ReactNode; 
};

const Container = (props: BoxProps) => {
  return (
    <ContainerWraper {...props} />
  )
}

const ContainerWraper = styled.div`
  max-width: 1100px;
  padding: 0 20px;
  margin: 0 auto;
`

export default Container