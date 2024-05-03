import React, { useContext, useState } from "react"
import "./manager.css"
import { useContext } from "react"
import { Context } from "../../App"

export default function Manager() {
    const [signedIn, setSignedIn] = useContext(Context)
    const [users, setUsers] = useState([])
    const [manager, setManager] = useState([])
    useEffect(() => {
        axios.get("http://91.107.137.117:55/users")
          .then(response => {
            setUsers(response.data)
          })
          .catch(error => {
            console.error("Error fetching users:", error);
          });

          setUsers([review])
          setManager(users => {
            return users.filter(user => user.username === signedIn)
          })
      }, [])

    return(
        <>
        <div class="restaurants">
        <table class="table">
           <thead>
                <th>
                    My Restaurants
                </th>

                <th>
                    <button className="t-btn">Add</button>
                </th>
           </thead>
           <hr />
           <tbody>
                <td>
                    Ali Daei
                </td>
        
                <td>
                    <button className="t-btn">
                        Manage
                    </button>
                </td>
           </tbody>
        </table>
    </div>
        </>
    )
}