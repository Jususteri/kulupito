import ItemForm from '../../components/itemfrom';
import styles from './additem.module.scss';


function AddItem(props) {
    return (
        <div>
            <h2>Uuden merkinnän lisääminen otsikoksi
            </h2>
            <ItemForm onItemSubmit={props.onItemSubmit} />
        </div>
    );
}

export default AddItem;