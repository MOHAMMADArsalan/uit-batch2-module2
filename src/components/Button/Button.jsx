import './Button.css';

const Button = ({addItem}) => {
  return <button onClick={addItem} className="button">Add Item</button>
}

export default Button;