import { Navigate, useParams } from "react-router-dom"

type RoomsParams = {
    roomId: string
}

export function Room(){
    const params = useParams()

    
    if(!params.roomId) {
        return <Navigate replace to = "/" />
    }

    return <div>Room details {JSON.stringify(params)}</div>
}