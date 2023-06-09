import React from "react";
import { useCart } from "react-use-cart";
import styled from "styled-components";

const Card = styled.div`
  width: 250px;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  object-fit: cover;
  height: 200px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Content = styled.div`
  padding: 16px;
  text-align: center;
`;

const Title = styled.h5`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

const Description = styled.p`
  margin: 8px 0;
  font-size: 16px;
  color: #6c757d;
`;

const Price = styled.p`
  margin: 8px 0;
  font-size: 20px;
  font-weight: bold;
`;

const Button = styled.button`
  display: block;
  margin: 16px auto 0;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #ffc107;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #ff9800;
  }
`;

function Itemcard(props) {
  const { addItem } = useCart();
  return (
    <div className="col-sm-6 col-md-4 mb-4">
      <Card>
        <Image src={props.img} alt="" />
        <Content>
          <Title>{props.title}</Title>
          <Description>{props.desc}</Description>
          <Price>N{props.price}</Price>
          <Button onClick={() => addItem(props.item)}>Add to Cart</Button>
        </Content>
      </Card>
    </div>
  );
}

export default Itemcard;
