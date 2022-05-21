import styles from './itemform.module.scss';
import useForm from '../../shared/useform/useform';
import Button from  '../../shared/uibuttons';
import {useHistory} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


function ItemForm(props) {

    const history = useHistory();

    const submit = () =>  {
    let storedvalues = Object.assign({}, values);
    storedvalues.amount = parseFloat(storedvalues.amount);
    storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
    props.onItemSubmit(storedvalues);
    history.push("/");
    history.go();
    }

    const initialState = {

        type: "",
        amount: 0,
        paymentDate: "",
        periodStart: "",
        periodEnd: "",
        receiver: ""
    };

    const {values, handleChange, handleSubmit} = useForm(submit, initialState, false);

    const handleCancel = (event) => {
        event.preventDefault();
        history.goBack();

    }

    return ( 
    <div>
     <form onSubmit={handleSubmit}>
        <div className={styles.form}>
            <div className={styles.form_row}>
                <div>
                    <label htmlFor="type">Kulutyyppi</label>
                    <select name="type" onChange={handleChange} value={values.type}>
                        <option value="Sähkö">Sähkö</option>
                        <option value="Vesi">Vesi</option>
                    </select>
                </div>
            </div>
                <div>
                <div className={styles.form_row}>
                    <div>
                    <label htmlFor="amount">Summa</label>
                    <input type="number" name="amount" step="0.01" 
                   onChange={handleChange} value={values.amount} />
                    </div>
                <div>
                    <label htmlFor="paymentDate">Maksupäivä</label>
                    <input type="date" name="paymentDate" 
                   onChange={handleChange} value={values.paymentDate} />
                </div> 
                </div>
        </div> 
        
        <div className={styles.form_row}>
                <div>
                    <label htmlFor="periodStart">Laskutuskauden alku</label>
                    <input type="date" name="periodStart" 
                    onChange={handleChange} value={values.periodStart}/>
                </div>
                <div>
                    <label htmlFor="periodEnd">Laskutuskauden loppu</label>
                    <input type="date" name="periodEnd" 
                   onChange={handleChange} value={values.periodEnd} />
                </div> 
                </div> 
                <div className={styles.form_row}>
                <div>
                    <label htmlFor="receiver">Saaja</label>
                    <input type="text" name="receiver" 
                   onChange={handleChange} value={values.receiver} />
                </div>    
                </div>  
                <div className={styles.form_row}>
                <div>
                    <Button onClick={handleCancel}>Peruuta</Button>
                </div> 
                <div>
                    <Button primary type="submit">Lisää</Button>
                </div> 
                </div> 
                </div> 
      </form>       
    </div>
   

    );
}

export default ItemForm;