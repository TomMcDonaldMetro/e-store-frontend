import { useSelector } from "react-redux"


const CredentialsScreen = () => {

    const cart = useSelector(state => state.cart)
    
    return (
        <div>
            This becomes checkout form 
        </div>
    )
}

export default CredentialsScreen