import { useState } from 'react';

interface IProps {
    data: string[];
    onClick?: (index: number) => {} | void;
    selected?: number;
    className?: string;
}

export default function Nav(props: IProps) {
    const [activeIndex, setActiveIndex] = useState(props.selected);
    const handleToogle = (index: number) => {
        setActiveIndex(index);
    };
    const liElms = props.data.map((item, index) => (
        <li
            className={index === activeIndex ? 'active' : ''}
            key={index}
            onClick={() => {
                handleToogle(index);
                if (props.onClick) {
                    props.onClick(index);
                }
            }}
        >
            <a href="#">{item}</a>
        </li>
    ));
    return <ul className={props.className}>{liElms}</ul>;
}
