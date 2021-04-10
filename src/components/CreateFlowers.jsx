import React, { useState} from "react";
import 'regenerator-runtime/runtime'
import { useDispatch} from 'react-redux'
import flowerActions from '../redux/actions/flowerActions'
import '../index.scss';

const CreateFlowers = () => {
    
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();
    const dispatch = useDispatch();
    console.log(image);

    async function handleFlower (e) {
        e.preventDefault();
        try{
            await dispatch(flowerActions.add({title,price,image}))
            setTitle()
            setPrice()
            setImage()
            
        }catch (error){
            console.error(error);
        }

    }

    return(
        <div className='con'>

            <h1 className="title">Adicionar Flores</h1>
            <div className="cont" >
            <div className="formdiv">
            <form className='formm'>
                    <input 
                    required
                     type="text" 
                     name="title"
                     id="title"
                     className="form-control"
                     placeholder="Flor" 
                     onChange={e=> setTitle(e.target.value)}
                    />
                    <input
                    required
                     type="number" 
                     name="price"
                     id="price"
                     className="form-control"
                     placeholder="Preço" 
                     onChange={e=> setPrice(e.target.value)}
                    />
                    <input
                     required
                     type="file" 
                     name="image"
                     id="image"
                     className="form-control-file"
                     placeholder="Img"
                     onChange={e=> setImage(e.target.value)}
                      
                    />
                    <button type="submit" 
                    onClick={handleFlower}>Criar flor</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateFlowers;
