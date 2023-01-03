import React from 'react'
import styled from 'styled-components';

const  LoadingText = styled.h1`

font-size: 1.5em;
text-align: center;
color: #002374;

`;

export default function Loading () {
  return <LoadingText>Loading...</LoadingText>
}