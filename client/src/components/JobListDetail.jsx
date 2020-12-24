import React, {useContext, useEffect} from 'react'
import { useHistory ,useParams} from "react-router-dom"
//import RestaurantFinder from "../apis/RestaurantFinder"
import { RestaurantsContext } from '../context/RestaurantsContext'

const JobListDetail = (props) => {
    const {restaurants, setRestaurants} = useContext(RestaurantsContext)
    const {id} = useParams();
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

    

    const handleApplyRedirect = (e, id) => {
        e.stopPropagation()
        window.location.href = 'https://jobs.chipotle.com/'; 
    };

    const handleRestaurantSelect = (id) => {
        history.push(``)
    };

    return (
        <div className="list-group">
            <h2>Today's Product Jobs</h2>
            <table className="table table-hover table-dark"> 
                <tbody>
                    {restaurants && restaurants.map(restaurant => {
                        if(restaurant.id === id){
                            return(
                                <div className="">
                                    <div className="p-4s"><tr className="p-4"onClick={() => handleRestaurantSelect(restaurant.id)} key={restaurant.id}>
                                        <td className="pl-5 pr-5">{restaurant.name}</td>
                                        <td className="pl-5 pr-5">{restaurant.location}</td>
                                        <td className="pl-5 pr-5">Primary Tag</td>
                                        <td className="pl-5 pr-5"><button onClick={(e) => handleApplyRedirect(e,restaurant.id)} className="btn btn-danger">Apply</button></td>
                                    </tr></div>
                                    
                                    <tr>
                                        <div className="p-5"><p>{restaurant.description}</p></div>
                                        
                                    </tr> 
                                </div>
                                
                            );
                        }
                        else{
                            return(
                                <div className="">
                                    <div className="p-4s">
                                        <tr className="p-4"onClick={() => handleRestaurantSelect(restaurant.id)} key={restaurant.id}>
                                            <td className="pl-5 pr-5">{restaurant.name}</td>
                                            <td className="pl-5 pr-5">{restaurant.location}</td>
                                            <td className="pl-5 pr-5">Primary Tag</td>
                                            <td className="pl-5 pr-5"><button onClick={(e) => handleApplyRedirect(e,restaurant.id)} className="btn btn-danger">Apply</button></td>
                                        </tr>
                                    </div>
                                    
                                    
                                </div>
                                
                            );
                        }
                        
                        
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default JobListDetail
