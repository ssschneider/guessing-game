import styled from "styled-components";

export const AppWrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Wrapper = styled.section`
    width: 100%;
    max-width: 74rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 8rem 0 2rem;

    @media (max-width: 710px) {
        margin-top: 20rem;
        padding: 4rem 1.2rem;
    }
`

export const BtnsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2.4rem;
    
    @media (max-width: 710px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`