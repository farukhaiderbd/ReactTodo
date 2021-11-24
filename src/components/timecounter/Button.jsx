import styled from 'styled-components'

const Btn = styled.button`
border:none;
width: 90px;
height:30px;
text-align: center;
fontSize: 15px;
cursor: pointer;
`;


const Button =({name})=>{
    return (
        <Btn>{name}</Btn>
    )
}
export default Button