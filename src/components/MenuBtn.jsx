import {IoMenu} from 'react-icons/io5';
const MenuBtn = ({ onClick, isOpen }) => {
    return(
        <button
            type="button"
            className={`menu-btn ${isOpen ? 'active' : ''}`}
            onClick={onClick}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
        >
            <IoMenu/>
        </button>
    )
}
export default MenuBtn;