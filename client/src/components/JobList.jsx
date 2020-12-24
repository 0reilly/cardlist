import React, {useContext, useEffect} from 'react'
import { useHistory } from "react-router-dom"
import RestaurantFinder from "../apis/RestaurantFinder"
import { RestaurantsContext } from '../context/RestaurantsContext'

const JobList = (props) => {
    const {restaurants, setRestaurants} = useContext(RestaurantsContext)
    let history = useHistory()
    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get("/");
                setRestaurants(response.data.data.restaurants)
             } catch(err){
     
             }
        }
        fetchData();
    },[])

    

    const handleApplyRedirect = (e, id, link) => {
        e.stopPropagation()
        history.push(`${link}`)
    };

    const handleRestaurantSelect = (id) => {
        history.push(`/restaurants/${id}`)
    };

    return (
        <div className="list-group">
            <h2>Today's Product Jobs</h2>
            <table className="table table-hover table-dark"> 
                <tbody>
                    {restaurants && restaurants.map(restaurant => {
                        
                        return(
                            <div className="">
                                <div className="p-4s"><tr className="p-4"onClick={() => handleRestaurantSelect(restaurant.id)} key={restaurant.id}>
                                    <td className="pl-5 pr-5">{restaurant.name}</td>
                                    <td className="pl-5 pr-5">{restaurant.location}</td>
                                    <td className="pl-5 pr-5">Primary Tag</td>
                                    <td className="pl-5 pr-5"><button onClick={(e) => handleApplyRedirect(e,restaurant.id,restaurant.link)} className="btn btn-danger">Apply</button></td>
                                </tr></div>
                                
                            </div>
                            
                        );
                        
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default JobList
