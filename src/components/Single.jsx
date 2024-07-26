import { useParams, useMatch } from "react-router-dom"


const Single = ({book}) => {

    return (
        <div>
            <h2>Display single book data here or reuse the book component</h2>

            {book.title}   
        </div>
    )
}

export default Single