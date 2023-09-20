import React from 'react'
import Container from '../../elements/Container'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterSection>
        <Container>
            <FooterWrapper>
                <div>&#169; 2023 All rights reserved</div>
            </FooterWrapper>
        </Container>
    </FooterSection>
  )
}

const FooterSection = styled.section`
    background-color: ${({theme}) => theme.headerColor};
    padding: 20px 0;
    margin-top: auto;
`
const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export default Footer