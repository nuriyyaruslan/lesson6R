import styled from 'styled-components';

const Title = styled.h1`
    font-size: 40px;
    color:green;
`;
const Cover = styled.div`
    padding:20px;
    margin:20px 0;
    min-height:86vh;
    box-shadow: 0px 1px 22px -7px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 1px 22px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 22px -7px rgba(0,0,0,0.75);
`;
const Button = styled.button`
    height:48px;
    background:#fff;
    color: ${props => props.active ? "orange" : '#000'};
    border:2px solid ${props => props.active ? "orange" : '#000'};
    font-size:18px;
    line-height:44px;
    min-width:150px;
    padding-left:20px;
    padding-right:20px;
    cursor:pointer;
    border-radius:6px;
    margin-right:20px;
`;
// extended styles in styled-components
const SubmitButton = styled(Button)`
    background:${props => props.active ? 'red' : '#fff'};
    color:${props => props.active ? '#fff' : 'red'};
    border:2px solid ${props => props.active ? "red" : 'red'};
`;

export { Title, Cover, Button, SubmitButton };
 
