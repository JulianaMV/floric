import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import buqueActions from '../redux/actions/buqueActions'
import Flowersline from '../components/flowersline'
import localActions from '../redux/actions/localActions'
import Header from '../components/header/header'
import '../index.scss';




 const Buque = () => {



    const [buqueName, setBuqueName]= useState();
    const dispatch = useDispatch();
    const buque = useSelector(state=> state.local.filter(item => {
        return item.qty>0
    }));
    const  qtdTot = useSelector(state => 
        state.local.reduce((acc, cur)=> acc + cur.qty,0));
    
    const ValueTot = useSelector((state) =>
        state.local.reduce((acc, cur)=>
        acc+cur.price*cur.qty
    ,0));
    
        console.log(buque)

    const buqueCreate = () =>{
        const newBuque = {
            title: buqueName,
            flowers: buque.map(flower=> {
                return {flower: flower._id, qtd: flower.qty}
            })

        }
        dispatch(buqueActions.add(newBuque))
     }
    return(
        <>
        <Header/>
        <div className='buq'>
            <h1 className='title'>Criar Buque</h1>
            <Flowersline/>
            <table className='table'>
                <tbody>
                    {buque.map((item)=>(
                        <tr key={item._id}>
                            <td>{item.title}</td>
                            <td> R$ {item.price.toFixed(2) * item.qty}</td>
                            <td>
                                <button onClick={()=> dispatch(localActions.add(item))}>+</button> 
                                {item.qty}
                                <button onClick={()=> dispatch(localActions.remove(item))}>-</button> 
                            </td>
                         </tr>
                     ))}
                 </tbody>
            </table>

            <h4 className='h4'> Qtd total: {qtdTot}
            <button onClick={()=> dispatch(localActions.clear())}>
                LIMPAR
            </button>
            </h4>
            <h3> valor total: R$ {ValueTot.toFixed(2)}</h3>
            <button onClick={buqueCreate}>
                Novo Buque
            </button>
            <input placeholder="Nome"
                     required 
                     name="buque"
                     className="form-control"
                     onChange={e=> setBuqueName(e.target.value)}
            ></input>
        </div>
        </>
    )
}

export default  Buque;