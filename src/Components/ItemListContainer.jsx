
import '../App.css'
export const ItemListContainer = ({ bienvenida, presentacion }) => {
    return (
        <>
        <div class="bien">
        <div class="cont" >
          <h1> {bienvenida} </h1>
          <p> {presentacion} </p>
        </div>
        </div>
        </>
      );
    };