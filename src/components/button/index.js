import { BtnWrapper } from "./styles"

const Btn = ({ label, onClick }) => {
    return (
        <BtnWrapper onClick={onClick}>
        {label}
        </BtnWrapper>
    )
}

export default Btn