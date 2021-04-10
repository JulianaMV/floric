import React from 'react'
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import flowersThunks from '../redux/thunks/flowersThunk'
import localActions from '../redux/actions/localActions'
import '../index.scss';



console.log('v1')

export default function Flowersline(){

const dispatch = useDispatch();

const flowers = useSelector((state)=> state.flowers);

useEffect(()=>{
    dispatch(flowersThunks.loadFlowers())
},[dispatch])

    return(
        <div className='contentline'>
            <div className='options'>
            {flowers.map(item =>(
                <div key={item.id} className='itens'>
                    <p>{item.title}
                    {'   '}
                     R$ {item.price}
                     <button className='buttonitem'
                    onClick={()=> dispatch(localActions.add(item))}
                    >Add</button>
                     </p>

                </div>
            ))}
            </div>
        </div>
    )
}
