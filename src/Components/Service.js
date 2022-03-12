import React from 'react'
import  {useParams} from 'react-router-dom'
const Service = () => {

    const {id}= useParams()

    console.log(id, "id Qaiser");


    const data = {
        "123":{
            heading:"This is service 1 heading",
            desc:"This is service 1 description"
        },
        "456":{
            heading:"This is service 2 heading",
            desc:"This is serivice 2 descrption"
        },
        "789":{
            heading:"This is service 3 heading",
            desc:"This is service 3 description"
        },
        "10":{
            heading:"This is service 4 heading",
            desc:"This is serivice 4 descrption"
        }
    }

    return (
        <div>
                <h1>{data[id].heading}</h1>
                <p>{data[id].desc}</p>
        </div>
    )
}

export default Service
