import React, { useState,  useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import bag from '../../assets/Black White Minimalist Letter MC Logo.gif'
import trash from '../../assets/trash.svg'

import { Containeir, Image, ContaineirItens, H1,  Button, User } from "./styles"



const Order = () => {


  const [requests, setrequests] = useState([]);
  const navigate = useNavigate()
 

  

  useEffect(() => {

    async function fetchOrder() {

      

      const { data: newOrder } = await axios.get("http://localhost:3001/order")

      setrequests(newOrder)

        console.log(newOrder)
    }

    fetchOrder()
  }, [])


  async function deleteOrder(orderid) {

    await axios.delete(`http://localhost:3001/order/${orderid}`)

    const newOrder = requests.filter(order => order.id !== orderid)

    setrequests(newOrder)

    console.log(newOrder)



  }

  function goBackPage(){

    navigate("/")
  }

  return (

    <Containeir>
      <Image alt="logo-image" src={bag} />

      <ContaineirItens>

      <H1>Pedido Pronto!</H1>
    
        <ul>
        
          {requests.map((order) => (
            <User key={order.id}>
              <li>
              <p>{order.orde}</p> 
              <p>{order.clientName}</p>
              </li>
              <button onClick={() => deleteOrder(order.id)}><img src={trash} alt="lata-lixo" /></button>
            </User>
          ))}
          
        </ul>

        <Button onClick={goBackPage}>Voltar</Button>

      
      </ContaineirItens>

    </Containeir>
  )


}

export default Order ;
