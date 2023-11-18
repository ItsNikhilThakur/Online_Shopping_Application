import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react';
import "../App.css";

const Header = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => setActiveItem(name);

let nav = useNavigate();

  const showRRP=()=>
  {
    nav("/RefundPolicy")
  }
  

  const home=()=>
  {
    nav("/")
  }
  const showCU=()=>
  {
    nav("/ContactUs")
  }
  const ShowLoginP=()=>
  {
    nav("/LoginP")
  }
  
 
  
  
  return (
    // <div style={{backgroundColor: 'black'}}>
    <Menu secondary>
        <Menu.Item>
          <img alt="logo" src='../logo.jpg' />
        </Menu.Item>

        
      
      <Menu.Item 
        name='home'
        active={activeItem === 'home'}
        onClick={home}
      />
      

      <Menu.Item
        name='WhatsNew'
        active={activeItem === 'WhatsNew'}
        onClick={handleItemClick}
      />

        <Menu.Item
        name='Return-Refund Policy'
        active={activeItem === 'Return-Refund Policy'}
        onClick={showRRP}
         />

        <Menu.Item
        name='Contact Us'
        active={activeItem === 'Contact Us'}
        onClick={showCU}
         />
        

        {/* <Menu.Item>
        <Dropdown item text='Categories'>
            <Dropdown.Menu>
              <Dropdown.Item>Backpacks</Dropdown.Item>
              <Dropdown.Item>Purse</Dropdown.Item>
              <Dropdown.Item>Travel</Dropdown.Item>
              <Dropdown.Item>Wallets</Dropdown.Item>
              <Dropdown.Item>Office Bags</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item> */}


      <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Login'
          active={activeItem === 'Login'}
          onClick={ShowLoginP}
        />
        <Menu.Item
          name='Cart'
          active={activeItem === 'Cart'}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
    
    // </div>
  )
}

export default Header;
