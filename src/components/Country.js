import React from 'react';
import { useParams } from 'react-router';

export default function Country() {
  let test = useParams();
  console.log(test);

  return (
    <div>
      This is a country page
    </div>
  )
}
