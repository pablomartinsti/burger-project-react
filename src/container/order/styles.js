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
export const H1 = styled.h1`
margin: 60px auto;
    

`

export const ContaineirItens = styled.div`
display: flex;
flex-direction: column;
min-height: calc(100vh - 330px);



`

export const Button = styled.button`
height: 50px;
background: red;
color: white;
font-size: 20px;
border: none;
border-radius: 10px;
width: 300px;
margin-bottom: 20px;


&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}

`

export const User = styled.li`

display: flex;
    justify-content: space-between;
    background: #ffffff59;
    font-size: 20px;
    align-items: center;
    height: 80px;
    line-height: 40px;
    padding: 20px;
    list-style-type: none;
    margin-bottom: 50px;


    img{
        
    }

`



