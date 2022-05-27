import React from 'react';
export interface IPageProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
}
export declare const Button: React.FunctionComponent<IPageProps>;
