// import React from 'react'
// import {useSelector} from 'react-redux'
// import {useDispatch} from 'react-redux'
// import buqueActions from '../redux/actions/buqueActions'



// export default function Buque () {
//     const dispatch = useDispatch();
//     const buque = useSelector(state=> state.buque.filter(item => {
//         return item.qty>0
//     }));
//     const  qtdTot = useSelector(state => 
//         state.buque.reduce((acc, cur)=> acc + cur.qty,0));
    
//     const ValueTot = useSelector((state) =>
//         state.buque.reduce((acc, cur)=>
//         acc+cur.price*cur.qty
//     ,0));
    

//     return(
//         <div className='buq'>
//             <h1 className='title'>Buque</h1>
//             <table className='table'>
//                 <tbody>
//                     {buque.map((item)=>(
//                         <tr key={item._id}>
//                             <td>{item.title}</td>
//                             <td> R$ {item.price.toFixed(2) * item.qty}</td>
//                             <td>
//                                 <button onClick={()=> dispatch(buqueActions.add(item))}>+</button> 
//                                 {item.qty}
//                                 <button onClick={()=> dispatch(buqueActions.remove(item))}>-</button> 
//                             </td>
//                          </tr>
//                      ))}
//                  </tbody>
//             </table>

//             <h4 className='h4'> Qtd total: {qtdTot}
//             <button onClick={()=> dispatch(buqueActions.clear())}>
//                 LIMPAR
//             </button>
//             </h4>
//             <h3> valor total: R$ {ValueTot.toFixed(2)}</h3>
//         </div>
//     )
// }
