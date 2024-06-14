import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import Logo from '../../assets/logo.svg'
import { Containeir, Image, ContaineirItens, H1, InputLabel, Input, Button,} from "./styles"




const Home = () => {

  const [requests, setrequests] = useState([]);
  const Inputorder = useRef();
  const Inputname = useRef();
  const Navigate = useNavigate()

  async function addOrder() {

   const { data: newOrder } = await axios.post("http://localhost:3001/order", {
     orde: Inputorder.current.value,
     clientName: Inputname.current.value

    })

    console.log(requests)

  
    setrequests([...requests, newOrder])

    Navigate('/pedido')
  }
  

  return (

    <Containeir>
      <Image alt="logo-image" src={Logo} />

      <ContaineirItens>

      <H1>Faça seu Pedido!</H1>
      
        <InputLabel>Pedido</InputLabel>
        <Input ref={Inputorder} placeholder="1 Coca-Cola, 1-X Salada"></Input>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={Inputname} placeholder="Steve Jobs" ></Input>

        <Button onClick={addOrder}>Novo Pedido</Button>

      </ContaineirItens>

    </Containeir>
  )


}

export default Home ;
