import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css"

export const ItemDetail = ({ name, description, img, price, stock, age, size, brand, weigth, med,}) => {
   
    const onAdd = (items) => { 
        alert(`Se agregaron ${items} al carrito`)
     }

  return (
    <div className="border">
      <div className="car">
        <div className="card-body ">
          <img className="fot" src={img} alt="" />
          <h3 className="card-title">{name}</h3>
          <div className="card-tex">
          <p><b>Descripción</b></p>
          <p> {description} </p>
          <p><b>Edad:</b> {age} </p>
          <p><b>Tamaño:</b> {size} </p>
          <p><b>Marca:</b> {brand} </p>
          <p><b>Peso del Producto:</b> {weigth} </p>
          <p><b>Producto Medicado:</b> {med} </p>
          </div>
          <p><b>Precio:</b> $ {price} </p>
          <ItemCount stock={stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};