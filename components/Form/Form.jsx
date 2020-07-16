import styled from '@emotion/styled';

export const Form = styled.form`
    max-width: 600px;
    width: 95%;
    padding: 1rem;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 768px){
        height: 200px;
        margin-top: 4rem;
    }
`

export const FormTitle = styled.h1`
    margin-top: 0;
    text-align: center;
    font-size: 2rem;
`
export const Fields = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;

    label{
        flex: 0 1 100%;
        margin-bottom: 2px;
    }

    input{
        flex: 1;
        border: 1px solid #e1e1e1;
        border-radius: 3px;
        padding: .6rem;
    }
`

export const Submit = styled.button`
    width: 100%;
    border: none;
    border-radius: 3px;
    padding: .6rem;
`

export const Button = styled.button`
    padding: .5rem;
    border: none;
    border-radius: 3px;
`