import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUserInfoAction} from "../../redux/actions";
import {useParams} from "react-router-dom";

const Card = () => {
    const dispatch = useDispatch()
    const {id}= useParams()
    const card=useSelector((state)=>state.usersReducer.user_one);


    useEffect(() => {
       dispatch(getUserInfoAction(id))
     }, [dispatch, id]);
    console.log(card)

    return (
       <>
        <h1>{card.name}</h1>
         <p>{card.email}</p>
          <p>{card.username}</p>
             <p>{card.address.street}</p>
       </>
    );
};

export default Card;

