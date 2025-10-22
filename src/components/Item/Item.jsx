import './Item.css';

export const Item = ({name, price, description, imageUrl, children}) => {
    return ( 
    <article className="product item">
        <img src={imageUrl} alt={name} />
        <h2 className="product-title">{name}</h2>
        <p>Precio: ${price}</p>
        <p>Descripcion: {description}</p>
        {children}
    </article>
    );
};