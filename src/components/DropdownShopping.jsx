import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';
import ShoppingCartButton from './cartbutton';
import { useSelector } from "react-redux"
import CheckoutCard from './CheckoutCard';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const DropdownShopping = () => {

    const navigate = useNavigate()

    const cart = useSelector(state => state.cart)

    const toCartHandler = () => {
        console.log('ress')
        navigate('/checkout')
    }

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <div
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e)
          }}
        >
            
          {children}
        </div>
      ));

      const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
          const [value, setValue] = useState('');
          console.log('classname'
            , className)
          return (
            <div
              ref={ref}
              style={style}
              className={className}
              aria-labelledby={labeledBy}
            >
              <ul className="list-unstyled" style={{overflowY: "scroll", maxHeight: "300px",}}>
                
                {React.Children.toArray(children).filter(
                  (child) =>
                    !value || child.props.children.toLowerCase().startsWith(value),
                )}
              </ul>
              <div className='container'>
                <Button onClick={(e)=>{console.log('currently not wired')}}>Checkout</Button>
                <Button onClick={toCartHandler}>To Cart</Button>
              </div>
            </div>
          );
        },
      );

      // find a better way to add height
      const dropdownStyling = {
        right: "0px",
        maxHeight: "600px",
      }
    return (
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle}>
                <ShoppingCartButton />
            </Dropdown.Toggle>
            <Dropdown.Menu as={CustomMenu} style={dropdownStyling}>
                {
                    cart.map(item=><Dropdown.Item key={item.id} as={CheckoutCard}>{item}</Dropdown.Item>)
                }
                

            </Dropdown.Menu>
        </Dropdown> 

    )

}

export default DropdownShopping