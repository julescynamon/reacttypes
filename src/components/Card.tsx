interface IProps {
    facturation: number;
    className?: string;
}

export default function Card(props: IProps) {
    const facturation = ['7 €', '3 €', 'Abonnez-vous!!!'];
    return (
        <div className={props.className}>
            <h2>Prix "à la tête du client" !</h2>
            <p>{facturation[props.facturation]}</p>
        </div>
    );
}
