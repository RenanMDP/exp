import { ReactNode } from 'react';
import './Card.css';

interface CardType {
  className: string;
  children: ReactNode;
}

export default function Card({ children, className }: CardType) {
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>;
}
