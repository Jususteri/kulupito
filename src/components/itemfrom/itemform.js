import styles from './itemform.module.scss';
import useForm from '../shared/useform/useform';


function ItemForm(props) {
    return ( 
    <div>
     <form>
        <div className={styles.form}>
            <div className={styles.form_row}>
                <div>
                    <label htmlFor="type">Kulutyyppi</label>
                    <select name="type">
                        <option>Sähkö</option>
                        <option>Vesi</option>
                    </select>
                </div>
            </div>
                <div>
                <div className={styles.form_row}>
                    <div>
                    <label htmlFor="amount">Summa</label>
                    <input type="number" name="amount" step="0.01" />
                    </div>
                <div>
                    <label htmlFor="paymentDate">Maksupäivä</label>
                    <input type="date" name="paymentDate" />
                </div> 
                </div>
        </div> 
        
        <div className={styles.form_row}>
                <div>
                    <label htmlFor="periodStart">Laskutuskauden alku</label>
                    <input type="date" name="periodEnd" />
                </div>
                <div>
                    <label htmlFor="periodEnd">Laskutuskauden loppu</label>
                    <input type="date" name="periodEnd" />
                </div> 
                </div> 
                <div className={styles.form_row}>
                <div>
                    <label htmlFor="receiver">Saaja</label>
                    <input type="text" name="receiver" />
                </div>    
                </div>   
                </div> 
      </form>       
    </div>
   

    );
}

export default ItemForm;