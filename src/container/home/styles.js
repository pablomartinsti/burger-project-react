import styled from "styled-components";

export const Containeir = styled.div`
background : black;
color: white;
flex-direction: column;
display: flex;
align-items: center;
height: 100%;
min-height: 100vh;



`

export const Image = styled.img`
height: 300px;
margin-top: 30px;

`
export const ContaineirItens = styled.div`
display: flex;
flex-direction: column;
min-height: calc(100vh - 330px);


`
export const H1 = styled.h1`
    margin: 60px auto;

`
export const InputLabel = styled.p`
font-size: 20px;
font-weight: bold;
padding-left: 10px;
color:white
`

export const Input = styled.input`
width: 300px;
height: 50px;
 padding: 10px;
margin-bottom: 60px;
font-size:20px;
border:none;
border-radius: 10px;
font-weight: 600;
color: black;


`

export const Button = styled.button`
height: 50px;
background: red;
color: white;
font-size: 20px;
border: none;
border-radius: 10px;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}

`



