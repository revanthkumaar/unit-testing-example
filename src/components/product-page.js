import {useState} from 'react-redux';


const ProductPage = () => {

const [changedText, setChangedText] = useState(false);

const changedTextHandler = () => {
    setChangedText(true);
}

    return (
        <div>
            <h2>Products</h2>
            {
                !changedText && <p>Not wearing a mask</p>
            }

            {
                changedText && <p>oh yea! mask here...</p>
            }
            <p>The products are displayed here</p>

            <button onClick={changedTextHandler}>Change text</button>
        </div>
    )
}

export default ProductPage;