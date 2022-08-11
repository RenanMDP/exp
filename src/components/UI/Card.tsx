import { ReactNode } from 'react';
import './Card.css';

interface CardProps {
  className: string;
  children: ReactNode;
}

export default function Card({ children, className }: CardProps) {
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>;
}
