import React from 'react';
import DescriptionText from './styles'

interface DescriptionProps {
  description: string;
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
  return <DescriptionText>{description}</DescriptionText>;
};

export default Description;
